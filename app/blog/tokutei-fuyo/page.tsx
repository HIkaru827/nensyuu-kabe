import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleMonetizationSection } from "@/components/article-monetization-section"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createBlogPostMetadata } from "@/lib/seo"

export const metadata = createBlogPostMetadata("tokutei-fuyo")

export default function TokuteiFuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/tokutei-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="特定親族特別控除とは何か。19歳以上23歳未満の新ルールを整理"
        description="特定親族特別控除は、19歳以上23歳未満の子の給与収入が159万円以下なら親の所得税の控除が満額、159万円超から197万円以下では段階的に減る制度です。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-07-30T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "特定親族特別控除とは何か", url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              特定親族特別控除とは何か
              <br />
              19歳以上23歳未満の新ルールを整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月30日時点の国税庁資料に基づき、特定親族特別控除の見方を整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月30日"
            audience="19歳以上23歳未満の子どもがいる家庭"
            sources="国税庁"
            note="特定親族特別控除は親の控除の話です。本人の所得税や社会保険とは別論点であることを前提に書いています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に要点</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>対象は主に19歳以上23歳未満の親族です。</li>
                <li>給与収入136万円までは通常の扶養控除の判定帯です。</li>
                <li>給与収入159万円以下なら親の所得税の控除が満額、159万円超から197万円以下では段階的に減ります。</li>
                <li>控除額は一律ではなく、収入帯ごとに変わります。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">通常の扶養控除と何が違うか</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  令和8年分以後の通常の扶養控除では、扶養される子の合計所得金額が62万円以下かどうかを見ます。
                  給与収入だけなら、令和8・9年分の給与所得控除74万円を差し引くため、給与収入136万円がひとつの目安になります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定親族特別控除は、その136万円を少し超えたからといって直ちに親の控除がゼロになるのを避けるための制度です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">159万円まで満額、197万円まで対象になり得る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  国税庁の改正資料では、19歳以上23歳未満の親族について、給与収入136万円超197万円以下の範囲で、
                  親が特定親族特別控除の対象になる可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  給与収入159万円以下なら親の所得税の控除は満額となる目安です。159万円を超えると197万円まで段階的に減るため、
                  「136万円を超えたらすぐ減る」「197万円まで同じ」のどちらも正確ではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">本人の税金や社会保険とは別に見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定親族特別控除は、親の所得税や住民税の控除の話です。本人の所得税がいつ発生するか、社会保険に入るかどうかとは別の論点です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  実務では、本人の所得税は178万円、親の通常の扶養控除は136万円、19歳以上23歳未満の特定親族特別控除は197万円、
                  社会保険は別条件、と切り分けて見る方が誤解が少なくなります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 親の通常の扶養控除を見たいなら、まず136万円を確認する。</li>
                    <li>2. 対象者が19歳以上23歳未満かどうかを確認する。</li>
                    <li>3. 136万円を超えているなら、159万円までは満額、159万円超から197万円までは段階的に減る控除額を確認する。</li>
                    <li>4. 本人の税金や社会保険は別の基準で見る。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nta.go.jp/users/gensen/2026kiso/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 令和8年度税制改正</p>
                        <p className="text-xs text-muted-foreground">扶養親族等の所得要件と給与所得控除の改正を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 源泉所得税の改正のあらまし</p>
                        <p className="text-xs text-muted-foreground">対象年齢、197万円までの範囲、段階的な控除額を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>
          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">19歳以上23歳未満の判定を安全側で確認する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、136万円・159万円・197万円の関係を、年収だけで確認できる範囲で表示しています。
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
