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
    slug: "103man-no-kabe",
    title: "160万円の壁とは？103万円からどう変わったかを解説",
    description:
      "103万円の壁が160万円に変わった背景、所得税の基準、親の扶養や社会保険への影響をまとめています。",
    date: "2026年4月2日",
    category: "年収の壁",
    badge: "最新更新",
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？働き損を避ける考え方",
    description:
      "社会保険料が増えるライン、手取りの変化、130万円を超えるか抑えるかの判断軸を整理しています。",
    date: "2026年4月2日",
    category: "社会保険",
    badge: "最新版",
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金対策 160万円・123万円・188万円の基準を解説",
    description:
      "学生アルバイト向けに、所得税160万円ライン、扶養判定123万円目安、19〜22歳の188万円基準を解説。",
    date: "2026年4月2日",
    category: "学生バイト",
    badge: "人気記事",
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは？19歳から22歳の新ルールを解説",
    description:
      "新設された特定親族特別控除の対象、収入条件、家庭への影響をやさしく整理しています。",
    date: "2026年4月2日",
    category: "扶養控除",
    badge: "新記事",
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは？106万円・130万円の違いを整理",
    description:
      "106万円と130万円の違い、扶養から外れる条件、手取りの考え方を初心者向けに解説します。",
    date: "2026年4月2日",
    category: "社会保険",
    badge: "基礎知識",
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
