export type StudentType = "day" | "night" | "none"
export type ParentTaxRate = 0.05 | 0.1 | 0.2 | 0.23 | 0.33 | 0.4 | 0.45
export type CompanySize = "over_50" | "under_51"
export type SocialInsuranceRoute = "undecided" | "employee" | "national"
export type StudentPensionSpecialStatus = "eligible" | "not_eligible" | "unknown"

export enum IncomeZone {
  SAFE_LOW = "SAFE_LOW",
  SAFE_RESIDENT = "SAFE_RESIDENT",
  DEPENDENT_FULL = "DEPENDENT_FULL",
  SPECIAL_DEPENDENT = "SPECIAL_DEPENDENT",
  TAX_FREE_REVIEW = "TAX_FREE_REVIEW",
  TAXABLE = "TAXABLE",
}

export interface SimulationParams {
  annualIncome: number
  age: number
  studentType: StudentType
}

export interface SimulationResult {
  zone: IncomeZone
  label: string
  headline: string
  description: string
  color: "green" | "yellow" | "red"
  estimatedSelfLoss?: number
  selfBurdenBreakdown?: undefined
  estimatedParentLoss?: number
  advice: string[]
}

export interface DetailedSimulationParams extends SimulationParams {
  weeklyHours: number
  monthlySalary: number
  socialInsuranceAnnualIncomeEstimate?: number
  companySize: CompanySize
  parentTaxRate: ParentTaxRate
  studentPensionSpecialStatus: StudentPensionSpecialStatus
  socialInsuranceRoute: SocialInsuranceRoute
  nationalHealthInsuranceAnnual?: number
}

export interface DetailedSimulationResult {
  salaryIncome: number
  taxableIncomeForIncomeTax: number
  taxableIncomeForResidentTax: number
  incomeTaxEstimate: number
  residentTaxIncomeLevyEstimate: number
  parentIncomeTaxDeduction: number
  parentResidentTaxDeduction: number
  parentIncomeTaxDeltaEstimate: number
  parentResidentTaxDeltaEstimate: number
  parentTaxDeltaEstimate: number
  selfTaxBurdenEstimate: number
  selfTakeHomeBeforeSocialInsuranceEstimate: number
  selfTakeHomeAfterKnownBurdenEstimate: number
  socialInsuranceDependentLimit: number
  socialInsuranceAnnualIncomeEstimate: number
  canRemainSocialInsuranceDependent: boolean
  shortHoursSocialInsuranceApplies: boolean
  socialInsuranceStatusLabel: string
  socialInsuranceStatusDescription: string
  nationalPensionAnnualEstimate?: number
  employeeHealthInsuranceAnnualEstimate?: number
  employeeChildSupportAnnualEstimate?: number
  employeePensionAnnualEstimate?: number
  employeeSocialInsuranceMonthlyEstimate?: number
  employeeSocialInsuranceAssumedMonthlySalary?: number
  socialInsuranceBurdenEstimate?: number
  assumptions: string[]
}

export type TaxIncomeWallId =
  | "resident-tax"
  | "parent-dependent"
  | "income-tax"
  | "special-dependent"

export interface TaxIncomeWallDefinition {
  id: TaxIncomeWallId
  label: string
  amount: number
  description: string
}

export interface YearToDateIncomePlanParams {
  receivedIncome: number
  lastPaidMonth: number
  expectedMonthlyIncome: number
  additionalExpectedIncome: number
  age: number
}

export interface TaxIncomeWallProgress extends TaxIncomeWallDefinition {
  remainingToWall: number
  exceededBy: number
  averagePerRemainingPayment: number | null
  projectedDifference: number
  projectedExceeds: boolean
  estimatedReachMonth: number | null
  receivedProgressPercent: number
}

export interface YearToDateIncomePlan {
  receivedIncome: number
  remainingPaymentCount: number
  expectedRemainingIncome: number
  projectedAnnualIncome: number
  walls: TaxIncomeWallProgress[]
}

