import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleMonetizationSection } from "@/components/article-monetization-section"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "学生バイトの給与口座・学生カードの整え方｜給料管理と使いすぎ防止",
  description:
    "学生バイト向けに、給与口座、生活費管理、学生カード、リボ払い・延滞・口座売買の注意点を公式情報ベースで整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/student-money-management",
  },
}

export default function StudentMoneyManagementPage() {
  const url = "https://nenshuu-kabe.com/blog/student-money-management"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトの給与口座・学生カードの整え方｜給料管理と使いすぎ防止"
        description="学生バイト向けに、給与口座、生活費管理、学生カード、リボ払い・延滞・口座売買の注意点を公式情報ベースで整理します。"
        datePublished="2026-07-07T00:00:00Z"
        dateModified="2026-07-07T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトの給与口座・学生カード", url },
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
              学生バイトの給与口座・学生カードの整え方
              <br />
              給料管理と使いすぎ防止
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月7日時点の金融庁・消費者庁・全国銀行協会の公的情報を確認して整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月7日"
            audience="バイト代の受け取り口座、生活費管理、学生カードをまとめて整えたい学生"
            sources="金融庁、消費者庁、全国銀行協会"
            note="特定の銀行口座やカードを推奨する記事ではありません。先に安全に使うための確認項目を整理しています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>給与口座は、振込先に使えること、手数料、アプリの見やすさ、ATMの使いやすさを先に確認します。</li>
                <li>学生カードは、ポイントよりも支払方法、締め日・支払日、利用明細、リボ払い設定を確認します。</li>
                <li>クレジットカードは後払いです。延滞すると将来の契約に影響する可能性があります。</li>
                <li>口座やキャッシュカードを売る・貸す・譲ることは犯罪につながります。SNSの誘いには乗らないでください。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">給与口座は「給料が入った後」の使いやすさで選ぶ</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  バイト先から指定がない場合、給与口座は「給料を受け取れるか」だけでなく、給料日後にどう使うかまで見て選びます。
                  ATM手数料、振込手数料、アプリで残高や明細を見られるか、近くで入出金できるかを確認しましょう。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  家賃、スマホ代、サブスク、交通費などがある人は、給料が入る口座と引き落とし口座を分けすぎると管理が難しくなります。
                  最初は「給料を受け取る口座」「毎月使ってよい金額」を分けて見るだけでも十分です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生カードはポイントより支払方法を先に見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  消費者庁は、クレジットカードは便利な一方で、支払方法を確認しないと想定外の手数料が発生したり、
                  利用明細を見ないと支払残高が高額になっていることに気づきにくいと注意喚起しています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  18歳から一人でカードを申し込めるようになりましたが、手元や口座にお金がなくても買い物ができるという意味では借金に近い性質があります。
                  まずは一括払いを基本にし、分割払い・リボ払いが初期設定になっていないかを確認しましょう。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">延滞とリボ払いは特に注意する</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["締め日・支払日", "給料日より前に引き落としが来ると残高不足になりやすいです。"],
                    ["利用限度額", "限度額が高いほど安心ではありません。自分の月収から払える額に合わせます。"],
                    ["リボ払い", "毎月の支払額が小さく見えても、手数料がかかり支払残高が残りやすい方式です。"],
                    ["利用明細", "不正利用やサブスクの解約忘れに気づくため、毎月確認します。"],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">口座を売る・貸す・渡す誘いは断る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  全国銀行協会は、口座を売る、買う、貸す、借りる、譲り渡す、譲り受けることはいずれも犯罪になると案内しています。
                  「簡単に高収入」「口座を貸すだけ」といったSNSの誘いは、詐欺やマネー・ローンダリングに悪用される危険があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  使っていない口座を放置している場合も、紛失した通帳やキャッシュカードを放置している場合もリスクになります。
                  不要な口座は整理し、紛失時はすぐ金融機関へ連絡しましょう。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生バイト向けの管理ルール</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 給料日に、今月使える金額と残しておく金額を分ける。</li>
                    <li>2. スマホ代、サブスク、交通費など毎月出る支払いを先に引く。</li>
                    <li>3. カードで払った金額は、使った日にメモするかアプリで確認する。</li>
                    <li>4. リボ払い・分割払い・キャッシングは、仕組みを理解するまで使わない。</li>
                    <li>5. 口座やカードを他人に貸さない。怪しい副業の誘いは断る。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.kportal.caa.go.jp/flyer/000972/" title="消費者庁 18歳から大人に！クレジットカードの使い方を考えよう" description="18歳からのカード利用、延滞、リボ払い、明細確認の注意点を確認できます。" />
                  <OfficialLink href="https://www.zenginkyo.or.jp/hanzai/7323/" title="全国銀行協会 口座の売買" description="口座を売る・貸す・譲ることの危険性と対策を確認できます。" />
                  <OfficialLink href="https://www.fsa.go.jp/ordinary/douga.html" title="金融庁 高校生のための金融リテラシー講座" description="家計管理、使う、借りる、金融トラブルなどの学習素材を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">先に年収ラインも確認する</h3>
              <p className="text-sm text-muted-foreground">
                給料の受け取り方を整えたら、扶養・税金・社会保険の年収ラインも確認しておくと安心です。
              </p>
              <Link href="/">
                <Button size="lg">年収の壁を確認する</Button>
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
