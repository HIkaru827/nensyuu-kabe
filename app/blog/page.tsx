import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogListStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { BLOG_POSTS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "ブログ | 年収の壁・扶養・社会保険の解説",
  description:
    "年収の壁、扶養、社会保険、学生バイトの税金について詳しく解説する記事一覧です。検索ニーズの高い基準をまとめて確認できます。",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `ブログ | ${SITE_NAME}`,
    description:
      "103万円・130万円・160万円の壁、扶養、社会保険、学生バイトの税金をわかりやすく解説した記事一覧。",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
}

const blogPosts = [
  {
    slug: "4-6gatsu-hatarakisugi",
    title: "4月・5月・6月に働きすぎると9月から高くなる？学生バイトの税金と社会保険の違い",
    description:
      "この話は原則として税金ではなく社会保険料の話です。学生バイトにどこまで当てはまるかを公的資料ベースで整理。",
    date: "2026年4月20日",
    category: "学生バイト",
    badge: "2026年4月追加",
  },
  {
    slug: "student-123man-parent-impact",
    title: "学生が123万円を超えたら親に何が起きる？扶養控除と特定親族特別控除を整理",
    description:
      "学生の給与収入が123万円を超えたときに、親の税金へどんな影響が出るかをケース別に整理。19〜22歳の特例も確認できます。",
    date: "2026年4月15日",
    category: "家計への影響",
    badge: "2026年4月追加",
  },
  {
    slug: "kake-mochi-baito-fuyo",
    title: "掛け持ちバイトで扶養はどう判定する？収入の合算と見落としやすい点",
    description:
      "掛け持ちアルバイトで扶養判定を見るときの収入の合算方法、103万円・123万円・130万円の違い、親への影響を解説。",
    date: "2026年4月15日",
    category: "掛け持ちバイト",
    badge: "2026年4月追加",
  },
  {
    slug: "social-insurance-case-study",
    title: "社会保険の壁をケース別に比較。学生・非学生・19歳以上23歳未満の違い",
    description:
      "106万円、130万円、150万円未満の基準がどう分かれるかを、学生、非学生、19歳以上23歳未満のケース別に整理。",
    date: "2026年4月15日",
    category: "ケース比較",
    badge: "2026年4月追加",
  },
  {
    slug: "daigakusei-baito-fuyo",
    title: "大学生バイトはいくらまで稼げる？親の扶養・税金・社会保険を年収別に解説",
    description:
      "大学生アルバイト向けに、所得税160万円、親の扶養123万円、特定親族特別控除188万円、社会保険の注意点を整理。",
    date: "2026年4月9日",
    category: "学生バイト",
    badge: "2026年4月更新",
  },
  {
    slug: "koukousei-baito-fuyo",
    title: "高校生バイトはいくらまでなら扶養内？103万円・123万円・130万円の違い",
    description:
      "高校生アルバイト向けに、103万円、123万円、130万円、160万円の違いを税金・扶養・社会保険に分けて解説。",
    date: "2026年4月9日",
    category: "高校生バイト",
    badge: "2026年4月更新",
  },
  {
    slug: "gakusei-19-22-fuyo",
    title: "19歳から22歳の学生はいくらまで稼げる？特定親族特別控除と社会保険の注意点",
    description:
      "19歳以上23歳未満の学生向けに、123万円、150万円未満、160万円、188万円の基準を分けて整理。",
    date: "2026年4月9日",
    category: "扶養控除",
    badge: "2026年4月更新",
  },
  {
    slug: "103man-no-kabe",
    title: "160万円の壁とは？103万円からどう変わったかを解説",
    description:
      "103万円の壁が160万円に変わった背景、所得税の基準、親の扶養や社会保険への影響をまとめています。",
    date: "2026年4月2日",
    category: "年収の壁",
    badge: "2026年4月確認",
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？働き損を避ける考え方",
    description:
      "社会保険料が増えるライン、手取りの変化、130万円を超えるか抑えるかの判断軸を整理しています。",
    date: "2026年4月2日",
    category: "社会保険",
    badge: "2026年4月確認",
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金対策 160万円・123万円・188万円の基準を解説",
    description:
      "学生アルバイト向けに、所得税160万円ライン、扶養判定123万円目安、19〜22歳の188万円基準を解説。",
    date: "2026年4月2日",
    category: "学生バイト",
    badge: "学生向け基礎",
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは？19歳から22歳の新ルールを解説",
    description:
      "新設された特定親族特別控除の対象、収入条件、家庭への影響をやさしく整理しています。",
    date: "2026年4月2日",
    category: "扶養控除",
    badge: "2026年4月確認",
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは？106万円・130万円の違いを整理",
    description:
      "106万円と130万円の違い、扶養から外れる条件、手取りの考え方を初心者向けに解説します。",
    date: "2026年4月2日",
    category: "社会保険",
    badge: "社会保険の基礎",
  },
]

export default function BlogPage() {
  return (
    <>
      <BlogListStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "ブログ", url: `${SITE_URL}/blog` },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground">年収の壁・扶養・社会保険のブログ</h1>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              「扶養内で働きたい」「学生バイトはいくらまで稼げるか知りたい」といった検索ニーズに合わせて、
              重要テーマをわかりやすく整理しています。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">記事の作り方</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一次情報で確認できること、年収だけでは断定できないこと、家計で相談したいことを分けて整理しています。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">読み方のコツ</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  まず自分に近いケースの記事を読んでから、最後にシミュレーターで年齢や勤務条件を入れると判断しやすいです。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">更新の見方</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  制度改正の影響がある記事は更新日を明記しています。公開日が古くても更新日が新しいものを優先して読めます。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="cursor-pointer transition-colors hover:border-primary">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded bg-primary/10 px-2 py-1 text-primary">{post.category}</span>
                      <span className="rounded bg-green-100 px-2 py-1 font-semibold text-green-700">{post.badge}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="flex items-center justify-between text-xl transition-colors hover:text-primary">
                      {post.title}
                      <ArrowRight className="h-5 w-5 shrink-0" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="pt-2 text-center text-xs text-muted-foreground">
            公開中の記事数: {BLOG_POSTS.length}
          </div>

          <div className="pt-4 text-center">
            <Link href="/" className="text-sm text-primary hover:underline">
              シミュレーターに戻る
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
