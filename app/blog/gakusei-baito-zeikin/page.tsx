import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "学生バイトの税金。160万円・123万円・社会保険を分けて確認",
  description:
    "学生アルバイトの税金と扶養判定を、160万円、123万円、19歳以上23歳未満の188万円、社会保険のルールに分けて整理します。年収だけで断定しにくい点も含めて、現行法ベースで説明します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/gakusei-baito-zeikin",
  },
}

export default function GakuseiZeikinPage() {
  const url = "https://nenshuu-kabe.com/blog/gakusei-baito-zeikin"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトの税金。160万円・123万円・社会保険を分けて確認"
        description="学生アルバイトの税金と扶養判定を、160万円、123万円、19歳以上23歳未満の188万円、社会保険のルールに分けて整理します。年収だけで断定しにくい点も含めて、現行法ベースで説明します。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトの税金", url },
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
              学生バイトの税金
              <br />
              160万円・123万円・社会保険を分けて確認
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点の公的資料に基づき、学生アルバイトで確認すべき順番を整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年4月15日"
            audience="学生バイトの税金と扶養をざっくりではなく正確に見たい人"
            sources="国税庁、日本年金機構"
            note="本人の税金、親の扶養、社会保険はそれぞれ基準が違います。この記事では学生向けに確認順をそろえています。"
          />

          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-emerald-950">先に要点</h2>
              <ul className="space-y-2 text-sm text-emerald-900">
                <li>学生本人の所得税は、給与収入160万円までなら発生しない設計です。</li>
                <li>親の扶養控除は、原則として給与収入123万円までが目安です。</li>
                <li>19歳以上23歳未満は、給与収入188万円まで特定親族特別控除の対象になり得ます。</li>
                <li>社会保険は別判定です。学生区分や勤務条件を見ないと結論を出せません。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生本人の所得税は160万円を基準に確認する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  給与所得者の所得税では、給与所得控除の最低額65万円と、基礎控除などを踏まえると、
                  給与収入160万円までは所得税が発生しない設計です。ここは学生かどうかにかかわらず、まず本人の税金を見る基準になります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">親の扶養控除は123万円が基本</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の税金で扶養控除の対象になるかを見るときは、子の合計所得金額が58万円以下かどうかを見ます。
                  給与収入だけなら、給与所得控除65万円を差し引いた後の所得で判定するため、給与収入123万円がひとつの目安です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">19歳以上23歳未満は188万円まで段階的な控除があり得る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  19歳以上23歳未満の子については、2025年分以後、特定親族特別控除が創設されています。
                  給与収入123万円を超えても、188万円までの範囲であれば、親が段階的な控除を受けられる可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、控除額は一律ではありません。収入帯ごとに段階的に変わるため、雑な概算金額で「親の税金がいくら増える」と断定するのは避けるべきです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">社会保険は学生区分も確認が必要</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  社会保険は税金とは別です。短時間労働者の加入では、週20時間以上、月額賃金8.8万円以上、学生でないこと、勤務先規模などを見ます。
                  そのため、学生バイトでは年収だけで社会保険加入を断定できません。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  また、家族の健康保険の被扶養者認定は別に確認が必要です。19歳以上23歳未満は、2025年10月1日から年間収入要件が150万円未満になっています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 本人の所得税を見るなら、まず160万円を確認する。</li>
                    <li>2. 親の扶養控除を見るなら、まず123万円を確認する。</li>
                    <li>3. 19歳以上23歳未満なら、188万円までの特定親族特別控除を追加で確認する。</li>
                    <li>4. 社会保険は別に、学生区分と勤務条件を確認する。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">国税庁 給与所得控除</p>
                        <p className="text-xs text-muted-foreground">給与所得控除65万円のルールを確認できます。</p>
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
                        <p className="text-xs text-muted-foreground">19歳以上23歳未満の188万円までの段階的控除を確認できます。</p>
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
                        <p className="text-xs text-muted-foreground">社会保険で学生をどう扱うかの確認に使えます。</p>
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
              <h3 className="text-xl font-bold text-foreground">現行法ベースでシミュレーターを見る</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、学生のケースでも年収だけで断定できる範囲だけを表示しています。
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
