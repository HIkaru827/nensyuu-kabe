"use client"

import { useEffect, useMemo, useState } from "react"
import { CalendarCheck, ChevronDown, CircleAlert, CircleCheck, Clock, ExternalLink, PiggyBank } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  simulatePaidLeave,
  type PaidLeavePayMethod,
  type PaidLeaveScheduleBasis,
} from "@/lib/paid-leave-simulator"

function getLocalIsoDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value)
}

function parseDisplayDate(value?: string): Date | null {
  if (!value) {
    return null
  }

  const dateOnlyMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)

  if (dateOnlyMatch) {
    const year = Number(dateOnlyMatch[1])
    const month = Number(dateOnlyMatch[2])
    const day = Number(dateOnlyMatch[3])
    const date = new Date(year, month - 1, day)

    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
      return date
    }

    return null
  }

  const date = new Date(value)
  return Number.isFinite(date.getTime()) ? date : null
}

function formatDate(value?: string): string {
  const date = parseDisplayDate(value)

  if (!date) {
    return "-"
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

function toNumber(value: string, fallback: number): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

export function PaidLeaveSimulator() {
  const [hireDate, setHireDate] = useState("2026-01-01")
  const [asOfDate, setAsOfDate] = useState("2026-07-06")
  const [scheduleBasis, setScheduleBasis] = useState<PaidLeaveScheduleBasis>("weekly")
  const [weeklyWorkDays, setWeeklyWorkDays] = useState(3)
  const [weeklyWorkHours, setWeeklyWorkHours] = useState(15)
  const [annualScheduledWorkDays, setAnnualScheduledWorkDays] = useState(156)
  const [averageShiftHours, setAverageShiftHours] = useState(5)
  const [hourlyWage, setHourlyWage] = useState(1200)
  const [attendanceRate, setAttendanceRate] = useState(90)
  const [usedPaidLeaveDays, setUsedPaidLeaveDays] = useState(0)
  const [payMethod, setPayMethod] = useState<PaidLeavePayMethod>("normal")
  const [threeMonthWagesTotal, setThreeMonthWagesTotal] = useState(180000)
  const [threeMonthCalendarDays, setThreeMonthCalendarDays] = useState(91)
  const [threeMonthWorkDays, setThreeMonthWorkDays] = useState(36)
  const [standardMonthlyRemuneration, setStandardMonthlyRemuneration] = useState(120000)
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false)

  useEffect(() => {
    // Use the visitor's local date after hydration instead of the server timezone.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAsOfDate(getLocalIsoDate(new Date()))
  }, [])

  const result = useMemo(
    () =>
      simulatePaidLeave({
        hireDate,
        asOfDate,
        scheduleBasis,
        weeklyWorkDays,
        weeklyWorkHours,
        annualScheduledWorkDays,
        averageShiftHours,
        hourlyWage,
        attendanceRate,
        usedPaidLeaveDays,
        payMethod,
        threeMonthWagesTotal,
        threeMonthCalendarDays,
        threeMonthWorkDays,
        standardMonthlyRemuneration,
      }),
    [
      annualScheduledWorkDays,
      asOfDate,
      attendanceRate,
      averageShiftHours,
      hireDate,
      hourlyWage,
      payMethod,
      scheduleBasis,
      standardMonthlyRemuneration,
      threeMonthCalendarDays,
      threeMonthWagesTotal,
      threeMonthWorkDays,
      usedPaidLeaveDays,
      weeklyWorkDays,
      weeklyWorkHours,
    ],
  )

  const status = useMemo(() => {
    if (!result.isValid) {
      return {
        icon: CircleAlert,
        label: "日付を確認",
        title: "入社日と判定日を確認してください",
        text: "判定日は入社日以降の日付にしてください。",
        className: "border-rose-200 bg-rose-50 text-rose-950",
      }
    }

    if (!result.hasSixMonths) {
      return {
        icon: Clock,
        label: "初回付与前",
        title: "まだ6か月継続勤務の前です",
        text: `初回付与日の目安は ${formatDate(result.nextGrantDate)} です。`,
        className: "border-amber-200 bg-amber-50 text-amber-950",
      }
    }

    if (!result.attendanceOk) {
      return {
        icon: CircleAlert,
        label: "出勤率を確認",
        title: "出勤率が80%未満のため要確認です",
        text: "有給付与には、対象期間の全労働日の8割以上出勤が必要です。",
        className: "border-rose-200 bg-rose-50 text-rose-950",
      }
    }

    return {
      icon: CircleCheck,
      label: "付与見込み",
      title: "有給が付与されている可能性があります",
      text: `${result.workerTypeLabel}として、現在の付与日数を試算しています。`,
      className: "border-emerald-200 bg-emerald-50 text-emerald-950",
    }
  }, [result])

  const StatusIcon = status.icon
  const progressToFirstGrant = Math.min(100, Math.round((result.serviceMonths / 6) * 100))
  const payMethodHelp =
    payMethod === "normal"
      ? "所定労働時間どおり働いた場合の通常賃金で見ます。時給制なら時給×1日の所定労働時間が目安です。"
      : payMethod === "average"
        ? "直近3か月の賃金総額を暦日数で割った額と、労働日数で割った額の60%を比べ、高い方を使います。"
        : "健康保険の標準報酬月額を30で割った日額で見ます。この方式は労使協定がある場合の扱いです。"
  const usedPaidLeaveDaysTooHigh = usedPaidLeaveDays > result.currentGrantDays

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5">
      <section className="space-y-3 text-center">
        <Badge variant="secondary" className="mx-auto">学生バイト向け</Badge>
        <h1 className="text-2xl font-bold leading-tight tracking-normal text-foreground sm:text-3xl md:text-4xl">
          バイト有給シミュレーター
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          入社日、契約上の勤務条件、出勤率を入れると、有給が付与される可能性と日数、有給日の給料目安を確認できます。
        </p>
      </section>

      <section className="sticky top-14 z-30 -mx-4 border-y border-border bg-background/95 px-4 py-3 shadow-sm backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-primary">{status.label}</p>
            <p className="text-sm font-bold text-foreground">
              残り{result.remainingDaysEstimate}日 / 1日{formatCurrency(result.paidLeaveDailyPayEstimate)}
            </p>
          </div>
          <a href="#paid-leave-result" className="shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
            結果へ
          </a>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <Card className="border-border shadow-sm">
          <CardContent className="space-y-5 p-5">
            <div className="rounded-md border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
              まずは入社日、契約上の勤務日数、1日の時間、時給だけで目安を出せます。判定日、出勤率、平均賃金方式は詳細設定で調整できます。
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="hire-date">入社日</Label>
                <Input
                  id="hire-date"
                  type="date"
                  value={hireDate}
                  onChange={(event) => setHireDate(event.target.value)}
                  className="h-11 text-base md:text-sm"
                />
              </div>
              {scheduleBasis === "weekly" ? (
                <div className="space-y-2">
                  <Label>契約上の週所定労働日数</Label>
                  <Select value={String(weeklyWorkDays)} onValueChange={(value) => setWeeklyWorkDays(Number(value))}>
                    <SelectTrigger className="h-11 w-full text-base md:text-sm" data-testid="weekly-work-days-trigger" aria-label="契約上の週所定労働日数">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((days) => (
                        <SelectItem key={days} value={String(days)}>
                          週{days}日
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="annual-days">契約上の年間所定労働日数</Label>
                  <div className="relative">
                    <Input
                      id="annual-days"
                      type="number"
                      min={0}
                      max={365}
                      value={annualScheduledWorkDays}
                      onChange={(event) => setAnnualScheduledWorkDays(Math.max(0, toNumber(event.target.value, 0)))}
                      className="h-11 pr-14 text-base md:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                      日/年
                    </span>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="shift-hours">1日の所定労働時間</Label>
                <div className="relative">
                  <Input
                    id="shift-hours"
                    type="number"
                    min={0}
                    step={0.5}
                    value={averageShiftHours}
                    onChange={(event) => setAverageShiftHours(Math.max(0, toNumber(event.target.value, 0)))}
                    className="h-11 pr-14 text-base md:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    時間/日
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hourly-wage">時給</Label>
                <div className="relative">
                  <Input
                    id="hourly-wage"
                    type="number"
                    min={0}
                    value={hourlyWage}
                    onChange={(event) => setHourlyWage(Math.max(0, toNumber(event.target.value, 0)))}
                    className="h-11 pr-10 text-base md:text-sm"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    円
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="h-11 w-full justify-between bg-background"
                onClick={() => setShowAdvancedSettings((current) => !current)}
                aria-expanded={showAdvancedSettings}
              >
                {showAdvancedSettings ? "詳細設定を閉じる" : "詳細設定を開く"}
                <ChevronDown className={`h-4 w-4 transition-transform ${showAdvancedSettings ? "rotate-180" : ""}`} />
              </Button>

              {showAdvancedSettings && (
                <div className="space-y-5 rounded-md border border-border bg-muted/20 p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="as-of-date">判定日</Label>
                      <Input
                        id="as-of-date"
                        type="date"
                        value={asOfDate}
                        onChange={(event) => setAsOfDate(event.target.value)}
                        className="h-11 text-base md:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>契約日数の入力方法</Label>
                      <Select value={scheduleBasis} onValueChange={(value) => setScheduleBasis(value as PaidLeaveScheduleBasis)}>
                        <SelectTrigger className="h-11 w-full text-base md:text-sm" data-testid="schedule-basis-trigger" aria-label="契約日数の入力方法">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">週の所定労働日数で入力</SelectItem>
                          <SelectItem value="yearly">年間の所定労働日数で入力</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weekly-hours">契約上の週所定労働時間</Label>
                      <div className="relative">
                        <Input
                          id="weekly-hours"
                          type="number"
                          min={0}
                          value={weeklyWorkHours}
                          onChange={(event) => setWeeklyWorkHours(Math.max(0, toNumber(event.target.value, 0)))}
                          className="h-11 pr-14 text-base md:text-sm"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                          時間/週
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h2 className="text-sm font-bold text-foreground">有給日の賃金</h2>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        分からない場合は通常賃金のまま仮置きしてください。実際の方式は就業規則や雇用契約で確認します。
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>賃金の算定方式</Label>
                        <Select value={payMethod} onValueChange={(value) => setPayMethod(value as PaidLeavePayMethod)}>
                          <SelectTrigger className="h-11 w-full text-base md:text-sm" data-testid="pay-method-trigger" aria-label="賃金の算定方式">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">通常賃金</SelectItem>
                            <SelectItem value="average">平均賃金</SelectItem>
                            <SelectItem value="standard-remuneration">標準報酬日額</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="rounded-md border border-border bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
                        {payMethodHelp}
                      </div>
                      {payMethod === "average" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="three-month-wages">直近3か月の賃金総額</Label>
                            <Input
                              id="three-month-wages"
                              type="number"
                              min={0}
                              value={threeMonthWagesTotal}
                              onChange={(event) => setThreeMonthWagesTotal(Math.max(0, toNumber(event.target.value, 0)))}
                              className="h-11 text-base md:text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="calendar-days">直近3か月の暦日数</Label>
                            <Input
                              id="calendar-days"
                              type="number"
                              min={1}
                              value={threeMonthCalendarDays}
                              onChange={(event) => setThreeMonthCalendarDays(Math.max(1, toNumber(event.target.value, 1)))}
                              className="h-11 text-base md:text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="work-days">直近3か月の実労働日数</Label>
                            <Input
                              id="work-days"
                              type="number"
                              min={1}
                              value={threeMonthWorkDays}
                              onChange={(event) => setThreeMonthWorkDays(Math.max(1, toNumber(event.target.value, 1)))}
                              className="h-11 text-base md:text-sm"
                            />
                          </div>
                          <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950">
                            平均賃金方式だと、通常のシフト1日分より低くなることがあります。この試算では通常賃金比
                            {result.paidLeavePayRatioToNormal}%です。
                          </div>
                        </>
                      )}
                      {payMethod === "standard-remuneration" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="standard-monthly">標準報酬月額</Label>
                            <Input
                              id="standard-monthly"
                              type="number"
                              min={0}
                              value={standardMonthlyRemuneration}
                              onChange={(event) =>
                                setStandardMonthlyRemuneration(Math.max(0, toNumber(event.target.value, 0)))
                              }
                              className="h-11 text-base md:text-sm"
                            />
                          </div>
                          <div className="rounded-md border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-950">
                            この方式は、職場で労使協定がある場合に使われる前提です。学生バイトでは、まず給与明細や就業規則の記載を確認してください。
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <Label htmlFor="attendance-rate">出勤率</Label>
                      <span className="text-sm font-bold text-foreground">{attendanceRate}%</span>
                    </div>
                    <Slider
                      id="attendance-rate"
                      aria-label="出勤率"
                      value={[attendanceRate]}
                      onValueChange={(value) => setAttendanceRate(value[0])}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>80%が目安</span>
                      <span>100%</span>
                    </div>
                    {!result.attendanceOk && (
                      <div className="rounded-md border border-rose-200 bg-rose-50 p-3 text-xs leading-relaxed text-rose-950">
                        出勤率が80%未満のため、有給付与の条件を満たさない可能性があります。
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="used-days">すでに使った有給日数</Label>
                      <div className="relative">
                        <Input
                          id="used-days"
                          type="number"
                          min={0}
                          step={0.5}
                          value={usedPaidLeaveDays}
                          onChange={(event) => setUsedPaidLeaveDays(Math.max(0, toNumber(event.target.value, 0)))}
                          aria-invalid={usedPaidLeaveDaysTooHigh}
                          className="h-11 pr-10 text-base md:text-sm"
                        />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                          日
                        </span>
                      </div>
                      {usedPaidLeaveDaysTooHigh && (
                        <p className="text-xs leading-relaxed text-rose-600">
                          使った日数が現在の付与見込みを超えています。入力値を確認してください。
                        </p>
                      )}
                    </div>
                    <div className="rounded-md border border-border bg-background p-3 text-xs leading-relaxed text-muted-foreground">
                      週30時間以上、週5日以上、または年間217日以上は通常の付与日数で試算します。週が固定でない場合は年間所定労働日数で確認してください。
                    </div>
                  </div>
                </div>
              )}
              </div>
          </CardContent>
        </Card>

        <div id="paid-leave-result" className="scroll-mt-24 space-y-4 lg:sticky lg:top-20">
          <Card className={`${status.className} shadow-sm`}>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start gap-3">
                <StatusIcon className="mt-0.5 h-6 w-6 shrink-0" />
                <div className="space-y-1">
                  <Badge variant="outline" className="border-current text-current">{status.label}</Badge>
                  <h2 className="text-lg font-bold">{status.title}</h2>
                  <p className="text-sm leading-relaxed opacity-85">{status.text}</p>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/70">
                <div className="h-full rounded-full bg-current transition-all" style={{ width: `${progressToFirstGrant}%` }} />
              </div>
              <p className="text-xs opacity-80">入社からの経過: 約{result.serviceMonths}か月</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="space-y-4 p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">現在の付与見込み</p>
                  <p className="text-2xl font-bold text-foreground">{result.currentGrantDays}日</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">残日数の目安</p>
                  <p className="text-2xl font-bold text-foreground">{result.remainingDaysEstimate}日</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">有給1日分の目安</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(result.paidLeaveDailyPayEstimate)}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">残日数の賃金目安</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(result.remainingValueEstimate)}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">賃金方式</p>
                  <p className="text-sm font-bold text-foreground">{result.paidLeavePayMethodLabel}</p>
                </div>
                <div className="rounded-md border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">通常賃金比</p>
                  <p className="text-lg font-bold text-foreground">{result.paidLeavePayRatioToNormal}%</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">今回の付与日</span>
                  <span className="font-semibold text-foreground">{formatDate(result.currentGrantDate)}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">次の付与日</span>
                  <span className="font-semibold text-foreground">{formatDate(result.nextGrantDate)}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">次回付与日数</span>
                  <span className="font-semibold text-foreground">{result.nextGrantDays}日</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">判定上の勤務日数</span>
                  <span className="font-semibold text-foreground">週{result.equivalentWeeklyWorkDays}日相当</span>
                </div>
                {typeof result.daysUntilNextGrant === "number" && (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">次回まで</span>
                    <span className="font-semibold text-foreground">あと{result.daysUntilNextGrant}日</span>
                  </div>
                )}
              </div>

              <div className="rounded-md border border-border bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
                <div className="flex items-center justify-between gap-3">
                  <span>通常出勤なら</span>
                  <span className="font-semibold text-foreground">{formatCurrency(result.normalDailyPayEstimate)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span>平均賃金（原則）</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(result.averageWagePrincipleEstimate)}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span>平均賃金（最低保障）</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(result.averageWageMinimumEstimate)}
                  </span>
                </div>
                {payMethod === "standard-remuneration" && (
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <span>標準報酬日額</span>
                    <span className="font-semibold text-foreground">
                      {formatCurrency(result.standardRemunerationDailyPayEstimate)}
                    </span>
                  </div>
                )}
              </div>

              {result.mandatoryFiveDaysApplies && (
                <div className="rounded-md border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-950">
                  年10日以上付与される人は、会社側に年5日の取得時季指定義務があります。シフト調整の相談もしやすいポイントです。
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="grid gap-3 md:grid-cols-3">
        <div className="rounded-md border border-border bg-card p-4">
          <CalendarCheck className="mb-3 h-5 w-5 text-primary" />
          <h2 className="text-sm font-bold text-foreground">6か月・8割が入口</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            入社から6か月継続し、全労働日の8割以上出勤すると、年次有給休暇の対象になります。
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-4">
          <Clock className="mb-3 h-5 w-5 text-primary" />
          <h2 className="text-sm font-bold text-foreground">短時間バイトも対象</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            週1〜4日の勤務でも、所定労働日数に応じた比例付与で有給が発生することがあります。
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-4">
          <PiggyBank className="mb-3 h-5 w-5 text-primary" />
          <h2 className="text-sm font-bold text-foreground">給料目安で見える化</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            使える有給を賃金の目安に直すと、シフトを増やすか休むかの判断がしやすくなります。
          </p>
        </div>
      </section>

      <div className="rounded-md border border-border bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
        <p>
          このシミュレーションは一般的な目安です。最終的な付与日数、取得方法、有給日の賃金方式は、勤務先の就業規則、雇用契約、実際の出勤状況で確認してください。
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="https://www.mhlw.go.jp/new-info/kobetu/roudou/gyousei/dl/140811-3.pdf" target="_blank" rel="noopener noreferrer">
              厚労省の資料
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://jsite.mhlw.go.jp/kanagawa-roudoukyoku/hourei_seido_tetsuzuki/saiteichingin_chinginseido/heikinchi.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              平均賃金の説明
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q1.html" target="_blank" rel="noopener noreferrer">
              年次有給休暇Q&A
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
