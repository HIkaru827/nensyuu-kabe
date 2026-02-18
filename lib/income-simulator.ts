/**
 * 学生向け 年収の壁シミュレーター
 * 2025年度税制をもとにした概算ロジック
 * 
 * 注意：
 * - すべての計算は概算です
 * - 法的断定は行いません
 * - 最終判断は税務署・自治体でご確認ください
 */

// ===== 型定義 =====

/**
 * 学生タイプ
 */
export type StudentType = "day" | "night" | "none";

/**
 * 親の所得レベル
 */
export type ParentIncomeLevel = "low" | "middle" | "high";

/**
 * 年収ゾーン区分
 */
export enum IncomeZone {
  SAFE_LOW = "SAFE_LOW",           // 〜100万円
  SAFE_RESIDENT = "SAFE_RESIDENT", // 100〜110万円
  SAFE_TAX = "SAFE_TAX",           // 110〜130万円
  DANGER_SOCIAL = "DANGER_SOCIAL", // 130〜160万円
  ADJUST_ZONE = "ADJUST_ZONE",     // 160〜188万円
  INDEPENDENT = "INDEPENDENT",     // 188万円以上
}

/**
 * シミュレーション入力パラメータ
 */
export interface SimulationParams {
  annualIncome: number;                    // 年収（円）
  age: number;                             // 年齢
  studentType: StudentType;                // 学生区分
  parentIncomeLevel?: ParentIncomeLevel;   // 親の所得レベル（デフォルト: middle）
}

/**
 * 社会保険料の内訳
 */
export interface SocialInsuranceBreakdown {
  healthInsurance: number;      // 健康保険料（円）
  pensionInsurance: number;     // 厚生年金保険料（円）
  employmentInsurance: number;  // 雇用保険料（円）
  nursingInsurance: number;     // 介護保険料（円・40歳以上のみ）
  total: number;                // 社会保険料合計（円）
}

/**
 * 本人の負担内訳
 */
export interface SelfBurdenBreakdown {
  incomeTax: number;                           // 所得税（円）
  residentTax: number;                         // 住民税（円）
  socialInsurance: number;                     // 社会保険料合計（円）
  socialInsuranceBreakdown?: SocialInsuranceBreakdown; // 社会保険料の内訳
  total: number;                               // 合計（円）
}

/**
 * シミュレーション結果
 */
export interface SimulationResult {
  zone: IncomeZone;                 // 年収ゾーン
  label: string;                    // UI表示用ラベル
  headline: string;                 // 見出し
  description: string;              // 説明文
  color: "green" | "yellow" | "red"; // 色区分
  estimatedSelfLoss?: number;       // 本人の手取り減（円・概算）
  selfBurdenBreakdown?: SelfBurdenBreakdown; // 本人の負担内訳
  estimatedParentLoss?: number;     // 親の手取り減（円・概算）
  advice: string[];                 // 行動提案
}

// ===== 定数定義（2025年度税制改正対応・概算） =====

/**
 * 年収の壁（円）
 * 
 * 【2025年3月税制改正の主な変更点】
 * - 所得税の壁：103万円 → 160万円
 * - 給与所得控除：55万円 → 123万円
 * - 扶養控除の基準：123万円 → 188万円
 * - 社会保険の壁（106万円・130万円）：変更なし
 */
export const INCOME_THRESHOLDS = {
  /** 住民税が発生し始める目安 */
  RESIDENT_TAX_START: 1_100_000,
  
  /** 所得税が発生し始める目安（2025年改正：旧103万円→新160万円） */
  INCOME_TAX_START: 1_600_000,
  
  /** 親の扶養控除が満額で維持される上限（2025年改正：旧123万円→新188万円） */
  DEPENDENT_FULL: 1_880_000,
  
  /** 特定扶養親族（19〜22歳・昼間学生）の実質安全圏（2025年改正） */
  SPECIAL_DEPENDENT_SAFE: 2_010_000,
  
  /** 社会保険の被扶養者上限目安（変更なし） */
  SOCIAL_INSURANCE_LIMIT: 1_300_000,
  
  /** 社会保険料を払っても手取りが増え始めるライン */
  FULL_TAX_START: 1_600_000,
  
  /** 完全に扶養外 */
  FULLY_INDEPENDENT: 2_010_000,
} as const;

/**
 * ゾーン境界値（2025年税制改正対応）
 */
