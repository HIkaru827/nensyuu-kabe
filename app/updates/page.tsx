import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"

export const metadata = {
  title: "更新履歴 | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの更新履歴ページです。制度改正や記事追加の履歴を確認できます。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/updates",
  },
}

const updates = [
  {
    date: "2026年4月15日",
    title: "AdSense審査向けに信頼性ページと独自記事を追加",
    items: [
      "トップページにサイトの目的、更新方針、おすすめ記事導線を追加",
      "運営者情報に編集方針、更新体制、読者への約束を追加",
      "学生が123万円を超えた場合、掛け持ちバイト、社会保険ケース比較の記事を追加",
    ],
  },
  {
    date: "2026年4月9日",
    title: "学生向け主要記事を拡充",
    items: [
      "大学生、高校生、19歳から22歳向けの記事を公開",
      "学生バイト向け年収ガイドを公開",
    ],
  },
  {
    date: "2026年4月2日",
    title: "2026年春時点の制度に合わせて主要ページを更新",
    items: [
      "社会保険、扶養、所得税まわりの説明を見直し",
      "一次情報リンクと更新日の明示を開始",
    ],
  },
]

export default function UpdatesPage() {
  const recrawlTargets = [
    { path: "/", purpose: "トップページの完成度と導線の改善を反映" },
    { path: "/about", purpose: "運営者情報、編集方針、更新体制の追加を反映" },
    { path: "/updates", purpose: "更新履歴ページの新設を反映" },
    { path: "/student-baito", purpose: "確認日と参照元の明示を反映" },
    { path: "/blog", purpose: "記事一覧と新規記事導線の追加を反映" },
    { path: "/blog/student-123man-parent-impact", purpose: "独自ケース記事の追加を反映" },
    { path: "/blog/kake-mochi-baito-fuyo", purpose: "掛け持ちバイト記事の追加を反映" },
    { path: "/blog/social-insurance-case-study", purpose: "ケース比較記事の追加を反映" },
  ]

  return (
    <ContentPageShell
      title="更新履歴"
      description="制度改正、記事追加、シミュレーターの改善履歴を公開しています"
    >
      <Card>
        <CardContent className="space-y-4 pt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            当サイトでは、制度改正や一次情報の更新を確認したタイミングで、シミュレーターや記事の内容を見直しています。
            ここでは主な更新履歴を公開し、情報の鮮度を確認しやすくしています。
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-foreground">再クロールを優先したいページ</h2>
            <p className="text-sm text-muted-foreground">
              Search Consoleで更新を伝えるなら、まず次のページから優先すると変化が伝わりやすいです。
            </p>
          </div>
          <div className="space-y-3">
            {recrawlTargets.map((target) => (
              <div key={target.path} className="rounded-lg border border-border px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{target.path}</p>
                <p className="mt-1 text-sm text-muted-foreground">{target.purpose}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {updates.map((update) => (
        <Card key={update.date}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">{update.date}</p>
              <h2 className="text-lg font-bold text-foreground">{update.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
              {update.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </ContentPageShell>
  )
}
