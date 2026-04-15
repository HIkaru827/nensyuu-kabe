import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "160万円の壁とは？現行ルールでわかる所得税・扶養・社会保険の違い",
  description: "160万円の壁の意味を、所得税、税法上の扶養、社会保険を分けて整理します。現行ルールに沿って確認できる範囲だけを解説しています。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/103man-no-kabe",
  },
}

export default function Blog103ManPage() {
  const url = "https://nenshuu-kabe.com/blog/103man-no-kabe"

  return (
    <>
      <ArticleStructuredData
        title="160万円の壁とは？現行ルールでわかる所得税・扶養・社会保険の違い"
        description="160万円の壁の意味を、所得税、税法上の扶養、社会保険を分けて整理します。現行ルールに沿って確認できる範囲だけを解説しています。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "160万円の壁とは？", url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              160万円の壁とは？現行ルールでわかる
              <br />
              所得税・扶養・社会保険の違い
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点で確認した国税庁・日本年金機構の公的情報に基づいて整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年4月15日"
            audience="160万円、123万円、188万円、社会保険の基準が混ざって分かりにくい人"
            sources="国税庁、日本年金機構"
            note="所得税、税法上の扶養、社会保険は基準が別です。この記事では数字ごとに論点を分けて説明しています。"
          />

          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="pt-6 space-y-3">
              <h2 className="text-lg font-bold text-emerald-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-emerald-900">
                <li>・ 「160万円の壁」は、主に所得税の話です</li>
                <li>・ 税法上の扶養判定の目安は、給与収入 123万円です</li>
                <li>・ 19歳以上23歳未満は、188万円以下で特定親族特別控除の対象になり得ます</li>
                <li>・ 社会保険は別ルールです。年収だけでは断定できません</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">160万円の壁は何が変わったのか</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  令和7年分以後の所得税では、給与所得控除の最低保障が 65万円になり、基礎控除も低所得帯では 95万円に引き上げられています。
                  この2つを合わせると、給与収入ベースで 160万円まで所得税が発生しない設計になります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、これはあくまで <strong className="text-foreground">所得税</strong> の話です。
                  親の扶養判定や社会保険まで 160万円にそろって変わったわけではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">税法上の扶養は 123万円が目安</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  扶養控除の判定は、扶養される人の合計所得金額で見ます。令和7年分からはこの基準が 58万円以下となるため、
                  給与収入だけなら目安は <strong className="text-foreground">123万円以下</strong> です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  つまり、160万円まで所得税が発生しなくても、税法上の扶養判定は 123万円を境に別で見直す必要があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">19歳以上23歳未満は 188万円まで段階控除の対象になり得る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  19歳以上23歳未満の親族等については、令和7年分以後の所得税で特定親族特別控除が導入されています。
                  合計所得金額が 123万円以下、給与収入だけなら <strong className="text-foreground">188万円以下</strong> の範囲で、段階的に控除の対象になり得ます。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ここは「123万円を超えたら即ゼロ」ではなく、年齢要件に当てはまるかで扱いが変わる点が重要です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険は別ルール</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  社会保険の被扶養者認定や短時間労働者への適用は、所得税とは別の基準です。
                  現在は、被扶養者認定の年間収入要件が原則 130万円未満、19歳以上23歳未満の方は 2025年10月1日以降の認定分から 150万円未満に変わっています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  また、短時間労働者への適用は、年収 106万円という数字そのものではなく、週20時間以上、所定内賃金月額 8.8万円以上、学生でないこと、51人以上企業などの条件で見ます。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">見方の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 所得税を見るなら 160万円ラインを確認する</li>
                    <li>2. 親の税法上の扶養を見るなら 123万円、19歳以上23歳未満なら 188万円まで確認する</li>
                    <li>3. 社会保険は年収だけで決めず、被扶養者認定と短時間労働者要件を分けて確認する</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 給与所得控除</p>
                        <p className="text-xs text-muted-foreground">給与所得控除 65万円の根拠</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 基礎控除</p>
                        <p className="text-xs text-muted-foreground">低所得帯で 95万円になる基礎控除の根拠</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 扶養控除</p>
                        <p className="text-xs text-muted-foreground">扶養判定の 123万円目安の前提</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 特定親族特別控除</p>
                        <p className="text-xs text-muted-foreground">19歳以上23歳未満の 188万円ラインの根拠</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="pt-6 text-center space-y-4">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">今の年収で整理する</h3>
              <p className="text-sm text-muted-foreground">
                所得税、税法上の扶養、社会保険の確認ポイントを分けて見られます。
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
