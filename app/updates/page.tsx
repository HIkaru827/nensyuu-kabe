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
    date: "2026年7月12日",
    title: "学生バイトタイプ診断と職種別ガイドを追加",
    items: [
      "6問で自分に合いそうなバイトを確認できる学生バイトタイプ診断を追加",
      "飲食、カフェ、アパレル、コンビニ、スーパー、塾講師、倉庫、イベント、コールセンター、事務の職種別ガイドを追加",
      "トップページ、ブログ一覧、学生バイト年収ガイド、サイトマップから診断と職種別ガイドへ移動できるように変更",
    ],
  },
  {
    date: "2026年7月7日",
    title: "学生バイト向けのお金管理・通信費・学習・生活費記事を追加",
    items: [
      "給与口座・学生カードの整え方の記事を追加",
      "スマホ代を下げる見直し方の記事を追加",
      "資格・学習で時給を上げる考え方の記事を追加",
      "一人暮らしの固定費を見直す記事を追加",
      "学生バイト向けカテゴリカードの内部リンクを専用記事へ変更",
    ],
  },
  {
    date: "2026年7月6日",
    title: "学生バイト向けに2026年ルールと記事を拡充",
    items: [
      "令和8年分以後の所得税改正に合わせて、178万円・136万円・197万円の説明を更新",
      "学生バイトの年収ライン、シフト調整、週20時間の社会保険、有給の給料方式の記事を追加",
      "学生バイト年収ガイドとサイトマップの導線を更新",
    ],
  },
  {
    date: "2026年4月15日",
    title: "運営情報と解説記事を拡充",
    items: [
      "トップページにサイトの目的、更新方針、おすすめ記事導線を追加",
      "運営者情報に編集方針、更新体制、読者への約束を追加",
      "学生の扶養、掛け持ちバイト、社会保険ケース比較の記事を追加",
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
  const recentHighlights = [
    { path: "/", purpose: "トップページの案内と導線を見直しました" },
    { path: "/about", purpose: "運営者情報、編集方針、更新体制を追記しました" },
    { path: "/updates", purpose: "更新履歴ページを新設しました" },
    { path: "/student-baito", purpose: "学生バイト向けの年収ラインと関連記事導線を更新しました" },
    { path: "/baito-type-diagnosis", purpose: "自分に合いそうなバイトと職種別ガイドを確認できる診断ページを追加しました" },
    { path: "/blog", purpose: "記事一覧と新規記事への導線を整理しました" },
    { path: "/blog/baito-reality-restaurant", purpose: "飲食バイトの職種別ガイドを追加しました" },
    { path: "/blog/baito-reality-apparel", purpose: "アパレルバイトの職種別ガイドを追加しました" },
    { path: "/blog/student-money-management", purpose: "給与口座・学生カード・使いすぎ防止の記事を追加しました" },
    { path: "/blog/student-phone-bill", purpose: "スマホ代と格安スマホの注意点の記事を追加しました" },
    { path: "/blog/student-skill-up-baito", purpose: "資格・学習で時給を上げる考え方の記事を追加しました" },
    { path: "/blog/student-living-costs", purpose: "一人暮らしの固定費とサブスク整理の記事を追加しました" },
    { path: "/blog/2026-student-income-wall", purpose: "2026年の学生バイト年収ラインを整理した記事を追加しました" },
    { path: "/blog/student-123man-parent-impact", purpose: "親への影響を令和8年分以後の基準で整理しました" },
    { path: "/blog/kake-mochi-baito-fuyo", purpose: "掛け持ちバイト向けの記事を追加しました" },
    { path: "/blog/social-insurance-case-study", purpose: "ケース比較の記事を追加しました" },
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
            <h2 className="text-lg font-bold text-foreground">最近大きく更新したページ</h2>
            <p className="text-sm text-muted-foreground">
              直近で内容の見直しや追加が大きかったページをまとめています。どこが変わったかを先に確認したいときに使えます。
            </p>
          </div>
          <div className="space-y-3">
            {recentHighlights.map((target) => (
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
