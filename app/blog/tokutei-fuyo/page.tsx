import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "特定扶養親族とは？19〜22歳の昼間学生が知るべき優遇措置 | 年収の壁シミュレーター",
  description: "19〜22歳の大学生・専門学生は「特定扶養親族」として、150万円まで親の控除が維持される可能性があります。",
}

export default function TokuteiFuyoPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            特定扶養親族とは？19〜22歳の昼間学生が知るべき優遇措置
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">学生向け</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">19〜22歳の昼間学生は優遇されている！</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  特定扶養親族に該当すると、親の控除額が通常より大きく、150万円程度までは親の税負担への影響が軽微です。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-0">特定扶養親族とは</h2>
            <p className="text-muted-foreground leading-relaxed">
              特定扶養親族とは、<strong>その年の12月31日時点で19歳以上23歳未満</strong>の扶養親族のことです。大学生や専門学生が該当することが多く、通常の扶養親族よりも親の控除額が大きくなります。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">通常の扶養親族との違い</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">区分</th>
                    <th className="border border-border px-4 py-2 text-left">年齢</th>
                    <th className="border border-border px-4 py-2 text-left">所得税の控除額</th>
                    <th className="border border-border px-4 py-2 text-left">住民税の控除額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">一般の扶養親族</td>
                    <td className="border border-border px-4 py-2">16〜18歳、23歳以上</td>
                    <td className="border border-border px-4 py-2">38万円</td>
                    <td className="border border-border px-4 py-2">33万円</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="border border-border px-4 py-2 font-bold">特定扶養親族</td>
                    <td className="border border-border px-4 py-2 font-bold">19〜22歳</td>
                    <td className="border border-border px-4 py-2 font-bold text-emerald-600">63万円</td>
                    <td className="border border-border px-4 py-2 font-bold text-emerald-600">45万円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic">
              特定扶養親族は、通常より25万円（所得税）も控除額が大きい！
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">親の税負担への影響</h2>
            <p className="text-muted-foreground leading-relaxed">
              特定扶養親族の控除を親が受けている場合、子の年収が多少増えても親の税負担への影響は軽微です。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">年収別の親への影響</h3>
            <div className="bg-muted p-4 rounded-lg my-4 space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground">年収103万円以下</p>
                <p className="text-sm text-muted-foreground">→ 親への影響なし ✅</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">年収103万円超〜123万円</p>
                <p className="text-sm text-muted-foreground">→ 親への影響なし ✅（扶養控除満額維持）</p>
              </div>
              <div className="bg-emerald-50 p-2 rounded">
                <p className="text-sm font-semibold text-emerald-900">年収123万円超〜150万円</p>
                <p className="text-sm text-emerald-800">→ <strong>特定扶養控除が維持される見込み</strong> ✅</p>
                <p className="text-xs text-emerald-700 mt-1">※ 親の税負担への影響は軽微</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">年収150万円超〜188万円</p>
                <p className="text-sm text-muted-foreground">→ 親への影響あり ⚠️（段階的に控除が減額）</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">年収188万円超</p>
                <p className="text-sm text-muted-foreground">→ 完全に扶養外 ❌</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">適用条件</h2>
            <p className="text-muted-foreground leading-relaxed">
              特定扶養親族として認定されるには、以下の条件を満たす必要があります：
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>その年の12月31日時点で<strong>19歳以上23歳未満</strong>であること</li>
              <li>親と生計を一にしていること</li>
              <li>年間の合計所得金額が48万円以下（給与収入なら103万円以下）</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">「昼間学生」である必要はない</h3>
            <p className="text-muted-foreground leading-relaxed">
              重要なポイントとして、特定扶養親族の要件に<strong>「学生であること」は含まれていません</strong>。年齢が19〜22歳で、所得要件を満たせば、働いていても特定扶養親族になります。
            </p>
            <p className="text-sm text-muted-foreground italic mt-2">
              ただし、実務上は大学生・専門学生が該当するケースがほとんどです。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">夜間学生・通信制学生は？</h2>
            <p className="text-muted-foreground leading-relaxed">
              夜間学生や通信制の学生でも、19〜22歳であれば特定扶養親族に該当します。ただし、所得要件（年収103万円以下）を満たす必要があります。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">親が受ける税軽減額</h2>
            <p className="text-muted-foreground leading-relaxed">
              親が特定扶養控除を受けることで、親の税金がどれくらい安くなるかを見てみましょう。
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-semibold text-foreground mb-3">親の所得税率が20%の場合</p>
              <p className="text-sm text-foreground">特定扶養控除：63万円</p>
              <p className="text-sm text-foreground">所得税の軽減：63万円 × 20% = 約12.6万円</p>
              <p className="text-sm text-foreground">住民税の軽減：45万円 × 10% = 約4.5万円</p>
              <p className="text-sm font-bold text-foreground mt-2">合計：年間約17万円の税軽減 ✨</p>
            </div>
            <p className="text-sm text-muted-foreground italic">
              親の所得税率によって実際の軽減額は異なります
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>19〜22歳は特定扶養親族として優遇される</li>
              <li>親の控除額が通常より25万円大きい（所得税）</li>
              <li>123万円までは親の控除が満額維持される</li>
              <li>150万円程度までは親への影響が軽微</li>
              <li>学生でなくても年齢要件を満たせば該当</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の税制に基づいた情報です。最終的な判断は税務署でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">特定扶養親族の恩恵を受けられる？</h3>
            <p className="text-sm text-muted-foreground">
              あなたの年収で親への影響をシミュレーション
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
        </div>
      </article>
    </main>
  )
}

