import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { 
  TldrBox, 
  GoodCaseBox, 
  BadCaseBox, 
  TipBox,
  TargetAudienceBox,
  ComparisonTable,
  StepByStep,
  QaSection 
} from "@/components/blog-components"

export const metadata = {
  title: "【2025年改正】160万円の壁とは？103万円から変更された新基準を解説",
  description: "2025年税制改正で103万円の壁が160万円に！所得税の発生ラインと親の扶養控除への影響を最新情報で解説します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/103man-no-kabe",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-01-18T00:00:00Z",
    modifiedTime: "2026-01-18T00:00:00Z",
    authors: ["年収の壁シミュレーター"],
    tags: ["年収の壁", "103万円の壁", "160万円の壁", "税制改正", "2025年"],
  },
}

export default function Blog103ManPage() {
  const breadcrumbItems = [
    { name: "ホーム", url: "https://nenshuu-kabe.com" },
    { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
    { name: "【2025年改正】160万円の壁とは？", url: "https://nenshuu-kabe.com/blog/103man-no-kabe" },
  ]

  return (
    <>
      <ArticleStructuredData
        title="【2025年改正】160万円の壁とは？103万円から変更された新基準を解説"
        description="2025年税制改正で103万円の壁が160万円に！所得税の発生ラインと親の扶養控除への影響を最新情報で解説します。"
        datePublished="2026-01-18T00:00:00Z"
        dateModified="2026-01-18T00:00:00Z"
        url="https://nenshuu-kabe.com/blog/103man-no-kabe"
        imageUrl="https://nenshuu-kabe.com/placeholder-logo.png"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            【2025年改正】160万円の壁とは？<br />103万円から変更された新基準を解説
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">✨ 朗報</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">基礎知識</span>
            <span>2026年1月18日</span>
            <span>読了時間：約6分</span>
          </div>
        </div>

        {/* 対象者 */}
        <TargetAudienceBox 
          audiences={[
            "103万円の壁を気にしていた学生・アルバイト",
            "2025年の税制改正について知りたい人",
            "親の扶養に入っている人",
            "シフトを増やせるか知りたい人"
          ]}
        />

        {/* TL;DR */}
        <TldrBox>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>103万円の壁が160万円に引き上げ！</strong>（2025年改正）</li>
            <li><strong>年収160万円まで所得税が発生しない</strong></li>
            <li><strong>扶養控除の基準も緩和</strong>：約188万円まで適用可能</li>
            <li>⚠️ ただし社会保険の壁（130万円）は変更なし</li>
          </ul>
        </TldrBox>

        <Card>
          <CardContent className="pt-6 space-y-8">
            {/* セクション1：160万円の壁とは */}
            <section className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">🆕 2025年税制改正で大きく変更！</p>
                <p className="text-sm text-blue-800">
                  2025年3月の税制改正により、所得税が発生するラインが<strong>103万円から160万円に引き上げられました</strong>。
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                160万円の壁とは（2025年改正版）
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                2025年の税制改正により、学生やアルバイトをしている人が所得税を払わずに済む年収のラインが<strong className="text-foreground">103万円から160万円に引き上げられました</strong>。これは給与所得控除の大幅引き上げによるものです。
              </p>

              <GoodCaseBox title="つまり、こういうこと！">
                <p className="mb-2"><strong>年収160万円まで所得税0円！</strong></p>
                <p className="text-sm">
                  以前は103万円を超えるとすぐに所得税が発生していましたが、改正後は160万円まで所得税がかかりません。月額約13.3万円まで稼げるようになりました！
                </p>
              </GoodCaseBox>
            </section>

            {/* セクション2：なぜ160万円になったのか */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                なぜ160万円になったのか？
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                所得税は「年収 - 各種控除」で計算された<strong>課税所得</strong>に対してかかります。2025年の改正で、この控除額が大幅に増えました。
              </p>

              <ComparisonTable 
                headers={["項目", "改正前（〜2024年）", "改正後（2025年〜）"]}
                rows={[
                  { label: "給与所得控除", values: ["55万円", "123万円"] },
                  { label: "基礎控除", values: ["48万円", "48万円"] },
                  { label: "合計控除", values: ["103万円", "171万円"], highlight: true },
                  { label: "実質的な壁", values: ["103万円", "約160万円"], highlight: true },
                ]}
              />

              <TipBox>
                <p className="mb-2"><strong>給与所得控除が55万円→123万円に！</strong></p>
                <p className="text-sm">
                  この大幅な引き上げにより、年収171万円までは理論上所得税がかかりません。ただし、住民税の非課税限度額との関係で、実質的には約160万円が目安になります。
                </p>
              </TipBox>

              <p className="text-sm text-muted-foreground italic">
                ※ 参照：<a href="https://www.works-hi.co.jp/businesscolumn/103kabe2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ワークスHI「年収の壁」2025最新版</a>
              </p>
            </section>

            {/* セクション3：160万円を超えるとどうなる？ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                160万円を超えるとどうなる？
              </h2>
              
              <StepByStep 
                steps={[
                  {
                    title: "本人に所得税が発生",
                    description: "年収が160万円を超えると、超えた分に対して5%の所得税（+復興特別所得税2.1%）がかかります。ただし、少額なので気にしなくてもOK。"
                  },
                  {
                    title: "親の扶養控除への影響",
                    description: "2025年の改正により、扶養控除の基準も緩和されました。188万円（学生は201万円）までは扶養控除が適用されます。"
                  }
                ]}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <GoodCaseBox title="年収170万円の場合">
                  <p className="mb-2"><strong>年収：170万円</strong></p>
                  <p className="text-sm mb-2">所得税：（170万円 - 160万円）× 5% × 1.021 = <strong className="text-emerald-600">約5,100円</strong></p>
                  <p className="text-sm">親の扶養控除：<strong className="text-emerald-600">維持</strong>（188万円以下のため）</p>
                </GoodCaseBox>

                <BadCaseBox title="年収200万円の場合">
                  <p className="mb-2"><strong>年収：200万円</strong></p>
                  <p className="text-sm mb-2">所得税：（200万円 - 160万円）× 5% × 1.021 = <strong className="text-red-600">約20,400円</strong></p>
                  <p className="text-sm">親の扶養控除：<strong className="text-red-600">対象外</strong>（188万円超のため）</p>
                </BadCaseBox>
              </div>
            </section>

            {/* セクション4：改正前後の比較 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                改正前後の比較
              </h2>
              
              <ComparisonTable 
                headers={["項目", "改正前（〜2024年）", "改正後（2025年〜）"]}
                rows={[
                  { label: "所得税が発生するライン", values: ["103万円", "160万円"], highlight: true },
                  { label: "扶養控除が維持される上限", values: ["123万円", "約188万円"], highlight: true },
                  { label: "社会保険の壁", values: ["130万円", "130万円（変更なし）"] },
                ]}
              />

              <div className="grid md:grid-cols-2 gap-4 my-4">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">✅</span>
                      <span>変更あり（改善！）</span>
                    </h3>
                    <ul className="space-y-2 text-sm text-emerald-800">
                      <li>• 所得税の壁：103万円 → 160万円</li>
                      <li>• 扶養控除の壁：123万円 → 188万円</li>
                      <li>• 働ける範囲が大幅に拡大！</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      <span>変更なし（要注意）</span>
                    </h3>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li>• 社会保険の壁：130万円（据え置き）</li>
                      <li>• 130万円を超えると社会保険料が発生</li>
                      <li>• 働き損ゾーンは依然として存在</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* セクション5：社会保険の壁は変わらない */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                ⚠️ 注意：社会保険の壁は変わらない
              </h2>
              <Card className="bg-red-50 border-red-200">
                <CardContent className="pt-4">
                  <p className="text-sm font-semibold text-red-900 mb-3">最重要ポイント</p>
                  <p className="text-sm text-red-800 mb-4">
                    所得税の壁は160万円に引き上げられましたが、<strong>社会保険の壁（130万円）は変更されていません</strong>。
                  </p>
                  <div className="space-y-2 text-sm text-red-800">
                    <p>• 130万円を超えると年間約20万円の社会保険料が発生</p>
                    <p>• 130〜160万円は「働き損ゾーン」として依然存在</p>
                    <p>• 社会保険料を避けたい場合は130万円以内に抑える必要あり</p>
                  </div>
                </CardContent>
              </Card>

              <TipBox>
                <p className="mb-2"><strong>結論：どのラインを目指すべき？</strong></p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li><strong>130万円以内</strong>：社会保険料なし、手取り最大化</li>
                  <li><strong>160万円以上</strong>：社会保険料を払っても手取りが増える</li>
                  <li>❌ <strong>130〜160万円</strong>：働き損ゾーン（避けるべき）</li>
                </ul>
              </TipBox>
            </section>

            {/* Q&A */}
            <QaSection 
              qas={[
                {
                  question: "じゃあ、結局何万円まで稼げばいいの？",
                  answer: "社会保険料を避けたいなら130万円以内、将来の年金も考えて稼ぎたいなら160万円以上を目指すのがおすすめです。130〜160万円は働き損になるので避けましょう。"
                },
                {
                  question: "103万円の壁は完全になくなったの？",
                  answer: "はい、所得税の面では103万円の壁は実質的になくなりました。160万円まで所得税が発生しません。ただし、社会保険の壁（130万円）は残っています。"
                },
                {
                  question: "親の扶養から外れるのはいくらから？",
                  answer: "一般的には188万円、19〜22歳の学生（特定扶養親族）の場合は201万円が目安です。これ以下であれば親の扶養控除が維持されます。"
                },
                {
                  question: "2024年までに稼いだ分はどうなるの？",
                  answer: "2025年分の収入から新ルールが適用されます。2024年までの収入は旧ルール（103万円の壁）で判定されます。"
                }
              ]}
            />

            {/* まとめ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                まとめ
              </h2>
              <Card className="bg-primary/5">
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>103万円の壁が160万円に引き上げ</strong>（2025年改正）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>年収160万円まで所得税0円</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>扶養控除も緩和</strong>：約188万円まで適用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 shrink-0 font-bold">⚠</span>
                      <span className="text-foreground"><strong>社会保険の壁（130万円）は変更なし</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground">働き控えの必要性が大幅に減少</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

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
      <SiteFooter />
    </>
  )
}

