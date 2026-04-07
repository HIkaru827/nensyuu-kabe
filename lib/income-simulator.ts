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
      return { label: "Low impact", color: "green" }
    case IncomeZone.SAFE_RESIDENT:
      return { label: "Check resident tax", color: "yellow" }
    case IncomeZone.DEPENDENT_FULL:
      return { label: "Within dependent range", color: "green" }
    case IncomeZone.SPECIAL_DEPENDENT:
      return { label: "Check special dependent credit", color: "yellow" }
    case IncomeZone.TAX_FREE_REVIEW:
      return { label: "Check tax and insurance", color: "yellow" }
    case IncomeZone.TAXABLE:
      return { label: "Taxable and dependent impact", color: "red" }
  }
}

function annualIncomeToManEnLabel(annualIncome: number): number {
  return Math.floor(annualIncome / 10_000)
}

function generateHeadline(annualIncome: number, age: number): string {
  const incomeManEn = annualIncomeToManEnLabel(annualIncome)
  const socialLimitManEn = annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    return `Income ${incomeManEn} man yen. Income tax stays zero and tax dependent range stays in scope.`
  }

  if (annualIncome < getSocialInsuranceDependentLimit(age)) {
    return `Income ${incomeManEn} man yen. Tax dependent range is exceeded, but social dependent limit stays under ${socialLimitManEn} man yen.`
  }

  if (annualIncome <= INCOME_THRESHOLDS.INCOME_TAX_START) {
    return `Income ${incomeManEn} man yen. Income tax stays zero, but dependent and social insurance need review.`
  }

  return `Income ${incomeManEn} man yen. Income tax applies and dependent treatment needs review.`
}

function generateDescription(zone: IncomeZone, age: number, studentType: StudentType): string {
  const socialLimitManEn = annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))
  const socialInsuranceText = isDayStudentExcludedFromShortHoursRule(studentType)
    ? `Daytime students may be excluded from the short-hours employee rule. Social dependent limit is ${socialLimitManEn} man yen.`
    : "Social insurance cannot be decided by annual income alone. Check weekly hours, monthly wage, student status, and employer size."

  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return `This range is usually low risk for tax and tax-dependent treatment. ${socialInsuranceText}`
    case IncomeZone.SAFE_RESIDENT:
      return `Income tax stays zero, but resident tax can depend on local rules. ${socialInsuranceText}`
    case IncomeZone.DEPENDENT_FULL:
      return `Income tax stays zero up to 1.6M yen, and the tax-dependent line stays within 1.23M yen. ${socialInsuranceText}`
    case IncomeZone.SPECIAL_DEPENDENT:
      return `If age is 19 to 22, the special dependent credit can still apply up to 1.88M yen. ${socialInsuranceText}`
    case IncomeZone.TAX_FREE_REVIEW:
      return `Income tax still stays zero, but tax-dependent treatment may already be affected. ${socialInsuranceText}`
    case IncomeZone.TAXABLE:
      return `Income tax applies above 1.6M yen, and dependent treatment also needs review. ${socialInsuranceText}`
  }
}

function generateAdvice(annualIncome: number, age: number, studentType: StudentType): string[] {
  const advice: string[] = []

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    advice.push("Tax dependent range is still within 1.23M yen.")
  } else if (isSpecialTaxDependent(age) && annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_MAX) {
    advice.push("Special dependent credit can still apply because age is 19 to 22.")
  } else {
    advice.push("Check year-end adjustment or tax filing for dependent impact.")
  }

  if (isDayStudentExcludedFromShortHoursRule(studentType)) {
    advice.push(`For social dependent status, check the annual income limit of ${annualIncomeToManEnLabel(getSocialInsuranceDependentLimit(age))} man yen.`)
  } else {
    advice.push("For social insurance, also check weekly hours, monthly wage, student status, and employer size.")
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

  let socialInsuranceStatusLabel = "More checks needed"
  let socialInsuranceStatusDescription = "Social insurance depends on work conditions and route after leaving dependent status."

  if (!canRemainSocialInsuranceDependent && shortHoursSocialInsuranceApplies) {
    socialInsuranceStatusLabel = "Likely employee social insurance"
    socialInsuranceStatusDescription = "Dependent income limit is exceeded and the main short-hours conditions are met."
  } else if (!canRemainSocialInsuranceDependent) {
    socialInsuranceStatusLabel = "Likely outside dependent status"
    socialInsuranceStatusDescription = "Dependent income limit is exceeded. Check whether the next route is employee insurance or national insurance."
  } else if (shortHoursSocialInsuranceApplies) {
    socialInsuranceStatusLabel = "Employee coverage may still apply"
    socialInsuranceStatusDescription = "Even inside the annual dependent limit, the short-hours employee rule can still apply."
  } else {
    socialInsuranceStatusLabel = "Dependent status may remain"
    socialInsuranceStatusDescription = "By annual income alone, dependent status may remain. Final confirmation still needs work-condition checks."
  }

  const assumptions = [
    "Salary income only.",
    "Resident tax estimate is income levy only at a standard 10% rate.",
    "Parent resident tax impact is estimated at a standard 10% rate.",
    "Parent income tax impact is estimated with the selected marginal rate.",
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
      assumptions.push("National health insurance uses the entered amount.")
    } else {
      assumptions.push("National health insurance is not included unless entered.")
    }
  } else if (params.socialInsuranceRoute === "employee") {
    assumptions.push("Employee health and pension premiums are not included because insurer-specific rates vary.")
  } else {
    assumptions.push("Insurance route is undecided, so no concrete premium total is added.")
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
