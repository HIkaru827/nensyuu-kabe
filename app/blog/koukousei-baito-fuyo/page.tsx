import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "高校生バイトはいくらまでなら扶養内？103万円・123万円・130万円の違い",
  description:
    "高校生アルバイトが扶養内で働くときに確認したい、103万円、123万円、130万円、160万円の違いを、本人の税金・親の扶養控除・社会保険に分けて整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/koukousei-baito-fuyo",
  },
}

export default function KoukouseiBaitoFuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/koukousei-baito-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="高校生バイトはいくらまでなら扶養内？103万円・123万円・130万円の違い"
        description="高校生アルバイトが扶養内で働くときに確認したい、103万円、123万円、130万円、160万円の違いを、本人の税金・親の扶養控除・社会保険に分けて整理します。"
        datePublished="2026-04-09T00:00:00Z"
        dateModified="2026-04-09T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "高校生バイトはいくらまでなら扶養内？", url },
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
              高校生バイトはいくらまでなら扶養内？
              <br />
              103万円・123万円・130万円の違い
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月9日時点の公的資料に基づき、高校生バイトで誤解しやすい年収ラインを整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年4月15日"
            audience="高校生バイトの年収を家族で相談したい人"
            sources="国税庁、日本年金機構"
            note="103万円という古いイメージが残りやすいため、現行ルールで重要な123万円、130万円、160万円との違いを明示しています。"
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-blue-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>本人の所得税だけなら、今は103万円ではなく160万円が大きな目安です。</li>
                <li>親の扶養控除を守りたいなら、給与収入123万円が目安です。</li>
                <li>親の扶養控除は、原則としてその年12月31日時点で16歳以上の子が対象です。</li>
                <li>社会保険の被扶養者認定は別判定で、通常は130万円未満を見ます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">103万円は古い目安として残りやすい</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  以前は「103万円の壁」が本人の所得税や親の扶養を考える代表的な目安でした。
                  ただし、令和7年分以後は給与所得控除や基礎控除が見直され、本人の所得税では160万円が大きな目安になっています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、「103万円を超えたら必ず損」と考えるのは、現行ルールでは単純化しすぎです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">親の扶養控除は123万円を確認する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の所得税で扶養控除の対象になるには、子の合計所得金額が58万円以下であることが目安です。
                  給与収入だけなら、給与所得控除65万円を差し引くため、給与収入123万円までがひとつのラインです。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  なお、扶養控除はその年12月31日時点で16歳以上の扶養親族が対象です。高校生でも年齢によって扱いが変わる点に注意してください。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">130万円は社会保険の話</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  130万円は、主に健康保険などの被扶養者認定で使われる年収要件です。税金の123万円や160万円とは別の話です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  高校生バイトでは勤務時間が限られることも多いですが、年収が増える場合は、親の勤務先や加入している健康保険にも確認するのが安全です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">目安の整理</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["103万円", "過去によく使われた目安。現行ルールでは本人の所得税ラインとしては中心ではありません。"],
                    ["123万円", "親の扶養控除を守りたいときの重要ラインです。"],
                    ["130万円", "社会保険の被扶養者認定で確認するラインです。"],
                    ["160万円", "本人の所得税が発生するかを見る大きな目安です。"],
                  ].map(([income, note]) => (
                    <div key={income} className="grid grid-cols-[110px_1fr] border-t border-border px-4 py-3 first:border-t-0">
                      <span className="font-semibold text-foreground">{income}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" title="国税庁 扶養控除" description="扶養控除の対象年齢と合計所得金額の要件を確認できます。" />
                  <OfficialLink href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" title="国税庁 給与所得控除" description="令和7年分以後の給与所得控除65万円を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" title="日本年金機構 被扶養者認定の収入要件" description="19歳以上23歳未満の150万円未満要件も含め、社会保険の被扶養者認定の見直しを確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">高校生バイトの年収ラインを確認する</h3>
              <p className="text-sm text-muted-foreground">税金と社会保険を分けて見ると、家族で話しやすくなります。</p>
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
