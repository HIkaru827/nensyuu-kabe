import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "【2025年改正】160万円の壁とは？103万円から変更された新基準を解説 | 年収の壁シミュレーター",
  description: "2025年税制改正で103万円の壁が160万円に！所得税の発生ラインと親の扶養控除への影響を最新情報で解説します。",
}

export default function Blog103ManPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            【2025年改正】160万円の壁とは？103万円から変更された新基準を解説
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">基礎知識</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm font-semibold text-blue-900 mb-2">🆕 2025年税制改正で大きく変更！</p>
              <p className="text-sm text-blue-800">
                2025年3月の税制改正により、所得税が発生するラインが<strong>103万円から160万円に引き上げられました</strong>。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-0">160万円の壁とは（2025年改正版）</h2>
            <p className="text-muted-foreground leading-relaxed">
              2025年の税制改正により、学生やアルバイトをしている人が所得税を払わずに済む年収のラインが<strong>103万円から160万円に引き上げられました</strong>。これは基礎控除と給与所得控除の引き上げによるものです。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">なぜ160万円になったのか？</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">項目</th>
                    <th className="border border-border px-4 py-2 text-left">改正前（〜2024年）</th>
                    <th className="border border-border px-4 py-2 text-left">改正後（2025年〜）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">給与所得控除</td>
                    <td className="border border-border px-4 py-2">55万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-primary">123万円</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">基礎控除</td>
                    <td className="border border-border px-4 py-2">48万円</td>
                    <td className="border border-border px-4 py-2">48万円</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="border border-border px-4 py-2 font-bold">合計</td>
                    <td className="border border-border px-4 py-2">103万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-primary">171万円</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-bold">実質的な壁</td>
                    <td className="border border-border px-4 py-2">103万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-primary">約160万円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic">
              ※ 参照：<a href="https://www.works-hi.co.jp/businesscolumn/103kabe2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ワークスHI「年収の壁」2025最新版</a>
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">160万円を超えるとどうなる？</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">1. 本人に所得税が発生</h3>
            <p className="text-muted-foreground leading-relaxed">
              年収が160万円を超えると、超えた分に対して5%の所得税（+復興特別所得税2.1%）がかかります。
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-semibold text-foreground mb-2">例：年収170万円の場合</p>
              <p className="text-sm text-foreground">（170万円 - 160万円）× 5% × 1.021 = 約5,100円</p>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-6">2. 親の扶養控除への影響</h3>
            <p className="text-muted-foreground leading-relaxed">
              2025年の改正により、扶養控除の基準も変更されました。<strong>188万円まで</strong>は一定の扶養控除が適用される可能性があります。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">改正前後の比較</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">項目</th>
                    <th className="border border-border px-4 py-2 text-left">改正前（〜2024年）</th>
                    <th className="border border-border px-4 py-2 text-left">改正後（2025年〜）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">所得税が発生するライン</td>
                    <td className="border border-border px-4 py-2">103万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-primary">160万円</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">扶養控除が維持される上限</td>
                    <td className="border border-border px-4 py-2">123万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-primary">約188万円</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">社会保険の壁</td>
                    <td className="border border-border px-4 py-2">130万円</td>
                    <td className="border border-border px-4 py-2">130万円（変更なし）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">注意：社会保険の壁は変わらない</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ 重要</p>
              <p className="text-sm text-amber-800">
                所得税の壁は160万円に引き上げられましたが、<strong>社会保険の壁（106万円・130万円）は変更されていません</strong>。社会保険料の負担を避けたい場合は、引き続き130万円以内に抑える必要があります。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li><strong>2025年改正で103万円の壁が160万円に引き上げ</strong></li>
              <li>年収160万円まで所得税が発生しない</li>
              <li>扶養控除の基準も緩和され、約188万円まで適用される可能性</li>
              <li><strong>社会保険の壁（130万円）は変更なし</strong>に注意</li>
              <li>働き控えの必要性が大幅に減少</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の税制改正に基づいた情報です。最終的な判断は税務署・自治体でご確認ください。
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                参考：<a href="https://www.works-hi.co.jp/businesscolumn/103kabe2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ワークスHI「年収の壁」2025最新版</a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">2025年改正対応！年収をシミュレーション</h3>
            <p className="text-sm text-muted-foreground">
              160万円の壁や社会保険の影響を今すぐ確認できます
            </p>
            <Link href="/">
              <Button size="lg" className="w-full md:w-auto">
                無料でシミュレーションする
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="text-center pt-6 space-y-4">
          <Link href="/blog" className="text-primary hover:underline text-sm block">
            ← ブログ一覧に戻る
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-primary text-sm block">
            シミュレーターに戻る
          </Link>
        </div>
      </article>
    </main>
  )
}

