import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "4月・5月・6月に働きすぎると9月から高くなる？学生バイトの税金と社会保険の違い",
  description:
    "「4月から6月に働きすぎると9月から高くなる」という話は、原則として税金ではなく社会保険料の話です。学生バイトにどこまで当てはまるかを、公的資料に基づいて整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/4-6gatsu-hatarakisugi",
  },
}

export default function AprilToJuneWorkTooMuchPage() {
  const url = "https://nenshuu-kabe.com/blog/4-6gatsu-hatarakisugi"

  return (
    <>
      <ArticleStructuredData
        title="4月・5月・6月に働きすぎると9月から高くなる？学生バイトの税金と社会保険の違い"
        description="「4月から6月に働きすぎると9月から高くなる」という話は、原則として税金ではなく社会保険料の話です。学生バイトにどこまで当てはまるかを、公的資料に基づいて整理します。"
        datePublished="2026-04-20T00:00:00Z"
        dateModified="2026-04-20T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "4月・5月・6月に働きすぎると9月から高くなる？", url },
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
              4月・5月・6月に働きすぎると9月から高くなる？
              <br />
              学生バイトの税金と社会保険の違い
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月20日時点の日本年金機構・国税庁の公的資料をもとに、学生目線で誤解のない形に整理しています。
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-amber-950">最初に結論</h2>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>「4月・5月・6月に働きすぎると9月から高くなる」という話は、原則として税金ではなく社会保険料の話です。</li>
                <li>日本年金機構の算定基礎届では、4月から6月の報酬をもとに、その年9月から翌年8月までの保険料の基礎を決めます。</li>
                <li>ただし、この話は勤務先で健康保険・厚生年金の被保険者になっている人の話です。</li>
                <li>学生バイトは短時間労働者の4要件では「学生でないこと」があるため、そのまま当てはまらないことも多いです。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">まず、「税金が高くなる」は原則として不正確</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  国税庁の案内では、所得税は1年間の所得金額から計算します。したがって、
                  4月、5月、6月だけ特別に切り出して、その3か月が多いから9月から税金が高くなる、という仕組みではありません。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  この話で実際に問題になることが多いのは、税金ではなく、健康保険や厚生年金の保険料です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">4月から6月の報酬で9月からの保険料の基礎が決まる</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  日本年金機構の算定基礎届では、事業主がその年の4月、5月、6月に支給した報酬を届け出ます。
                  その届出は、その年9月から翌年8月までの保険料や保険給付の額の基礎となる標準報酬月額を決めるためのものです。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、もし4月から6月に残業やシフト増で報酬が高くなれば、9月以降の社会保険料の基礎が上がることがあります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生バイトの多くは、その話がそのまま当てはまるとは限らない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  日本年金機構の短時間労働者の要件では、加入対象の条件のひとつに「学生でないこと」があります。
                  そのため、昼間学生のアルバイトでは、短時間労働者の4要件だけで直ちに健康保険・厚生年金の被保険者になるとは限りません。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ただし、ここで油断はできません。別のQ&Aでは、学生であっても4分の3基準を満たす場合は、
                  一般被保険者として健康保険・厚生年金の被保険者になると案内されています。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生目線では、こう考えると間違いにくい</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. まず「税金の話か、社会保険料の話か」を分ける。</li>
                    <li>2. 4月から6月の影響を気にするなら、原則として社会保険料の話だと考える。</li>
                    <li>3. 自分が勤務先の健康保険・厚生年金の被保険者かどうかを確認する。</li>
                    <li>4. 昼間学生でも、4分の3基準を満たす働き方なら対象になり得る点に注意する。</li>
                    <li>5. 税金は年間収入全体で考え、4月から6月だけで判断しない。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">こんな学生は特に確認したい</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>春学期にシフトを増やして、4月から6月の給与が急に上がった人</li>
                  <li>昼間学生ではない、または休学中・定時制・通信制などで扱いが通常と違う人</li>
                  <li>勤務時間や日数が、正社員の4分の3に近い人</li>
                  <li>勤務先から社会保険の加入や保険料の話をされた人</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink
                    href="https://www.nenkin.go.jp/shinsei/kounen/tekiyo/hoshu/20141225.html"
                    title="日本年金機構 算定基礎届"
                    description="4月、5月、6月の報酬をもとに、その年9月から翌年8月までの標準報酬月額を決める説明です。"
                  />
                  <OfficialLink
                    href="https://www.nenkin.go.jp/service/yougo/tagyo/tanjikanroudousha.html"
                    title="日本年金機構 短時間労働者"
                    description="短時間労働者の要件として、週20時間以上、月額8.8万円以上、学生でないこと等が示されています。"
                  />
                  <OfficialLink
                    href="https://www.nenkin.go.jp/section/faq/kounen/tekiyoukakudai/tanjikan/gakusei.html"
                    title="日本年金機構 学生でも4分の3基準なら被保険者になるQ&A"
                    description="学生でも4分の3基準を満たす場合は一般被保険者になると案内されています。"
                  />
                  <OfficialLink
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm"
                    title="国税庁 所得税のしくみ"
                    description="所得税は1年間の所得金額から計算することが示されています。"
                  />
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">自分のケースを落ち着いて確認する</h3>
              <p className="text-sm text-muted-foreground">
                「4月から6月に働きすぎると9月から税金が上がる」と聞いたら、まずは社会保険の話かどうかを確認しましょう。
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
