export type PaidLeaveWorkerType = "standard" | "proportional" | "not-covered-by-table"
export type PaidLeaveScheduleBasis = "weekly" | "yearly"
export type PaidLeavePayMethod = "normal" | "average" | "standard-remuneration"

export interface PaidLeaveSimulationInput {
  hireDate: string
  asOfDate: string
  scheduleBasis: PaidLeaveScheduleBasis
  weeklyWorkDays: number
  weeklyWorkHours: number
  annualScheduledWorkDays: number
  averageShiftHours: number
  hourlyWage: number
  attendanceRate: number
  usedPaidLeaveDays: number
  payMethod: PaidLeavePayMethod
  threeMonthWagesTotal: number
  threeMonthCalendarDays: number
  threeMonthWorkDays: number
  standardMonthlyRemuneration: number
}

export interface PaidLeaveSimulationResult {
  isValid: boolean
  hasSixMonths: boolean
  attendanceOk: boolean
  eligibleNow: boolean
  workerType: PaidLeaveWorkerType
  workerTypeLabel: string
  equivalentWeeklyWorkDays: number
  serviceMonths: number
  currentGrantDate?: string
  nextGrantDate?: string
  daysUntilNextGrant?: number
  currentGrantDays: number
  scheduledGrantDays: number
  nextGrantDays: number
  remainingDaysEstimate: number
  dailyValueEstimate: number
  normalDailyPayEstimate: number
  averageWagePrincipleEstimate: number
  averageWageMinimumEstimate: number
  averageDailyPayEstimate: number
  standardRemunerationDailyPayEstimate: number
  paidLeaveDailyPayEstimate: number
  paidLeavePayMethodLabel: string
  paidLeavePayRatioToNormal: number
  currentGrantValueEstimate: number
  remainingValueEstimate: number
  mandatoryFiveDaysApplies: boolean
}

const STANDARD_GRANT_DAYS = [10, 11, 12, 14, 16, 18, 20] as const

const PROPORTIONAL_GRANT_DAYS = {
  4: [7, 8, 9, 10, 12, 13, 15],
  3: [5, 6, 6, 8, 9, 10, 11],
  2: [3, 4, 4, 5, 6, 6, 7],
  1: [1, 2, 2, 2, 3, 3, 3],
} as const

const FIRST_GRANT_MONTH = 6
const GRANT_INTERVAL_MONTHS = 12

function parseDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)

  if (!match) {
    return null
  }

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(year, month - 1, day)

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null
  }

  return date
}

function isValidDate(date: Date): boolean {
  return Number.isFinite(date.getTime())
}

function toIsoDate(date: Date): string | undefined {
  if (!isValidDate(date)) {
    return undefined
  }

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function getLastDayOfMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate()
}

function addMonths(date: Date, months: number): Date {
  const targetMonthIndex = date.getMonth() + months
  const targetYear = date.getFullYear() + Math.floor(targetMonthIndex / 12)
  const normalizedMonthIndex = ((targetMonthIndex % 12) + 12) % 12
  const day = Math.min(date.getDate(), getLastDayOfMonth(targetYear, normalizedMonthIndex))

  return new Date(targetYear, normalizedMonthIndex, day)
}

function differenceInCalendarDays(from: Date, to: Date): number {
  const start = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate())
  const end = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.ceil((end - start) / 86_400_000)
}

function getCompletedServiceMonths(hireDate: Date, asOfDate: Date): number {
  if (asOfDate < hireDate) {
    return 0
  }

  let months =
    (asOfDate.getFullYear() - hireDate.getFullYear()) * 12 +
    (asOfDate.getMonth() - hireDate.getMonth())

  if (addMonths(hireDate, months) > asOfDate) {
    months -= 1
  }

  return Math.max(0, months)
}

function getGrantScheduleIndex(serviceMonths: number): number {
  if (serviceMonths < FIRST_GRANT_MONTH) {
    return -1
  }

  return Math.min(
    STANDARD_GRANT_DAYS.length - 1,
    Math.floor((serviceMonths - FIRST_GRANT_MONTH) / GRANT_INTERVAL_MONTHS),
  )
}

