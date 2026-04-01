/**
 * 厳格運用向け 年収シミュレーター
 *
 * 2026-04-02 時点で確認した公的情報に基づき、
 * 法令上断定できる範囲だけを表示します。
 *
 * 注意:
 * - 住民税額・社会保険料額は自治体や勤務先条件で変わるため、厳密な金額表示は行いません
 * - 短時間労働者の社会保険加入は、年収だけでは断定できません
 * - 最終判断は税務署・自治体・勤務先・保険者で確認してください
 */

export type StudentType = "day" | "night" | "none"

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

export const INCOME_THRESHOLDS = {
  RESIDENT_TAX_START: 1_100_000,
  INCOME_TAX_START: 1_600_000,
  DEPENDENT_FULL: 1_230_000,
  SPECIAL_DEPENDENT_MAX: 1_880_000,
  SOCIAL_INSURANCE_LIMIT_DEFAULT: 1_300_000,
  SOCIAL_INSURANCE_LIMIT_AGE_19_TO_22: 1_500_000,
  SHORT_HOURS_REFERENCE: 1_060_000,
} as const

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
      return { label: "比較的安全", color: "green" }
    case IncomeZone.SAFE_RESIDENT:
      return { label: "住民税要確認", color: "yellow" }
    case IncomeZone.DEPENDENT_FULL:
      return { label: "税法上の扶養判定内", color: "green" }
    case IncomeZone.SPECIAL_DEPENDENT:
      return { label: "特定親族特別控除の確認が必要", color: "yellow" }
    case IncomeZone.TAX_FREE_REVIEW:
      return { label: "社会保険・扶養の確認が必要", color: "yellow" }
    case IncomeZone.TAXABLE:
      return { label: "所得税・扶養の見直しが必要", color: "red" }
  }
}

function generateHeadline(annualIncome: number, age: number): string {
  const incomeManEn = Math.floor(annualIncome / 10_000)
  const socialLimitManEn = Math.floor(getSocialInsuranceDependentLimit(age) / 10_000)

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    return `年収${incomeManEn}万円 - 所得税は160万円まで発生せず、税法上の扶養判定は123万円が目安です`
  }

  if (annualIncome <= socialLimitManEn * 10_000) {
    return `年収${incomeManEn}万円 - 税法と社会保険で基準が異なるため、条件の切り分けが必要です`
  }

  if (annualIncome <= INCOME_THRESHOLDS.INCOME_TAX_START) {
    return `年収${incomeManEn}万円 - 所得税はまだ発生しませんが、扶養や社会保険は要確認です`
  }

  return `年収${incomeManEn}万円 - 所得税が発生し、扶養や社会保険の見直しが必要です`
}

function generateDescription(zone: IncomeZone, annualIncome: number, age: number, studentType: StudentType): string {
  const socialLimit = getSocialInsuranceDependentLimit(age)
  const socialLimitManEn = Math.floor(socialLimit / 10_000)
  const shortHoursExcluded = isDayStudentExcludedFromShortHoursRule(studentType)
  const specialDependent = isSpecialTaxDependent(age)

  const socialInsuranceText = shortHoursExcluded
    ? `昼間学生は短時間労働者の適用拡大の対象外が原則ですが、被扶養者認定の年間収入要件は ${socialLimitManEn}万円未満が目安です。`
    : `社会保険は年収だけでは判定できません。被扶養者認定の年間収入要件は ${socialLimitManEn}万円未満が目安ですが、週20時間以上・月額8.8万円以上・勤務先規模などを満たすと、106万円相当でも加入対象になる場合があります。`

  const baseNotice =
    "※ 本結果は 2026年4月2日時点で確認した公的情報に基づく整理です。住民税・社会保険は自治体、勤務先、保険者の条件で変わるため、最終判断は必ず公的機関や勤務先で確認してください。"

  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return `この年収帯では、所得税は発生せず、住民税もかからない自治体が多い水準です。親の税法上の扶養判定も満たしやすい範囲です。${socialInsuranceText}\n\n${baseNotice}`
    case IncomeZone.SAFE_RESIDENT:
      return `所得税は発生しませんが、住民税は自治体によって発生する場合があります。親の税法上の扶養判定は引き続き満たしやすい範囲です。${socialInsuranceText}\n\n${baseNotice}`
    case IncomeZone.DEPENDENT_FULL:
      return `所得税は160万円まで発生しません。税法上の扶養控除等の判定は給与収入123万円以下が目安です。${socialInsuranceText}\n\n${baseNotice}`
    case IncomeZone.SPECIAL_DEPENDENT:
      return `年齢が19歳以上23歳未満の場合、税法上は123万円超でも特定親族特別控除の段階適用対象になり得ます。${socialInsuranceText}\n\n${baseNotice}`
    case IncomeZone.TAX_FREE_REVIEW:
      return `所得税は160万円まで発生しませんが、税法上の扶養判定はすでに外れている可能性があります。${specialDependent ? "19歳以上23歳未満なら、188万円以下で特定親族特別控除の対象になり得ます。" : ""}${socialInsuranceText}\n\n${baseNotice}`
    case IncomeZone.TAXABLE:
      return `160万円を超えると所得税が発生します。税法上の扶養判定や社会保険の扱いも見直しが必要です。${specialDependent ? "19歳以上23歳未満でも、188万円超では特定親族特別控除の対象外です。" : ""}${socialInsuranceText}\n\n${baseNotice}`
  }
}

function generateAdvice(annualIncome: number, age: number, studentType: StudentType): string[] {
  const advice: string[] = []
  const socialLimit = getSocialInsuranceDependentLimit(age)
  const shortHoursExcluded = isDayStudentExcludedFromShortHoursRule(studentType)
  const specialDependent = isSpecialTaxDependent(age)

  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    advice.push("税法上の扶養判定は給与収入123万円以下が基本の目安です")
  } else if (specialDependent && annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_MAX) {
    advice.push("19歳以上23歳未満なら、123万円超でも188万円以下は特定親族特別控除の対象になり得ます")
  } else {
    advice.push("税法上の扶養判定は外れている可能性が高いため、親の年末調整や確定申告への影響を確認してください")
  }

  if (shortHoursExcluded) {
    advice.push(`社会保険の被扶養者認定は年収${Math.floor(socialLimit / 10_000)}万円未満が目安です`)
  } else {
    advice.push("社会保険は年収だけでは判定できません。週20時間、月額8.8万円、勤務先規模も必ず確認してください")
  }

  return advice
}

export function simulateIncome(params: SimulationParams): SimulationResult {
  const { annualIncome, age, studentType } = params
  const zone = determineZone(annualIncome, age)
  const { label, color } = getZoneInfo(zone)
  const headline = generateHeadline(annualIncome, age)
  const description = generateDescription(zone, annualIncome, age, studentType)
  const advice = generateAdvice(annualIncome, age, studentType)

  return {
    zone,
    label,
    headline,
    description,
    color,
    estimatedSelfLoss: undefined,
    selfBurdenBreakdown: undefined,
    estimatedParentLoss: undefined,
    advice,
  }
}