export const INCOME_SIMULATION_BASIS = {
  targetYear: "2026年（令和8年）基準",
  checkedAt: "2026年7月30日",
  sources: [
    {
      label: "国税庁 令和8年度税制改正",
      url: "https://www.nta.go.jp/users/gensen/2026kiso/index.htm",
    },
    {
      label: "厚生労働省 社会保険加入の要件",
      url: "https://www.mhlw.go.jp/tekiyoukakudai/jugyouin/taisho/",
    },
    {
      label: "国税庁 扶養控除等申告書",
      url: "https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/gensen/annai/1648_01.htm",
    },
    {
      label: "日本年金機構 被扶養者に異動があったときの手続き",
      url: "https://www.nenkin.go.jp/service/kounen/tekiyo/hihokensha1/20141202.html",
    },
    {
      label: "協会けんぽ 令和8年度保険料額表",
      url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/premium_prefectures/r08/index.html",
    },
    {
      label: "日本年金機構 国民年金保険料",
      url: "https://www.nenkin.go.jp/service/kokunen/hokenryo/hokenryo.html",
    },
    {
      label: "日本年金機構 被扶養者認定の収入要件",
      url: "https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html",
    },
    {
      label: "国税庁 給与所得の収入金額の収入すべき時期",
      url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2668_qa.htm",
    },
    {
      label: "厚生労働省 被扶養者認定の年間収入の取扱い",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc9348&dataType=1&pageNo=1",
    },
  ],
} as const

export const INCOME_THRESHOLDS = {
  RESIDENT_TAX_START: 1_190_000,
  INCOME_TAX_START: 1_780_000,
  DEPENDENT_FULL: 1_360_000,
  SPECIAL_DEPENDENT_MAX: 1_970_000,
  SOCIAL_INSURANCE_LIMIT_DEFAULT: 1_300_000,
  SOCIAL_INSURANCE_LIMIT_AGE_19_TO_22: 1_500_000,
  STANDARD_RESIDENT_TAX_RATE: 0.1,
  EMPLOYMENT_INCOME_DEDUCTION_MIN: 740_000,
  BASIC_DEDUCTION_INCOME_TAX_LOW: 1_040_000,
  BASIC_DEDUCTION_INCOME_TAX_STANDARD: 620_000,
  BASIC_DEDUCTION_RESIDENT_TAX: 430_000,
  RESIDENT_TAX_NON_TAXABLE_INCOME: 450_000,
  NATIONAL_PENSION_MONTHLY_2026: 17_920,
} as const

const EMPLOYEE_HEALTH_INSURANCE_RATE_TOKYO_2026 = 0.0985
const EMPLOYEE_CHILD_SUPPORT_RATE_2026 = 0.0023
const EMPLOYEE_PENSION_RATE_2026 = 0.183
const EMPLOYEE_SHARE_RATIO = 0.5

export const EMPLOYEE_SOCIAL_INSURANCE_EMPLOYEE_SHARE_RATE_2026 =
  (EMPLOYEE_HEALTH_INSURANCE_RATE_TOKYO_2026 +
    EMPLOYEE_CHILD_SUPPORT_RATE_2026 +
    EMPLOYEE_PENSION_RATE_2026) *
  EMPLOYEE_SHARE_RATIO

const SPECIAL_DEPENDENT_INCOME_TAX_TABLE = [
  { maxIncome: 850_000, deduction: 630_000 },
  { maxIncome: 900_000, deduction: 610_000 },
  { maxIncome: 950_000, deduction: 510_000 },
  { maxIncome: 1_000_000, deduction: 410_000 },
  { maxIncome: 1_050_000, deduction: 310_000 },
  { maxIncome: 1_100_000, deduction: 210_000 },
  { maxIncome: 1_150_000, deduction: 110_000 },
  { maxIncome: 1_200_000, deduction: 60_000 },
  { maxIncome: 1_230_000, deduction: 30_000 },
] as const

