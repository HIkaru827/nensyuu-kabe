import Link from "next/link"
import type React from "react"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleMonetizationSection } from "@/components/article-monetization-section"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createBlogPostMetadata } from "@/lib/seo"

export const metadata = createBlogPostMetadata("student-baito-shift-checklist")

export default function StudentBaitoShiftChecklistPage() {
  const url = "https://nenshuu-kabe.com/blog/student-baito-shift-checklist"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトのシフト調整チェックリスト｜年末までに見る給与・扶養・有給"
        description="学生バイト向けに、年収見込み、掛け持ち、有給、親への共有、社会保険の確認を月別チェックリストで整理します。"
        datePublished="2026-07-06T00:00:00Z"
        dateModified="2026-07-30T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトのシフト調整チェックリスト", url },
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
              学生バイトのシフト調整チェックリスト
              <br />
              年末までに見る給与・扶養・有給
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月30日時点の公的情報を前提に、学生バイトが年収を管理するときの確認順を整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月30日"
            audience="シフトを増やすか減らすか、家族と相談したい学生バイト"
            sources="国税庁、日本年金機構、厚生労働省"
            note="年収ラインだけでなく、掛け持ち、有給、社会保険、親への共有まで実務で漏れやすい順に並べています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">最初にやること</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>給与明細を集め、今年1月から12月までに受け取る給与見込みを合計します。</li>
                <li>掛け持ちがある場合は、すべての勤務先の給与を足します。</li>
                <li>有給を使う予定がある場合は、有給日に支払われる賃金も年収見込みに入れます。</li>
                <li>136万円、150万円未満、178万円、197万円に近い場合は、親や勤務先に早めに確認します。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">春から夏に見ること</h2>
                <div className="space-y-3">
                  <ChecklistItem title="4月から6月の働きすぎを確認する">
                    勤務先の社会保険に入っている場合、4月から6月の報酬が標準報酬月額に関係することがあります。
                    税金の話と混同せず、自分が勤務先の健康保険・厚生年金に入っているか確認します。
                  </ChecklistItem>
                  <ChecklistItem title="夏休み前に年収見込みを出す">
                    夏休みはシフトが増えやすい時期です。時給、週の勤務日数、1日の勤務時間をもとに、9月末時点の累計と年末見込みを出しておくと調整しやすくなります。
                  </ChecklistItem>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">秋から年末に見ること</h2>
                <div className="space-y-3">
                  <ChecklistItem title="親の扶養控除は136万円を確認する">
                    令和8年分以後、親の扶養控除は給与収入136万円が目安です。高校生や23歳以上はこのラインを超えると親の税金に影響しやすくなります。
                  </ChecklistItem>
                  <ChecklistItem title="19歳から22歳は159万円と197万円を確認する">
                    19歳以上23歳未満は、159万円以下なら親の所得税の控除が満額となる目安です。
                    159万円を超えると197万円まで段階的に減るため、親と共有しておくのが安全です。
                  </ChecklistItem>
                  <ChecklistItem title="社会保険は150万円未満と勤務条件を分ける">
                    19歳以上23歳未満の被扶養者認定では150万円未満の要件があります。一方、勤務先で加入するかは週20時間、月額賃金、学生区分なども関係します。
                  </ChecklistItem>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">有給を使うときの注意</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  有給休暇の日に支払われる賃金も給与です。年収ラインを調整している人は、有給を使った月の給与がどのくらい増えるかも見込んでおきます。
                  有給日の賃金は、通常賃金、平均賃金、標準報酬日額のどの方式を使うかで変わります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  「有給は必ず7割」という決まりではありません。方式は就業規則や労使協定で確認します。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">年末までの確認表</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["毎月", "給与明細を保存し、累計額を更新する。"],
                    ["夏休み前", "夏のシフトを入れた後の年収見込みを出す。"],
                    ["9月", "136万円、150万円未満、178万円、197万円に近いか確認する。"],
                    ["10月から11月", "年末調整の書類、掛け持ち先の源泉徴収票、有給取得予定を確認する。"],
                    ["12月", "最終給与と年末調整後の源泉徴収票を確認する。"],
                  ].map(([timing, note]) => (
                    <div key={timing} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{timing}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nta.go.jp/users/gensen/2026kiso/index.htm" title="国税庁 令和8年度税制改正" description="基礎控除、給与所得控除、扶養親族等の所得要件改正を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html" title="日本年金機構 短時間労働者の適用要件" description="週20時間、月額賃金、学生区分などを確認できます。" />
                  <OfficialLink href="https://www.mhlw.go.jp/new-info/kobetu/roudou/gyousei/dl/140811-3.pdf" title="厚生労働省 年次有給休暇の付与日数" description="アルバイト・パートの年次有給休暇の基本を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">年収見込みを入れて確認する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターで、今のシフトのまま年末まで働いた場合のラインを確認できます。
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

function ChecklistItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
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
