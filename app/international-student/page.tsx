import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ExternalLink, Globe2, ShieldCheck } from "lucide-react"
import { IncomeSimulator } from "@/components/income-simulator"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
  InternationalStudentSimulatorStructuredData,
} from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  createPageMetadata,
  INTERNATIONAL_STUDENT_PAGE,
  SITE_URL,
} from "@/lib/seo"

export const metadata: Metadata = {
  ...createPageMetadata(INTERNATIONAL_STUDENT_PAGE),
  keywords: [...INTERNATIONAL_STUDENT_PAGE.keywords],
}

const faqItems = [
  {
    question: "留学生にも年収の壁はありますか？",
    answer:
      "本人の税金や健康保険には年収による基準があります。ただし在留資格が「留学」の人は、通常の授業期間に掛け持ち合計で週28時間以内という資格外活動許可の条件を先に確認します。",
  },
  {
    question: "留学生の週28時間はアルバイト先ごとですか？",
    answer:
      "アルバイト先ごとではなく、掛け持ちしたすべての勤務先の合計です。学校が定める長期休業期間は1日8時間以内ですが、在留カードや許可書に記載された条件を優先します。",
  },
  {
    question: "留学生にも150万円の壁が適用されますか？",
    answer:
      "日本で働く家族の健康保険の被扶養者になっている19歳以上23歳未満の人には、150万円未満の収入要件が関係します。親が海外にいて日本の家族の健康保険扶養に入っていない場合、この基準は通常の確認対象ではありません。",
  },
  {
    question: "留学生のアルバイト税金はいくらですか？",
    answer:
      "日本の税法上の居住者か非居住者か、国籍、租税条約の内容で変わります。このページのシミュレーターは日本の税法上の居住者で租税条約を適用しない場合の概算です。",
  },
] as const

const priorityChecks = [
  {
    number: "01",
    title: "資格外活動許可",
    text: "在留カード裏面または資格外活動許可書で、アルバイトが許可されているか確認します。",
  },
  {
    number: "02",
    title: "掛け持ち合計の時間",
    text: "通常の授業期間は、すべての勤務先を合計して週28時間以内か確認します。",
  },
  {
    number: "03",
    title: "税金と健康保険",
    text: "居住者区分、租税条約、日本国内の家族の健康保険扶養を分けて確認します。",
  },
] as const