const SPECIAL_DEPENDENT_RESIDENT_TAX_TABLE = [
  { maxIncome: 850_000, deduction: 450_000 },
  { maxIncome: 900_000, deduction: 450_000 },
  { maxIncome: 950_000, deduction: 450_000 },
  { maxIncome: 1_000_000, deduction: 410_000 },
  { maxIncome: 1_050_000, deduction: 310_000 },
  { maxIncome: 1_100_000, deduction: 210_000 },
  { maxIncome: 1_150_000, deduction: 110_000 },
  { maxIncome: 1_200_000, deduction: 60_000 },
  { maxIncome: 1_230_000, deduction: 30_000 },
] as const

function isSpecialTaxDependent(age: number): boolean {
  return age >= 19 && age < 23
}

function isTaxDependentEligibleAge(age: number): boolean {
  return age >= 16
}

function isDayStudentExcludedFromShortHoursRule(studentType: StudentType): boolean {
  return studentType === "day"
}

export function getSocialInsuranceDependentLimit(age: number): number {
  return isSpecialTaxDependent(age)
    ? INCOME_THRESHOLDS.SOCIAL_INSURANCE_LIMIT_AGE_19_TO_22
    : INCOME_THRESHOLDS.SOCIAL_INSURANCE_LIMIT_DEFAULT
}

export function getTaxIncomeWalls(age: number): TaxIncomeWallDefinition[] {
  return [
    {
      id: "resident-tax",
      label: "119万円",
      amount: INCOME_THRESHOLDS.RESIDENT_TAX_START,
      description: "住民税の非課税ラインの目安",
    },
    ...(age >= 16
      ? [
          {
            id: "parent-dependent" as const,
            label: "136万円",
            amount: INCOME_THRESHOLDS.DEPENDENT_FULL,
            description: "親の税扶養が満額となる給与収入の目安",
          },
        ]
      : []),
    {
      id: "income-tax",
      label: "178万円",
      amount: INCOME_THRESHOLDS.INCOME_TAX_START,
      description: "本人の所得税が0円見込みとなる目安",
    },
    ...(isSpecialTaxDependent(age)
      ? [
          {
            id: "special-dependent" as const,
            label: "197万円",
            amount: INCOME_THRESHOLDS.SPECIAL_DEPENDENT_MAX,
            description: "特定親族特別控除が段階適用される上限目安",
          },
        ]
      : []),
  ]
}

export function calculateYearToDateIncomePlan(
  params: YearToDateIncomePlanParams,
): YearToDateIncomePlan {
  const receivedIncome = Math.max(0, Math.floor(params.receivedIncome))
  const lastPaidMonth = Math.min(12, Math.max(1, Math.floor(params.lastPaidMonth)))
  const expectedMonthlyIncome = Math.max(0, Math.floor(params.expectedMonthlyIncome))
  const additionalExpectedIncome = Math.max(0, Math.floor(params.additionalExpectedIncome))
  const remainingPaymentCount = Math.max(0, 12 - lastPaidMonth)
  const expectedRemainingIncome =
    expectedMonthlyIncome * remainingPaymentCount + additionalExpectedIncome
  const projectedAnnualIncome = receivedIncome + expectedRemainingIncome

  const walls = getTaxIncomeWalls(params.age).map((wall) => {
    const differenceFromReceived = wall.amount - receivedIncome
    const remainingToWall = Math.max(0, differenceFromReceived)
    const exceededBy = Math.max(0, -differenceFromReceived)
    const averagePerRemainingPayment =
      remainingPaymentCount > 0 ? remainingToWall / remainingPaymentCount : null
    const projectedDifference = wall.amount - projectedAnnualIncome
    const projectedExceeds = projectedDifference < 0
    const paymentsUntilWall =
      differenceFromReceived > 0 && expectedMonthlyIncome > 0
        ? Math.ceil(differenceFromReceived / expectedMonthlyIncome)
        : null
    const estimatedReachMonth =
      paymentsUntilWall !== null && lastPaidMonth + paymentsUntilWall <= 12
        ? lastPaidMonth + paymentsUntilWall
        : null

    return {
      ...wall,
      remainingToWall,
      exceededBy,
      averagePerRemainingPayment,
      projectedDifference,
      projectedExceeds,
      estimatedReachMonth,
      receivedProgressPercent:
        wall.amount > 0 ? Math.min(100, (receivedIncome / wall.amount) * 100) : 0,
    }
  })

  return {
    receivedIncome,
    remainingPaymentCount,
    expectedRemainingIncome,
    projectedAnnualIncome,
    walls,
  }
}