const ZONE_BOUNDARIES = {
  SAFE_LOW_MAX: 1_000_000,        // 〜100万円：完全安全
  SAFE_RESIDENT_MAX: 1_100_000,   // 〜110万円：住民税のみ
  SAFE_TAX_MAX: 1_300_000,        // 〜130万円：所得税なし（改正後）、社会保険の壁
  DANGER_SOCIAL_MAX: 1_600_000,   // 〜160万円：社会保険料発生、働き損ゾーン
  ADJUST_ZONE_MAX: 2_010_000,     // 〜201万円：扶養から外れつつある（改正後）
} as const;

/**
 * 特定扶養親族の年齢範囲
 */
const SPECIAL_DEPENDENT_AGE = {
  MIN: 19,
  MAX: 22,
} as const;

/**
 * 親の損失概算（円）
 * 親の所得レベルに応じた概算値
 */
const PARENT_LOSS_ESTIMATES = {
  low: {
    partial: 30_000,      // 部分的な控除減
    full: 100_000,        // 完全な控除喪失
  },
  middle: {
    partial: 50_000,
    full: 180_000,
  },
  high: {
    partial: 80_000,
    full: 250_000,
  },
} as const;

/**
 * 本人の負担概算（円）
 */
const SELF_BURDEN_ESTIMATES = {
  /** 住民税・所得税の軽微な負担 */
  LIGHT_TAX: 20_000,
  
  /** 社会保険料が加わる負担 */
  WITH_SOCIAL_INSURANCE: 200_000,
  
  /** フル課税時の負担 */
  FULL_BURDEN: 350_000,
} as const;

// ===== ヘルパー関数 =====

/**
 * 年収からゾーンを判定
 */
function determineZone(annualIncome: number): IncomeZone {
  if (annualIncome <= ZONE_BOUNDARIES.SAFE_LOW_MAX) {
    return IncomeZone.SAFE_LOW;
  }
  if (annualIncome <= ZONE_BOUNDARIES.SAFE_RESIDENT_MAX) {
    return IncomeZone.SAFE_RESIDENT;
  }
  if (annualIncome <= ZONE_BOUNDARIES.SAFE_TAX_MAX) {
    return IncomeZone.SAFE_TAX;
  }
  if (annualIncome <= ZONE_BOUNDARIES.DANGER_SOCIAL_MAX) {
    return IncomeZone.DANGER_SOCIAL;
  }
  if (annualIncome <= ZONE_BOUNDARIES.ADJUST_ZONE_MAX) {
    return IncomeZone.ADJUST_ZONE;
  }
  return IncomeZone.INDEPENDENT;
}

/**
 * 特定扶養親族（19〜22歳の昼間学生）かどうかを判定
 */
function isSpecialDependent(age: number, studentType: StudentType): boolean {
  return (
    age >= SPECIAL_DEPENDENT_AGE.MIN &&
    age <= SPECIAL_DEPENDENT_AGE.MAX &&
    studentType === "day"
  );
}

/**
 * 親への影響を計算（概算）
 */
function calculateParentLoss(
  annualIncome: number,
  age: number,
  studentType: StudentType,
  parentIncomeLevel: ParentIncomeLevel
): number | undefined {
  const special = isSpecialDependent(age, studentType);
  const estimates = PARENT_LOSS_ESTIMATES[parentIncomeLevel];

  // 重要：188万円以下は特定扶養でも通常扶養でも親の控除満額維持（2025年改正）
  if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
    return undefined; // 親への影響なし（完全セーフ）
  }

  // 特定扶養親族（19〜22歳・昼間学生）の場合
  if (special) {
    // 188万円超〜201万円：特定扶養控除は維持される
    if (annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_SAFE) {
      // この範囲では特定扶養控除（63万円 or 45万円）が維持される
      return undefined; // 実質的に影響なし
    }
    // 201万円超：段階的に控除が減る
    if (annualIncome <= INCOME_THRESHOLDS.FULLY_INDEPENDENT + 500_000) {
      return estimates.partial;
    }
    // それ以上：完全に扶養外
    return estimates.full;
  }

  // 通常の扶養親族の場合（夜間学生・フリーター等）
  // 188万円超〜201万円：段階的に控除が減る
  if (annualIncome <= INCOME_THRESHOLDS.SPECIAL_DEPENDENT_SAFE) {
    return estimates.partial;
  }
  // それ以上：完全に扶養外
  return estimates.full;
}

/**
 * 本人の負担を計算（概算）
 */
