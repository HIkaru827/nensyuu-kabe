import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "19歳から22歳の学生はいくらまで稼げる？特定親族特別控除と社会保険の注意点",
  description:
    "19歳から22歳の学生がアルバイトでいくらまで稼げるかを、特定親族特別控除、123万円、188万円、社会保険の150万円未満要件に分けて整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/gakusei-19-22-fuyo",
  },
}

export default function Gakusei1922FuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/gakusei-19-22-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="19歳から22歳の学生はいくらまで稼げる？特定親族特別控除と社会保険の注意点"
        description="19歳から22歳の学生がアルバイトでいくらまで稼げるかを、特定親族特別控除、123万円、188万円、社会保険の150万円未満要件に分けて整理します。"
        datePublished="2026-04-09T00:00:00Z"
        dateModified="2026-04-09T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "19歳から22歳の学生はいくらまで稼げる？", url },
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
              19歳から22歳の学生はいくらまで稼げる？
              <br />
              特定親族特別控除と社会保険の注意点
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月9日時点の公的資料に基づき、19歳以上23歳未満の学生が確認すべき基準を整理しています。
            </p>
          </div>

          <Card className="border-violet-200 bg-violet-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-violet-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-violet-900">
                <li>親の通常の扶養控除は、給与収入123万円までが目安です。</li>
                <li>19歳以上23歳未満は、123万円超〜188万円で特定親族特別控除が段階適用され得ます。</li>
                <li>本人の所得税は、給与収入160万円までなら発生しない設計です。</li>
                <li>社会保険の被扶養者認定では、令和7年10月1日以後、150万円未満要件も確認します。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">対象は「その年12月31日時点」で見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定親族特別控除の対象になるかは、年齢19歳以上23歳未満の親族かどうかが重要です。
                  年齢は税金や社会保険で判定時点が関わるため、誕生日だけで雑に判断せず、対象年の基準日を確認します。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">123万円を超えてもすぐゼロとは限らない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  通常の扶養控除は給与収入123万円が目安です。ただし、19歳以上23歳未満では、123万円を超えても188万円までなら、
                  親が特定親族特別控除を受けられる可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  控除額は、子の合計所得金額に応じて段階的に変わります。188万円まで満額で維持される、という意味ではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">160万円は本人の所得税の目安</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  本人の所得税では、給与収入160万円までなら所得税が発生しない設計です。
                  ただし、親の控除や社会保険の判定は別なので、160万円だけを見て判断するとズレます。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険は150万円未満も確認する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  日本年金機構の案内では、扶養認定日が令和7年10月1日以後で、扶養認定を受ける人が19歳以上23歳未満の場合、
                  被扶養者認定の年間収入要件は150万円未満に見直されています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  これは税金の特定親族特別控除とは別の話です。税金では188万円まで段階控除があっても、社会保険では150万円未満を確認する場面があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">目安の整理</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    ["123万円", "親の通常の扶養控除の目安です。"],
                    ["150万円未満", "19歳以上23歳未満の社会保険の被扶養者認定で確認する場面があります。"],
                    ["160万円", "本人の所得税が発生するかを見る目安です。"],
                    ["188万円", "特定親族特別控除が段階適用され得る上限の目安です。"],
                  ].map(([income, note]) => (
                    <div key={income} className="grid grid-cols-[120px_1fr] border-t border-border px-4 py-3 first:border-t-0">
                      <span className="font-semibold text-foreground">{income}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" title="国税庁 特定親族特別控除" description="19歳以上23歳未満と188万円までの段階控除を確認できます。" />
                  <OfficialLink href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" title="国税庁 扶養控除" description="通常の扶養控除と16歳以上の控除対象扶養親族を確認できます。" />
                  <OfficialLink href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html" title="日本年金機構 19歳以上23歳未満の被扶養者認定" description="令和7年10月1日以後の150万円未満要件を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">19歳から22歳の年収ラインを確認する</h3>
              <p className="text-sm text-muted-foreground">123万円、150万円、160万円、188万円を分けて確認しましょう。</p>
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
