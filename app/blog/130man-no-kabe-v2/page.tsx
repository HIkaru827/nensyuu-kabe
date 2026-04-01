import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "130万円を超えるとどうなるか。被扶養者認定と勤務先加入を分けて確認",
  description:
    "130万円を超えたときに何が起きるかを、被扶養者認定と勤務先での社会保険加入に分けて整理します。106万円だけでは判定できない点、学生や19歳以上23歳未満の扱いも現行ルールで説明します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/130man-no-kabe-v2",
  },
}

export default function Blog130ManV2Page() {
  const url = "https://nenshuu-kabe.com/blog/130man-no-kabe-v2"

  return (
    <>
      <ArticleStructuredData
        title="130万円を超えるとどうなるか。被扶養者認定と勤務先加入を分けて確認"
        description="130万円を超えたときに何が起きるかを、被扶養者認定と勤務先での社会保険加入に分けて整理します。106万円だけでは判定できない点、学生や19歳以上23歳未満の扱いも現行ルールで説明します。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "130万円を超えるとどうなるか", url },
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
              130万円を超えるとどうなるか
              <br />
              被扶養者認定と勤務先加入を分けて確認
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点の公的資料に合わせて、年収だけでは断定できない点を明示して説明しています。
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-amber-950">結論</h2>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>130万円を超えると、家族の社会保険の被扶養者認定から外れる可能性があります。</li>
                <li>ただし、その後に自分で社会保険へ加入するかどうかは、勤務条件や勤務先規模など別の判定が必要です。</li>
                <li>19歳以上23歳未満は、被扶養者認定の年収要件が150万円未満です。</li>
                <li>学生は短時間労働者の加入判定で例外になることがあり、年収だけでは結論を出せません。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">まず分けるべき2つの論点</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  130万円を超えたときは、次の2つを分けて考えます。ひとつは家族の健康保険などで被扶養者のままでいられるかどうか。
                  もうひとつは、自分の勤務先で社会保険に加入する条件を満たすかどうかです。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  この2つは似ているようで、根拠条文も実務判断も同じではありません。ここを混同すると、誤った説明になりやすいです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">被扶養者認定では130万円未満が基本</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一般的な説明では、被扶養者認定の年間収入要件は130万円未満です。したがって、通常は130万円を超えると、
                  扶養認定の見直し対象になります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、19歳以上23歳未満は2025年10月1日以後、年間収入要件が150万円未満へ見直されています。
                  この年齢帯では、130万円を超えたから直ちに扶養から外れると決めつけるのは正確ではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">勤務先で自分が加入するかは別判定</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  被扶養者から外れる可能性があるとしても、そのまま自動で勤務先の社会保険に加入するとは限りません。
                  短時間労働者の加入は、週20時間以上、月額賃金8.8万円以上、学生でないこと、勤務先規模などを確認します。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ここでよく使われる106万円という数字は、月額賃金8.8万円を年額換算した通称にすぎません。
                  日本年金機構も、106万円そのものではなく月額賃金などの条件で見ていると案内しています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生は特に年収だけで断定しない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  学生アルバイトは、短時間労働者の加入要件で「学生でないこと」が置かれているため、一般の短時間労働者と同じ扱いではありません。
                  ただし、夜間学生や休学中など個別条件があり、学生であれば常に例外と決めつけるのも危険です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、学生のケースでは、年収だけで判断せず、日本年金機構の学生区分の案内を先に確認する方が安全です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/shutokuyouken.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 短時間労働者の取得要件</p>
                        <p className="text-xs text-muted-foreground">勤務先で加入対象になる条件を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/gakusei02.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 学生の扱い</p>
                        <p className="text-xs text-muted-foreground">昼間学生、夜間学生、休学中などの扱いを確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 19歳以上23歳未満の被扶養者認定</p>
                        <p className="text-xs text-muted-foreground">2025年10月1日以後の150万円未満要件が確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">年収だけで断定しない前提で確認する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、追加条件が必要な箇所は断定せず、公的情報を確認する導線にしています。
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
