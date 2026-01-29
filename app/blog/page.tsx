import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "ブログ | 年収の壁シミュレーター",
  description: "年収の壁、税金、社会保険について詳しく解説する記事一覧です。2025年改正対応の最新情報を提供。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog",
  },
  openGraph: {
    title: "ブログ | 年収の壁シミュレーター",
    description: "年収の壁、税金、社会保険について詳しく解説する記事一覧です。",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "103man-no-kabe",
    title: "【2025年改正】160万円の壁とは？103万円から変更された新基準",
    description: "2025年税制改正で103万円の壁が160万円に！所得税の発生ラインと親の扶養控除への影響を最新情報で解説。",
    date: "2026年1月18日",
    category: "🆕 2025年改正",
    badge: "✨ わかりやすく改善",
  },
  {
    slug: "130man-no-kabe-v2",
    title: "【超危険】130万円の壁で働き損！手取りが減る理由をわかりやすく解説",
    description: "130万円を超えると年間20万円の社会保険料が発生！なぜ働き損になるのか、具体例とともにわかりやすく解説します。",
    date: "2026年1月29日",
    category: "⚠️ 最重要",
    badge: "🆕 新記事",
  },
  {
    slug: "gakusei-baito-zeikin",
    title: "【2025年最新】学生バイトの税金対策｜勤労学生控除で年収188万円まで！",
    description: "2025年改正で大きく変更！勤労学生控除を使えば年収188万円まで親の扶養維持。申請方法と注意点をわかりやすく解説。",
    date: "2026年1月29日",
    category: "🎓 学生向け",
    badge: "✨ わかりやすく改善",
  },
  {
    slug: "tokutei-fuyo",
    title: "特定扶養親族とは？19〜22歳の昼間学生が知るべき優遇措置",
    description: "19〜22歳の大学生・専門学生は「特定扶養親族」として、150万円まで親の控除が維持される可能性があります。",
    date: "2026年1月18日",
    category: "学生向け",
  },
  {
    slug: "shakaihoken-kabe",
    title: "社会保険の壁を徹底解説｜130万円・106万円の違いとは",
    description: "社会保険の扶養から外れる基準は130万円（または106万円）。それぞれの条件と対策を解説します。",
    date: "2026年1月18日",
    category: "社会保険",
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">ブログ</h1>
            <p className="text-sm text-muted-foreground">
              年収の壁、税金、社会保険について詳しく解説
            </p>
          </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 flex-wrap">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                      {post.category}
                    </span>
                    {"badge" in post && (
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded font-semibold">
                        {post.badge}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors flex items-center justify-between">
                    {post.title}
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← シミュレーターに戻る
          </Link>
        </div>
      </div>
    </main>
    <SiteFooter />
    </>
  )
}

