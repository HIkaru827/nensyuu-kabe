import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { BlogListStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BLOG_POSTS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "ブログ | 年収の壁・扶養・社会保険の解説",
  description:
    "年収の壁、扶養、社会保険、学生バイトの税金について詳しく解説する記事一覧です。公開中の記事をすべて一覧できます。",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `ブログ | ${SITE_NAME}`,
    description:
      "103万円・123万円・130万円・160万円・188万円の壁をわかりやすく整理した記事一覧。",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
}

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString))

const getCategory = (slug: string) => {
  if (slug.includes("daigakusei") || slug.includes("koukousei") || slug.includes("gakusei")) {
    return "学生バイト"
  }
  if (slug.includes("fuyo") || slug.includes("123man") || slug.includes("tokutei")) {
    return "扶養"
  }
  if (slug.includes("shakaihoken") || slug.includes("social") || slug.includes("130man")) {
    return "社会保険"
  }
  return "年収の壁"
}

const sortedPosts = [...BLOG_POSTS].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))

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
              学生バイト、扶養、社会保険、親の税金への影響まで、検索されやすいテーマを整理して公開しています。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">記事の選び方</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  まず気になる基準で記事を選び、そのあとシミュレーターで年収や扶養の影響を確認する流れがおすすめです。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">読み方のコツ</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  本人の税金、親の扶養、社会保険は別基準です。どの基準の話かを分けて読むと判断しやすくなります。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 pt-5">
                <h2 className="text-sm font-bold text-foreground">最新の確認</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  公開日だけでなく更新日も表示しています。制度変更の影響があるテーマから優先して読めます。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="cursor-pointer transition-colors hover:border-primary">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded bg-primary/10 px-2 py-1 text-primary">{getCategory(post.slug)}</span>
                      <span className="rounded bg-green-100 px-2 py-1 font-semibold text-green-700">
                        {post.publishedAt === post.updatedAt ? "新着" : "更新"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.updatedAt)}
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
