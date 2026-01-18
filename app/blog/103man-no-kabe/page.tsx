import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "103万円の壁とは？学生バイトが知っておくべき基礎知識 | 年収の壁シミュレーター",
  description: "103万円を超えると何が起こる？所得税の発生と親の扶養控除への影響をわかりやすく解説します。",
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
            103万円の壁とは？学生バイトが知っておくべき基礎知識
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">基礎知識</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-0">103万円の壁とは</h2>
            <p className="text-muted-foreground leading-relaxed">
              「103万円の壁」とは、学生やアルバイトをしている人が年収103万円を超えると、所得税が発生するラインのことです。この金額は、給与所得控除（55万円）と基礎控除（48万円）の合計から算出されています。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">なぜ103万円なのか？</h2>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-mono text-foreground mb-2">計算式：</p>
              <p className="text-sm text-foreground">給与所得控除：55万円</p>
              <p className="text-sm text-foreground">基礎控除：48万円</p>
              <p className="text-sm font-bold text-foreground mt-2">合計：103万円</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              年収が103万円以下であれば、この控除によって課税所得が0円となり、所得税がかかりません。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">103万円を超えるとどうなる？</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">1. 本人に所得税が発生</h3>
            <p className="text-muted-foreground leading-relaxed">
              年収が103万円を超えると、超えた分に対して5%の所得税（+復興特別所得税2.1%）がかかります。
            </p>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-semibold text-foreground mb-2">例：年収110万円の場合</p>
              <p className="text-sm text-foreground">（110万円 - 103万円）× 5% × 1.021 = 約3,600円</p>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-6">2. 親の扶養控除が受けられなくなる</h3>
            <p className="text-muted-foreground leading-relaxed">
              年収103万円を超えると、親の扶養控除（38万円）が受けられなくなり、親の税負担が増える可能性があります。ただし、実際には段階的に控除が減額されるため、123万円までは大きな影響はありません。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">103万円と123万円の違い</h2>
            <p className="text-muted-foreground leading-relaxed">
              混同されやすいですが、103万円と123万円は別の基準です：
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li><strong>103万円</strong>：本人の所得税が発生するライン</li>
              <li><strong>123万円</strong>：親の扶養控除が満額で維持される上限</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">勤労学生控除で対策できる</h2>
            <p className="text-muted-foreground leading-relaxed">
              学生の場合、<strong>勤労学生控除（27万円）</strong>を申請すれば、年収130万円まで所得税が0円になります。ただし、この控除を使っても親の扶養控除の判定には影響しないため注意が必要です。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>103万円を超えると本人に所得税が発生</li>
              <li>親の扶養控除は123万円まで満額維持される</li>
              <li>勤労学生控除を使えば130万円まで所得税0円</li>
              <li>実際の影響は少額なので、過度に恐れる必要はない</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の税制に基づいた概算です。最終的な判断は税務署・自治体でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">あなたの年収をシミュレーション</h3>
            <p className="text-sm text-muted-foreground">
              103万円を超えた場合の税金や親への影響を今すぐ確認できます
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

