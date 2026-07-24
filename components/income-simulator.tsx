"use client"

import type React from "react"
import { useMemo, useRef, useState } from "react"
import Link from "next/link"
import { BriefcaseBusiness, CalendarCheck, ExternalLink, Info, TrendingUp } from "lucide-react"
import { AdSlot, JobAdSlot } from "@/components/ad-slot"
import { GoogleAdSenseBanner } from "@/components/google-adsense"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { buildResultCtaLinks } from "@/lib/affiliate-links"
import { trackSimulatorEvent } from "@/lib/client-analytics"
import {
  EMPLOYEE_SOCIAL_INSURANCE_EMPLOYEE_SHARE_RATE_2026,
  getSocialInsuranceDependentLimit,
  INCOME_SIMULATION_BASIS,
  simulateDetailedIncome,
  type CompanySize,
  type ParentTaxRate,
  type SocialInsuranceRoute,
  type StudentPensionSpecialStatus,
  type StudentType,
} from "@/lib/income-simulator"

type Attribute = "daytime-student" | "evening-student" | "freeter"

const parentTaxRates: ParentTaxRate[] = [0.05, 0.1, 0.2, 0.23, 0.33, 0.4, 0.45]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatManYen(value: number): string {
  return `${Math.round(value / 10_000)}万円`
}

function getStudentType(attribute: Attribute): StudentType {
  if (attribute === "daytime-student") return "day"
  if (attribute === "evening-student") return "night"
  return "none"
}

function getIncomeTrackingBand(incomeMan: number): string {
  if (incomeMan <= 119) return "000_119"
  if (incomeMan <= 130) return "120_130"
  if (incomeMan <= 136) return "131_136"
  if (incomeMan < 150) return "137_149"
  if (incomeMan <= 178) return "150_178"
  if (incomeMan <= 197) return "179_197"
  return "198_plus"
}

function getIncomeStatus(incomeMan: number, age: number) {
  const socialLimitMan = getSocialInsuranceDependentLimit(age) / 10_000
  const isSpecialAge = age >= 19 && age <= 22

  if (incomeMan <= 136) {
    return {
      label: "扶養内の目安",
      title: "親の税扶養は大きく崩れにくい年収帯です",
      description: "令和8年分以後の所得税では、給与収入136万円以下が扶養控除の目安です。",
      tone: "border-emerald-200 bg-emerald-50 text-emerald-950",
      bar: "bg-emerald-500",
    }
  }

  if (isSpecialAge && incomeMan <= 197) {
    if (incomeMan >= socialLimitMan) {
      return {
        label: "社保と親の控除を確認",
        title: "19〜22歳は社会保険と特定親族特別控除を分けて見ましょう",
        description: "197万円以下なら親の控除が段階的に残る可能性がありますが、社会保険の扶養は別に確認が必要です。",
        tone: "border-rose-200 bg-rose-50 text-rose-950",
        bar: "bg-rose-500",
      }
    }

    return {
      label: "親の控除を確認",
      title: "19〜22歳は特定親族特別控除の範囲を確認しましょう",
      description: "136万円を超えても197万円以下なら、親の控除が段階的に残る可能性があります。",
      tone: "border-amber-200 bg-amber-50 text-amber-950",
      bar: "bg-amber-500",
    }
  }

  if (incomeMan < socialLimitMan) {
    return {
      label: "税扶養に注意",
      title: "親の税扶養には影響が出る可能性があります",
      description: "社会保険の扶養目安は下回っていますが、親の税金への影響を確認しましょう。",
      tone: "border-amber-200 bg-amber-50 text-amber-950",
      bar: "bg-amber-500",
    }
  }

  if (incomeMan <= 178) {
    return {
      label: "社保を確認",
      title: "所得税は0円見込みでも、社会保険は確認が必要です",
      description: "勤務先の条件や加入先によって手取りが変わるため、早めに確認しましょう。",
      tone: "border-rose-200 bg-rose-50 text-rose-950",
      bar: "bg-rose-500",
    }
  }

  return {
    label: "働き方を再設計",
    title: "税金・扶養・社会保険をセットで見直す年収帯です",
    description: "中途半端に超えるより、時給や勤務時間を上げて手取りを伸ばす選択肢もあります。",
    tone: "border-blue-200 bg-blue-50 text-blue-950",
    bar: "bg-blue-500",
  }
}

