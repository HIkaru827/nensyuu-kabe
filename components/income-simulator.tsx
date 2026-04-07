"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { AlertCircle, AlertTriangle, BookOpen, CheckCircle, Clock, ExternalLink, Info, TrendingUp } from "lucide-react"
import { JobAdSlot, AdSlot } from "@/components/ad-slot"
import { GoogleAdSenseBanner } from "@/components/google-adsense"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getSocialInsuranceDependentLimit,
  simulateDetailedIncome,
  simulateIncome,
  type CompanySize,
  type ParentTaxRate,
  type SocialInsuranceRoute,
  type StudentType,
} from "@/lib/income-simulator"

interface ThresholdInfo {
  amount: number
  label: string
  description: string
}

const THRESHOLDS: ThresholdInfo[] = [
  { amount: 110, label: "110万円", description: "住民税" },
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
  const [mode, setMode] = useState<"simple" | "detailed">("simple")
  const [income, setIncome] = useState(100)
  const [age, setAge] = useState(20)
  const [attribute, setAttribute] = useState<"daytime-student" | "evening-student" | "freeter">("daytime-student")
  const [weeklyHours, setWeeklyHours] = useState(20)
  const [monthlySalary, setMonthlySalary] = useState(90_000)
  const [companySize, setCompanySize] = useState<CompanySize>("over_50")
  const [parentTaxRate, setParentTaxRate] = useState<ParentTaxRate>(0.1)
  const [socialInsuranceRoute, setSocialInsuranceRoute] = useState<SocialInsuranceRoute>("undecided")
  const [useStudentPensionSpecial, setUseStudentPensionSpecial] = useState(true)
  const [nationalHealthInsuranceAnnual, setNationalHealthInsuranceAnnual] = useState<number | "">("")

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
        useStudentPensionSpecial,
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
      useStudentPensionSpecial,
      socialInsuranceRoute,
      nationalHealthInsuranceAnnual,
    ],
  )

  const socialInsuranceLimit = useMemo(() => getSocialInsuranceDependentLimit(age) / 10_000, [age])
  const thresholdMarkers = useMemo(
    () => [
      THRESHOLDS[0],
      THRESHOLDS[1],
      { amount: socialInsuranceLimit, label: `${socialInsuranceLimit}万円`, description: "社会保険の扶養" },
      THRESHOLDS[2],
    ],
    [socialInsuranceLimit],
  )

  const statusConfig = useMemo(() => {
    const color = simulationResult.color
    return {
      icon: color === "green" ? CheckCircle : color === "red" ? AlertCircle : AlertTriangle,
      bgClass:
        color === "green"
          ? "bg-emerald-50 border-emerald-200"
          : color === "red"
            ? "bg-red-50 border-red-200"
            : "bg-amber-50 border-amber-200",
      textClass: color === "green" ? "text-emerald-700" : color === "red" ? "text-red-700" : "text-amber-700",
      iconClass: color === "green" ? "text-emerald-500" : color === "red" ? "text-red-500" : "text-amber-500",
      barColor: color === "green" ? "bg-emerald-500" : color === "red" ? "bg-red-500" : "bg-amber-500",
    }
  }, [simulationResult.color])

  const StatusIcon = statusConfig.icon
  const getPositionPercent = (value: number) => (value / 200) * 100

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    setIncome(Number.isNaN(value) ? 0 : Math.min(300, Math.max(0, value)))
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (!Number.isNaN(value)) {
      setAge(Math.min(30, Math.max(15, value)))
    }
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 lg:space-y-8">
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">年収の壁シミュレーター</h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          まずは簡易判定で全体像をつかみ、必要なら詳細条件を追加してより具体的な試算まで進められます。
        </p>
        <p className="text-xs font-semibold text-primary">2026年4月2日時点の公的情報を確認して更新</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <Card className="border border-border shadow-md">
          <CardContent className="space-y-6 pt-6">
            <Tabs value={mode} onValueChange={(value) => setMode(value as "simple" | "detailed")} className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="simple">簡易版</TabsTrigger>
                <TabsTrigger value="detailed">詳細版</TabsTrigger>
              </TabsList>

              <div className="space-y-6">
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

                <div className="space-y-2">
                  <Label htmlFor="age">年齢</Label>
                  <div className="flex items-center gap-2">
                    <Input id="age" type="number" value={age} onChange={handleAgeChange} min={15} max={30} className="w-20 text-center" />
                    <span className="text-sm text-muted-foreground">歳</span>
                    {age >= 19 && age <= 22 && (
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                        <Info className="h-3 w-3" />
                        19歳以上23歳未満
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>属性</Label>
                  <RadioGroup value={attribute} onValueChange={setAttribute as (value: string) => void} className="space-y-2">
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

                <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  簡易版は方向性をつかむための表示です。詳細版では勤務条件や親の税率を入れて、数字を出せる範囲まで試算します。
                </div>

                <div className="pb-2">
                  <Slider value={[income]} onValueChange={(value) => setIncome(value[0])} min={0} max={200} step={1} className="w-full" />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>0万円</span>
                    <span>200万円</span>
                  </div>
                </div>

                <div className="relative pb-2 pt-8">
                  <div className="absolute left-0 right-0 top-0">
                    {thresholdMarkers.map((threshold) => (
                      <div key={threshold.amount} className="absolute -translate-x-1/2 flex flex-col items-center" style={{ left: `${getPositionPercent(threshold.amount)}%` }}>
                        <span className="whitespace-nowrap text-xs font-medium text-muted-foreground">{threshold.label}</span>
                        <span className="whitespace-nowrap text-[10px] text-muted-foreground/70">{threshold.description}</span>
                        <div className="mt-1 h-2 w-px bg-border" />
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-8 flex h-3 overflow-hidden rounded-full">
                    <div className="h-full bg-emerald-200" style={{ width: "55%" }} />
                    <div className="h-full bg-amber-200" style={{ width: "10%" }} />
                    <div className="h-full bg-red-200" style={{ width: "15%" }} />
                    <div className="h-full bg-violet-200" style={{ width: "20%" }} />
                  </div>
                  <div className="absolute left-0 h-3 overflow-hidden rounded-full" style={{ top: "calc(2rem + 0.5rem)", width: `${getPositionPercent(income)}%` }}>
                    <div className={`h-full w-full transition-colors duration-300 ${statusConfig.barColor}`} />
                  </div>
                </div>

                <TabsContent value="simple" className="mt-0" />

                <TabsContent value="detailed" className="mt-0">
                  <div className="space-y-4 rounded-xl border border-border bg-muted/30 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
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
                        <Label>学生納付特例</Label>
                        <Select value={useStudentPensionSpecial ? "yes" : "no"} onValueChange={(value) => setUseStudentPensionSpecial(value === "yes")}>
                          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">使う予定</SelectItem>
                            <SelectItem value="no">使わない</SelectItem>
                          </SelectContent>
                        </Select>
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
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:sticky lg:top-24">
          {mode === "simple" ? (
            <Card className={`border-2 ${statusConfig.bgClass} shadow-md`}>
              <CardContent className="space-y-3 pb-5 pt-5">
                <div className="flex items-start gap-3">
                  <StatusIcon className={`mt-0.5 h-6 w-6 shrink-0 ${statusConfig.iconClass}`} />
                  <div className="space-y-1">
                    <h2 className={`text-lg font-bold ${statusConfig.textClass}`}>{simulationResult.label}</h2>
                    <p className="text-sm font-medium text-foreground/90">{simulationResult.headline}</p>
                  </div>
                </div>
                <p className="whitespace-pre-line text-xs leading-relaxed text-muted-foreground">{simulationResult.description}</p>
                <ul className="space-y-1 border-t border-current/10 pt-3">
                  {simulationResult.advice.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="shrink-0">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              <Card className="border-blue-200 bg-blue-50 shadow-md">
                <CardContent className="space-y-3 pb-5 pt-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                    <div className="space-y-1">
                      <h2 className="text-lg font-bold text-blue-900">詳細試算</h2>
                      <p className="text-sm text-blue-900">入力した前提から試算できる項目だけ数字を出しています。</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-blue-200 bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">本人の所得税</p>
                      <p className="text-lg font-bold text-foreground">{formatCurrency(detailedResult.incomeTaxEstimate)}</p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white/80 p-3">
                      <p className="text-xs text-muted-foreground">本人の住民税所得割</p>
                      <p className="text-lg font-bold text-foreground">{formatCurrency(detailedResult.residentTaxIncomeLevyEstimate)}</p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white/80 p-3 sm:col-span-2">
                      <p className="text-xs text-muted-foreground">あなたの手元に残るお金</p>
                      <p className="text-2xl font-bold text-foreground">
                        {formatCurrency(detailedResult.selfTakeHomeAfterKnownBurdenEstimate)}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        年収から本人の税金と、入力済みの社会保険負担だけを引いた見込みです。
                      </p>
                    </div>
                    <div className="rounded-lg border border-blue-200 bg-white/80 p-3 sm:col-span-2">
                      <p className="text-xs text-muted-foreground">親の税負担増の目安</p>
                      <p className="text-2xl font-bold text-foreground">
                        {formatCurrency(detailedResult.parentTaxDeltaEstimate)}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        あなたの手取りから自動で引かれるものではありません。親に返すかは家族で相談してください。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card><CardContent className="space-y-3 pb-5 pt-5">
                <h3 className="text-base font-bold text-foreground">本人の税金</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">給与所得</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.salaryIncome)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">課税所得</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.taxableIncomeForIncomeTax)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">本人の税金合計</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.selfTaxBurdenEstimate)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">社会保険料を除く手取り</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.selfTakeHomeBeforeSocialInsuranceEstimate)}</p></div>
                </div>
              </CardContent></Card>

              <Card><CardContent className="space-y-3 pb-5 pt-5">
                <h3 className="text-base font-bold text-foreground">親への影響</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">親の所得税控除額</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.parentIncomeTaxDeduction)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">親の住民税控除額</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.parentResidentTaxDeduction)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">親の所得税増加見込み</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.parentIncomeTaxDeltaEstimate)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">親の住民税増加見込み</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.parentResidentTaxDeltaEstimate)}</p></div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 sm:col-span-2">
                    <p className="text-xs text-amber-800">親に返すか相談する目安</p>
                    <p className="text-xl font-bold text-amber-950">{formatCurrency(detailedResult.parentTaxDeltaEstimate)}</p>
                    <p className="mt-1 text-xs text-amber-900">
                      親の税負担増は本人の給与から天引きされません。この金額を返すか、返さないか、家族で話すための目安として見てください。
                    </p>
                  </div>
                </div>
              </CardContent></Card>

              <Card><CardContent className="space-y-3 pb-5 pt-5">
                <h3 className="text-base font-bold text-foreground">社会保険</h3>
                <p className="text-sm font-semibold text-foreground">{detailedResult.socialInsuranceStatusLabel}</p>
                <p className="text-sm text-muted-foreground">{detailedResult.socialInsuranceStatusDescription}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">扶養年収基準</p><p className="text-base font-semibold text-foreground">{formatManEn(detailedResult.socialInsuranceDependentLimit)}</p></div>
                  <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">短時間労働者の主条件</p><p className="text-base font-semibold text-foreground">{detailedResult.shortHoursSocialInsuranceApplies ? "主条件を満たす見込み" : "追加条件を確認"}</p></div>
                  {typeof detailedResult.nationalPensionAnnualEstimate === "number" && <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">国民年金</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.nationalPensionAnnualEstimate)}</p></div>}
                  {typeof detailedResult.socialInsuranceBurdenEstimate === "number" && <div className="rounded-lg bg-muted/40 p-3"><p className="text-xs text-muted-foreground">加算できた社会保険負担</p><p className="text-base font-semibold text-foreground">{formatCurrency(detailedResult.socialInsuranceBurdenEstimate)}</p></div>}
                </div>
              </CardContent></Card>

              <Card className="border-amber-200 bg-amber-50"><CardContent className="space-y-2 pb-5 pt-5">
                <h3 className="text-sm font-bold text-amber-900">試算の前提</h3>
                <ul className="space-y-1 text-xs text-amber-900">
                  {detailedResult.assumptions.map((item) => <li key={item} className="flex gap-2"><span>-</span><span>{item}</span></li>)}
                </ul>
              </CardContent></Card>
            </div>
          )}

          <div className="space-y-3">
            {income >= socialInsuranceLimit && income < 160 && (
              <>
                <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                  <a href={process.env.NEXT_PUBLIC_A8_HIGH_WAGE || "#"} target="_blank" rel="noopener noreferrer nofollow">
                    <TrendingUp className="h-5 w-5" />
                    もっと稼げる仕事を探す
                  </a>
                </Button>
                <Button variant="outline" className="h-12 w-full gap-2 bg-background text-base font-semibold" size="lg" asChild>
                  <a href={process.env.NEXT_PUBLIC_A8_FLEXIBLE || "#"} target="_blank" rel="noopener noreferrer nofollow">
                    <Clock className="h-5 w-5" />
                    扶養内に調整しやすい仕事を探す
                  </a>
                </Button>
              </>
            )}
            {income < socialInsuranceLimit && (
              <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                <a href={process.env.NEXT_PUBLIC_A8_RECOMMENDED || "#"} target="_blank" rel="noopener noreferrer nofollow">
                  <TrendingUp className="h-5 w-5" />
                  条件に合う仕事を見る
                </a>
              </Button>
            )}
            {income >= 160 && (
              <Button className="h-12 w-full gap-2 text-base font-semibold" size="lg" asChild>
                <a href={process.env.NEXT_PUBLIC_A8_CAREER || "#"} target="_blank" rel="noopener noreferrer nofollow">
                  <TrendingUp className="h-5 w-5" />
                  次の働き方を探す
                </a>
              </Button>
            )}
          </div>

          <footer className="space-y-1 pt-2 text-center">
            <p className="text-xs text-muted-foreground">この結果は参考用です。</p>
            <p className="text-xs text-muted-foreground">最終確認は公的案内や勤務先の担当窓口で行ってください。</p>
          </footer>
        </div>
      </div>

      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="space-y-4 pb-5 pt-5">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
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

      <JobAdSlot
        title="仕事を探す"
        jobs={[
          { name: "Townwork", url: process.env.NEXT_PUBLIC_A8_TOWNWORK || "#", description: "求人数が多い", tag: "定番" },
          { name: "Machbaito", url: process.env.NEXT_PUBLIC_A8_MACHBAITO || "#", description: "祝い金あり求人も", tag: "祝い金" },
          { name: "Baitoru", url: process.env.NEXT_PUBLIC_A8_BAITORU || "#", description: "求人情報が豊富" },
          { name: "Arbeit EX", url: process.env.NEXT_PUBLIC_A8_ARBEIT_EX || "#", description: "比較しやすい" },
        ].filter((job) => job.url !== "#")}
      />

      {process.env.NEXT_PUBLIC_A8_BANNER && <AdSlot position="result-bottom" size="medium" title="PR" adCode={process.env.NEXT_PUBLIC_A8_BANNER} />}

      <div className="space-y-2">
        <p className="text-center text-xs text-muted-foreground">スポンサー</p>
        <GoogleAdSenseBanner
          client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-2931164651880564"}
          slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || "5787776891"}
        />
      </div>
    </div>
  )
}
