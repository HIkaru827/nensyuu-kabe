import { BAITO_REALITY_BLOG_POSTS } from "./baito-reality"

export const SITE_URL = "https://nenshuu-kabe.com"
export const SITE_NAME = "学生バイトお金ナビ"
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
  "高校生 バイト 扶養",
  "学生 バイト 診断",
  "飲食 バイト 仕事内容",
  "アパレル バイト 仕事内容",
  "バイト 有給 シミュレーター",
  "年収の壁 シミュレーター",
]

export const STUDENT_BAITO_PAGE = {
  path: "/student-baito",
  title: "学生バイトはいくらまで稼げる？扶養・税金・社会保険の年収ガイド",
  description:
    "学生バイト向けに、119万円・130万円・136万円・150万円未満・178万円・197万円の年収ラインと、親の扶養・税金・社会保険への影響を整理します。",
  keywords: [
    "学生バイト いくらまで",
    "学生バイト 扶養",
    "大学生 バイト 扶養 いくらまで",
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
    title: "2026年の学生バイト年収の壁｜119万・130万・136万・150万・178万・197万円を整理",
    description:
      "令和8年分以後の所得税改正を反映し、学生バイトが見るべき住民税、親の扶養、社会保険、本人の所得税、特定親族特別控除の年収ラインを整理します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.94,
  },
  {
    slug: "student-baito-shift-checklist",
    title: "学生バイトのシフト調整チェックリスト｜年末までに見る給与・扶養・有給",
    description:
      "学生バイト向けに、年収見込み、掛け持ち、有給、親への共有、社会保険の確認を月別チェックリストで整理します。",
    publishedAt: "2026-07-06T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
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
    title: "4月・5月・6月に働きすぎると9月から高くなる？学生バイトの税金と社会保険",
    description:
      "4月から6月の働き方が社会保険料にどう関係するか、学生バイト向けに整理します。",
    publishedAt: "2026-04-20T00:00:00Z",
    updatedAt: "2026-04-20T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "student-123man-parent-impact",
    title: "学生が136万円を超えたら親に何が起きる？扶養控除と特定親族特別控除",
    description:
      "学生の給与収入が136万円を超えたとき、親の税金へどんな影響が出るかをケース別に整理します。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "kake-mochi-baito-fuyo",
    title: "掛け持ちバイトの扶養判定はどう見る？収入の合算と注意点",
    description:
      "複数のアルバイトをしている学生向けに、収入の合算方法と136万円・178万円・130万円の違いを解説します。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "social-insurance-case-study",
    title: "社会保険の壁をケース別に比較｜学生・非学生・19歳以上23歳未満の違い",
    description:
      "106万円、130万円、150万円未満の基準がどう分かれるかを学生バイト向けに整理します。",
    publishedAt: "2026-04-15T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "daigakusei-baito-fuyo",
    title: "大学生バイトはいくらまで稼げる？親の扶養・税金・社会保険を年収別に解説",
    description:
      "大学生アルバイト向けに、所得税、親の扶養、特定親族特別控除、社会保険の注意点を整理します。",
    publishedAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "koukousei-baito-fuyo",
    title: "高校生バイトはいくらまでなら扶養内？103万円・130万円・136万円の違い",
    description:
      "高校生アルバイト向けに、税金、扶養、社会保険の年収ラインをわかりやすく整理します。",
    publishedAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "gakusei-19-22-fuyo",
    title: "19歳から22歳の学生はいくらまで稼げる？特定親族特別控除と社会保険",
    description:
      "19歳以上23歳未満の学生向けに、136万円・150万円未満・178万円・197万円の基準を整理します。",
    publishedAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.88,
  },
  {
    slug: "103man-no-kabe",
    title: "178万円の壁とは？103万円・160万円から何が変わったかを解説",
    description:
      "103万円の壁、160万円の壁から178万円の壁へ変わった背景と、所得税・扶養・社会保険への影響を整理します。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "130man-no-kabe",
    title: "130万円の壁とは？社会保険の扶養を外れる目安を解説",
    description:
      "130万円の壁の基本、扶養を外れた場合の手取り変化、シフト調整の考え方を解説します。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？損しにくい働き方の考え方",
    description:
      "130万円を超えたときの社会保険料、手取りの変化、シフト調整と年収アップの判断軸を解説します。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金対策｜178万円・136万円・197万円の基準を解説",
    description:
      "学生アルバイト向けに、所得税178万円ライン、扶養判定136万円、19〜22歳の197万円基準を整理します。",
    publishedAt: "2026-01-29T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは？19歳から22歳の新ルールを解説",
    description:
      "19歳以上23歳未満の子どもがいる家庭向けに、136万円超〜197万円の特定親族特別控除と年収ごとの影響を解説します。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.8,
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは？106万円・130万円の違いを整理",
    description:
      "106万円と130万円の社会保険の壁の違い、扶養判定、手取りへの影響を学生バイト向けに解説します。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-07-06T00:00:00Z",
    priority: 0.8,
  },
] as const

export const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: STUDENT_BAITO_PAGE.path, priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: PAID_LEAVE_PAGE.path, priority: 0.95, changeFrequency: "weekly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: BAITO_TYPE_DIAGNOSIS_PAGE.path, priority: 0.94, changeFrequency: "weekly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: "/editorial-policy", priority: 0.65, changeFrequency: "monthly" as const, lastModified: "2026-05-27T00:00:00Z" },
  { path: "/site-map", priority: 0.65, changeFrequency: "monthly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: "/updates", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-07-12T00:00:00Z" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-07-06T00:00:00Z" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-07-06T00:00:00Z" },
] as const
