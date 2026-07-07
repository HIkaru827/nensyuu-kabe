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
  title: "学生バイトの一人暮らし固定費の見直し方｜家計簿・引っ越し・サブスク整理",
  description:
    "学生バイト向けに、一人暮らしの家賃、通信費、光熱費、サブスク、引っ越し費用を見直す順番と契約トラブルの注意点を整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/student-living-costs",
  },
}

export default function StudentLivingCostsPage() {
  const url = "https://nenshuu-kabe.com/blog/student-living-costs"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトの一人暮らし固定費の見直し方｜家計簿・引っ越し・サブスク整理"
        description="学生バイト向けに、一人暮らしの家賃、通信費、光熱費、サブスク、引っ越し費用を見直す順番と契約トラブルの注意点を整理します。"
        datePublished="2026-07-07T00:00:00Z"
        dateModified="2026-07-07T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトの一人暮らし固定費の見直し方", url },
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
              学生バイトの一人暮らし固定費の見直し方
              <br />
              家計簿・引っ越し・サブスク整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月7日時点の金融庁、国土交通省、消費者庁、国民生活センターの情報を確認して整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月7日"
            audience="一人暮らしを始める学生、バイト代の使い道や固定費を見直したい学生"
            sources="金融庁、国土交通省、消費者庁、国民生活センター"
            note="特定の引っ越し業者、家計簿アプリ、サブスクを推奨する記事ではありません。先に契約条件と支出整理の順番を確認します。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>一人暮らしの固定費は、家賃、通信費、光熱費、サブスク、保険・保証、交通費の順に見ます。</li>
                <li>家計簿は細かく分類するより、毎月必ず出る固定費と、使いすぎやすい変動費を分けるのが先です。</li>
                <li>引っ越しは初期費用だけでなく、退去時の原状回復、特約、更新料、解約予告も確認します。</li>
                <li>サブスクは、無料期間、解約方法、登録メール、支払明細を残します。アプリ削除だけでは解約にならないことがあります。</li>
                <li>固定費を下げると、年収の壁を越えない範囲でも手元に残るお金を増やしやすくなります。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">最初に「毎月出ていくお金」を固定する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  金融庁の教材では、大学生の支出例として、食費、住居費、水道光熱費、通信費、交通費、被服費、教養娯楽費などが挙げられています。
                  バイト代が入ると自由に使えるように見えますが、家賃や通信費のような固定費は毎月先に出ていきます。
                  まずは「毎月必ず払うもの」と「月によって変わるもの」に分けましょう。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  家計簿アプリを使う場合も、最初から細かく分類しすぎなくて大丈夫です。
                  給料日後に、家賃、通信費、光熱費、サブスク、交通費、食費の目安を先に置き、残りを自由費にするだけでも、使いすぎに気づきやすくなります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">固定費の見直し順</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["家賃", "一度決めると下げにくい費用です。契約前に共益費、更新料、保証料、退去費用の考え方まで見ます。"],
                    ["通信費", "スマホ代、Wi-Fi、学割、家族割、端末代の残りを確認します。既存のスマホ代記事と合わせて見直します。"],
                    ["光熱費", "電気・ガス・水道は季節差が出ます。毎月の平均額を見て、無理のない予算を置きます。"],
                    ["サブスク", "動画、音楽、学習教材、アプリ課金を一覧化します。無料体験後の有料移行と解約方法を確認します。"],
                    ["交通費", "定期券、通学先、バイト先、帰省費を分けます。バイト先が遠いと時給が高くても手元時間が減ります。"],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">引っ越しは「入居時」と「退去時」をセットで見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一人暮らしの部屋を選ぶときは、初期費用だけでなく、退去時の費用まで見ます。
                  国土交通省の原状回復ガイドラインでは、入退去時の物件状況確認リスト、原状回復に関する契約条件の開示、賃借人の原状回復義務などが整理されています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  契約前には、敷金、礼金、仲介手数料、保証会社費用、火災保険、鍵交換、クリーニング特約、更新料、解約予告期間を確認します。
                  入居時は部屋のキズや汚れを写真で残しておくと、退去時の認識違いを減らしやすくなります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">サブスクは「消したつもり」が危ない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  消費者庁は、サブスクについて、申込み前に事業者名、サービス内容、無料・割引期間、解約方法を確認し、登録情報を保存し、毎月の支払明細を確認するよう注意喚起しています。
                  とくにスマホアプリで申し込んだサブスクは、アプリを削除しても契約自体が解除されるわけではありません。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  学生だと、動画、音楽、クラウド、学習教材、フィットネス、就活サービスなどが重なりがちです。
                  月500円でも4つあれば月2,000円、年24,000円です。使っていないものは、解約完了メールや画面を保存しておきましょう。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">バイト代から逆算する月次チェック</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 今月のバイト代見込みと、親からの仕送り・奨学金を分けて書く。</li>
                    <li>2. 家賃、通信費、光熱費、交通費、サブスクを先に引く。</li>
                    <li>3. 食費と自由費を週単位に分ける。</li>
                    <li>4. 使っていないサブスク、重複しているアプリ、割高な通信プランを1つずつ消す。</li>
                    <li>5. 固定費を下げた分を、緊急用のお金か学習費に回す。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.fsa.go.jp/news/r3/sonota/20220317/package.pdf" title="金融庁 高校生のための金融リテラシー講座" description="大学生の収入・支出、家計管理、ニーズとウォンツ、手取り収入の考え方を確認できます。" />
                  <OfficialLink href="https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000021.html" title="国土交通省 原状回復をめぐるトラブルとガイドライン" description="賃貸住宅の入退去時確認、原状回復、契約条件の見方を確認できます。" />
                  <OfficialLink href="https://www.caa.go.jp/policies/policy/consumer_transaction/specified_commercial_transactions/assets/consumer_transaction_cms202_220601_04.pdf" title="消費者庁 サブスクのトラブルに御注意を" description="無料期間、解約方法、登録情報、支払明細、アプリ削除と解約の違いを確認できます。" />
                  <OfficialLink href="https://www.kokusen.go.jp/news/data/n-20211007_1.html" title="国民生活センター 予期せぬサブスク請求トラブルに注意" description="サブスクの自動更新、無料体験後の請求、解約できないトラブルを確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">固定費を下げた後に、年収ラインを見る</h3>
              <p className="text-sm text-muted-foreground">
                固定費を下げると、無理にシフトを増やさなくても手元に残るお金を増やせます。扶養や社会保険のラインと合わせて調整しましょう。
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