function getNextGrantMonth(serviceMonths: number): number {
  if (serviceMonths < FIRST_GRANT_MONTH) {
    return FIRST_GRANT_MONTH
  }

  const completedIntervals = Math.floor((serviceMonths - FIRST_GRANT_MONTH) / GRANT_INTERVAL_MONTHS)
  return FIRST_GRANT_MONTH + (completedIntervals + 1) * GRANT_INTERVAL_MONTHS
}

function getEquivalentWeeklyWorkDays(input: PaidLeaveSimulationInput): number {
  if (input.scheduleBasis === "weekly") {
    return Math.max(0, Math.round(input.weeklyWorkDays))
  }

  const annualDays = Math.max(0, Math.round(input.annualScheduledWorkDays))

  if (annualDays >= 217) return 5
  if (annualDays >= 169) return 4
  if (annualDays >= 121) return 3
  if (annualDays >= 73) return 2
  if (annualDays >= 48) return 1
  return 0
}

function getWorkerType(input: PaidLeaveSimulationInput): PaidLeaveWorkerType {
  const equivalentWeeklyWorkDays = getEquivalentWeeklyWorkDays(input)

  if (
    input.weeklyWorkHours >= 30 ||
    equivalentWeeklyWorkDays >= 5 ||
    (input.scheduleBasis === "yearly" && input.annualScheduledWorkDays >= 217)
  ) {
    return "standard"
  }

  if (equivalentWeeklyWorkDays >= 1 && equivalentWeeklyWorkDays <= 4) {
    return "proportional"
  }

  return "not-covered-by-table"
}

function getGrantDays(workerType: PaidLeaveWorkerType, weeklyWorkDays: number, scheduleIndex: number): number {
  if (scheduleIndex < 0) {
    return 0
  }

  const normalizedIndex = Math.min(scheduleIndex, STANDARD_GRANT_DAYS.length - 1)

  if (workerType === "standard") {
    return STANDARD_GRANT_DAYS[normalizedIndex]
  }

  if (workerType === "proportional") {
    const normalizedWorkDays = Math.min(4, Math.max(1, Math.round(weeklyWorkDays))) as 1 | 2 | 3 | 4
    return PROPORTIONAL_GRANT_DAYS[normalizedWorkDays][normalizedIndex]
  }

  return 0
}

function getWorkerTypeLabel(workerType: PaidLeaveWorkerType, equivalentWeeklyWorkDays: number): string {
  if (workerType === "standard") {
    return "通常の付与日数"
  }

  if (workerType === "proportional") {
    return `週${equivalentWeeklyWorkDays}日相当の比例付与`
  }

  return "勤務日数を確認"
}

function getPayMethodLabel(payMethod: PaidLeavePayMethod): string {
  if (payMethod === "normal") {
    return "通常賃金方式"
  }

  if (payMethod === "average") {
    return "平均賃金方式"
  }

  return "標準報酬日額方式"
}

function divideSafely(numerator: number, denominator: number): number {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) {
    return 0
  }

  return numerator / denominator
}

function getDailyPayEstimates(input: PaidLeaveSimulationInput) {
  const normalDailyPayEstimate = Math.max(0, input.hourlyWage) * Math.max(0, input.averageShiftHours)
  const wagesTotal = Math.max(0, input.threeMonthWagesTotal)
  const averageWagePrincipleEstimate = divideSafely(wagesTotal, Math.max(0, input.threeMonthCalendarDays))
  const averageWageMinimumEstimate = divideSafely(wagesTotal, Math.max(0, input.threeMonthWorkDays)) * 0.6
  const averageDailyPayEstimate = Math.max(averageWagePrincipleEstimate, averageWageMinimumEstimate)
  const standardRemunerationDailyPayEstimate = divideSafely(Math.max(0, input.standardMonthlyRemuneration), 30)

  let paidLeaveDailyPayEstimate = normalDailyPayEstimate

  if (input.payMethod === "average") {
    paidLeaveDailyPayEstimate = averageDailyPayEstimate
  } else if (input.payMethod === "standard-remuneration") {
    paidLeaveDailyPayEstimate = standardRemunerationDailyPayEstimate
  }

  const paidLeavePayRatioToNormal =
    normalDailyPayEstimate > 0 ? Math.round((paidLeaveDailyPayEstimate / normalDailyPayEstimate) * 100) : 0

  return {
    normalDailyPayEstimate,
    averageWagePrincipleEstimate,
    averageWageMinimumEstimate,
    averageDailyPayEstimate,
    standardRemunerationDailyPayEstimate,
    paidLeaveDailyPayEstimate,
    paidLeavePayMethodLabel: getPayMethodLabel(input.payMethod),
    paidLeavePayRatioToNormal,
  }
}

