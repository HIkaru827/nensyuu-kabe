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

export const metadata = createBlogPostMetadata("student-phone-bill")

export default function StudentPhoneBillPage() {
  const url = "https://nenshuu-kabe.com/blog/student-phone-bill"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトのスマホ代を下げる見直し方｜料金プラン・格安スマホの注意点"
        description="学生バイト向けに、スマホ代を下げるための料金プラン確認、データ使用量、格安スマホ・SIMの注意点、契約トラブル時の相談先を整理します。"
        datePublished="2026-07-07T00:00:00Z"
        dateModified="2026-07-07T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトのスマホ代を下げる見直し方", url },
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
              学生バイトのスマホ代を下げる見直し方
              <br />
              料金プラン・格安スマホの注意点
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月7日時点の消費者庁・国民生活センターの公的情報を確認して整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月7日"
            audience="バイト代からスマホ代を払っている学生、家族のスマホ代を見直したい人"
            sources="消費者庁、国民生活センター"
            note="特定の通信会社やプランを推奨する記事ではありません。乗り換え前に確認すべき条件を整理しています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>スマホ代は、まず今の月額料金、データ使用量、通話料、端末代の残りを確認します。</li>
                <li>毎月使うデータ量より大きすぎるプランなら、プラン変更だけで下がることがあります。</li>
                <li>格安スマホ・SIMは安くなる可能性がありますが、通話方法、サポート、設定、メール、対応端末を確認します。</li>
                <li>契約トラブルや説明と違う請求があった場合は、消費者ホットライン188も相談先になります。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">最初に見るのは「いま何に払っているか」</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  スマホ代を下げたいときは、いきなり乗り換え先を探すより先に、今の請求内訳を見ます。
                  基本料金、データ通信料、通話料、オプション、端末代の分割払い、保証サービスを分けて確認しましょう。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  消費者庁も、携帯電話の料金プランについて、現在の契約プランや利用状況を確認し、適切な事業者や料金プランを選ぶよう案内しています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生バイト向けの見直し順</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["データ使用量", "過去3か月ほどの使用量を見て、契約容量が大きすぎないか確認します。"],
                    ["通話料", "電話をよく使うなら、かけ放題や専用アプリの条件を確認します。"],
                    ["オプション", "保証、動画、クラウド、セキュリティなど、使っていない月額サービスを整理します。"],
                    ["端末代", "端末の分割払いが残っているか、乗り換え時に一括請求がないか確認します。"],
                    ["家族割・学割", "家族の契約や学割は条件が細かいので、割引終了後の金額も見ます。"],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">格安スマホ・SIMで確認したいこと</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  国民生活センターは、格安スマホについて、今までの携帯電話会社との違いを確認してから契約するよう注意喚起しています。
                  相談事例では、通話時に専用アプリが必要だと知らず高額請求になった、店舗サポートを受けられず困った、という例が示されています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  料金だけで選ばず、自分で初期設定できるか、店舗サポートが必要か、キャリアメールを使っているか、端末が対応しているかを確認しましょう。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">月2,000円下がると年24,000円の差になる</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  スマホ代は毎月出ていく固定費なので、少し下げるだけでも年間では大きな差になります。
                  月2,000円下がれば年24,000円、月3,000円下がれば年36,000円です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  年収の壁を気にしてシフトを増やしにくい人ほど、固定費を下げる効果は大きくなります。
                  ただし、安さだけでサポートや通話条件を犠牲にすると、あとで困ることがあります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">契約前チェックリスト</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 直近3か月のデータ使用量と通話料を確認する。</li>
                    <li>2. 端末代の分割残高と解約・乗り換え時の費用を確認する。</li>
                    <li>3. 通話アプリ、SMS、メール、テザリング、海外利用の条件を確認する。</li>
                    <li>4. 店舗サポートが必要か、自分で初期設定できるかを考える。</li>
                    <li>5. トラブル時の問い合わせ先と、消費者ホットライン188を控えておく。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.caa.go.jp/policies/policy/consumer_policy/caution/information_003" title="消費者庁 自分に合った携帯料金プランになっていますか" description="契約中のプランや利用状況を確認し、適切な料金プランを選ぶための注意喚起です。" />
                  <OfficialLink href="https://www.kokusen.go.jp/news/data/n-20200116_2.html" title="国民生活センター 格安スマホの利用方法やサポート内容に注意" description="通話アプリ、サポート、利用方法など、格安スマホ契約時の注意点を確認できます。" />
                  <OfficialLink href="https://www.caa.go.jp/notice/other/mobilephone/" title="消費者庁 携帯電話関連情報" description="携帯電話関連の注意喚起と、消費者ホットライン188の案内を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">固定費を下げた後の年収ラインも確認する</h3>
              <p className="text-sm text-muted-foreground">
                スマホ代を下げると、同じバイト時間でも手元に残るお金を増やしやすくなります。
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
