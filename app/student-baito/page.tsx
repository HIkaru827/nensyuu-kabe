import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, CalendarCheck, ExternalLink } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudentAffiliateHub } from "@/components/student-affiliate-hub"
import { BreadcrumbStructuredData, FAQStructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, STUDENT_BAITO_PAGE } from "@/lib/seo"

const faqItems = [
  {
    question: "学生バイトはいくらまでなら親の扶養内ですか？",
    answer:
      "税金上の扶養では123万円前後、社会保険の扶養では130万円または150万円未満が目安になります。年齢や勤務条件で変わるため、シミュレーターで確認してください。",
  },
  {
    question: "19歳から22歳の学生は188万円まで大丈夫ですか？",
    answer:
      "188万円は特定親族特別控除を考えるときの上限目安です。親の控除は段階的に変わるため、単純に188万円まで何も影響がないわけではありません。",
  },
  {
    question: "有給で支払われた分も年収に入りますか？",
    answer:
      "有給で支払われる賃金も給与収入に含めて考えます。年末前に有給を使う場合も、年間収入の見込みを確認しておくと安心です。",
  },
]

export const metadata: Metadata = {
  title: STUDENT_BAITO_PAGE.title,
  description: STUDENT_BAITO_PAGE.description,
  keywords: [...STUDENT_BAITO_PAGE.keywords],
  alternates: {
    canonical: `${SITE_URL}${STUDENT_BAITO_PAGE.path}`,
  },
  openGraph: {
    title: STUDENT_BAITO_PAGE.title,
    description: STUDENT_BAITO_PAGE.description,
    url: `${SITE_URL}${STUDENT_BAITO_PAGE.path}`,
    siteName: SITE_NAME,
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "学生バイトはいくらまで稼げる？",
    description: "扶養・税金・社会保険・有給を学生バイト向けに整理します。",
    images: [DEFAULT_OG_IMAGE],
  },
}

const thresholdCards = [
  ["110万円", "住民税の所得割が気になり始める目安です。自治体ごとの差もあります。"],
  ["123万円", "親の税扶養を考えるときの大きな目安です。"],
  ["130万円", "社会保険の扶養を外れるか確認したいラインです。"],
  ["160万円", "本人の所得税を考えるときの新しい目安です。"],
  ["188万円", "19〜22歳の特定親族特別控除で確認したい上限目安です。"],
]

const articleLinks = [
  {
    href: "/blog/gakusei-baito-zeikin",
    title: "学生バイトの税金対策",
    text: "160万円・123万円・188万円の違いを整理します。",
  },
  {
    href: "/blog/130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？",
    text: "社会保険料と手取りの変化を確認できます。",
  },
  {
    href: "/blog/tokutei-fuyo",
    title: "特定親族特別控除とは？",
    text: "19〜22歳の学生がいる家庭向けの控除を解説します。",
  },
]

export default function StudentBaitoPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "学生バイト年収ガイド", url: `${SITE_URL}${STUDENT_BAITO_PAGE.path}` },
        ]}
      />
      <FAQStructuredData faqs={faqItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <article className="mx-auto max-w-5xl space-y-10">
          <section className="space-y-5 text-center">
            <p className="text-xs font-semibold text-primary">学生バイト向けガイド</p>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              学生バイトはいくらまで稼げる？
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              親の扶養、本人の税金、社会保険、有給は別々のルールで動きます。まずは主要な年収ラインを押さえて、シミュレーターで自分のケースを確認しましょう。
            </p>
            <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="flex-1">
                <Link href="/">
                  <Calculator className="mr-2 h-4 w-4" />
                  年収の壁を確認
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/paid-leave">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  有給を確認
                </Link>
              </Button>
            </div>
          </section>

          <section className="grid gap-3 md:grid-cols-5">
            {thresholdCards.map(([amount, text]) => (
              <Card key={amount}>
                <CardContent className="space-y-2 p-4">
                  <p className="text-2xl font-bold text-primary">{amount}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <Card>
            <CardContent className="space-y-6 p-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">最初に見るべき順番</h2>
                <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>1. 年収見込みを出して、123万円・130万円・160万円・188万円のどこに近いかを見る。</li>
                  <li>2. 週の勤務時間、月額賃金、勤務先規模を確認して、社会保険の可能性を見る。</li>
                  <li>3. 有給が発生している場合は、使った分も給与収入に含めて年収を見直す。</li>
                  <li>4. 年末前に親と共有し、シフトを抑えるか、しっかり働いて手取りを伸ばすか決める。</li>
                </ol>
              </section>

              <section className="grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-border bg-muted/30 p-4">
                  <h3 className="text-sm font-bold text-foreground">扶養内で抑えたい人</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    年収を早めに見積もり、繁忙期や有給取得分も含めて調整しましょう。掛け持ちバイトは合算で見ます。
                  </p>
                </div>
                <div className="rounded-md border border-border bg-muted/30 p-4">
                  <h3 className="text-sm font-bold text-foreground">しっかり稼ぎたい人</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    社会保険や親への影響を把握したうえで、時給が高い仕事や長く働きやすい職場を選ぶと判断しやすくなります。
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>

          <section className="grid gap-4 md:grid-cols-3">
            {articleLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="flex h-full flex-col justify-between gap-4 p-5">
                    <div className="space-y-2">
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      記事を読む
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </section>

          <StudentAffiliateHub />

          <Card className="bg-muted/40">
            <CardContent className="space-y-3 p-5">
              <h2 className="text-lg font-bold text-foreground">参考にした公的情報</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                制度の細かい判定は年度や家庭の状況で変わります。最終確認は税務署、自治体、勤務先、健康保険組合などで行ってください。
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁 扶養控除
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁 特定親族特別控除
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  厚生労働省 年次有給休暇Q&A
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
