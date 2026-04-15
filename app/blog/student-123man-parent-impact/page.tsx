import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "学生が123万円を超えたら親に何が起きる？扶養控除と特定親族特別控除を整理",
  description:
    "学生の給与収入が123万円を超えたときに、親の税金へどんな影響が出るかをケース別に整理します。19歳以上23歳未満の特定親族特別控除も現行ルールで確認できます。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/student-123man-parent-impact",
  },
}

export default function Student123ManParentImpactPage() {
  const url = "https://nenshuu-kabe.com/blog/student-123man-parent-impact"

  return (
    <>
      <ArticleStructuredData
        title="学生が123万円を超えたら親に何が起きる？扶養控除と特定親族特別控除を整理"
        description="学生の給与収入が123万円を超えたときに、親の税金へどんな影響が出るかをケース別に整理します。19歳以上23歳未満の特定親族特別控除も現行ルールで確認できます。"
        datePublished="2026-04-15T00:00:00Z"
        dateModified="2026-04-15T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "123万円を超えたら親に何が起きるか", url },
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
              学生が123万円を超えたら親に何が起きる？
              <br />
              扶養控除と特定親族特別控除を整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月15日時点の公的資料を確認し、親目線で起きる変化をケース別にまとめています。
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-blue-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>子どもの給与収入が123万円を超えると、親の扶養控除は原則そのままでは見られません。</li>
                <li>ただし、19歳以上23歳未満なら188万円まで特定親族特別控除が段階的に残る可能性があります。</li>
                <li>親の負担増は一律ではなく、子どもの年齢帯と親の税率で差が出ます。</li>
                <li>123万円を少し超えたからといって、必ずしも大きな働き損になるとは限りません。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">まず分けるべきは「本人の税金」と「親の税金」</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  子どもの年収が123万円を超える話では、本人の所得税と、親の扶養控除の話が混ざりやすいです。
                  本人の所得税は160万円を基準に見ることが多い一方で、親の扶養控除は123万円が目安です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、123万円を超えたら直ちに「本人の手取りが大きく減る」と理解するとズレが出ます。
                  実際には、親の税負担がどう変わるかを別で見る必要があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">19歳未満や23歳以上は扶養控除の外れ方が大きい</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一般の扶養控除では、子どもの合計所得金額が58万円を超えると、親は扶養控除を受けにくくなります。
                  給与収入だけなら、123万円を超えるとそのラインを上回るため、親の所得税や住民税が増える可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  この年齢帯では、123万円を少し超えた段階から親への影響が出やすいので、シフトを増やす前に家族で共有しておくと誤解が起こりにくくなります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">19歳以上23歳未満は新しい特例を必ず確認する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  19歳以上23歳未満では、2025年分以後に特定親族特別控除が創設されました。
                  この年齢帯は、給与収入123万円を超えても188万円までの範囲で親の控除が段階的に残る可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  つまり、大学生が123万円を少し超えたからといって、すぐに親の税負担が最大まで跳ね上がるわけではありません。
                  実際には段階的な変化なので、旧ルールだけで判断しないことが大切です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">よくある3つのケース</h2>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">ケース1: 高校生が123万円を少し超える</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      親の一般の扶養控除に影響しやすいケースです。本人の税金より先に、親の税額がどう変わるかを確認する価値があります。
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">ケース2: 20歳の大学生が130万円前後になる</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      税法上は特定親族特別控除の対象になり得る一方で、社会保険では150万円未満要件や勤務条件の確認も必要です。
                      親の税金と社会保険の論点を分けて考える必要があります。
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="text-base font-bold text-foreground">ケース3: 22歳で180万円近くまで働く</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      特定親族特別控除の上限が近いので、親の控除額がかなり小さくなる可能性があります。
                      ただし本人の収入も増えるため、家計全体で見てどうするかを検討する局面です。
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">家族で共有しておきたい確認順</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 子どもの年齢が19歳以上23歳未満に当たるか確認する。</li>
                    <li>2. 123万円を超えるか、188万円に近づくかを見る。</li>
                    <li>3. 親の税率や家計への影響をシミュレーターで概算する。</li>
                    <li>4. 社会保険は別に、150万円未満要件や勤務条件を確認する。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 扶養控除</p>
                        <p className="text-xs text-muted-foreground">扶養控除の基本要件を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 特定親族特別控除</p>
                        <p className="text-xs text-muted-foreground">19歳以上23歳未満の新しい控除を確認できます。</p>
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
              <h3 className="text-xl font-bold text-foreground">親への影響も含めて試算する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターの詳細版では、親の税率を入れて家計への影響を概算できます。
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