function determineZone(annualIncome: number, age: number): IncomeZone {
  if (annualIncome <= 1_000_000) return IncomeZone.SAFE_LOW
  if (annualIncome <= INCOME_THRESHOLDS.RESIDENT_TAX_START) return IncomeZone.SAFE_RESIDENT
  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) return IncomeZone.DEPENDENT_FULL
  if (isSpecialTaxDependent(age) && annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_MAX) {
    return IncomeZone.SPECIAL_DEPENDENT
  }
  if (annualIncome <= INCOME_THRESHOLDS.INCOME_TAX_START) return IncomeZone.TAX_FREE_REVIEW
  return IncomeZone.TAXABLE
}

function getZoneInfo(zone: IncomeZone): { label: string; color: "green" | "yellow" | "red" } {
  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return { label: "影響は小さめ", color: "green" }
    case IncomeZone.SAFE_RESIDENT:
      return { label: "住民税を確認", color: "yellow" }
    case IncomeZone.DEPENDENT_FULL:
      return { label: "扶養の範囲内", color: "green" }
    case IncomeZone.SPECIAL_DEPENDENT:
      return { label: "特定親族特別控除を確認", color: "yellow" }
    case IncomeZone.TAX_FREE_REVIEW:
      return { label: "税金と保険を確認", color: "yellow" }
    case IncomeZone.TAXABLE:
      return { label: "税金と扶養に影響あり", color: "red" }
  }
}

function annualIncomeToManEnLabel(annualIncome: number): number {
  return Math.floor(annualIncome / 10_000)
}

function generateHeadline(annualIncome: number, age: number): string {
  const incomeManEn = annualIncomeToManEnLabel(annualIncome)
  const socialLimitManEn = annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    return `年収${incomeManEn}万円。所得税は0円の見込みで、税法上の扶養の範囲内です。`
  }

  if (annualIncome < getSocialInsuranceDependentLimit(age)) {
    return `年収${incomeManEn}万円。税法上の扶養は外れる可能性がありますが、社会保険の扶養目安${socialLimitManEn}万円は下回っています。`
  }

  if (annualIncome <= INCOME_THRESHOLDS.INCOME_TAX_START) {
    return `年収${incomeManEn}万円。所得税は0円の見込みですが、扶養と社会保険は確認が必要です。`
  }

  return `年収${incomeManEn}万円。所得税がかかる見込みで、扶養の扱いも確認が必要です。`
}

function generateDescription(zone: IncomeZone, age: number, studentType: StudentType): string {
  const socialLimitManEn = annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))
  const socialInsuranceText = isDayStudentExcludedFromShortHoursRule(studentType)
    ? `昼間学生は短時間労働者の勤務先加入ルールから外れる場合があります。社会保険の扶養目安は${socialLimitManEn}万円です。`
    : "社会保険は年収だけでは判定できません。週の労働時間、月額賃金、学生区分、勤務先規模を確認してください。"

  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return `税金や税法上の扶養への影響は比較的小さい範囲です。${socialInsuranceText}`
    case IncomeZone.SAFE_RESIDENT:
      return `所得税は0円の見込みですが、住民税は自治体の扱いで変わることがあります。${socialInsuranceText}`
    case IncomeZone.DEPENDENT_FULL:
      return `所得税は178万円まで0円の見込みで、税法上の扶養も136万円以下の範囲内です。${socialInsuranceText}`
    case IncomeZone.SPECIAL_DEPENDENT:
      return `19歳以上23歳未満なら、197万円まで特定親族特別控除の対象になり得ます。${socialInsuranceText}`
    case IncomeZone.TAX_FREE_REVIEW:
      return `所得税はまだ0円の見込みですが、税法上の扶養には影響している可能性があります。${socialInsuranceText}`
    case IncomeZone.TAXABLE:
      return `178万円を超えると所得税がかかる見込みで、扶養の扱いも確認が必要です。${socialInsuranceText}`
  }
}

