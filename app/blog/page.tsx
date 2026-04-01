import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "ブログ | 年収の壁シミュレーター",
  description:
    "年収の壁、扶養控除、特定親族特別控除、社会保険の判定について、国税庁と日本年金機構の公的情報に沿って整理した記事一覧です。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog",
  },
  openGraph: {
    title: "ブログ | 年収の壁シミュレーター",
    description:
      "年収の壁、扶養控除、特定親族特別控除、社会保険の判定について、国税庁と日本年金機構の公的情報に沿って整理した記事一覧です。",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "103man-no-kabe",
    title: "160万円の壁とは何か。所得税・扶養・社会保険の違い",
    description:
      "160万円は本人の所得税の基準です。123万円、188万円、社会保険の判定と分けて確認するための整理記事です。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
  {
    slug: "130man-no-kabe",
    title: "130万円の壁とは何か。社会保険の扶養判定を現行ルールで整理",
    description:
      "130万円の壁は主に社会保険の被扶養者認定の話です。106万円との違いや19歳以上23歳未満の150万円未満要件も整理しています。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
  {
    slug: "130man-no-kabe-v2",
    title: "130万円を超えるとどうなるか。被扶養者認定と勤務先加入を分けて確認",
    description:
      "130万円を超えた後に確認すべき論点を、被扶養者認定と勤務先での加入条件に分けて説明しています。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "学生バイトの税金。160万円・123万円・社会保険を分けて確認",
    description:
      "学生アルバイトで見るべき税金と扶養の基準を、160万円、123万円、188万円、社会保険に分けて整理しています。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
  {
    slug: "tokutei-fuyo",
    title: "特定親族特別控除とは何か。19歳以上23歳未満の新ルールを整理",
    description:
      "19歳以上23歳未満の子の給与収入が123万円を超えたときに、親が受けられる段階的な控除を整理しています。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁とは何か。130万円・106万円・150万円未満の関係を整理",
    description:
      "社会保険の壁を、被扶養者認定と短時間労働者の加入要件に分けて、現行ルールで整理した記事です。",
    date: "2026年4月2日",
    category: "現行法対応",
    badge: "更新済み",
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-foreground">ブログ</h1>
            <p className="text-sm text-muted-foreground">
              年収の壁、扶養控除、社会保険の判定を、公的資料ベースで整理した記事一覧です。
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

          <div className="pt-6 text-center">
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
