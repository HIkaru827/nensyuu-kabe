import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"
import { BAITO_REALITY_ARTICLES } from "@/lib/baito-reality"
import { BLOG_POSTS, createPageMetadata } from "@/lib/seo"

const sections = [
  {
    title: "主要ページ",
    links: [
      { href: "/", label: "年収の壁シミュレーター" },
      { href: "/paid-leave", label: "バイト有給シミュレーター" },
      { href: "/student-baito", label: "大学生の年収の壁・親の扶養ガイド" },
      { href: "/baito-type-diagnosis", label: "学生バイトタイプ診断" },
      { href: "/blog", label: "ブログ一覧" },
      { href: "/calculation-method", label: "計算方法" },
    ],
  },
  {
    title: "職種別バイトガイド",
    links: BAITO_REALITY_ARTICLES.map((article) => ({
      href: `/blog/${article.slug}`,
      label: article.jobName,
    })),
  },
  {
    title: "制度・生活の記事",
    links: BLOG_POSTS
      .filter((post) => !post.slug.startsWith("baito-reality-"))
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .map((post) => ({
        href: `/blog/${post.slug}`,
        label: post.title,
      })),
  },
  {
    title: "運営情報",
    links: [
      { href: "/about", label: "運営者情報" },
      { href: "/calculation-method", label: "計算方法" },
      { href: "/editorial-policy", label: "編集方針" },
      { href: "/updates", label: "更新履歴" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy-policy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
    ],
  },
]

export const metadata = createPageMetadata({
  path: "/site-map",
  title: "サイトマップ",
  description: "学生バイトお金ナビの主要ページと記事一覧です。",
})

export default function SiteMapPage() {
  return (
    <ContentPageShell title="サイトマップ" description="主要ページと記事へのリンクをまとめています。">
      {sections.map((section) => (
        <Card key={section.title}>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </ContentPageShell>
  )
}