function generateAdvice(annualIncome: number, age: number, studentType: StudentType): string[] {
  const advice: string[] = []

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    advice.push("税法上の扶養は136万円以下の範囲内です。")
  } else if (isSpecialTaxDependent(age) && annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_MAX) {
    advice.push("19歳以上23歳未満のため、特定親族特別控除の対象になり得ます。")
  } else {
    advice.push("扶養への影響は、年末調整や確定申告の前に確認してください。")
  }

  if (isDayStudentExcludedFromShortHoursRule(studentType)) {
    advice.push(`社会保険の扶養は、年収${annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))}万円の目安を確認してください。`)
  } else {
    advice.push("社会保険は、週の労働時間、月額賃金、学生区分、勤務先規模も確認してください。")
  }

  return advice
}

function getEmploymentIncome(annualIncome: number): number {
  if (annualIncome < 741_000) {
    return 0
  }
  if (annualIncome < 2_191_000) {
    return Math.max(0, annualIncome - INCOME_THRESHOLDS.EMPLOYMENT_INCOME_DEDUCTION_MIN)
  }
  if (annualIncome < 2_193_000) {
    return 1_451_000
  }
  if (annualIncome < 2_196_000) {
    return 1_453_000
  }
  if (annualIncome < 2_200_000) {
    return 1_456_000
  }
  if (annualIncome <= 3_600_000) {
    return Math.max(0, Math.floor(annualIncome - (annualIncome * 0.3 + 80_000)))
  }
  if (annualIncome <= 6_600_000) {
    return Math.max(0, Math.floor(annualIncome - (annualIncome * 0.2 + 440_000)))
  }
  if (annualIncome <= 8_500_000) {
    return Math.max(0, Math.floor(annualIncome - (annualIncome * 0.1 + 1_100_000)))
  }

  return Math.max(0, annualIncome - 1_950_000)
}

function getIncomeTaxBasicDeduction(totalIncome: number): number {
  if (totalIncome <= 1_320_000) {
    return INCOME_THRESHOLDS.BASIC_DEDUCTION_INCOME_TAX_LOW
  }
  if (totalIncome <= 23_500_000) {
    return INCOME_THRESHOLDS.BASIC_DEDUCTION_INCOME_TAX_STANDARD
  }
  if (totalIncome <= 24_000_000) {
    return 480_000
  }
  if (totalIncome <= 24_500_000) {
    return 320_000
  }
  if (totalIncome <= 25_000_000) {
    return 160_000
  }

  return 0
}

function computeIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0

  const brackets = [
    { upper: 1_950_000, rate: 0.05, deduction: 0 },
    { upper: 3_300_000, rate: 0.1, deduction: 97_500 },
    { upper: 6_950_000, rate: 0.2, deduction: 427_500 },
    { upper: 9_000_000, rate: 0.23, deduction: 636_000 },
    { upper: 18_000_000, rate: 0.33, deduction: 1_536_000 },
    { upper: 40_000_000, rate: 0.4, deduction: 2_796_000 },
    { upper: Number.POSITIVE_INFINITY, rate: 0.45, deduction: 4_796_000 },
  ] as const

  const bracket = brackets.find((item) => taxableIncome <= item.upper) ?? brackets[brackets.length - 1]
  const baseTax = taxableIncome * bracket.rate - bracket.deduction
  return Math.max(0, Math.floor(baseTax * 1.021))
}

function getSpecialDependentIncomeTaxDeduction(totalIncome: number): number {
  const matched = SPECIAL_DEPENDENT_INCOME_TAX_TABLE.find((row) => totalIncome <= row.maxIncome)
  return matched?.deduction ?? 0
}

