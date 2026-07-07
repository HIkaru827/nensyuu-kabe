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
  if (slug.includes("yukyu")) {
    return "有給"
  }
  if (
    slug.includes("money") ||
    slug.includes("phone") ||
    slug.includes("skill") ||
    slug.includes("living")
  ) {
    return "生活・お金"
  }
  if (slug.includes("shakaihoken") || slug.includes("social") || slug.includes("130man") || slug.includes("weekly")) {
    return "社会保険"
  }
  if (slug.includes("fuyo") || slug.includes("123man") || slug.includes("tokutei") || slug.includes("zeikin")) {
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

const sortedPosts = [...BLOG_POSTS].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))

const categorySummaries = [
  { id: "income-wall", label: "年収の壁", description: "まず年収ラインの全体像を確認する" },
  { id: "tax-dependent", label: "扶養・税金", description: "親の扶養と本人の税金を分けて見る" },
  { id: "social-insurance", label: "社会保険", description: "130万円、週20時間、加入条件を見る" },
  { id: "paid-leave", label: "有給", description: "有給日数と有給日の給料を確認する" },
  { id: "student-life", label: "生活・お金", description: "スマホ代、給与口座、学習、生活費を見直す" },
] as const

function getCategoryId(slug: string): (typeof categorySummaries)[number]["id"] {
  const category = getCategory(slug)

  if (category === "扶養・税金" || category === "学生バイト") return "tax-dependent"
  if (category === "社会保険") return "social-insurance"
  if (category === "有給") return "paid-leave"
  if (category === "生活・お金") return "student-life"
  return "income-wall"
}

const featuredPosts = [
  "2026-student-income-wall",
  "student-baito-shift-checklist",
  "baito-yukyu-kyuryo",
]
  .map((slug) => sortedPosts.find((post) => post.slug === slug))
  .filter((post): post is (typeof sortedPosts)[number] => Boolean(post))

const groupedPosts = categorySummaries
  .map((category) => ({
    ...category,
    posts: sortedPosts.filter((post) => getCategoryId(post.slug) === category.id),
  }))
  .filter((category) => category.posts.length > 0)

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
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground">学生バイトのお金ブログ</h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              年収の壁、親の扶養、社会保険、有給、税金について、学生バイト向けに整理しています。
            </p>
          </div>

          <section className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">最初に読むなら</p>
              <h2 className="text-2xl font-bold text-foreground">迷いやすい順番で読む</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} aria-label={`${post.title}を読む`}>
                  <Card className="h-full transition-colors hover:border-primary hover:bg-muted/30">
                    <CardContent className="flex h-full flex-col gap-3 p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary">
                          {getCategory(post.slug)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.updatedAt)}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-foreground">{post.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        読む
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <nav
            aria-label="記事カテゴリ"
            className="sticky top-14 z-20 -mx-4 border-y border-border bg-background/95 px-4 py-3 backdrop-blur md:static md:mx-0 md:rounded-md md:border"
          >
            <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {groupedPosts.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="min-w-[132px] rounded-md border border-border bg-background px-3 py-2 text-left transition-colors hover:border-primary hover:bg-muted/40"
                >
                  <span className="block text-sm font-bold text-foreground">{category.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{category.posts.length}本</span>
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-8">
            {groupedPosts.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-28 space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <h2 className="text-2xl font-bold text-foreground">{category.label}</h2>
                    <span className="text-xs font-semibold text-muted-foreground">{category.posts.length}本</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-4">
                  {category.posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} aria-label={`${post.title}を読む`}>
                      <Card className="cursor-pointer transition-colors hover:border-primary hover:bg-muted/30">
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
                          <CardTitle className="flex items-center justify-between gap-4 text-lg leading-snug transition-colors hover:text-primary md:text-xl">
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
              </section>
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