function calculateSelfBurden(annualIncome: number, zone: IncomeZone): number | undefined {
  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return undefined; // 負担なし
    case IncomeZone.SAFE_RESIDENT:
    case IncomeZone.SAFE_TAX:
      return SELF_BURDEN_ESTIMATES.LIGHT_TAX;
    case IncomeZone.DANGER_SOCIAL:
      return SELF_BURDEN_ESTIMATES.WITH_SOCIAL_INSURANCE;
    case IncomeZone.ADJUST_ZONE:
    case IncomeZone.INDEPENDENT:
      return SELF_BURDEN_ESTIMATES.FULL_BURDEN;
  }
}

/**
 * 社会保険料の内訳を計算（概算）
 * 
 * @param annualIncome - 年収（円）
 * @param age - 年齢
 * @returns 社会保険料の内訳（130万円以下の場合は undefined）
 */
function calculateSocialInsuranceBreakdown(annualIncome: number, age: number): SocialInsuranceBreakdown | undefined {
  // 130万円以下は社会保険料が発生しない
  if (annualIncome <= 1_300_000) {
    return undefined;
  }

  // 標準報酬月額を概算（月収ベース）
  const monthlyIncome = annualIncome / 12;

  // 健康保険料：約10%（本人負担は約5%）
  // 協会けんぽの全国平均を仮定
  const healthInsuranceRate = 0.05; // 本人負担分
  const healthInsurance = Math.round(annualIncome * healthInsuranceRate);

  // 厚生年金保険料：18.3%（本人負担は9.15%）
  const pensionInsuranceRate = 0.0915; // 本人負担分
  const pensionInsurance = Math.round(annualIncome * pensionInsuranceRate);

  // 雇用保険料：0.6%（本人負担）
  const employmentInsuranceRate = 0.006;
  const employmentInsurance = Math.round(annualIncome * employmentInsuranceRate);

  // 介護保険料：40歳以上のみ、約1.8%（本人負担は約0.9%）
  let nursingInsurance = 0;
  if (age >= 40) {
    const nursingInsuranceRate = 0.009; // 本人負担分
    nursingInsurance = Math.round(annualIncome * nursingInsuranceRate);
  }

  const total = healthInsurance + pensionInsurance + employmentInsurance + nursingInsurance;

  return {
    healthInsurance,
    pensionInsurance,
    employmentInsurance,
    nursingInsurance,
    total,
  };
}

/**
 * 本人の負担内訳を計算（概算・2025年度税制改正対応）
 */
function calculateSelfBurdenBreakdown(annualIncome: number, age: number): SelfBurdenBreakdown | undefined {
  // 年収100万円以下は負担なし
  if (annualIncome <= 1_000_000) {
    return undefined;
  }

  // 給与所得控除（2025年改正：55万円 → 123万円）
  const SALARY_DEDUCTION = 1_230_000;
  const income = annualIncome - SALARY_DEDUCTION;

  let incomeTax = 0;
  let residentTax = 0;
  let socialInsurance = 0;
  let socialInsuranceBreakdown: SocialInsuranceBreakdown | undefined = undefined;

  // 所得税の計算（基礎控除48万円）
  const INCOME_TAX_BASIC_DEDUCTION = 480_000;
  const taxableIncomeForIncomeTax = Math.max(0, income - INCOME_TAX_BASIC_DEDUCTION);
  if (taxableIncomeForIncomeTax > 0) {
    // 所得税率5% + 復興特別所得税2.1%
    incomeTax = Math.round(taxableIncomeForIncomeTax * 0.05 * 1.021);
  }

  // 住民税の計算（基礎控除43万円、所得割10% + 均等割5,000円）
  const RESIDENT_TAX_BASIC_DEDUCTION = 430_000;
  const RESIDENT_TAX_FLAT_RATE = 5_000; // 均等割（自治体により異なる）
  const taxableIncomeForResidentTax = Math.max(0, income - RESIDENT_TAX_BASIC_DEDUCTION);
  if (annualIncome > 1_000_000) {
    // 所得割（10%）
    const residentTaxIncome = Math.round(taxableIncomeForResidentTax * 0.10);
    // 均等割は年収100万円超で発生（自治体により異なる）
    residentTax = residentTaxIncome + RESIDENT_TAX_FLAT_RATE;
  }

  // 社会保険料の計算（130万円超で発生）
  if (annualIncome > 1_300_000) {
    socialInsuranceBreakdown = calculateSocialInsuranceBreakdown(annualIncome, age);
    if (socialInsuranceBreakdown) {
      socialInsurance = socialInsuranceBreakdown.total;
    }
  }

  const total = incomeTax + residentTax + socialInsurance;

  // すべて0円なら undefined を返す
  if (total === 0) {
    return undefined;
  }

  return {
    incomeTax,
    residentTax,
    socialInsurance,
    socialInsuranceBreakdown,
    total,
  };
}

