import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

const sections = [
  {
    title: "主要ページ",
    links: [
      { href: "/", label: "年収の壁シミュレーター" },
      { href: "/paid-leave", label: "バイト有給シミュレーター" },
      { href: "/student-baito", label: "学生バイト年収ガイド" },
      { href: "/blog", label: "ブログ一覧" },
    ],
  },
  {
    title: "人気記事",
    links: [
      { href: "/blog/2026-student-income-wall", label: "2026年の学生バイト年収の壁" },
      { href: "/blog/student-baito-shift-checklist", label: "学生バイトのシフト調整チェックリスト" },
      { href: "/blog/103man-no-kabe", label: "178万円の壁とは？" },
      { href: "/blog/130man-no-kabe", label: "130万円の壁とは？" },
      { href: "/blog/shakaihoken-kabe", label: "社会保険の壁とは？" },
      { href: "/blog/gakusei-baito-zeikin", label: "学生バイトの税金対策" },
      { href: "/blog/weekly-20hours-social-insurance", label: "週20時間と学生バイトの社会保険" },
      { href: "/blog/baito-yukyu-kyuryo", label: "バイト有給の給料はいくら？" },
      { href: "/blog/tokutei-fuyo", label: "特定親族特別控除とは？" },
    ],
  },
  {
    title: "運営情報",
    links: [
      { href: "/about", label: "運営者情報" },
      { href: "/editorial-policy", label: "編集方針" },
      { href: "/updates", label: "更新履歴" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy-policy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
    ],
  },
]

export const metadata = {
  title: `サイトマップ | ${SITE_NAME}`,
  description: "学生バイトお金ナビの主要ページと記事一覧です。",
  alternates: {
    canonical: `${SITE_URL}/site-map`,
  },
}

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
