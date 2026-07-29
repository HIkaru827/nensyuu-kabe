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

export const metadata = createBlogPostMetadata("2026-student-income-wall")

export default function StudentIncomeWall2026Page() {
  const url = "https://nenshuu-kabe.com/blog/2026-student-income-wall"

  return (
    <>
      <ArticleStructuredData
        title="2026年の学生バイト年収の壁｜119万・130万・136万・150万・178万・197万円を整理"
        description="令和8年分以後の所得税改正を反映し、学生バイトが見るべき住民税、親の扶養、社会保険、本人の所得税、特定親族特別控除の年収ラインを整理します。"
        datePublished="2026-07-06T00:00:00Z"
        dateModified="2026-07-06T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "2026年の学生バイト年収の壁", url },
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
              2026年の学生バイト年収の壁
              <br />
              119万・130万・136万・150万・178万・197万円を整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月6日時点の国税庁・日本年金機構の公的情報に基づいて整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月6日"
            audience="学生バイト本人、親の扶養を気にする家庭、シフトを増やすか迷っている人"
            sources="国税庁、日本年金機構、自治体公開情報"
            note="所得税、親の税扶養、社会保険は同じ年収でも判定軸が違います。この記事では学生バイト向けに確認順をそろえています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>本人の所得税は、令和8年分以後の給与収入178万円が大きな目安です。</li>
                <li>親の扶養控除は、給与収入136万円までが目安です。</li>
                <li>19歳以上23歳未満は、136万円超から197万円以下で特定親族特別控除を確認します。</li>
                <li>社会保険は税金とは別です。原則130万円未満、19歳以上23歳未満は150万円未満の被扶養者要件も見ます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">年収ラインを一覧で見る</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["119万円", "住民税の非課税ラインの目安。自治体や年度で扱いが変わるため、最終確認は自治体で行います。"],
                    ["130万円未満", "家族の健康保険などの被扶養者認定でよく見る基本ラインです。"],
                    ["136万円", "令和8年分以後の親の扶養控除の給与収入目安です。"],
                    ["150万円未満", "19歳以上23歳未満の社会保険の被扶養者認定で確認する年収要件です。"],
                    ["178万円", "令和8年分以後、給与収入だけなら本人の所得税が0円見込みとなる目安です。"],
                    ["197万円", "19歳以上23歳未満の特定親族特別控除が段階適用され得る上限目安です。"],
                  ].map(([income, note]) => (
                    <div key={income} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{income}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">178万円は本人の所得税の話</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  令和8年分以後の所得税では、令和8・9年分の給与所得控除の最低保障が74万円になり、低所得帯の基礎控除104万円と合わせると、
                  給与収入178万円までは所得税が発生しない設計です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、令和8年11月までの源泉徴収事務は改正前の税額表で進むため、毎月の給与で引かれた税額と年末調整後の結果がズレることがあります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">136万円と197万円は親の税金の話</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の扶養控除は、扶養される人の合計所得金額で判定します。令和8年分以後は合計所得金額62万円以下が目安となり、
                  給与収入だけなら136万円以下がひとつのラインです。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  19歳以上23歳未満は、136万円を超えても197万円以下なら特定親族特別控除の対象になり得ます。
                  ただし控除額は段階的に減るため、197万円まで親への影響がないという意味ではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">130万円と150万円未満は社会保険の話</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  家族の健康保険などの被扶養者認定では、原則として年間収入130万円未満を確認します。
                  19歳以上23歳未満は、2025年10月1日以後の認定で年間収入150万円未満の要件が使われます。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  勤務先で社会保険に入るかどうかは、週20時間以上、月額賃金、勤務先規模、学生区分などの条件も関わります。
                  年収だけで断定しないのが大事です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 年収見込みを出して、119万円・130万円・136万円・178万円・197万円のどこに近いか見る。</li>
                    <li>2. 親の扶養を気にするなら、まず136万円を確認する。</li>
                    <li>3. 19歳以上23歳未満なら、150万円未満の社会保険と197万円までの税控除を分けて見る。</li>
                    <li>4. 週20時間以上や月額賃金が大きいなら、勤務先の社会保険も確認する。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nta.go.jp/users/gensen/2026kiso/index.htm" title="国税庁 令和8年度税制改正" description="基礎控除、給与所得控除、扶養親族等の所得要件改正を確認できます。" />
                  <OfficialLink href="https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf" title="国税庁 源泉所得税の改正のあらまし" description="令和8・9年分の178万円、136万円、197万円の根拠を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" title="日本年金機構 19歳以上23歳未満の被扶養者認定" description="2025年10月1日以後の150万円未満要件を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html" title="日本年金機構 短時間労働者の適用要件" description="週20時間、月額賃金、学生区分などを確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">自分の年収ラインを試算する</h3>
              <p className="text-sm text-muted-foreground">
                年齢と勤務条件を入れると、税金・親の扶養・社会保険を分けて確認できます。
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

function OfficialLink({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
    </a>
  )
}