/**
 * ゾーンに応じた基本情報を取得
 */
function getZoneInfo(zone: IncomeZone): {
  label: string;
  color: "green" | "yellow" | "red";
} {
  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return { label: "安全", color: "green" };
    case IncomeZone.SAFE_RESIDENT:
      return { label: "ほぼ安全", color: "green" };
    case IncomeZone.SAFE_TAX:
      return { label: "注意", color: "yellow" };
    case IncomeZone.DANGER_SOCIAL:
      return { label: "危険", color: "red" };
    case IncomeZone.ADJUST_ZONE:
      return { label: "要調整", color: "yellow" };
    case IncomeZone.INDEPENDENT:
      return { label: "自立", color: "green" };
  }
}

/**
 * ゾーンに応じた見出しを生成
 */
function generateHeadline(annualIncome: number, zone: IncomeZone): string {
  const incomeManEn = Math.floor(annualIncome / 10_000);
  
  switch (zone) {
    case IncomeZone.SAFE_LOW:
      return `年収${incomeManEn}万円 - 税金・社会保険の心配はほぼありません`;
    case IncomeZone.SAFE_RESIDENT:
      return `年収${incomeManEn}万円 - 住民税が発生し始める可能性があります`;
    case IncomeZone.SAFE_TAX:
      return `年収${incomeManEn}万円 - 扶養内ですが税負担が発生します`;
    case IncomeZone.DANGER_SOCIAL:
      return `年収${incomeManEn}万円 - 働き損になる可能性があります（危険ゾーン）`;
    case IncomeZone.ADJUST_ZONE:
      return `年収${incomeManEn}万円 - 扶養を外れつつあります`;
    case IncomeZone.INDEPENDENT:
      return `年収${incomeManEn}万円 - 完全に独立した収入です`;
  }
}

/**
 * ゾーンに応じた説明文を生成
 */
function generateDescription(
  zone: IncomeZone,
  age: number,
  studentType: StudentType,
  parentLoss?: number
): string {
  const baseNotice = "※ 本結果は2025年度税制改正（103万円→160万円）をもとにした概算です。最終的な判断は自治体・税務署等でご確認ください。";
  const special = isSpecialDependent(age, studentType);

  let main = "";

  switch (zone) {
    case IncomeZone.SAFE_LOW:
      main = "この年収帯では、住民税・所得税ともに課税されない可能性が高く、親の扶養控除も満額で維持されます。親の税金への影響は一切ありません。";
      break;
    case IncomeZone.SAFE_RESIDENT:
      main = "住民税が発生し始める可能性がありますが、所得税は160万円まで発生しません（2025年改正）。親の扶養控除は満額で維持されます（188万円まで）。";
      if (special) {
        main += "あなたは特定扶養親族（19〜22歳の昼間学生）に該当するため、親の控除額は一般の扶養親族より大きくなります。";
      }
      break;
    case IncomeZone.SAFE_TAX:
      if (special) {
        main = "2025年税制改正により、160万円まで所得税は発生しません。あなたは特定扶養親族（19〜22歳の昼間学生）に該当するため、201万円までは特定扶養控除が維持される見込みです。";
        main += "ただし、130万円を超えると社会保険の扶養から外れる可能性があります（社会保険の壁は改正されていません）。";
      } else {
        main = "2025年税制改正により160万円まで所得税は発生しませんが、130万円を超えると社会保険の扶養から外れる可能性があります。188万円までは親の扶養控除が維持されます。";
      }
      if (parentLoss) {
        main += `親の税負担が年間約${Math.floor(parentLoss / 10_000)}万円増える見込みです。`;
      }
      break;
    case IncomeZone.DANGER_SOCIAL:
      main = "このゾーンは「働き損」になる可能性が最も高い危険な範囲です。社会保険料（年間約20万円）が発生し、手取りが大きく減ります。";
      if (parentLoss) {
        main += `さらに親の税負担も年間約${Math.floor(parentLoss / 10_000)}万円増える可能性があります。`;
      } else if (special) {
        main += "特定扶養親族のため親の控除は維持されていますが、社会保険の負担があなたにかかります。";
      }
      main += "130万円以下に抑えるか、160万円以上を目指すことを強く推奨します。";
      break;
    case IncomeZone.ADJUST_ZONE:
      main = "完全に扶養を外れる手前のゾーンです。所得税も160万円超から発生し始めます（2025年改正）。社会保険料や税金の負担が本格化します。";
      if (parentLoss) {
        main += `親の扶養控除も失われつつあり、親の税負担が年間約${Math.floor(parentLoss / 10_000)}万円増える可能性があります。`;
      } else if (special) {
        main += "特定扶養親族のため201万円までは親の控除が維持されますが、それ以降は親への影響も出始めます。";
      } else {
        main += "188万円を超えると親の扶養控除が段階的に減っていきます。";
      }
      break;
    case IncomeZone.INDEPENDENT:
      main = "完全に扶養を外れた収入レベルです。社会保険料・税金を全額負担しますが、手取りも増えていきます。";
      if (parentLoss) {
        main += `親の扶養控除は完全に失われ、親の税負担が年間約${Math.floor(parentLoss / 10_000)}万円増える可能性があります。`;
      }
      break;
  }

  return `${main}\n\n${baseNotice}`;
}

