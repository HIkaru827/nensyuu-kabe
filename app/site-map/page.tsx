import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"

const sections = [
  {
    title: "主要ページ",
    links: [
      { href: "/", label: "トップページ / 年収シミュレーター" },
      { href: "/student-baito", label: "学生バイト向け年収ガイド" },
      { href: "/blog", label: "記事一覧" },
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
  {
    title: "主要記事",
    links: [
      { href: "/blog/103man-no-kabe", label: "160万円の壁とは？" },
      { href: "/blog/130man-no-kabe", label: "130万円の壁とは何か" },
      { href: "/blog/130man-no-kabe-v2", label: "130万円を超えるとどうなるか" },
      { href: "/blog/shakaihoken-kabe", label: "社会保険の壁とは？" },
      { href: "/blog/gakusei-baito-zeikin", label: "学生バイトの税金" },
      { href: "/blog/tokutei-fuyo", label: "特定親族特別控除とは何か" },
    ],
  },
]

export const metadata = {
  title: "サイトマップ | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの主要ページと記事一覧です。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/site-map",
  },
}

export default function SiteMapPage() {
  return (
    <ContentPageShell title="サイトマップ" description="主要ページと記事への導線をまとめています">
      {sections.map((section) => (
        <Card key={section.title}>
          <CardContent className="space-y-4 pt-6">
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
