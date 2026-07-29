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

export const metadata = createBlogPostMetadata("daigakusei-baito-fuyo")

export default function DaigakuseiBaitoFuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/daigakusei-baito-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="大学生バイトはいくらまで稼げる？親の扶養・税金・社会保険を年収別に解説"
        description="大学生アルバイトがいくらまで稼げるかを、本人の所得税178万円、親の扶養控除136万円、19歳以上23歳未満の特定親族特別控除197万円、社会保険の扱いに分けて整理します。"
        datePublished="2026-04-09T00:00:00Z"
        dateModified="2026-07-06T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "大学生バイトはいくらまで稼げる？", url },
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
              大学生バイトはいくらまで稼げる？
              <br />
              親の扶養・税金・社会保険を年収別に解説
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月6日時点の公的資料に基づき、大学生が確認すべき年収ラインを分けて整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月6日"
            audience="大学生バイトで親の扶養、本人の税金、社会保険をまとめて確認したい人"
            sources="国税庁、日本年金機構"
            note="大学生は19歳以上23歳未満の特例や学生区分が関わるため、年収だけで断定しない前提で整理しています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>本人の所得税だけなら、給与収入178万円までが大きな目安です。</li>
                <li>親の通常の扶養控除を守りたいなら、給与収入136万円までが目安です。</li>
                <li>19歳以上23歳未満なら、136万円を超えても197万円まで特定親族特別控除が段階適用され得ます。</li>
                <li>社会保険は税金と別判定です。学生区分や勤務条件も見ます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">年収別の見方</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  <div className="grid grid-cols-2 bg-muted px-4 py-2 font-semibold text-foreground">
                    <span>年収</span>
                    <span>主な注意点</span>
                  </div>
                  {[
                    ["136万円以下", "親の通常の扶養控除の対象になりやすい範囲です。"],
                    ["136万円超〜150万円未満", "特定親族特別控除の確認が必要です。社会保険の被扶養者要件も見ます。"],
                    ["150万円以上〜178万円", "本人の所得税は原則0円見込みでも、社会保険の扶養は外れる可能性があります。"],
                    ["178万円超〜197万円", "本人の所得税が発生し、親の控除も段階的に変わります。"],
                    ["197万円超", "特定親族特別控除の対象外になり、親への影響が大きくなります。"],
                  ].map(([income, note]) => (
                    <div key={income} className="grid grid-cols-2 border-t border-border px-4 py-3 text-muted-foreground">
                      <span className="font-medium text-foreground">{income}</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">本人の税金は178万円を確認する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  令和8年分以後、令和8・9年分の給与所得控除の最低額は74万円です。低所得帯の基礎控除も踏まえると、
                  給与収入178万円までなら所得税が発生しない設計です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、住民税や社会保険は別の基準です。「178万円までなら全部安全」とまとめて考えない方が安心です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">親の扶養は136万円と197万円を分ける</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の通常の扶養控除は、子の合計所得金額62万円以下が目安です。給与収入だけなら、給与所得控除74万円を差し引くため、
                  給与収入136万円までがひとつのラインになります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  大学生の多くが該当する19歳以上23歳未満では、136万円を超えても197万円まで特定親族特別控除が段階的に使える可能性があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険は年収だけで断定しない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  短時間労働者の社会保険加入は、週20時間以上、月額賃金8.8万円以上、学生でないことなどを確認します。
                  大学生は学生区分が関わるため、年収だけで結論を出すのは危険です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一方で、家族の健康保険の被扶養者認定は別に確認します。19歳以上23歳未満は、令和7年10月1日以後、
                  年間収入要件が150万円未満に見直されています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nta.go.jp/users/gensen/2026kiso/index.htm" title="国税庁 令和8年度税制改正" description="基礎控除、給与所得控除、扶養親族等の所得要件改正を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html" title="日本年金機構 短時間労働者の加入要件" description="週20時間、月額賃金8.8万円、学生でないことなどを確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" title="日本年金機構 19歳以上23歳未満の被扶養者認定" description="令和7年10月1日以後の150万円未満要件を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>
          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">自分の年収で確認する</h3>
              <p className="text-sm text-muted-foreground">
                大学生バイトでも、税金と社会保険は分けて確認するのが安全です。
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