/**
 * アドバイスを生成
 */
function generateAdvice(
  zone: IncomeZone,
  annualIncome: number,
  age: number,
  studentType: StudentType
): string[] {
  const advice: string[] = [];
  const special = isSpecialDependent(age, studentType);

  switch (zone) {
    case IncomeZone.SAFE_LOW:
      advice.push("このまま安心して働けます");
      advice.push("親の扶養控除も満額で維持されています");
      break;
    case IncomeZone.SAFE_RESIDENT:
      advice.push("2025年改正で160万円まで所得税は発生しません");
      advice.push("親の扶養控除も満額維持（188万円まで）・親目線でも完全セーフ");
      break;
    case IncomeZone.SAFE_TAX:
      if (special) {
        if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
          // 188万円以下
          advice.push("親の扶養控除は満額維持（改正で188万円まで拡大）");
          advice.push("所得税も160万円まで発生しません（2025年改正）");
        } else {
          // 188万円超〜201万円
          advice.push("特定扶養控除は201万円まで維持できる見込みです");
          advice.push("ただし130万円超は社会保険の扶養から外れます");
        }
      } else {
        if (annualIncome <= INCOME_THRESHOLDS.DEPENDENT_FULL) {
          // 188万円以下
          advice.push("親の扶養控除は満額維持（改正で188万円まで拡大）");
          advice.push("所得税も160万円まで発生しません（2025年改正）");
        } else {
          // 188万円超〜130万円
          advice.push("188万円を超えると親の扶養控除が段階的に減ります");
          advice.push("130万円を超えると社会保険の扶養から外れます");
        }
      }
      break;
    case IncomeZone.DANGER_SOCIAL:
      advice.push("可能であればシフトを減らして130万円以内に収めましょう");
      advice.push("もしくは思い切って160万円以上を目指すことを検討してください");
      break;
    case IncomeZone.ADJUST_ZONE:
      advice.push("188万円以上稼げば手取りは安定して増えていきます");
      advice.push("中途半端な収入より、しっかり働くか抑えるか判断しましょう");
      break;
    case IncomeZone.INDEPENDENT:
      advice.push("完全に独立した収入です。将来のキャリアを見据えて計画的に働きましょう");
      break;
  }

  return advice.slice(0, 2); // 最大2つまで
}

// ===== メイン関数 =====

/**
 * 年収シミュレーションを実行
 * 
 * @param params - シミュレーションパラメータ
 * @returns シミュレーション結果
 */
export function simulateIncome(params: SimulationParams): SimulationResult {
  const {
    annualIncome,
    age,
    studentType,
    parentIncomeLevel = "middle",
  } = params;

  // ゾーン判定
  const zone = determineZone(annualIncome);

  // 親への影響計算
  const estimatedParentLoss = calculateParentLoss(
    annualIncome,
    age,
    studentType,
    parentIncomeLevel
  );

  // 本人の負担計算
  const estimatedSelfLoss = calculateSelfBurden(annualIncome, zone);
  
  // 本人の負担内訳計算
  const selfBurdenBreakdown = calculateSelfBurdenBreakdown(annualIncome, age);

  // 基本情報取得
  const { label, color } = getZoneInfo(zone);

  // 見出し・説明文生成
  const headline = generateHeadline(annualIncome, zone);
  const description = generateDescription(zone, age, studentType, estimatedParentLoss);

  // アドバイス生成
  const advice = generateAdvice(zone, annualIncome, age, studentType);

  return {
    zone,
    label,
    headline,
    description,
    color,
    estimatedSelfLoss,
    selfBurdenBreakdown,
    estimatedParentLoss,
    advice,
  };
}

