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

export const metadata = createBlogPostMetadata("weekly-20hours-social-insurance")

export default function Weekly20HoursSocialInsurancePage() {
  const url = "https://nenshuu-kabe.com/blog/weekly-20hours-social-insurance"

  return (
    <>
      <ArticleStructuredData
        title="週20時間・月8.8万円で学生バイトは社会保険に入る？学生区分と例外を整理"
        description="社会保険の短時間労働者要件を、週20時間、月額8.8万円、学生でないこと、企業規模、昼間学生と夜間・通信制の違いに分けて解説します。"
        datePublished="2026-07-06T00:00:00Z"
        dateModified="2026-07-06T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "週20時間・月8.8万円と学生バイトの社会保険", url },
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
              週20時間・月8.8万円で学生バイトは社会保険に入る？
              <br />
              学生区分と例外を整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月6日時点の日本年金機構の公的情報に基づいて整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月6日"
            audience="週20時間以上働いている学生、夜間・通信制・休学中の学生、扶養を外れるか不安な人"
            sources="日本年金機構"
            note="社会保険は年収だけで決まりません。勤務先加入と家族の被扶養者認定を分けて確認します。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>短時間労働者の社会保険加入では、週20時間以上、月額賃金8.8万円以上などを確認します。</li>
                <li>要件のひとつに「学生でないこと」があるため、昼間学生は直ちに対象とは限りません。</li>
                <li>夜間学生、通信制、休学中などは扱いが変わることがあります。</li>
                <li>月額賃金8.8万円以上の要件は、2026年10月に廃止予定と案内されています。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">短時間労働者の要件</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  日本年金機構の案内では、短時間労働者が健康保険・厚生年金の適用対象になるかを見る際に、
                  週の所定労働時間、月額賃金、勤務先規模、雇用見込み、学生区分などを確認します。
                </p>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["週20時間以上", "実際の残業込みではなく、契約上の所定労働時間を基本に見ます。"],
                    ["月額8.8万円以上", "基本給や諸手当で判断し、臨時の賃金などは除かれる扱いがあります。"],
                    ["学生でないこと", "昼間学生は対象外になりやすい一方、夜間・通信制・休学中などは例外があります。"],
                    ["勤務先規模", "2026年時点では51人以上の企業などが重要な目安です。"],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[140px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生なら必ず入らない、ではない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  短時間労働者の要件では学生でないことが挙げられていますが、学生区分には例外があります。
                  日本年金機構は、夜間学生、通信教育を受ける人、休学中の人、卒業見込証明書を持って卒業前から就職している人などを例として案内しています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  また、短時間労働者の要件とは別に、正社員の4分の3以上の勤務時間・日数で働く場合は一般被保険者として扱われる可能性があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">130万円・150万円未満との違い</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  週20時間や月8.8万円は、勤務先で自分が社会保険に入るかの話です。
                  一方、130万円未満や19歳以上23歳未満の150万円未満は、家族の健康保険などの被扶養者認定で確認する話です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  どちらも社会保険の話ですが、判定する主体と基準が違います。学生バイトではこの2つを分けて考えると誤解が減ります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">勤務先に確認したい項目</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 契約上の週所定労働時間は何時間か。</li>
                    <li>2. 月額賃金8.8万円以上の判定に入る手当は何か。</li>
                    <li>3. 自分の学校区分は「学生でないこと」の例外に当たるか。</li>
                    <li>4. 勤務先の厚生年金被保険者数は51人以上か。</li>
                    <li>5. 2026年10月以降の要件変更にどう対応するか。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html" title="日本年金機構 短時間労働者の適用要件" description="週20時間、月額賃金、学生区分、勤務先規模などを確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" title="日本年金機構 19歳以上23歳未満の被扶養者認定" description="2025年10月1日以後の150万円未満要件を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">勤務条件を入れて確認する</h3>
              <p className="text-sm text-muted-foreground">
                年収だけでなく、週の勤務時間や月額賃金も入れて社会保険の論点を確認できます。
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
