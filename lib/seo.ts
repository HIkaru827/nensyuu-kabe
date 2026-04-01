export const SITE_URL = "https://nenshuu-kabe.com"
export const SITE_NAME = "年収の壁シミュレーター"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/site-share-card.svg`

export const DEFAULT_KEYWORDS = [
  "年収の壁",
  "103万円の壁",
  "106万円の壁",
  "130万円の壁",
  "160万円の壁",
  "扶養",
  "特定親族特別控除",
  "社会保険",
  "学生バイト",
  "年収シミュレーター",
]

export const BLOG_POSTS = [
  {
    slug: "103man-no-kabe",
    title: "160万円の壁とは？103万円からどう変わったかを解説",
    description:
      "103万円の壁が160万円に変わった背景、所得税の基準、扶養や社会保険への影響をわかりやすく整理。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.9,
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？働き損を避ける考え方",
    description:
      "130万円を超えたときの社会保険料、手取りの変化、シフト調整と年収アップの判断軸を解説。",
    publishedAt: "2026-01-18T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金対策 160万円・123万円・188万円の基準を解説",
    description:
      "学生アルバイト向けに、所得税160万円ライン、扶養判定123万円目安、19〜22歳の188万円基準を整理。",
    publishedAt: "2026-01-29T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.85,
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは？19歳から22歳の新ルールを解説",
    description:
      "19歳から22歳の子どもがいる家庭向けに、特定親族特別控除の対象条件と年収ごとの影響を解説。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.8,
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは？106万円・130万円の違いを整理",
    description:
      "106万円と130万円の社会保険の壁の違い、扶養判定、手取りへの影響を初心者向けに解説。",
    publishedAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-04-02T00:00:00Z",
    priority: 0.8,
  },
] as const

export const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-04-02T00:00:00Z" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-01-18T00:00:00Z" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-04-02T00:00:00Z" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-01-18T00:00:00Z" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-03-08T00:00:00Z" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2026-03-08T00:00:00Z" },
] as const