function getSpecialDependentResidentTaxDeduction(totalIncome: number): number {
  const matched = SPECIAL_DEPENDENT_RESIDENT_TAX_TABLE.find((row) => totalIncome <= row.maxIncome)
  return matched?.deduction ?? 0
}

function getParentIncomeTaxDeduction(age: number, totalIncome: number): number {
  if (!isTaxDependentEligibleAge(age)) return 0
  if (isSpecialTaxDependent(age)) return getSpecialDependentIncomeTaxDeduction(totalIncome)
  return totalIncome <= 620_000 ? 380_000 : 0
}

function getParentResidentTaxDeduction(age: number, totalIncome: number): number {
  if (!isTaxDependentEligibleAge(age)) return 0
  if (isSpecialTaxDependent(age)) return getSpecialDependentResidentTaxDeduction(totalIncome)
  return totalIncome <= 620_000 ? 330_000 : 0
}

function getFullParentIncomeTaxDeduction(age: number): number {
  if (!isTaxDependentEligibleAge(age)) return 0
  return isSpecialTaxDependent(age) ? 630_000 : 380_000
}

function getFullParentResidentTaxDeduction(age: number): number {
  if (!isTaxDependentEligibleAge(age)) return 0
  return isSpecialTaxDependent(age) ? 450_000 : 330_000
}

function estimateEmployeeSocialInsurance(monthlySalary: number) {
  const assumedMonthlySalary = Math.max(0, monthlySalary)
  const employeeHealthInsuranceAnnualEstimate = Math.floor(
    assumedMonthlySalary * EMPLOYEE_HEALTH_INSURANCE_RATE_TOKYO_2026 * EMPLOYEE_SHARE_RATIO * 12,
  )
  const employeeChildSupportAnnualEstimate = Math.floor(
    assumedMonthlySalary * EMPLOYEE_CHILD_SUPPORT_RATE_2026 * EMPLOYEE_SHARE_RATIO * 12,
  )
  const employeePensionAnnualEstimate = Math.floor(
    assumedMonthlySalary * EMPLOYEE_PENSION_RATE_2026 * EMPLOYEE_SHARE_RATIO * 12,
  )
  const annualEstimate =
    employeeHealthInsuranceAnnualEstimate +
    employeeChildSupportAnnualEstimate +
    employeePensionAnnualEstimate

  return {
    assumedMonthlySalary,
    employeeHealthInsuranceAnnualEstimate,
    employeeChildSupportAnnualEstimate,
    employeePensionAnnualEstimate,
    annualEstimate,
    monthlyEstimate: Math.round(annualEstimate / 12),
  }
}

export function simulateIncome(params: SimulationParams): SimulationResult {
  const zone = determineZone(params.annualIncome, params.age)
  const { label, color } = getZoneInfo(zone)

  return {
    zone,
    label,
    headline: generateHeadline(params.annualIncome, params.age),
    description: generateDescription(zone, params.age, params.studentType),
    color,
    estimatedSelfLoss: undefined,
    selfBurdenBreakdown: undefined,
    estimatedParentLoss: undefined,
    advice: generateAdvice(params.annualIncome, params.age, params.studentType),
  }
}