export default function InternationalStudentPage() {
  const pageUrl = `${SITE_URL}${INTERNATIONAL_STUDENT_PAGE.path}`

  return (
    <>
      <ArticleStructuredData
        title={INTERNATIONAL_STUDENT_PAGE.title}
        description={INTERNATIONAL_STUDENT_PAGE.description}
        datePublished="2026-08-17T00:00:00Z"
        dateModified="2026-08-17T00:00:00Z"
        url={pageUrl}
        section="留学生アルバイト"
        keywords={INTERNATIONAL_STUDENT_PAGE.keywords}
        about={["外国人留学生", "資格外活動許可", "週28時間", "アルバイト税金"]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "留学生アルバイトの週28時間・税金", url: pageUrl },
        ]}
      />
      <FAQStructuredData faqs={faqItems} />
      <InternationalStudentSimulatorStructuredData />
      <SiteHeader />

      <main className="min-h-screen bg-background px-4 py-10">
        <article className="mx-auto max-w-5xl space-y-10">
          <header className="space-y-5 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800">
              <Globe2 className="h-4 w-4" />
              2026年8月確認・外国人留学生向け
            </div>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              留学生アルバイトの週28時間と税金
              <br />
              無料シミュレーター
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              留学生は「いくら稼ぐか」より先に、資格外活動許可と勤務時間を確認します。
              掛け持ち合計の週28時間、本人の税金、日本国内の家族の健康保険扶養を分けて判定します。
            </p>
            <Button asChild size="lg">
              <a href="#international-student-simulator">
                条件を入力して確認
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </header>

          <section className="grid gap-3 md:grid-cols-3" aria-label="留学生が確認する順番">
            {priorityChecks.map((item) => (
              <Card key={item.number} className="border-sky-200">
                <CardContent className="space-y-3 p-5">
                  <p className="font-mono text-xs font-bold text-sky-700">CHECK {item.number}</p>
                  <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section
            id="international-student-simulator"
            className="scroll-mt-20 border-y border-border py-9"
            aria-labelledby="simulator-title"
          >
            <div className="mb-7 space-y-2 text-center">
              <p className="text-xs font-semibold text-primary">入力は3分程度</p>
              <h2 id="simulator-title" className="text-2xl font-bold text-foreground">
                留学生アルバイトの条件を確認
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                留学生モードを有効にした状態で表示しています。週勤務時間は掛け持ち分を合計してください。
              </p>
            </div>
            <IncomeSimulator defaultInternationalStudent showHeading={false} />
          </section>

          <section className="grid gap-6 md:grid-cols-2" aria-labelledby="income-wall-answer">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-primary">結論</p>
              <h2 id="income-wall-answer" className="text-2xl font-bold text-foreground">
                留学生にも年収の基準はあるが、最初に見るのは週28時間
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                本人の所得税や住民税には収入基準があります。ただし在留資格が「留学」の場合、資格外活動許可を受け、
                通常の授業期間は掛け持ち合計で週28時間以内にすることが先です。年収が税金の基準内でも、時間制限を超えてよいことにはなりません。
              </p>
            </div>
            <div className="space-y-3 border-l-4 border-amber-400 pl-5">
              <h2 className="text-xl font-bold text-foreground">税額は居住者区分と租税条約で変わる</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                シミュレーターは、日本の税法上の居住者で、給与収入のみ、租税条約による免除・軽減を使わない場合の概算です。
                非居住者の給与は原則20.42%で源泉徴収される場合があり、国籍と条約によって扱いが変わります。
              </p>
            </div>
          </section>

          <Card className="border-emerald-200 bg-emerald-50/60">
            <CardContent className="space-y-3 p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
                <h2 className="text-xl font-bold text-emerald-950">150万円の基準が関係する人</h2>
              </div>
              <p className="text-sm leading-relaxed text-emerald-950/80">
                150万円未満は、19歳以上23歳未満で、日本で働く家族の健康保険の被扶養者になっている人の収入要件です。
                親が海外にいて日本の家族の健康保険扶養に入っていない場合は、この扶養基準ではなく、自分の勤務先の社会保険または国民健康保険を確認します。
              </p>
            </CardContent>
          </Card>

          <section className="space-y-4" aria-labelledby="international-faq-title">
            <h2 id="international-faq-title" className="text-2xl font-bold text-foreground">
              留学生アルバイトのよくある質問
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {faqItems.map((item) => (
                <section key={item.question} className="space-y-2 py-5">
                  <h3 className="font-bold text-foreground">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-md border border-border bg-muted/30 p-5">
            <h2 className="text-lg font-bold text-foreground">参考にした公的情報</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              最終判断は在留カード・許可書、勤務先、学校、税務署、市区町村、加入する健康保険で確認してください。
            </p>
            <div className="grid gap-2 text-sm font-semibold sm:grid-cols-2">
              <a href="https://www.moj.go.jp/isa/applications/guide/kanri_qa.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                出入国在留管理庁 在留審査Q&amp;A
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri07_00003.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                出入国在留管理庁 資格外活動許可
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2884.htm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                国税庁 非居住者の源泉徴収
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                日本年金機構 学生納付特例制度
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </section>

          <p className="text-center text-sm text-muted-foreground">
            日本人学生向けの扶養基準を確認する場合は
            <Link href="/student-baito" className="ml-1 font-semibold text-primary hover:underline">
              大学生の年収の壁・扶養ガイド
            </Link>
            を参照してください。
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
