import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "掛け持ちバイトで扶養はどう判定する？収入の合算と見落としやすい点",
  description:
    "掛け持ちバイトで扶養判定を見るときの収入の合算方法と、103万円・123万円・130万円の違いを整理します。源泉徴収票が複数ある場合の見方もまとめています。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/kake-mochi-baito-fuyo",
  },
}

export default function KakeMochiBaitoFuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/kake-mochi-baito-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="掛け持ちバイトで扶養はどう判定する？収入の合算と見落としやすい点"
        description="掛け持ちバイトで扶養判定を見るときの収入の合算方法と、103万円・123万円・130万円の違いを整理します。源泉徴収票が複数ある場合の見方もまとめています。"
        datePublished="2026-04-15T00:00:00Z"
        dateModified="2026-04-15T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "掛け持ちバイトの扶養判定", url },
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
              掛け持ちバイトで扶養はどう判定する？
              <br />
              収入の合算と見落としやすい点
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月15日時点の公的資料を確認し、複数勤務先があるときの見方を整理しています。
            </p>
          </div>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-emerald-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-emerald-900">
                <li>掛け持ちバイトでは、勤務先ごとではなく年間の収入を合算して見るのが基本です。</li>
                <li>1社では103万円未満でも、2社合計で123万円や130万円を超えることがあります。</li>
                <li>税金、親の扶養、社会保険は基準が違うため、同じ合計収入でも影響の出方が異なります。</li>
                <li>年末調整を受けない勤務先があると、本人が確定申告や住民税の確認をする必要があります。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">掛け持ちで最初に誤解しやすい点</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  「A店では60万円、B店では50万円だから、それぞれは扶養内」という考え方は危険です。
                  実際には、その年に受け取る給与収入を合算して本人の税金や親の扶養判定を見るのが基本です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  1つ1つのバイト先だけを見ると壁を超えていないように見えても、合計で基準を超えるケースは珍しくありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">税金で見るなら123万円と160万円を分ける</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  本人の所得税は160万円、親の扶養控除は123万円が目安です。
                  掛け持ちだから特別な計算になるわけではなく、複数の給与収入を合算したうえで判定します。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  たとえば、2社の合計が125万円なら、親の扶養控除には影響し得ますが、本人の所得税はなお発生しない設計になることがあります。
                  ここを混同すると、必要以上にシフトを減らしてしまうことがあります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険は収入合算だけでは終わらない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  社会保険では、家族の被扶養者認定と、勤務先で自分が加入するかを分けて見ます。
                  被扶養者認定は年間収入の見込みが重要ですが、勤務先加入は週20時間や月額賃金、学生区分、企業規模なども関わります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、掛け持ちで130万円前後になる場合は、年収の合計だけでなく、各勤務先の働き方も整理しておく必要があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">実務で見落としやすいポイント</h2>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">源泉徴収票が2枚以上ある</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      年末時点で1社しか年末調整をしていないなら、他社分を含めて最終的な税額を確認する必要があります。
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">親は片方の収入しか知らない</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      家庭内で共有されていないと、親が扶養の前提を誤って認識したままになることがあります。早めの共有が大切です。
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">学生でも夜間や通信なら扱いが違う</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      社会保険の学生除外は一律ではないため、学校区分まで確認しないと判断を誤ることがあります。
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">掛け持ちの人向け確認リスト</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. すべての勤務先の年間収入見込みを合算する。</li>
                    <li>2. 123万円、160万円、130万円のどの基準に近いか整理する。</li>
                    <li>3. 年末調整をどの勤務先で受けるか確認する。</li>
                    <li>4. 社会保険は勤務条件と学生区分も合わせて確認する。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 給与所得者と確定申告</p>
                        <p className="text-xs text-muted-foreground">複数の給与がある場合の考え方を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 扶養控除</p>
                        <p className="text-xs text-muted-foreground">親の扶養控除の基本要件を確認できます。</p>
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
              <h3 className="text-xl font-bold text-foreground">合算した年収で試算する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターには、掛け持ち分を合計した年収を入れて全体像を確認できます。
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
