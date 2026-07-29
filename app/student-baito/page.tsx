import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, CalendarCheck, ExternalLink, Sparkles } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudentAffiliateHub } from "@/components/student-affiliate-hub"
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BAITO_REALITY_ARTICLES } from "@/lib/baito-reality"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, STUDENT_BAITO_PAGE } from "@/lib/seo"

const faqItems = [
  {
    question: "大学生はいくらまでなら親の扶養内ですか？",
    answer:
      "その年の12月31日時点で19歳以上23歳未満なら、親の所得税の控除を満額残す給与収入の目安は159万円以下、健康保険の扶養は150万円未満です。両方を維持したい場合は150万円未満を先に確認します。年齢が範囲外なら健康保険は原則130万円未満を確認します。",
  },
  {
    question: "大学生の年収の壁は103万円のままですか？",
    answer:
      "103万円だけを見るのは現行制度に合いません。2026年分では、本人の所得税178万円、通常の税扶養136万円、19歳以上23歳未満の特定親族特別控除159万円・197万円、健康保険130万円未満・150万円未満を分けて確認します。",
  },
  {
    question: "大学生が130万円を超えると必ず扶養から外れますか？",
    answer:
      "必ずではありません。健康保険では19歳以上23歳未満の年間収入要件が150万円未満に見直されています。一方、年齢が範囲外の場合や勤務先の社会保険加入条件に該当する場合は扱いが異なるため、加入中の健康保険と勤務先への確認が必要です。",
  },
  {
    question: "19歳から22歳の学生は197万円まで大丈夫ですか？",
    answer:
      "197万円は特定親族特別控除の上限目安です。親の所得税の控除は159万円以下なら満額、159万円を超えると段階的に減ります。健康保険の扶養は150万円未満が目安なので、197万円まで何も影響がないわけではありません。",
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
  ["119万円", "住民税の所得割が気になり始める目安です。自治体ごとの差もあります。"],
  ["130万円未満", "19〜22歳以外で、健康保険の扶養を確認する基本の目安です。"],
  ["136万円", "通常の扶養控除を考えるときの給与収入の目安です。"],
  ["150万円未満", "19〜22歳の健康保険の被扶養者認定で確認する目安です。"],
  ["159万円", "19〜22歳で親の所得税の控除が満額となる給与収入の目安です。"],
  ["178万円", "本人の所得税を考えるときの新しい目安です。"],
  ["197万円", "19〜22歳の特定親族特別控除で確認したい上限目安です。"],
]

const quickAnswerRows = [
  {
    goal: "親の税控除と健康保険の扶養を両方維持",
    age: "19〜22歳",
    amount: "150万円未満",
    note: "健康保険の収入要件を先に確認します。",
  },
  {
    goal: "親の所得税の控除を満額維持",
    age: "19〜22歳",
    amount: "159万円以下",
    note: "特定親族特別控除が満額となる目安です。",
  },
  {
    goal: "親の税控除と健康保険の扶養を両方維持",
    age: "19〜22歳以外",
    amount: "130万円未満",
    note: "健康保険の基本的な収入要件を先に確認します。",
  },
  {
    goal: "本人の所得税を0円に抑える",
    age: "年齢共通",
    amount: "178万円以下",
    note: "給与収入のみで、ほかの所得控除条件を標準化した目安です。",
  },
] as const

const articleLinks = [
  {
    href: "/blog/2026-student-income-wall",
    title: "2026年の学生バイト年収の壁",
    text: "119万円・136万円・150万円未満・159万円・178万円・197万円を一覧で整理します。",
  },
  {
    href: "/blog/gakusei-baito-zeikin",
    title: "学生バイトの税金対策",
    text: "178万円・136万円・159万円・197万円の違いを整理します。",
  },
  {
    href: "/blog/130man-no-kabe-v2",
    title: "130万円の壁を超えるとどうなる？",
    text: "社会保険料と手取りの変化を確認できます。",
  },
  {
    href: "/blog/student-baito-shift-checklist",
    title: "シフト調整チェックリスト",
    text: "年末までの給与・扶養・有給の見方を整理します。",
  },
  {
    href: "/blog/weekly-20hours-social-insurance",
    title: "週20時間と社会保険",
    text: "学生区分、月8.8万円、勤務先規模の見方を整理します。",
  },
  {
    href: "/blog/baito-yukyu-kyuryo",
    title: "バイト有給の給料",
    text: "通常賃金・平均賃金・標準報酬日額の違いを整理します。",
  },
  {
    href: "/blog/tokutei-fuyo",
    title: "特定親族特別控除とは？",
    text: "19〜22歳の学生がいる家庭向けの控除を解説します。",
  },
]

const baitoRealityLinks = BAITO_REALITY_ARTICLES.slice(0, 4).map((article) => ({
  href: `/blog/${article.slug}`,
  title: article.jobName,
  text: article.catchCopy,
}))

export default function StudentBaitoPage() {
  return (
    <>
      <ArticleStructuredData
        title={STUDENT_BAITO_PAGE.title}
        description={STUDENT_BAITO_PAGE.description}
        datePublished="2026-04-09T00:00:00Z"
        dateModified="2026-07-30T00:00:00Z"
        url={`${SITE_URL}${STUDENT_BAITO_PAGE.path}`}
        section="大学生の年収の壁・扶養"
        keywords={STUDENT_BAITO_PAGE.keywords}
        about={["大学生", "年収の壁", "親の扶養", "特定親族特別控除", "社会保険"]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "大学生の年収の壁・扶養ガイド", url: `${SITE_URL}${STUDENT_BAITO_PAGE.path}` },
        ]}
      />
      <FAQStructuredData faqs={faqItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <article className="mx-auto max-w-5xl space-y-10">
          <section className="space-y-5 text-center">
            <p className="text-xs font-semibold text-primary">2026年版・大学生バイト向け</p>
            <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-5xl">
              大学生の年収の壁はいくら？
              <br />
              親の扶養と税金を整理
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              大学生の扶養は1本の金額では決まりません。19〜22歳なら、健康保険は150万円未満、親の所得税の控除は159万円以下、
              本人の所得税は178万円以下が主な目安です。
            </p>
            <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-3">
              <Button asChild size="lg" className="flex-1">
                <Link href="/">
                  <Calculator className="mr-2 h-4 w-4" />
                  あといくら稼げるか確認
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/paid-leave">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  有給を確認
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/baito-type-diagnosis">
                  <Sparkles className="mr-2 h-4 w-4" />
                  バイト診断
                </Link>
              </Button>
            </div>
          </section>

          <section className="space-y-5 border-y border-border py-7" aria-labelledby="quick-answer-title">
            <div className="space-y-2">
              <h2 id="quick-answer-title" className="text-2xl font-bold text-foreground">
                大学生はいくらまでなら親の扶養内？
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                その年の12月31日時点の年齢と、守りたい扶養の種類で答えが変わります。
                「税金上の扶養」と「健康保険の扶養」を分けて確認してください。
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {quickAnswerRows.map((row) => (
                <div
                  key={`${row.goal}-${row.age}`}
                  className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1.5fr)_110px_120px] sm:items-center"
                >
                  <div>
                    <p className="text-sm font-bold text-foreground">{row.goal}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{row.note}</p>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">{row.age}</p>
                  <p className="text-lg font-bold text-primary">{row.amount}</p>
                </div>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              健康保険の被扶養者認定は、今後の年間収入見込みや生計維持関係なども保険者が確認します。
            </p>
          </section>

          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {thresholdCards.map(([amount, text]) => (
              <Card key={amount}>
                <CardContent className="space-y-2 p-4">
                  <p className="text-2xl font-bold text-primary">{amount}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="space-y-5" aria-labelledby="dependent-types-title">
            <div className="space-y-2">
              <h2 id="dependent-types-title" className="text-2xl font-bold text-foreground">
                大学生の扶養には2種類ある
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                検索でよく見る「扶養から外れる」は、親の税金と健康保険を混ぜて使われがちです。
                実際には判定方法も手続き先も異なります。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-foreground">税金上の扶養</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  親の所得税・住民税の控除に関係します。通常の扶養控除は136万円以下が目安ですが、
                  19〜22歳は特定親族特別控除により159万円以下まで親の所得税の控除が満額となる可能性があります。
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-foreground">健康保険の扶養</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  医療保険の被扶養者認定に関係します。原則130万円未満、
                  19〜22歳は2025年10月1日以後の認定で150万円未満が収入要件の目安です。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">「103万円の壁」だけでは判断できない</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              103万円は以前から広く使われてきた言い方ですが、2026年分の大学生バイトを判断するには不十分です。
              本人の住民税、親の税控除、健康保険、本人の所得税を、それぞれ119万円・130万円未満・136万円・
              150万円未満・159万円・178万円・197万円に分けて確認します。
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              今年すでに受け取った給与がある場合は、シミュレーターの「今年の給与から計算」で、
              年末見込みと各ラインまでの残額を確認できます。
            </p>
          </section>

          <Card>
            <CardContent className="space-y-6 p-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">最初に見るべき順番</h2>
                <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    1. 年収見込みを出して、119万円・130万円未満・136万円・150万円未満・159万円・178万円・197万円のどこに近いかを見る。
                  </li>
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

          <section className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">バイト選びから考える</p>
              <h2 className="text-2xl font-bold text-foreground">職種ごとの働き方も見る</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                扶養や年収の壁は、時給とシフトの組み方で変わります。まずは職種ごとの働き方を見比べて、続けやすい候補を探しましょう。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {baitoRealityLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="h-full transition-colors hover:border-primary">
                    <CardContent className="flex h-full flex-col justify-between gap-4 p-5">
                      <div className="space-y-2">
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                      <span className="inline-flex items-center text-sm font-semibold text-primary">
                        記事を見る
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  href="https://www.nta.go.jp/users/gensen/2026kiso/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁 令和8年度税制改正
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁 源泉所得税の改正のあらまし
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  日本年金機構 短時間労働者の適用要件
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.mhlw.go.jp/new-info/kobetu/roudou/gyousei/dl/140811-3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  厚生労働省 年次有給休暇の付与日数
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
