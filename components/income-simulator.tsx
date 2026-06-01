"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { BookOpen, ChevronDown, Clock, ExternalLink, Info, TrendingUp } from "lucide-react"
import { JobAdSlot, AdSlot } from "@/components/ad-slot"
import { GoogleAdSenseBanner } from "@/components/google-adsense"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { buildResultCtaLinks } from "@/lib/affiliate-links"
import {
  getSocialInsuranceDependentLimit,
  simulateDetailedIncome,
  simulateIncome,
  type CompanySize,
  type ParentTaxRate,
  type SocialInsuranceRoute,
  type StudentPensionSpecialStatus,
  type StudentType,
} from "@/lib/income-simulator"

interface ThresholdInfo {
  amount: number
  label: string
  description: string
}

const THRESHOLDS: ThresholdInfo[] = [
  { amount: 110, label: "110万円", description: "住民税所得割の目安" },
  { amount: 123, label: "123万円", description: "税法上の扶養" },
  { amount: 160, label: "160万円", description: "所得税" },
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatManEn(value: number): string {
  return `${Math.floor(value / 10_000)}万円`
}

function getStudentType(attribute: "daytime-student" | "evening-student" | "freeter"): StudentType {
  if (attribute === "daytime-student") return "day"
  if (attribute === "evening-student") return "night"
  return "none"
}

export function IncomeSimulator() {
  const showAffiliateUi = process.env.NEXT_PUBLIC_ENABLE_AFFILIATE_UI === "true"
  const showVisibleAds = process.env.NEXT_PUBLIC_ENABLE_VISIBLE_ADS === "true"
  const [income, setIncome] = useState(100)
  const [age, setAge] = useState(20)
  const [ageInput, setAgeInput] = useState("20")
  const [attribute, setAttribute] = useState<"daytime-student" | "evening-student" | "freeter">("daytime-student")
  const [weeklyHours, setWeeklyHours] = useState(20)
  const [monthlySalary, setMonthlySalary] = useState(90_000)
  const [companySize, setCompanySize] = useState<CompanySize>("over_50")
  const [parentTaxRate, setParentTaxRate] = useState<ParentTaxRate>(0.1)
  const [socialInsuranceRoute, setSocialInsuranceRoute] = useState<SocialInsuranceRoute>("undecided")
  const [studentPensionSpecialStatus, setStudentPensionSpecialStatus] = useState<StudentPensionSpecialStatus>("unknown")
  const [nationalHealthInsuranceAnnual, setNationalHealthInsuranceAnnual] = useState<number | "">("")
  const [includeParentImpactInTakeHome, setIncludeParentImpactInTakeHome] = useState(false)
  const [showAdvancedInputs, setShowAdvancedInputs] = useState(false)

  const studentType = getStudentType(attribute)

  const simulationResult = useMemo(
    () =>
      simulateIncome({
        annualIncome: income * 10_000,
        age,
        studentType,
      }),
    [income, age, studentType],
  )

  const detailedResult = useMemo(
    () =>
      simulateDetailedIncome({
        annualIncome: income * 10_000,
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
      income,
      age,
      studentType,
      weeklyHours,
      monthlySalary,
      companySize,
      parentTaxRate,
      studentPensionSpecialStatus,
      socialInsuranceRoute,
      nationalHealthInsuranceAnnual,
    ],
  )

  const socialInsuranceLimit = useMemo(() => getSocialInsuranceDependentLimit(age) / 10_000, [age])
  const displayedTakeHome = useMemo(() => {
    return includeParentImpactInTakeHome
      ? detailedResult.selfTakeHomeAfterKnownBurdenEstimate - detailedResult.parentTaxDeltaEstimate
      : detailedResult.selfTakeHomeAfterKnownBurdenEstimate
  }, [detailedResult.parentTaxDeltaEstimate, detailedResult.selfTakeHomeAfterKnownBurdenEstimate, includeParentImpactInTakeHome])
  const detailedBreakdown = useMemo(() => {
    const baseItems = [
      {
        label: "年収",
        value: formatCurrency(income * 10_000),
        tone: "text-foreground",
      },
      {
        label: "本人の税金",
        value: `- ${formatCurrency(detailedResult.selfTaxBurdenEstimate)}`,
        tone: "text-rose-700",
      },
    ]

    if (typeof detailedResult.socialInsuranceBurdenEstimate === "number") {
      baseItems.push({
        label: "入力済みの社会保険負担",
        value: `- ${formatCurrency(detailedResult.socialInsuranceBurdenEstimate)}`,
        tone: "text-rose-700",
      })
    }

    if (includeParentImpactInTakeHome) {
      baseItems.push({
        label: "親の税負担増の目安",
        value: `- ${formatCurrency(detailedResult.parentTaxDeltaEstimate)}`,
        tone: "text-amber-800",
      })
    }

    return baseItems
  }, [detailedResult.parentTaxDeltaEstimate, detailedResult.selfTaxBurdenEstimate, detailedResult.socialInsuranceBurdenEstimate, includeParentImpactInTakeHome, income])
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
  const thresholdMarkers = useMemo(
    () => [
      THRESHOLDS[0],
      THRESHOLDS[1],
      { amount: socialInsuranceLimit, label: `${socialInsuranceLimit}万円`, description: "社会保険の扶養" },
      THRESHOLDS[2],
    ],
    [socialInsuranceLimit],
  )
  const bandSegments = useMemo(() => {
    const greenWidth = Math.min(123, 200)
    const amberWidth = Math.max(0, Math.min(socialInsuranceLimit, 200) - greenWidth)
    const redWidth = Math.max(0, 200 - greenWidth - amberWidth)

    return [
      { label: "扶養内の目安", width: greenWidth, className: "bg-emerald-200" },
      { label: "確認ゾーン", width: amberWidth, className: "bg-amber-200" },
      { label: "負担増に注意", width: redWidth, className: "bg-rose-200" },
    ].filter((segment) => segment.width > 0)
  }, [socialInsuranceLimit])

  const statusConfig = useMemo(() => {
    const color = simulationResult.color
    return {
      barColor: color === "green" ? "bg-emerald-500" : color === "red" ? "bg-red-500" : "bg-amber-500",
    }
  }, [simulationResult.color])

  const getPositionPercent = (value: number) => (value / 200) * 100

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    setIncome(Number.isNaN(value) ? 0 : Math.min(300, Math.max(0, value)))
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeInput(e.target.value)
  }

  const commitAgeInput = () => {
    const value = Number.parseInt(ageInput, 10)
    const normalizedAge = Number.isNaN(value) ? age : Math.min(30, Math.max(15, value))

    setAge(normalizedAge)
    setAgeInput(String(normalizedAge))
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-4 lg:space-y-6">
      <div className="mx-auto max-w-2xl space-y-1.5 text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">年収の壁シミュレーター</h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          年収、年齢、勤務条件を入れると、手元に残るお金と扶養・社会保険への影響をまとめて確認できます。
        </p>
        <p className="text-xs font-semibold text-primary">2026年4月15日時点の公的情報を確認して更新</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <Card className="border border-border shadow-md">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-baseline justify-center gap-2">
                <Input
                  type="number"
                  value={income}
                  onChange={handleIncomeChange}
                  min={0}
                  max={300}
                  className="h-auto w-28 border-none p-0 text-center text-5xl font-bold shadow-none [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <span className="text-2xl font-medium text-muted-foreground">万円</span>
              </div>

              <div className="pb-1">
                <Slider value={[income]} onValueChange={(value) => setIncome(value[0])} min={0} max={200} step={1} className="w-full" />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>0万円</span>
                  <span>200万円</span>
                </div>
              </div>

              <div className="relative pb-2 pt-4">
                <div className="absolute left-0 right-0 top-0">
                  {thresholdMarkers.map((threshold) => (
                    <div key={threshold.amount} className="absolute -translate-x-1/2 flex flex-col items-center" style={{ left: `${getPositionPercent(threshold.amount)}%` }}>
                      <div className="h-3 w-px bg-border" />
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 flex h-3 overflow-hidden rounded-full">
                  {bandSegments.map((segment) => (
                    <div
                      key={segment.label}
                      className={`h-full ${segment.className}`}
                      style={{ width: `${(segment.width / 200) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="absolute left-0 h-3 overflow-hidden rounded-full" style={{ top: "calc(1.25rem)", width: `${getPositionPercent(income)}%` }}>
                  <div className={`h-full w-full transition-colors duration-300 ${statusConfig.barColor}`} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {thresholdMarkers.map((threshold) => (
                  <div key={`mobile-${threshold.amount}-${threshold.description}`} className="rounded-md bg-muted/40 px-3 py-2">
                    <p className="text-xs font-semibold text-foreground">{threshold.label}</p>
                    <p className="text-[11px] text-muted-foreground">{threshold.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {bandSegments.map((segment) => (
                  <div key={segment.label} className="flex items-center gap-2 rounded-md bg-muted/40 px-3 py-2">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${segment.className}`} />
                    <span className="text-xs text-muted-foreground">{segment.label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-primary">
                      {includeParentImpactInTakeHome ? "親への影響を含めた見込み" : "いまの見込み手取り"}
                    </p>
                    <p className="text-2xl font-bold text-foreground">{formatCurrency(displayedTakeHome)}</p>
                    <p className="text-xs text-muted-foreground">親の税負担増の目安: {formatCurrency(detailedResult.parentTaxDeltaEstimate)}</p>
                  </div>
                  <label className="flex shrink-0 items-center gap-2 rounded-md border border-primary/20 bg-background px-2 py-1.5">
                    <span className="text-[11px] font-semibold text-foreground">親も含める</span>
                    <Switch
                      checked={includeParentImpactInTakeHome}
                      onCheckedChange={setIncludeParentImpactInTakeHome}
                      aria-label="親への影響を含める"
                    />
                  </label>
                </div>
              </div>

              <Collapsible open={showAdvancedInputs} onOpenChange={setShowAdvancedInputs}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="h-10 w-full justify-between bg-background">
                    <span>{showAdvancedInputs ? "勤務条件を閉じる" : "勤務条件を追加して精度を上げる"}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAdvancedInputs ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <div className="space-y-4 rounded-xl border border-border bg-muted/30 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="age">その年の12月31日時点の年齢</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="age"
                            type="number"
                            inputMode="numeric"
                            value={ageInput}
                            onChange={handleAgeChange}
                            onBlur={commitAgeInput}
                            min={15}
                            max={30}
                            className="w-20 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <span className="text-sm text-muted-foreground">歳</span>
                          {age >= 19 && age <= 22 && (
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                              <Info className="h-3 w-3" />
                              19歳以上23歳未満
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label>属性</Label>
                        <RadioGroup value={attribute} onValueChange={setAttribute as (value: string) => void} className="grid gap-2 sm:grid-cols-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="daytime-student" id="daytime-student" />
                            <Label htmlFor="daytime-student" className="cursor-pointer font-normal">昼間学生</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="evening-student" id="evening-student" />
                            <Label htmlFor="evening-student" className="cursor-pointer font-normal">夜間・通信・定時制など</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="freeter" id="freeter" />
                            <Label htmlFor="freeter" className="cursor-pointer font-normal">学生ではない</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weekly-hours">週の所定労働時間</Label>
                        <Input id="weekly-hours" type="number" min={0} max={60} value={weeklyHours} onChange={(e) => setWeeklyHours(Math.max(0, Number(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthly-salary">月額賃金</Label>
                        <Input id="monthly-salary" type="number" min={0} value={monthlySalary} onChange={(e) => setMonthlySalary(Math.max(0, Number(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-2">
                        <Label>勤務先規模</Label>
                        <Select value={companySize} onValueChange={(value) => setCompanySize(value as CompanySize)}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="over_50">51人以上</SelectItem>
                            <SelectItem value="under_51">50人以下</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>親の限界税率</Label>
                        <Select value={String(parentTaxRate)} onValueChange={(value) => setParentTaxRate(Number(value) as ParentTaxRate)}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0.05">5%</SelectItem>
                            <SelectItem value="0.1">10%</SelectItem>
                            <SelectItem value="0.2">20%</SelectItem>
                            <SelectItem value="0.23">23%</SelectItem>
                            <SelectItem value="0.33">33%</SelectItem>
                            <SelectItem value="0.4">40%</SelectItem>
                            <SelectItem value="0.45">45%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>扶養を外れた後の加入先</Label>
                        <Select value={socialInsuranceRoute} onValueChange={(value) => setSocialInsuranceRoute(value as SocialInsuranceRoute)}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="undecided">まだ決まっていない</SelectItem>
                            <SelectItem value="employee">勤務先の社会保険</SelectItem>
                            <SelectItem value="national">国民健康保険・国民年金</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>学生納付特例の対象確認</Label>
                        <Select value={studentPensionSpecialStatus} onValueChange={(value) => setStudentPensionSpecialStatus(value as StudentPensionSpecialStatus)}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unknown">まだ確認していない</SelectItem>
                            <SelectItem value="eligible">対象要件を満たす</SelectItem>
                            <SelectItem value="not_eligible">対象外</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          学生納付特例は前年所得などで決まります。未確認なら国民年金は確定額にしません。
                        </p>
                      </div>
                    </div>
                    {socialInsuranceRoute === "national" && (
                      <div className="space-y-2">
                        <Label htmlFor="national-health-insurance">国民健康保険料の年額</Label>
                        <Input
                          id="national-health-insurance"
                          type="number"
                          min={0}
                          value={nationalHealthInsuranceAnnual}
                          onChange={(e) => {
                            const value = e.target.value
                            setNationalHealthInsuranceAnnual(value === "" ? "" : Math.max(0, Number(value) || 0))
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-900">
                年齢判定は12月31日時点です。勤務条件を追加すると、社会保険や親への影響をより細かく見られます。
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="space-y-4">
              <Card className="border-blue-200 bg-blue-50 shadow-md">
                <CardContent className="space-y-5 pb-5 pt-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                    <div className="space-y-1">
                      <h2 className="text-lg font-bold text-blue-900">試算結果</h2>
                      <p className="text-sm text-blue-900">手元に残る金額を中心に、本人の税金、親への影響、社会保険をまとめて見られます。</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-blue-200 bg-white/90 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-primary">
                          {includeParentImpactInTakeHome ? "親への影響を含めた見込み" : "あなたの手元に残るお金"}
                        </p>
                        <p className="text-3xl font-bold text-foreground">
                          {formatCurrency(displayedTakeHome)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          年収から本人の税金と、入力済みの社会保険負担を引いた見込みです。
                          {includeParentImpactInTakeHome ? " 親の税負担増の目安も差し引いています。" : ""}
                        </p>
                      </div>
                      <label className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
                        <div className="space-y-0.5">
                          <p className="text-xs font-semibold text-blue-900">親への影響も含める</p>
                          <p className="text-[11px] text-blue-800">返す前提でも見たいときだけオン</p>
                        </div>
                        <Switch
                          checked={includeParentImpactInTakeHome}
                          onCheckedChange={setIncludeParentImpactInTakeHome}
                          aria-label="親への影響を含める"
                        />
                      </label>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {detailedBreakdown.map((item) => (
                        <div key={item.label} className="rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className={`text-lg font-bold ${item.tone}`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">本人の所得税</p>
                      <p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.incomeTaxEstimate)}</p>
                    </div>
                    <div className="rounded-lg bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">本人の住民税所得割</p>
                      <p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.residentTaxIncomeLevyEstimate)}</p>
                    </div>
                    <div className="rounded-lg bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">給与所得</p>
                      <p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.salaryIncome)}</p>
                    </div>
                    <div className="rounded-lg bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">課税所得</p>
                      <p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.taxableIncomeForIncomeTax)}</p>
                    </div>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 sm:col-span-2">
                      <p className="text-xs text-amber-800">親の税負担増の目安</p>
                      <p className="text-xl font-bold text-amber-950">{formatCurrency(detailedResult.parentTaxDeltaEstimate)}</p>
                      <p className="mt-1 text-xs text-amber-900">
                        あなたの給与から自動で引かれるものではありません。親に返すかどうかを話すときの目安です。
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground">社会保険</h3>
                      <p className="mt-1 text-sm font-semibold text-foreground">{detailedResult.socialInsuranceStatusLabel}</p>
                      <p className="text-sm text-muted-foreground">{detailedResult.socialInsuranceStatusDescription}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-white/80 p-3"><p className="text-xs text-muted-foreground">扶養年収基準</p><p className="text-base font-semibold text-foreground">{formatManEn(detailedResult.socialInsuranceDependentLimit)}</p></div>
                      <div className="rounded-lg bg-white/80 p-3"><p className="text-xs text-muted-foreground">短時間労働者の主条件</p><p className="text-base font-semibold text-foreground">{detailedResult.shortHoursSocialInsuranceApplies ? "主条件を満たす見込み" : "追加条件を確認"}</p></div>
                      {typeof detailedResult.nationalPensionAnnualEstimate === "number" && <div className="rounded-lg bg-white/80 p-3"><p className="text-xs text-muted-foreground">国民年金</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.nationalPensionAnnualEstimate)}</p></div>}
                      {typeof detailedResult.socialInsuranceBurdenEstimate === "number" && <div className="rounded-lg bg-white/80 p-3"><p className="text-xs text-muted-foreground">加算できた社会保険負担</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.socialInsuranceBurdenEstimate)}</p></div>}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-foreground">試算の前提</h3>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {detailedResult.assumptions.map((item) => <li key={item} className="flex gap-2"><span>-</span><span>{item}</span></li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

          {showAffiliateUi && (
            <div className="space-y-3">
              {income >= socialInsuranceLimit && income < 160 && ctaLinks.highWage && ctaLinks.flexible && (
                <>
                  <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                    <a href={ctaLinks.highWage} target="_blank" rel="noopener noreferrer nofollow">
                      <TrendingUp className="h-5 w-5" />
                      高時給バイトを探す
                    </a>
                  </Button>
                  <Button variant="outline" className="h-12 w-full gap-2 bg-background text-base font-semibold" size="lg" asChild>
                    <a href={ctaLinks.flexible} target="_blank" rel="noopener noreferrer nofollow">
                      <Clock className="h-5 w-5" />
                      短時間・単発バイトを探す
                    </a>
                  </Button>
                </>
              )}
              {income < socialInsuranceLimit && ctaLinks.recommended && (
                <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                  <a href={ctaLinks.recommended} target="_blank" rel="noopener noreferrer nofollow">
                    <TrendingUp className="h-5 w-5" />
                    扶養内で働けるバイトを探す
                  </a>
                </Button>
              )}
              {income >= 160 && ctaLinks.career && (
                <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                  <a href={ctaLinks.career} target="_blank" rel="noopener noreferrer nofollow">
                    <TrendingUp className="h-5 w-5" />
                    年収アップしやすいバイトを探す
                  </a>
                </Button>
              )}
            </div>
          )}

          <footer className="space-y-1 pt-2 text-center">
            <p className="text-xs text-muted-foreground">この結果は参考用です。</p>
            <p className="text-xs text-muted-foreground">最終確認は公的案内や勤務先の担当窓口で行ってください。</p>
          </footer>
        </div>
      </div>

      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardContent className="space-y-4 pb-5 pt-5">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-700" />
            <h3 className="text-base font-bold text-foreground">一次情報</h3>
          </div>
          <div className="space-y-2">
            <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer">
              <Card className="cursor-pointer bg-white/80 transition-all hover:border-primary">
                <CardContent className="pb-3 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="mb-1 text-xs font-semibold text-primary">所得税</p>
                      <p className="text-sm font-bold text-foreground">国税庁 給与所得控除</p>
                    </div>
                    <ExternalLink className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" target="_blank" rel="noopener noreferrer">
              <Card className="cursor-pointer bg-white/80 transition-all hover:border-primary">
                <CardContent className="pb-3 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="mb-1 text-xs font-semibold text-blue-600">扶養・控除</p>
                      <p className="text-sm font-bold text-foreground">国税庁 特定親族特別控除</p>
                    </div>
                    <ExternalLink className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" target="_blank" rel="noopener noreferrer">
              <Card className="cursor-pointer bg-white/80 transition-all hover:border-primary">
                <CardContent className="pb-3 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="mb-1 text-xs font-semibold text-green-600">社会保険</p>
                      <p className="text-sm font-bold text-foreground">日本年金機構 19歳以上23歳未満の被扶養者認定</p>
                    </div>
                    <ExternalLink className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </CardContent>
      </Card>

      {showAffiliateUi && (
        <JobAdSlot
          title="仕事を探す"
          jobs={[
            { name: "Townwork", url: process.env.NEXT_PUBLIC_A8_TOWNWORK, description: "求人数が多い", tag: "定番" },
            { name: "Machbaito", url: process.env.NEXT_PUBLIC_A8_MACHBAITO, description: "祝い金あり求人も", tag: "祝い金" },
            { name: "Baitoru", url: process.env.NEXT_PUBLIC_A8_BAITORU, description: "求人情報が豊富" },
            { name: "Arbeit EX", url: process.env.NEXT_PUBLIC_A8_ARBEIT_EX, description: "比較しやすい" },
          ].filter((job): job is { name: string; url: string; description: string; tag?: string } => Boolean(job.url && job.url.trim() && job.url !== "#"))}
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
