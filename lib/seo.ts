import type { Metadata } from "next"
import { BAITO_REALITY_BLOG_POSTS } from "./baito-reality"

export const SITE_URL = "https://nenshuu-kabe.com"
export const SITE_NAME = "学生バイトお金ナビ"
export const ADSENSE_CLIENT_ID = "ca-pub-2931164651880564"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/site-share-card.png`

export const DEFAULT_KEYWORDS = [
  "学生バイト",
  "学生 バイト 扶養",
  "学生 バイト 有給",
  "年収の壁",
  "103万円の壁",
  "106万円の壁",
  "130万円の壁",
  "178万円の壁",
  "親の扶養",
  "特定親族特別控除",
  "社会保険",
  "大学生 バイト 扶養",
  "大学生 年収の壁",
  "大学生 扶養",
  "高校生 バイト 扶養",
  "学生 バイト 診断",
  "飲食 バイト 仕事内容",
  "アパレル バイト 仕事内容",
  "バイト 有給 シミュレーター",
  "年収の壁 シミュレーター",
  "今年 あといくら稼げる",
  "扶養 あといくら",
  "年収 見込み 計算",
]

export const STUDENT_BAITO_PAGE = {
  path: "/student-baito",
  title: "大学生の年収の壁はいくら？親の扶養・税金を2026年基準で解説",
  description:
    "大学生はいくらまでなら親の扶養内か、2026年の年収の壁を解説。130万円未満・136万円・150万円未満・159万円・178万円・197万円を税金と社会保険に分けて確認できます。",
  keywords: [
    "大学生 年収の壁",
    "大学生 扶養",
    "大学生 親の扶養",
    "大学生 バイト 年収の壁",
    "学生バイト いくらまで",
    "学生バイト 扶養",
    "大学生 バイト 扶養 いくらまで",
    "大学生 130万円",
    "大学生 150万円",
    "大学生 159万円",
    "高校生 バイト 扶養",
    "学生 130万円の壁",
    "学生 178万円の壁",
    "学生 特定親族特別控除",
  ],
} as const

export const PAID_LEAVE_PAGE = {
  path: "/paid-leave",
  title: "バイト有給シミュレーター｜学生バイトの付与日数・有給日の給料目安",
  description:
    "学生バイト向けに、入社日・契約上の所定労働日数・出勤率から有給の付与見込み、次の付与日、通常賃金・平均賃金・標準報酬日額による給料目安をシミュレーションできます。",
  keywords: [
    "バイト 有給 シミュレーター",
    "学生バイト 有給",
    "アルバイト 有給 何日",
    "有給 給料 何割",
    "有給 平均賃金",
    "週3 バイト 有給",
    "パート 有給 比例付与",
    "有給 時給換算",
  ],
} as const

export const BAITO_TYPE_DIAGNOSIS_PAGE = {
  path: "/baito-type-diagnosis",
  title: "学生バイトタイプ診断｜向いてるバイトを6問でチェック",
  description:
    "学生バイト向けに、接客、作業型、高時給、扶養内、雰囲気重視などのタイプから自分に合いそうなバイトを6問で確認できます。",
  keywords: [
    "学生 バイト 診断",
    "学生バイト診断",
    "大学生 バイト 向いてる",
    "高校生 バイト 向いてる",
    "自分に合う バイト",
    "バイト 適性診断",
    "飲食 バイト 仕事内容",
    "アパレル バイト 仕事内容",
  ],
} as const

export const BLOG_POSTS = [
  ...BAITO_REALITY_BLOG_POSTS,
  {
    slug: "student-money-management",
    title: "学生バイトの給与口座・学生カードの整え方｜給料管理と使いすぎ防止",
    description:
      "学生バイト向けに、給与口座、生活費管理、学生カード、リボ払い・延滞・口座売買の注意点を公式情報ベースで整理します。",
    publishedAt: "2026-07-07T00:00:00Z",
    updatedAt: "2026-07-07T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "student-phone-bill",
    title: "学生バイトのスマホ代を下げる見直し方｜料金プラン・格安スマホの注意点",
    description:
      "学生バイト向けに、スマホ代を下げるための料金プラン確認、データ使用量、格安スマホ・SIMの注意点、契約トラブル時の相談先を整理します。",
    publishedAt: "2026-07-07T00:00:00Z",
    updatedAt: "2026-07-07T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "student-skill-up-baito",
    title: "学生バイトの資格・学習で時給を上げる考え方｜塾講師・事務・IT系の選び方",
    description:
      "学生バイト向けに、塾講師、事務、IT系などへつなげる学習・資格の選び方、求人比較、実質時給の見方を公式情報ベースで整理します。",
    publishedAt: "2026-07-07T00:00:00Z",
    updatedAt: "2026-07-07T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "student-living-costs",
    title: "学生バイトの一人暮らし固定費の見直し方｜家計簿・引っ越し・サブスク整理",
    description:
      "学生バイト向けに、一人暮らしの家賃、通信費、光熱費、サブスク、引っ越し費用を見直す順番と契約トラブルの注意点を整理します。",
    publishedAt: "2026-07-07T00:00:00Z",
    updatedAt: "2026-07-07T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "2026-student-income-wall",
    title: "2026年の学生バイト年収の壁｜119万・130万・136万・150万・159万・178万・197万円",
    description:
      "令和8年分以後の所得税改正を反映し、学生バイトが見るべき119万円・130万円・136万円・150万円未満・159万円・178万円・197万円の違いを整理します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.94,
  },
  {
    slug: "student-baito-shift-checklist",
    title: "学生バイトのシフト調整チェックリスト｜年末までに見る給与・扶養・有給",
    description:
      "学生バイト向けに、年収見込み、掛け持ち、有給、親への共有、社会保険の確認を月別チェックリストで整理します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "weekly-20hours-social-insurance",
    title: "週20時間・月8.8万円で学生バイトは社会保険に入る？学生区分と例外を整理",
    description:
      "社会保険の短時間労働者要件を、週20時間、月額8.8万円、学生でないこと、企業規模、昼間学生と夜間・通信制の違いに分けて解説します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "baito-yukyu-kyuryo",
    title: "バイト有給の給料はいくら？通常賃金・平均賃金・標準報酬日額を学生向けに解説",
    description:
      "アルバイトの有給休暇で支払われる賃金が、通常賃金、平均賃金、標準報酬日額のどの方式で決まるかを学生バイト向けに整理します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "4-6gatsu-hatarakisugi",
    title: "4月・5月・6月に働きすぎると9月から高くなる？学生バイトの税金と社会保険の違い",
    description:
      "「4月から6月に働きすぎると9月から高くなる」という話は、原則として税金ではなく社会保険料の話です。学生バイトにどこまで当てはまるかを、公的資料に基づいて整理します。",
    publishedAt: "2026-04-20T00:00:00Z",
    updatedAt: "2026-04-20T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "student-123man-parent-impact",
    title: "学生が136万円を超えたら親に何が起きる？扶養控除と特定親族特別控除を整理",
    description:
      "学生の給与収入が136万円を超えたときの親への影響を、19歳以上23歳未満の159万円以下の満額控除と197万円までの段階控除に分けて整理します。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "kake-mochi-baito-fuyo",
    title: "掛け持ちバイトで扶養はどう判定する？収入の合算と見落としやすい点",
    description:
      "掛け持ちバイトで扶養判定を見るときの収入の合算方法と、103万円・130万円・136万円・178万円の違いを整理します。源泉徴収票が複数ある場合の見方もまとめています。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "social-insurance-case-study",
    title: "社会保険の壁をケース別に比較。学生・非学生・19歳以上23歳未満の違い",
    description:
      "106万円、130万円、150万円未満の基準がどう分かれるかを、学生、非学生、19歳以上23歳未満のケース別に整理します。どこで判断が分かれるかをまとめた記事です。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "koukousei-baito-fuyo",
    title: "高校生バイトはいくらまでなら扶養内？103万円・130万円・136万円の違い",
    description:
      "高校生アルバイトが扶養内で働くときに確認したい、103万円、130万円、136万円、178万円の違いを、本人の税金・親の扶養控除・社会保険に分けて整理します。",
    publishedAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "gakusei-19-22-fuyo",
    title: "19歳から22歳の学生はいくらまで稼げる？150万・159万・197万円の違い",
    description:
      "19歳から22歳の学生がアルバイトでいくらまで稼げるかを、健康保険150万円未満、親の所得税の控除が満額となる159万円、段階控除の上限197万円に分けて整理します。",
    publishedAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "103man-no-kabe",
    title: "178万円の壁とは？現行ルールでわかる所得税・扶養・社会保険の違い",
    description:
      "178万円の壁の意味を、所得税、税法上の扶養、社会保険を分けて整理します。令和8年分以後の現行ルールに沿って確認できる範囲だけを解説しています。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円を超えるとどうなるか。被扶養者認定と勤務先加入を分けて確認",
    description:
      "130万円を超えたときに何が起きるかを、被扶養者認定と勤務先での社会保険加入に分けて整理します。106万円だけでは判定できない点、学生や19歳以上23歳未満の扱いも現行ルールで説明します。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金。178万円・136万円・159万円・社会保険を確認",
    description:
      "学生アルバイトの税金と扶養判定を、178万円、136万円、19歳以上23歳未満の159万円・197万円、社会保険のルールに分けて整理します。",
    publishedAt: "2026-01-29T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは何か。19歳以上23歳未満の新ルールを整理",
    description:
      "特定親族特別控除は、19歳以上23歳未満の子の給与収入が159万円以下なら親の所得税の控除が満額、159万円超から197万円以下では段階的に減る制度です。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z",
    priority: 0.8,
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは？130万円・106万円・150万円未満の関係を現行ルールで整理",
    description:
      "社会保険の壁を、被扶養者認定、短時間労働者への適用、19歳以上23歳未満の150万円未満要件に分けて整理します。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.8,
  },
] as const

export const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-07-30T00:00:00Z" },
  { path: STUDENT_BAITO_PAGE.path, priority: 0.98, changeFrequency: "weekly" as const, lastModified: "2026-07-30T00:00:00Z" },
  { path: PAID_LEAVE_PAGE.path, priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: BAITO_TYPE_DIAGNOSIS_PAGE.path, priority: 0.94, changeFrequency: "weekly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-07-25T00:00:00Z" },
  { path: "/calculation-method", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-07-30T00:00:00Z" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-07-29T00:00:00Z" },
  { path: "/editorial-policy", priority: 0.65, changeFrequency: "monthly" as const, lastModified: "2026-05-27T00:00:00Z" },
  { path: "/site-map", priority: 0.65, changeFrequency: "monthly" as const, lastModified: "2026-07-29T00:00:00Z" },
  { path: "/updates", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-07-30T00:00:00Z" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-07-25T00:00:00Z" },
] as const

export function getBlogPostCategory(slug: string): string {
  if (slug.includes("baito-reality")) return "職種別ガイド"
  if (slug.includes("yukyu")) return "有給"
  if (
    slug.includes("money") ||
    slug.includes("phone") ||
    slug.includes("skill") ||
    slug.includes("living")
  ) {
    return "生活・お金"
  }
  if (
    slug.includes("shakaihoken") ||
    slug.includes("social") ||
    slug.includes("130man") ||
    slug.includes("weekly")
  ) {
    return "社会保険"
  }
  if (
    slug.includes("fuyo") ||
    slug.includes("123man") ||
    slug.includes("tokutei") ||
    slug.includes("zeikin")
  ) {
    return "扶養・税金"
  }
  if (
    slug.includes("daigakusei") ||
    slug.includes("koukousei") ||
    slug.includes("gakusei") ||
    slug.includes("student") ||
    slug.includes("baito")
  ) {
    return "学生バイト"
  }
  return "年収の壁"
}

export function createBlogPostMetadata(slug: string): Metadata {
  const post = BLOG_POSTS.find((candidate) => candidate.slug === slug)

  if (!post) {
    throw new Error(`BLOG_POSTSに記事が登録されていません: ${slug}`)
  }

  const url = `${SITE_URL}/blog/${post.slug}`
  const category = getBlogPostCategory(post.slug)

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: `${SITE_NAME}編集部`, url: `${SITE_URL}/about` }],
    creator: `${SITE_NAME}編集部`,
    publisher: SITE_NAME,
    category,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url,
      siteName: SITE_NAME,
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: category,
      authors: [`${SITE_URL}/about`],
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: post.title,
        },
      ],
    },
  }
}

export function createPageMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: title,
        },
      ],
    },
  }
}