function getAgeTrackingBand(age: number): string {
  if (age <= 18) return "under_19"
  if (age <= 22) return "19_22"
  return "23_plus"
}

function getWeeklyHoursBand(hours: number): string {
  if (hours < 20) return "under_20"
  if (hours < 30) return "20_29"
  return "30_plus"
}

function getMonthlySalaryBand(monthlySalary: number): string {
  if (monthlySalary < 88_000) return "under_88000"
  if (monthlySalary < 108_334) return "88000_108333"
  return "108334_plus"
}

export function IncomeSimulator() {
  const showAffiliateUi = process.env.NEXT_PUBLIC_ENABLE_AFFILIATE_UI === "true"
  const showVisibleAds = process.env.NEXT_PUBLIC_ENABLE_VISIBLE_ADS === "true"
  const [income, setIncome] = useState(120)
  const [age, setAge] = useState(20)
  const [attribute, setAttribute] = useState<Attribute>("daytime-student")
  const [weeklyHours, setWeeklyHours] = useState(20)
  const [monthlySalary, setMonthlySalary] = useState(100_000)
  const [companySize, setCompanySize] = useState<CompanySize>("over_50")
  const [parentTaxRate, setParentTaxRate] = useState<ParentTaxRate>(0.1)
  const [socialInsuranceRoute, setSocialInsuranceRoute] = useState<SocialInsuranceRoute>("undecided")
  const [studentPensionSpecialStatus, setStudentPensionSpecialStatus] = useState<StudentPensionSpecialStatus>("unknown")
  const [nationalHealthInsuranceAnnual, setNationalHealthInsuranceAnnual] = useState<number | "">("")
  const [includeParentImpactInTakeHome, setIncludeParentImpactInTakeHome] = useState(false)
  const interactionCountRef = useRef(0)

  const studentType = getStudentType(attribute)
  const annualIncome = income * 10_000
  const socialInsuranceLimit = getSocialInsuranceDependentLimit(age)
  const status = useMemo(() => getIncomeStatus(income, age), [age, income])

  const detailedResult = useMemo(
    () =>
      simulateDetailedIncome({
        annualIncome,
        age,
        studentType,
        weeklyHours,
        monthlySalary,
        companySize,
        parentTaxRate,
        studentPensionSpecialStatus,
        socialInsuranceRoute,
        nationalHealthInsuranceAnnual:
          typeof nationalHealthInsuranceAnnual === "number" ? nationalHealthInsuranceAnnual : undefined,
      }),
    [
      age,
      annualIncome,
      companySize,
      monthlySalary,
      nationalHealthInsuranceAnnual,
      parentTaxRate,
      socialInsuranceRoute,
      studentPensionSpecialStatus,
      studentType,
      weeklyHours,
    ],
  )

  const displayedTakeHome = includeParentImpactInTakeHome
    ? detailedResult.selfTakeHomeAfterKnownBurdenEstimate - detailedResult.parentTaxDeltaEstimate
    : detailedResult.selfTakeHomeAfterKnownBurdenEstimate
  const socialInsuranceBurdenLabel =
    socialInsuranceRoute === "employee"
      ? "勤務先社保概算"
      : socialInsuranceRoute === "national"
        ? "国保・年金見込み"
        : "社保負担見込み"
  const employeeSocialInsuranceRateLabel = `${(EMPLOYEE_SOCIAL_INSURANCE_EMPLOYEE_SHARE_RATE_2026 * 100).toFixed(2)}%`

  const ctaLinks = useMemo(
    () =>
      buildResultCtaLinks({
        NEXT_PUBLIC_A8_RECOMMENDED: process.env.NEXT_PUBLIC_A8_RECOMMENDED,
        NEXT_PUBLIC_A8_TOWNWORK: process.env.NEXT_PUBLIC_A8_TOWNWORK,
        NEXT_PUBLIC_A8_MACHBAITO: process.env.NEXT_PUBLIC_A8_MACHBAITO,
        NEXT_PUBLIC_A8_BAITORU: process.env.NEXT_PUBLIC_A8_BAITORU,
        NEXT_PUBLIC_A8_ARBEIT_EX: process.env.NEXT_PUBLIC_A8_ARBEIT_EX,
        NEXT_PUBLIC_A8_HIGH_WAGE: process.env.NEXT_PUBLIC_A8_HIGH_WAGE,
        NEXT_PUBLIC_A8_FLEXIBLE: process.env.NEXT_PUBLIC_A8_FLEXIBLE,
        NEXT_PUBLIC_A8_CAREER: process.env.NEXT_PUBLIC_A8_CAREER,
      }),
    [],
  )

  const thresholdMarkers = [
    { amount: 119, label: "119万円", text: "住民税の目安" },
    { amount: 136, label: "136万円", text: "親の税扶養" },
    { amount: socialInsuranceLimit / 10_000, label: formatManYen(socialInsuranceLimit), text: "社保扶養の目安" },
    { amount: 178, label: "178万円", text: "所得税の目安" },
    ...(age >= 19 && age <= 22 ? [{ amount: 197, label: "197万円", text: "特定親族特別控除" }] : []),
  ]

  const handleIncomeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    setIncome(Number.isFinite(value) ? Math.min(300, Math.max(0, value)) : 0)
  }

  const trackIncomeSimulatorInteraction = (
    interactionType: string,
    nextIncome = income,
    overrides: Partial<{
      age: number
      attribute: Attribute
      weeklyHours: number
      monthlySalary: number
      companySize: CompanySize
      parentTaxRate: ParentTaxRate
      socialInsuranceRoute: SocialInsuranceRoute
      studentPensionSpecialStatus: StudentPensionSpecialStatus
      includeParentImpactInTakeHome: boolean
    }> = {},
  ) => {
    interactionCountRef.current += 1

    const trackedAge = overrides.age ?? age
    const trackedAttribute = overrides.attribute ?? attribute
    const trackedWeeklyHours = overrides.weeklyHours ?? weeklyHours
    const trackedMonthlySalary = overrides.monthlySalary ?? monthlySalary
    const trackedCompanySize = overrides.companySize ?? companySize
    const trackedParentTaxRate = overrides.parentTaxRate ?? parentTaxRate
    const trackedSocialInsuranceRoute = overrides.socialInsuranceRoute ?? socialInsuranceRoute
    const trackedStudentPensionSpecialStatus =
      overrides.studentPensionSpecialStatus ?? studentPensionSpecialStatus
    const trackedIncludeParentImpact =
      overrides.includeParentImpactInTakeHome ?? includeParentImpactInTakeHome
    const trackedStatus = getIncomeStatus(nextIncome, trackedAge)

    trackSimulatorEvent("income_simulator_interaction", {
      simulator_name: "income_wall",
      interaction_type: interactionType,
      interaction_count: interactionCountRef.current,
      income_man: nextIncome,
      income_band: getIncomeTrackingBand(nextIncome),
      status_label: trackedStatus.label,
      age_band: getAgeTrackingBand(trackedAge),
      student_attribute: trackedAttribute,
      weekly_hours_band: getWeeklyHoursBand(trackedWeeklyHours),
      monthly_salary_band: getMonthlySalaryBand(trackedMonthlySalary),
      company_size: trackedCompanySize,
      parent_tax_rate: trackedParentTaxRate,
      social_insurance_route: trackedSocialInsuranceRoute,
      student_pension_special_status: trackedStudentPensionSpecialStatus,
      parent_impact_included: trackedIncludeParentImpact,
    })
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5">
      <section className="space-y-3 text-center">
        <Badge variant="secondary" className="mx-auto">学生バイト向け</Badge>
        <h1 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl">
          年収の壁シミュレーター
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          年収、年齢、勤務条件を入れると、親の扶養・社会保険・本人の税金への影響をまとめて確認できます。
        </p>
      </section>

      <section className="sticky top-14 z-30 -mx-4 border-y border-border bg-background/95 px-4 py-3 shadow-sm backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-primary">{status.label}</p>
            <p className="text-sm font-bold text-foreground">
              {formatManYen(annualIncome)} / 手元 {formatCurrency(displayedTakeHome)}
            </p>
          </div>
          <a href="#income-result" className="shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
            結果へ
          </a>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <Card className="shadow-sm">
          <CardContent className="space-y-5 p-5">
            <div className="space-y-4">
              <div className="flex items-baseline justify-center gap-2">
                <Input
                  data-testid="income-input"
                  aria-label="年収（万円）"
                  type="number"
                  value={income}
                  onChange={handleIncomeInput}
                  onBlur={() => trackIncomeSimulatorInteraction("income_input_commit")}
                  min={0}
                  max={300}
                  className="h-auto w-32 border-none p-0 text-center text-5xl font-bold shadow-none [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <span className="text-2xl font-medium text-muted-foreground">万円</span>
              </div>

              <div className="space-y-2">
                <Slider
                  data-testid="income-slider"
                  aria-label="年収"
                  value={[income]}
                  onValueChange={(value) => setIncome(value[0])}
                  onValueCommit={(value) => trackIncomeSimulatorInteraction("income_slider_commit", value[0])}
                  min={0}
                  max={220}
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0万円</span>
                  <span>220万円</span>
                </div>
              </div>

              <div className="relative pt-3">
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div className={`h-full transition-all ${status.bar}`} style={{ width: `${Math.min(100, (income / 220) * 100)}%` }} />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {thresholdMarkers.map((marker) => (
                    <div key={`${marker.label}-${marker.text}`} className="rounded-md border border-border bg-muted/30 px-3 py-2">
                      <p className="text-xs font-bold text-foreground">{marker.label}</p>
                      <p className="text-[11px] text-muted-foreground">{marker.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="age">その年の12月31日時点の年齢</Label>
                <div className="relative">
                  <Input
                    id="age"
                    type="number"
                    min={15}
                    max={30}
                    value={age}
                    onChange={(event) => setAge(Math.min(30, Math.max(15, Number(event.target.value) || 15)))}
                    onBlur={() => trackIncomeSimulatorInteraction("age_input_commit", income, { age })}
                    className="h-11 pr-10 text-base md:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    歳
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>属性</Label>
                <Select
                  value={attribute}
                  onValueChange={(value) => {
                    const nextAttribute = value as Attribute
                    setAttribute(nextAttribute)
                    trackIncomeSimulatorInteraction("attribute_change", income, { attribute: nextAttribute })
                  }}
                >
                  <SelectTrigger className="h-11 w-full text-base md:text-sm" aria-label="属性">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daytime-student">昼間学生</SelectItem>
                    <SelectItem value="evening-student">夜間・通信・定時制など</SelectItem>
                    <SelectItem value="freeter">学生ではない</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekly-hours">週の勤務時間</Label>
                <div className="relative">
                  <Input
                    id="weekly-hours"
                    type="number"
                    min={0}
                    max={80}
                    value={weeklyHours}
                    onChange={(event) => setWeeklyHours(Math.max(0, Number(event.target.value) || 0))}
                    onBlur={() => trackIncomeSimulatorInteraction("weekly_hours_input_commit", income, { weeklyHours })}
                    className="h-11 pr-14 text-base md:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    時間/週
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthly-salary">月額賃金</Label>
                <div className="relative">
                  <Input
                    id="monthly-salary"
                    type="number"
                    min={0}
                    value={monthlySalary}
                    onChange={(event) => setMonthlySalary(Math.max(0, Number(event.target.value) || 0))}
                    onBlur={() =>
                      trackIncomeSimulatorInteraction("monthly_salary_input_commit", income, { monthlySalary })
                    }
                    className="h-11 pr-14 text-base md:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    円/月
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>勤務先規模</Label>
                <Select
                  value={companySize}
                  onValueChange={(value) => {
                    const nextCompanySize = value as CompanySize
                    setCompanySize(nextCompanySize)
                    trackIncomeSimulatorInteraction("company_size_change", income, { companySize: nextCompanySize })
                  }}
                >
                  <SelectTrigger className="h-11 w-full text-base md:text-sm" aria-label="勤務先規模">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="over_50">51人以上</SelectItem>
                    <SelectItem value="under_51">50人以下</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>親の所得税率の目安</Label>
                <Select
                  value={String(parentTaxRate)}
                  onValueChange={(value) => {
                    const nextParentTaxRate = Number(value) as ParentTaxRate
                    setParentTaxRate(nextParentTaxRate)
                    trackIncomeSimulatorInteraction("parent_tax_rate_change", income, {
                      parentTaxRate: nextParentTaxRate,
                    })
                  }}
                >
                  <SelectTrigger className="h-11 w-full text-base md:text-sm" aria-label="親の所得税率の目安">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {parentTaxRates.map((rate) => (
                      <SelectItem key={rate} value={String(rate)}>
                        {Math.round(rate * 100)}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>扶養を外れた後の加入先</Label>
                <Select
                  value={socialInsuranceRoute}
                  onValueChange={(value) => {
                    const nextSocialInsuranceRoute = value as SocialInsuranceRoute
                    setSocialInsuranceRoute(nextSocialInsuranceRoute)
                    trackIncomeSimulatorInteraction("social_insurance_route_change", income, {
                      socialInsuranceRoute: nextSocialInsuranceRoute,
                    })
                  }}
                >
                  <SelectTrigger className="h-11 w-full text-base md:text-sm" aria-label="扶養を外れた後の加入先">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undecided">まだ決まっていない</SelectItem>
                    <SelectItem value="employee">勤務先の社会保険</SelectItem>
                    <SelectItem value="national">国民健康保険・国民年金</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>学生納付特例</Label>
                <Select
                  value={studentPensionSpecialStatus}
                  onValueChange={(value) => {
                    const nextStatus = value as StudentPensionSpecialStatus
                    setStudentPensionSpecialStatus(nextStatus)
                    trackIncomeSimulatorInteraction("student_pension_special_status_change", income, {
                      studentPensionSpecialStatus: nextStatus,
                    })
                  }}
                >
                  <SelectTrigger className="h-11 w-full text-base md:text-sm" aria-label="学生納付特例">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unknown">未確認</SelectItem>
                    <SelectItem value="eligible">対象見込み</SelectItem>
                    <SelectItem value="not_eligible">対象外</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {socialInsuranceRoute === "national" && (
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="national-health-insurance">国民健康保険料の年額が分かる場合</Label>
                  <div className="relative">
                    <Input
                      id="national-health-insurance"
                      type="number"
                      min={0}
                      value={nationalHealthInsuranceAnnual}
                      onChange={(event) => {
                        const value = event.target.value
                        setNationalHealthInsuranceAnnual(value === "" ? "" : Math.max(0, Number(value) || 0))
                      }}
                      onBlur={() => trackIncomeSimulatorInteraction("national_health_insurance_input_commit")}
                      className="h-11 pr-14 text-base md:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                      円/年
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div id="income-result" className="scroll-mt-24 space-y-4 lg:sticky lg:top-20">
          <Card className={`${status.tone} shadow-sm`}>
            <CardContent className="space-y-3 p-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-6 w-6 shrink-0" />
                <div className="space-y-1">
                  <Badge variant="outline" className="border-current text-current">{status.label}</Badge>
                  <h2 className="text-lg font-bold">{status.title}</h2>
                  <p className="text-sm leading-relaxed opacity-85">{status.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="space-y-4 p-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-primary">
                  {includeParentImpactInTakeHome ? "親への影響も含めた見込み" : "本人の手元に残る見込み"}
                </p>
                <p className="text-3xl font-bold text-foreground">{formatCurrency(displayedTakeHome)}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  本人の税金と、入力済みの社会保険負担を反映した概算です。
                </p>
              </div>

              <label className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/30 px-3 py-2">
                <span className="text-xs font-semibold text-foreground">親の税負担増も差し引く</span>
                <Switch
                  checked={includeParentImpactInTakeHome}
                  onCheckedChange={(checked) => {
                    setIncludeParentImpactInTakeHome(checked)
                    trackIncomeSimulatorInteraction("parent_impact_toggle", income, {
                      includeParentImpactInTakeHome: checked,
                    })
                  }}
                  aria-label="親への影響を含めた見込みにする"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">本人の税金</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(detailedResult.selfTaxBurdenEstimate)}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">親への影響</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(detailedResult.parentTaxDeltaEstimate)}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">社保扶養目安</p>
                  <p className="text-lg font-bold text-foreground">{formatManYen(socialInsuranceLimit)}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">{socialInsuranceBurdenLabel}</p>
                  <p className="text-lg font-bold text-foreground">
                    {formatCurrency(detailedResult.socialInsuranceBurdenEstimate ?? 0)}
                  </p>
                </div>
              </div>

              {socialInsuranceRoute === "employee" && (
                <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-950">
                  <p className="font-semibold">勤務先の社会保険料を手元見込みに反映しています。</p>
                  <p>
                    月額賃金{formatCurrency(detailedResult.employeeSocialInsuranceAssumedMonthlySalary ?? 0)}をもとに、
                    本人負担約{employeeSocialInsuranceRateLabel}で概算しています。
                    目安は月{formatCurrency(detailedResult.employeeSocialInsuranceMonthlyEstimate ?? 0)}、
                    年{formatCurrency(detailedResult.socialInsuranceBurdenEstimate ?? 0)}です。
                  </p>
                  <p className="mt-1 text-emerald-900/80">
                    実際は標準報酬月額、都道府県、健康保険組合、勤務先の扱いで変わります。
                  </p>
                </div>
              )}

              <div className="rounded-md border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-950">
                年収だけでなく、週の勤務時間、月額賃金、勤務先規模で社会保険の扱いが変わることがあります。
              </div>

              <div className="rounded-md border border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-foreground">対象年度</p>
                    <p>{INCOME_SIMULATION_BASIS.targetYear}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">確認日</p>
                    <p>{INCOME_SIMULATION_BASIS.checkedAt}</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="font-semibold text-foreground">根拠資料</p>
                  <div className="flex flex-wrap gap-2">
                    {INCOME_SIMULATION_BASIS.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[11px] font-semibold text-primary hover:border-primary"
                      >
                        {source.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                  <Link href="/calculation-method" className="inline-flex text-[11px] font-semibold text-primary hover:underline">
                    計算方法を詳しく見る
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-3">
            <Button asChild variant="outline" className="justify-start bg-background">
              <Link href="/paid-leave">
                <CalendarCheck className="mr-2 h-4 w-4" />
                バイト有給も確認する
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start bg-background">
              <Link href="/student-baito">
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                学生バイトガイドへ
              </Link>
            </Button>
          </div>

          {showAffiliateUi && (
            <div className="space-y-3">
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                PR・広告リンクを含む場合があります。試算結果は広告の有無にかかわらず同じ基準で表示します。
              </p>
              {income >= socialInsuranceLimit / 10_000 && income < 178 && ctaLinks.highWage && ctaLinks.flexible && (
                <>
                  <Button className="h-11 w-full gap-2 font-semibold" asChild>
                    <a href={ctaLinks.highWage} target="_blank" rel="noopener noreferrer nofollow sponsored">
                      <TrendingUp className="h-4 w-4" />
                      高時給バイトを探す
                    </a>
                  </Button>
                  <Button variant="outline" className="h-11 w-full gap-2 bg-background font-semibold" asChild>
                    <a href={ctaLinks.flexible} target="_blank" rel="noopener noreferrer nofollow sponsored">
                      短時間・単発バイトを探す
                    </a>
                  </Button>
                </>
              )}
              {income < socialInsuranceLimit / 10_000 && ctaLinks.recommended && (
                <Button className="h-11 w-full gap-2 font-semibold" asChild>
                  <a href={ctaLinks.recommended} target="_blank" rel="noopener noreferrer nofollow sponsored">
                    <TrendingUp className="h-4 w-4" />
                    扶養内で働きやすいバイトを探す
                  </a>
                </Button>
              )}
              {income >= 178 && ctaLinks.career && (
                <Button className="h-11 w-full gap-2 font-semibold" asChild>
                  <a href={ctaLinks.career} target="_blank" rel="noopener noreferrer nofollow sponsored">
                    <TrendingUp className="h-4 w-4" />
                    年収アップしやすいバイトを探す
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {showAffiliateUi && (
        <JobAdSlot
          title="条件に合うバイトを探す"
          jobs={[
            { name: "Townwork", url: process.env.NEXT_PUBLIC_A8_TOWNWORK, description: "求人数が多く、地域で探しやすい", tag: "定番" },
            { name: "Machbaito", url: process.env.NEXT_PUBLIC_A8_MACHBAITO, description: "祝い金つき求人を探したい人向け", tag: "祝い金" },
            { name: "Baitoru", url: process.env.NEXT_PUBLIC_A8_BAITORU, description: "職場の雰囲気を見ながら探しやすい" },
            { name: "Arbeit EX", url: process.env.NEXT_PUBLIC_A8_ARBEIT_EX, description: "複数サイトを比較しやすい" },
          ].filter((job): job is { name: string; url: string; description: string; tag?: string } =>
            Boolean(job.url && job.url.trim() && job.url !== "#"),
          )}
        />
      )}

      {showAffiliateUi && showVisibleAds && process.env.NEXT_PUBLIC_A8_BANNER && (
        <AdSlot position="result-bottom" size="medium" title="PR" adCode={process.env.NEXT_PUBLIC_A8_BANNER} />
      )}

      {showVisibleAds && (
        <div className="space-y-2">
          <p className="text-center text-xs text-muted-foreground">スポンサー</p>
          <GoogleAdSenseBanner
            client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-2931164651880564"}
            slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || "5787776891"}
          />
        </div>
      )}
    </div>
  )
}