export function simulatePaidLeave(input: PaidLeaveSimulationInput): PaidLeaveSimulationResult {
  const hireDate = parseDate(input.hireDate)
  const asOfDate = parseDate(input.asOfDate)
  const dailyPayEstimates = getDailyPayEstimates(input)
  const dailyValueEstimate = dailyPayEstimates.paidLeaveDailyPayEstimate
  const equivalentWeeklyWorkDays = getEquivalentWeeklyWorkDays(input)

  if (!hireDate || !asOfDate || asOfDate < hireDate) {
    return {
      isValid: false,
      hasSixMonths: false,
      attendanceOk: input.attendanceRate >= 80,
      eligibleNow: false,
      workerType: "not-covered-by-table",
      workerTypeLabel: "日付を確認",
      equivalentWeeklyWorkDays,
      serviceMonths: 0,
      currentGrantDays: 0,
      scheduledGrantDays: 0,
      nextGrantDays: 0,
      remainingDaysEstimate: 0,
      dailyValueEstimate,
      ...dailyPayEstimates,
      currentGrantValueEstimate: 0,
      remainingValueEstimate: 0,
      mandatoryFiveDaysApplies: false,
    }
  }

  const serviceMonths = getCompletedServiceMonths(hireDate, asOfDate)
  const currentScheduleIndex = getGrantScheduleIndex(serviceMonths)
  const nextGrantMonth = getNextGrantMonth(serviceMonths)
  const nextGrantDate = addMonths(hireDate, nextGrantMonth)
  const currentGrantDate =
    currentScheduleIndex >= 0 ? addMonths(hireDate, FIRST_GRANT_MONTH + currentScheduleIndex * GRANT_INTERVAL_MONTHS) : undefined
  const currentGrantDateIso = currentGrantDate ? toIsoDate(currentGrantDate) : undefined
  const nextGrantDateIso = toIsoDate(nextGrantDate)
  const daysUntilNextGrant = isValidDate(nextGrantDate)
    ? Math.max(0, differenceInCalendarDays(asOfDate, nextGrantDate))
    : undefined
  const nextScheduleIndex = Math.min(
    STANDARD_GRANT_DAYS.length - 1,
    Math.max(0, Math.ceil((nextGrantMonth - FIRST_GRANT_MONTH) / GRANT_INTERVAL_MONTHS)),
  )
  const workerType = getWorkerType(input)
  const scheduledGrantDays = getGrantDays(workerType, equivalentWeeklyWorkDays, currentScheduleIndex)
  const hasSixMonths = serviceMonths >= FIRST_GRANT_MONTH
  const attendanceOk = input.attendanceRate >= 80
  const eligibleNow = hasSixMonths && attendanceOk && scheduledGrantDays > 0
  const currentGrantDays = eligibleNow ? scheduledGrantDays : 0
  const nextGrantDays = getGrantDays(workerType, equivalentWeeklyWorkDays, nextScheduleIndex)
  const remainingDaysEstimate = Math.max(0, currentGrantDays - Math.max(0, input.usedPaidLeaveDays))

  return {
    isValid: true,
    hasSixMonths,
    attendanceOk,
    eligibleNow,
    workerType,
    workerTypeLabel: getWorkerTypeLabel(workerType, equivalentWeeklyWorkDays),
    equivalentWeeklyWorkDays,
    serviceMonths,
    currentGrantDate: currentGrantDateIso,
    nextGrantDate: nextGrantDateIso,
    daysUntilNextGrant,
    currentGrantDays,
    scheduledGrantDays,
    nextGrantDays,
    remainingDaysEstimate,
    dailyValueEstimate,
    ...dailyPayEstimates,
    currentGrantValueEstimate: currentGrantDays * dailyValueEstimate,
    remainingValueEstimate: remainingDaysEstimate * dailyValueEstimate,
    mandatoryFiveDaysApplies: currentGrantDays >= 10,
  }
}
