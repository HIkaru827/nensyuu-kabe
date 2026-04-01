import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "特定親族特別控除とは何か。19歳以上23歳未満の新ルールを整理",
  description:
    "特定親族特別控除は、19歳以上23歳未満の子の給与収入が123万円を超えても188万円までなら、親が段階的に控除を受けられる制度です。扶養控除との違いと見方を現行法で整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/tokutei-fuyo",
  },
}

export default function TokuteiFuyoPage() {
  const url = "https://nenshuu-kabe.com/blog/tokutei-fuyo"

  return (
    <>
      <ArticleStructuredData
        title="特定親族特別控除とは何か。19歳以上23歳未満の新ルールを整理"
        description="特定親族特別控除は、19歳以上23歳未満の子の給与収入が123万円を超えても188万円までなら、親が段階的に控除を受けられる制度です。扶養控除との違いと見方を現行法で整理します。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "特定親族特別控除とは何か", url },
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
              特定親族特別控除とは何か
              <br />
              19歳以上23歳未満の新ルールを整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点の国税庁資料に基づき、特定親族特別控除の見方を整理しています。
            </p>
          </div>

          <Card className="border-violet-200 bg-violet-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-violet-950">先に要点</h2>
              <ul className="space-y-2 text-sm text-violet-900">
                <li>対象は主に19歳以上23歳未満の親族です。</li>
                <li>給与収入123万円までは通常の扶養控除の判定帯です。</li>
                <li>123万円を超えても188万円までなら、親が段階的に控除を受けられる可能性があります。</li>
                <li>控除額は一律ではなく、収入帯ごとに変わります。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">通常の扶養控除と何が違うか</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  通常の扶養控除では、扶養される子の合計所得金額が58万円以下かどうかを見ます。給与収入だけなら、給与所得控除65万円を差し引くため、
                  給与収入123万円がひとつの目安になります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定親族特別控除は、その123万円を少し超えたからといって直ちに親の控除がゼロになるのを避けるための制度です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">19歳以上23歳未満は188万円まで対象になり得る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  国税庁の案内では、19歳以上23歳未満の親族について、給与収入123万円超188万円以下の範囲で、
                  親が特定親族特別控除の対象になる可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ここで大事なのは、188万円までなら常に同じ控除額ではないことです。収入帯に応じて控除額が段階的に減るため、
                  単純化しすぎた説明や固定額の損得表示は避けるべきです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">本人の税金や社会保険とは別に見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  特定親族特別控除は、親の所得税や住民税の控除の話です。本人の所得税がいつ発生するか、社会保険に入るかどうかとは別の論点です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  実務では、本人の所得税は160万円、親の通常の扶養控除は123万円、19歳以上23歳未満の特定親族特別控除は188万円、
                  社会保険は別条件、と切り分けて見る方が誤解が少なくなります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 親の通常の扶養控除を見たいなら、まず123万円を確認する。</li>
                    <li>2. 対象者が19歳以上23歳未満かどうかを確認する。</li>
                    <li>3. 123万円を超えているなら、188万円までの特定親族特別控除を確認する。</li>
                    <li>4. 本人の税金や社会保険は別の基準で見る。</li>
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
                        <p className="text-xs text-muted-foreground">通常の扶養控除の要件と基礎を確認できます。</p>
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
                        <p className="text-xs text-muted-foreground">対象年齢、188万円までの範囲、段階的な控除額を確認できます。</p>
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
              <h3 className="text-xl font-bold text-foreground">19歳以上23歳未満の判定を安全側で確認する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、123万円と188万円の関係を、年収だけで確認できる範囲で表示しています。
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
