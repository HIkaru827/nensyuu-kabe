export type StudentType = "day" | "night" | "none"
export type ParentTaxRate = 0.05 | 0.1 | 0.2 | 0.23 | 0.33 | 0.4 | 0.45
export type CompanySize = "over_50" | "under_51"
export type SocialInsuranceRoute = "undecided" | "employee" | "national"

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
  companySize: CompanySize
  parentTaxRate: ParentTaxRate
  useStudentPensionSpecial: boolean
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
  canRemainSocialInsuranceDependent: boolean
  shortHoursSocialInsuranceApplies: boolean
  socialInsuranceStatusLabel: string
  socialInsuranceStatusDescription: string
  nationalPensionAnnualEstimate?: number
  socialInsuranceBurdenEstimate?: number
  assumptions: string[]
}

export const INCOME_THRESHOLDS = {
  RESIDENT_TAX_START: 1_100_000,
  INCOME_TAX_START: 1_600_000,
  DEPENDENT_FULL: 1_230_000,
  SPECIAL_DEPENDENT_MAX: 1_880_000,
  SOCIAL_INSURANCE_LIMIT_DEFAULT: 1_300_000,
  SOCIAL_INSURANCE_LIMIT_AGE_19_TO_22: 1_500_000,
  STANDARD_RESIDENT_TAX_RATE: 0.1,
  EMPLOYMENT_INCOME_DEDUCTION_MIN: 650_000,
  BASIC_DEDUCTION_INCOME_TAX_LOW: 950_000,
  BASIC_DEDUCTION_RESIDENT_TAX: 430_000,
  NATIONAL_PENSION_MONTHLY_2026: 17_920,
} as const

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

function isDayStudentExcludedFromShortHoursRule(studentType: StudentType): boolean {
  return studentType === "day"
}

export function getSocialInsuranceDependentLimit(age: number): number {
  return isSpecialTaxDependent(age)
    ? INCOME_THRESHOLDS.SOCIAL_INSURANCE_LIMIT_AGE_19_TO_22
    : INCOME_THRESHOLDS.SOCIAL_INSURANCE_LIMIT_DEFAULT
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
      return `所得税は160万円まで0円の見込みで、税法上の扶養も123万円以下の範囲内です。${socialInsuranceText}`
    case IncomeZone.SPECIAL_DEPENDENT:
      return `19歳以上23歳未満なら、188万円まで特定親族特別控除の対象になり得ます。${socialInsuranceText}`
    case IncomeZone.TAX_FREE_REVIEW:
      return `所得税はまだ0円の見込みですが、税法上の扶養には影響している可能性があります。${socialInsuranceText}`
    case IncomeZone.TAXABLE:
      return `160万円を超えると所得税がかかる見込みで、扶養の扱いも確認が必要です。${socialInsuranceText}`
  }
}

function generateAdvice(annualIncome: number, age: number, studentType: StudentType): string[] {
  const advice: string[] = []

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    advice.push("税法上の扶養は123万円以下の範囲内です。")
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
  return Math.max(0, annualIncome - INCOME_THRESHOLDS.EMPLOYMENT_INCOME_DEDUCTION_MIN)
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
  if (isSpecialTaxDependent(age)) return getSpecialDependentIncomeTaxDeduction(totalIncome)
  return totalIncome <= 580_000 ? 380_000 : 0
}

function getParentResidentTaxDeduction(age: number, totalIncome: number): number {
  if (isSpecialTaxDependent(age)) return getSpecialDependentResidentTaxDeduction(totalIncome)
  return totalIncome <= 580_000 ? 330_000 : 0
}

function getFullParentIncomeTaxDeduction(age: number): number {
  return isSpecialTaxDependent(age) ? 630_000 : 380_000
}

function getFullParentResidentTaxDeduction(age: number): number {
  return isSpecialTaxDependent(age) ? 450_000 : 330_000
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
  const taxableIncomeForIncomeTax = Math.max(0, salaryIncome - INCOME_THRESHOLDS.BASIC_DEDUCTION_INCOME_TAX_LOW)
  const taxableIncomeForResidentTax = Math.max(0, salaryIncome - INCOME_THRESHOLDS.BASIC_DEDUCTION_RESIDENT_TAX)
  const incomeTaxEstimate = computeIncomeTax(taxableIncomeForIncomeTax)
  const residentTaxIncomeLevyEstimate = Math.floor(taxableIncomeForResidentTax * INCOME_THRESHOLDS.STANDARD_RESIDENT_TAX_RATE)

  const parentIncomeTaxDeduction = getParentIncomeTaxDeduction(params.age, salaryIncome)
  const parentResidentTaxDeduction = getParentResidentTaxDeduction(params.age, salaryIncome)
  const parentIncomeTaxDeltaEstimate = Math.max(0, Math.floor((getFullParentIncomeTaxDeduction(params.age) - parentIncomeTaxDeduction) * params.parentTaxRate))
  const parentResidentTaxDeltaEstimate = Math.max(0, Math.floor((getFullParentResidentTaxDeduction(params.age) - parentResidentTaxDeduction) * INCOME_THRESHOLDS.STANDARD_RESIDENT_TAX_RATE))
  const parentTaxDeltaEstimate = parentIncomeTaxDeltaEstimate + parentResidentTaxDeltaEstimate
  const selfTaxBurdenEstimate = incomeTaxEstimate + residentTaxIncomeLevyEstimate

  const socialInsuranceDependentLimit = getSocialInsuranceDependentLimit(params.age)
  const canRemainSocialInsuranceDependent = params.annualIncome < socialInsuranceDependentLimit
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
    "住民税の試算は、所得割のみを標準的な10%で計算しています。",
    "親の住民税への影響は、標準的な10%で概算しています。",
    "親の所得税への影響は、選択した限界税率で概算しています。",
  ]

  let nationalPensionAnnualEstimate: number | undefined
  let socialInsuranceBurdenEstimate: number | undefined

  if (params.socialInsuranceRoute === "national") {
    if (params.age >= 20 && !params.useStudentPensionSpecial) {
      nationalPensionAnnualEstimate = INCOME_THRESHOLDS.NATIONAL_PENSION_MONTHLY_2026 * 12
      socialInsuranceBurdenEstimate = nationalPensionAnnualEstimate
    } else if (params.age >= 20 && params.useStudentPensionSpecial) {
      nationalPensionAnnualEstimate = 0
    }

    if (typeof params.nationalHealthInsuranceAnnual === "number" && params.nationalHealthInsuranceAnnual > 0) {
      socialInsuranceBurdenEstimate = (socialInsuranceBurdenEstimate ?? 0) + params.nationalHealthInsuranceAnnual
      assumptions.push("国民健康保険料は入力した金額を使用しています。")
    } else {
      assumptions.push("国民健康保険料は、金額を入力した場合のみ含めています。")
    }
  } else if (params.socialInsuranceRoute === "employee") {
    assumptions.push("勤務先の健康保険・厚生年金保険料は、保険者ごとに料率が異なるため含めていません。")
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
    canRemainSocialInsuranceDependent,
    shortHoursSocialInsuranceApplies,
    socialInsuranceStatusLabel,
    socialInsuranceStatusDescription,
    nationalPensionAnnualEstimate,
    socialInsuranceBurdenEstimate,
    assumptions,
  }
}
