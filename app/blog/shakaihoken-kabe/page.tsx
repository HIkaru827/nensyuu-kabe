import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "社会保険の壁とは？130万円・106万円・150万円未満の関係を現行ルールで整理",
  description: "社会保険の壁を、被扶養者認定、短時間労働者への適用、19歳以上23歳未満の150万円未満要件に分けて整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/shakaihoken-kabe",
  },
}

export default function ShakaiHokenPage() {
  const url = "https://nenshuu-kabe.com/blog/shakaihoken-kabe"

  return (
    <>
      <ArticleStructuredData
        title="社会保険の壁とは？130万円・106万円・150万円未満の関係を現行ルールで整理"
        description="社会保険の壁を、被扶養者認定、短時間労働者への適用、19歳以上23歳未満の150万円未満要件に分けて整理します。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "社会保険の壁とは？", url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              社会保険の壁とは？
              <br />
              130万円・106万円・150万円未満の関係を現行ルールで整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点で確認した日本年金機構の公的情報に基づいて整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年4月15日"
            audience="106万円、130万円、150万円未満の違いを知りたい人"
            sources="日本年金機構"
            note="社会保険は被扶養者認定と勤務先加入の2つの論点が混ざりやすいため、この記事では順番に切り分けています。"
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6 space-y-3">
              <h2 className="text-lg font-bold text-blue-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>・ 130万円は、被扶養者認定の年間収入要件として使う数字です</li>
                <li>・ 106万円は法律上の独立基準ではなく、月額 8.8万円の参考値です</li>
                <li>・ 短時間労働者への適用は、週20時間、月額8.8万円、学生区分、企業規模などで決まります</li>
                <li>・ 19歳以上23歳未満の方は、2025年10月1日以降の認定分から 150万円未満が目安です</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険の壁は1本ではない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  「社会保険の壁」と言うと、130万円や106万円が一つの線のように語られがちですが、実際には
                  <strong className="text-foreground"> 被扶養者認定の話</strong> と
                  <strong className="text-foreground"> 勤務先で自分が被保険者になる話</strong>
                  が混ざっています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  この2つは基準が違うため、年収だけで一律に判定すると誤りやすいです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">130万円は被扶養者認定の年間収入要件</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  健康保険の被扶養者認定では、原則として年間収入 130万円未満が目安です。
                  ただし、同居なら被保険者の収入の半分未満、別居なら仕送り額未満など、年収以外の要件もあります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  さらに、2025年10月1日以降の認定で、被保険者の配偶者を除く 19歳以上23歳未満の方は、
                  年間収入要件が <strong className="text-foreground">150万円未満</strong> に変わっています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">106万円は参考値。実際は月額8.8万円などで見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  いわゆる「106万円の壁」は、短時間労働者への適用拡大を説明する俗称です。
                  日本年金機構は、年収106万円以上かどうかではなく、
                  <strong className="text-foreground">所定内賃金が月額8.8万円以上かどうか</strong>
                  で要件判定すると案内しています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、年収だけを見て「106万円を超えたから加入」「超えていないから加入しない」と断定するのは危険です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">短時間労働者として加入する主な要件</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li>・ 週の所定労働時間が20時間以上</li>
                    <li>・ 所定内賃金が月額8.8万円以上</li>
                    <li>・ 学生でないこと</li>
                    <li>・ 特定適用事業所、任意特定適用事業所、または国・地方公共団体の事業所で働いていること</li>
                  </ul>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定適用事業所の企業規模要件は、令和6年10月以降、実質的に <strong className="text-foreground">51人以上</strong> の企業等です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生の扱い</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  短時間労働者の要件にある「学生でないこと」では、昼間の大学生や高等学校の生徒などは対象外ですが、
                  休学中の方、定時制課程、通信制課程に在学する方などは除外の対象から外れます。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  つまり、学生だから一律に106万円ルールの対象外とは言えません。学生区分まで確認が必要です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 親や配偶者の被扶養者でいたいなら、まず 130万円未満または 19歳以上23歳未満なら 150万円未満を確認する</li>
                    <li>2. 次に、週20時間、月額8.8万円、学生区分、勤務先規模を確認する</li>
                    <li>3. 年収106万円という数字は、あくまで月額8.8万円の参考値として見る</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/shutokuyouken.html" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 短時間労働者の取得要件</p>
                        <p className="text-xs text-muted-foreground">週20時間、月額8.8万円、学生でないこと、事業所要件を確認</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/nenshuu.html" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 106万円は参考値というFAQ</p>
                        <p className="text-xs text-muted-foreground">年収106万円以上かどうかは勘案しないと明記</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/gakusei02.html" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 学生区分の扱い</p>
                        <p className="text-xs text-muted-foreground">通信制、定時制、休学中の扱いを確認</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 19歳以上23歳未満の被扶養者認定</p>
                        <p className="text-xs text-muted-foreground">2025年10月1日以降の 150万円未満要件を確認</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="pt-6 text-center space-y-4">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">あなたの条件で整理する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、年収だけで断定できる範囲だけを表示しています。
              </p>
              <Link href="/">
                <Button size="lg">シミュレーターに戻る</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