export function simulateDetailedIncome(params: DetailedSimulationParams): DetailedSimulationResult {
  const salaryIncome = getEmploymentIncome(params.annualIncome)
  const incomeTaxBasicDeduction = getIncomeTaxBasicDeduction(salaryIncome)
  const taxableIncomeForIncomeTax = Math.max(0, salaryIncome - incomeTaxBasicDeduction)
  const taxableIncomeForResidentTax = Math.max(0, salaryIncome - INCOME_THRESHOLDS.BASIC_DEDUCTION_RESIDENT_TAX)
  const incomeTaxEstimate = computeIncomeTax(taxableIncomeForIncomeTax)
  const residentTaxIncomeLevyEstimate =
    salaryIncome <= INCOME_THRESHOLDS.RESIDENT_TAX_NON_TAXABLE_INCOME
      ? 0
      : Math.floor(taxableIncomeForResidentTax * INCOME_THRESHOLDS.STANDARD_RESIDENT_TAX_RATE)

  const parentIncomeTaxDeduction = getParentIncomeTaxDeduction(params.age, salaryIncome)
  const parentResidentTaxDeduction = getParentResidentTaxDeduction(params.age, salaryIncome)
  const parentIncomeTaxDeltaEstimate = Math.max(0, Math.floor((getFullParentIncomeTaxDeduction(params.age) - parentIncomeTaxDeduction) * params.parentTaxRate))
  const parentResidentTaxDeltaEstimate = Math.max(0, Math.floor((getFullParentResidentTaxDeduction(params.age) - parentResidentTaxDeduction) * INCOME_THRESHOLDS.STANDARD_RESIDENT_TAX_RATE))
  const parentTaxDeltaEstimate = parentIncomeTaxDeltaEstimate + parentResidentTaxDeltaEstimate
  const selfTaxBurdenEstimate = incomeTaxEstimate + residentTaxIncomeLevyEstimate

  const socialInsuranceDependentLimit = getSocialInsuranceDependentLimit(params.age)
  const socialInsuranceAnnualIncomeEstimate = Math.max(
    0,
    params.socialInsuranceAnnualIncomeEstimate ?? params.annualIncome,
  )
  const canRemainSocialInsuranceDependent =
    socialInsuranceAnnualIncomeEstimate < socialInsuranceDependentLimit
  const shortHoursSocialInsuranceApplies =
    !isDayStudentExcludedFromShortHoursRule(params.studentType) &&
    params.weeklyHours >= 20 &&
    params.monthlySalary >= 88_000 &&
    params.companySize === "over_50"

  let socialInsuranceStatusLabel = "追加確認が必要"
  let socialInsuranceStatusDescription = "社会保険は勤務条件と、扶養を外れた後の加入先によって変わります。"

  if (!canRemainSocialInsuranceDependent && shortHoursSocialInsuranceApplies) {
    socialInsuranceStatusLabel = "勤務先の社会保険に加入する可能性が高め"
    socialInsuranceStatusDescription = "扶養の年収目安を超えていて、短時間労働者の主な条件も満たしています。"
  } else if (!canRemainSocialInsuranceDependent) {
    socialInsuranceStatusLabel = "扶養を外れる可能性が高め"
    socialInsuranceStatusDescription = "扶養の年収目安を超えています。勤務先の社会保険か、国民健康保険・国民年金かを確認してください。"
  } else if (shortHoursSocialInsuranceApplies) {
    socialInsuranceStatusLabel = "勤務先加入の可能性があります"
    socialInsuranceStatusDescription = "年収が扶養目安の範囲内でも、短時間労働者の勤務先加入ルールに該当する場合があります。"
  } else {
    socialInsuranceStatusLabel = "扶養に残れる可能性があります"
    socialInsuranceStatusDescription = "年収だけで見ると扶養に残れる可能性があります。最終確認には勤務条件の確認も必要です。"
  }

  const assumptions = [
    "給与収入のみとして計算しています。",
    "所得税は令和8年分以後の基礎控除・給与所得控除の改正を前提にしています。",
    "住民税の試算は、所得割のみを標準的な10%で計算し、自治体ごとの差がある均等割は含めていません。",
    "親の住民税への影響は、標準的な10%で概算しています。",
    "親の所得税への影響は、選択した限界税率で概算しています。",
  ]

  let nationalPensionAnnualEstimate: number | undefined
  let employeeHealthInsuranceAnnualEstimate: number | undefined
  let employeeChildSupportAnnualEstimate: number | undefined
  let employeePensionAnnualEstimate: number | undefined
  let employeeSocialInsuranceMonthlyEstimate: number | undefined
  let employeeSocialInsuranceAssumedMonthlySalary: number | undefined
  let socialInsuranceBurdenEstimate: number | undefined

  if (params.socialInsuranceRoute === "national") {
    const canUseStudentPensionSpecial =
      params.age >= 20 && params.studentType !== "none"

    if (
      params.age >= 20 &&
      (!canUseStudentPensionSpecial || params.studentPensionSpecialStatus === "not_eligible")
    ) {
      nationalPensionAnnualEstimate = INCOME_THRESHOLDS.NATIONAL_PENSION_MONTHLY_2026 * 12
      socialInsuranceBurdenEstimate = nationalPensionAnnualEstimate
    } else if (canUseStudentPensionSpecial && params.studentPensionSpecialStatus === "eligible") {
      nationalPensionAnnualEstimate = 0
      assumptions.push("学生納付特例は、前年所得などの要件を満たしている前提で0円としています。")
    } else if (canUseStudentPensionSpecial) {
      assumptions.push("学生納付特例は前年所得などで判定されるため、対象未確認のときは国民年金を加算していません。")
    }

    if (typeof params.nationalHealthInsuranceAnnual === "number" && params.nationalHealthInsuranceAnnual > 0) {
      socialInsuranceBurdenEstimate = (socialInsuranceBurdenEstimate ?? 0) + params.nationalHealthInsuranceAnnual
      assumptions.push("国民健康保険料は入力した金額を使用しています。")
    } else {
      assumptions.push("国民健康保険料は、金額を入力した場合のみ含めています。")
    }
  } else if (params.socialInsuranceRoute === "employee") {
    const employeeSocialInsurance = estimateEmployeeSocialInsurance(params.monthlySalary)
    employeeHealthInsuranceAnnualEstimate = employeeSocialInsurance.employeeHealthInsuranceAnnualEstimate
    employeeChildSupportAnnualEstimate = employeeSocialInsurance.employeeChildSupportAnnualEstimate
    employeePensionAnnualEstimate = employeeSocialInsurance.employeePensionAnnualEstimate
    employeeSocialInsuranceMonthlyEstimate = employeeSocialInsurance.monthlyEstimate
    employeeSocialInsuranceAssumedMonthlySalary = employeeSocialInsurance.assumedMonthlySalary
    socialInsuranceBurdenEstimate = employeeSocialInsurance.annualEstimate
    assumptions.push(
      "勤務先の社会保険は、協会けんぽ東京支部の令和8年度料率を目安に、健康保険・子ども子育て支援金・厚生年金の本人負担分を概算しています。",
    )
    assumptions.push("実際の保険料は、標準報酬月額の等級、都道府県、健康保険組合、勤務先の扱いで変わります。")
  } else {
    assumptions.push("加入先が未定のため、具体的な社会保険料は加算していません。")
  }

  const selfTakeHomeBeforeSocialInsuranceEstimate = params.annualIncome - selfTaxBurdenEstimate
  const selfTakeHomeAfterKnownBurdenEstimate =
    selfTakeHomeBeforeSocialInsuranceEstimate - (socialInsuranceBurdenEstimate ?? 0)

  return {
    salaryIncome,
    taxableIncomeForIncomeTax,
    taxableIncomeForResidentTax,
    incomeTaxEstimate,
    residentTaxIncomeLevyEstimate,
    parentIncomeTaxDeduction,
    parentResidentTaxDeduction,
    parentIncomeTaxDeltaEstimate,
    parentResidentTaxDeltaEstimate,
    parentTaxDeltaEstimate,
    selfTaxBurdenEstimate,
    selfTakeHomeBeforeSocialInsuranceEstimate,
    selfTakeHomeAfterKnownBurdenEstimate,
    socialInsuranceDependentLimit,
    socialInsuranceAnnualIncomeEstimate,
    canRemainSocialInsuranceDependent,
    shortHoursSocialInsuranceApplies,
    socialInsuranceStatusLabel,
    socialInsuranceStatusDescription,
    nationalPensionAnnualEstimate,
    employeeHealthInsuranceAnnualEstimate,
    employeeChildSupportAnnualEstimate,
    employeePensionAnnualEstimate,
    employeeSocialInsuranceMonthlyEstimate,
    employeeSocialInsuranceAssumedMonthlySalary,
    socialInsuranceBurdenEstimate,
    assumptions,
  }
}
