import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { BlogListStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BLOG_POSTS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "ブログ | 学生バイトの扶養・税金・社会保険の解説",
  description:
    "学生バイトの年収の壁、親の扶養、社会保険、有給、税金について解説した記事一覧です。",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `ブログ | ${SITE_NAME}`,
    description: "学生バイトの年収の壁、扶養、社会保険、有給、税金を整理した記事一覧です。",
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
            <h1 className="text-3xl font-bold text-foreground">学生バイトのお金ブログ</h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              年収の壁、親の扶養、社会保険、有給、税金について、学生バイト向けに整理しています。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-sm font-bold text-foreground">迷ったら年収ラインから</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  123万円、130万円、160万円、188万円のどれに近いかを見ると読みたい記事を選びやすくなります。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-sm font-bold text-foreground">税金と社保は別ルール</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の扶養、本人の所得税、社会保険の扶養は基準が違います。記事ごとに分けて確認できます。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-sm font-bold text-foreground">シミュレーターと併用</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  記事で全体像をつかみ、年収の壁シミュレーターや有給シミュレーターで自分のケースを確認しましょう。
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
                      <span className="rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary">
                        {getCategory(post.slug)}
                      </span>
                      <span className="rounded-md bg-muted px-2 py-1 font-semibold text-muted-foreground">
                        {post.publishedAt === post.updatedAt ? "公開" : "更新"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.updatedAt)}
                      </span>
                    </div>
                    <CardTitle className="flex items-center justify-between gap-4 text-xl transition-colors hover:text-primary">
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
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
