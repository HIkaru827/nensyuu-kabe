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

export const metadata = createBlogPostMetadata("baito-yukyu-kyuryo")

export default function BaitoYukyuKyuryoPage() {
  const url = "https://nenshuu-kabe.com/blog/baito-yukyu-kyuryo"

  return (
    <>
      <ArticleStructuredData
        title="バイト有給の給料はいくら？通常賃金・平均賃金・標準報酬日額を学生向けに解説"
        description="アルバイトの有給休暇で支払われる賃金が、通常賃金、平均賃金、標準報酬日額のどの方式で決まるかを学生バイト向けに整理します。"
        datePublished="2026-07-06T00:00:00Z"
        dateModified="2026-07-06T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "バイト有給の給料はいくら？", url },
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
              バイト有給の給料はいくら？
              <br />
              通常賃金・平均賃金・標準報酬日額を学生向けに解説
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月6日時点の厚生労働省資料を確認し、有給日の給料の決まり方を学生バイト向けに整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月6日"
            audience="有給を使った日にいくら払われるか知りたい学生バイト"
            sources="厚生労働省、労働局公開資料"
            note="有給の賃金は必ず7割と決まっているわけではありません。どの算定方式を使うかを確認することが大事です。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>有給日の賃金は、通常賃金、平均賃金、標準報酬日額のいずれかで計算されます。</li>
                <li>標準報酬日額を使うには、労使協定が必要です。</li>
                <li>平均賃金は直近3か月の賃金をもとに計算するため、シフトが少ない人は通常賃金より低く見えることがあります。</li>
                <li>有給で支払われた賃金も給与なので、年収の壁の見込みに入れます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">有給の給料は3つの方式から決まる</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["通常賃金", "いつもの所定労働時間で働いた場合の賃金を払う方式です。時給バイトでは感覚的に分かりやすい方式です。"],
                    ["平均賃金", "原則として直前3か月の賃金総額を、その期間の総日数で割って計算します。日給・時給などでは最低保障の考え方もあります。"],
                    ["標準報酬日額", "健康保険の標準報酬月額をもとにする方式です。使うには労使協定が必要です。"],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[130px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">「7割くらい」と聞く理由</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  平均賃金方式では、直前3か月の賃金をカレンダー上の日数で割るため、週2日や週3日のバイトでは1日あたりの金額が小さく見えることがあります。
                  そのため、体感として「満額ではない」「7割くらい」と言われることがあります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、法律上は固定で7割という決まり方ではありません。時給制などでは、賃金総額を労働日数で割った額の60%という最低保障も関わります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">どの方式かはどこで分かるか</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  まず見るのは就業規則、雇用契約書、給与規程、勤務先の有給申請ルールです。
                  標準報酬日額方式の場合は労使協定が必要なので、勤務先がその方式を採用しているか確認します。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  学生バイトの場合、同じ店舗でも契約上の所定労働日数や所定労働時間が人によって違います。
                  有給日数だけでなく、有給日の賃金も自分の契約条件を前提に見るのが大事です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">年収の壁にも入れる</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  有給日に支払われる賃金は給与です。親の扶養や本人の所得税の年収見込みを出すときは、有給で支払われる分も合計します。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  136万円、150万円未満、178万円、197万円に近い人は、有給取得予定を入れた年収見込みで確認しておくと安心です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">勤務先に聞くときの聞き方</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 有給日の賃金は通常賃金、平均賃金、標準報酬日額のどれですか。</li>
                    <li>2. 自分の契約上の所定労働時間は何時間ですか。</li>
                    <li>3. 平均賃金方式なら、どの期間の給与をもとに計算しますか。</li>
                    <li>4. 有給を使った月の給与明細では、どの項目に表示されますか。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.mhlw.go.jp/new-info/kobetu/roudou/gyousei/dl/140811-3.pdf" title="厚生労働省 年次有給休暇の付与日数" description="アルバイト・パートの有給休暇の基本を確認できます。" />
                  <OfficialLink href="https://jsite.mhlw.go.jp/kanagawa-roudoukyoku/hourei_seido_tetsuzuki/saiteichingin_chinginseido/heikinchi.html" title="神奈川労働局 平均賃金" description="平均賃金の計算方法と最低保障の考え方を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">有給日数と給料目安を計算する</h3>
              <p className="text-sm text-muted-foreground">
                入社日、週の所定労働日数、出勤率から、有給の付与日数と賃金目安を確認できます。
              </p>
              <Link href="/paid-leave">
                <Button size="lg">有給シミュレーターへ</Button>
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
