import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BaitoTypeDiagnosis } from "@/components/baito-type-diagnosis"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudentAffiliateHub } from "@/components/student-affiliate-hub"
import {
  BaitoDiagnosisStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
  ItemListStructuredData,
} from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BAITO_REALITY_ARTICLES } from "@/lib/baito-reality"
import { BAITO_TYPE_DIAGNOSIS_PAGE, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const pageUrl = `${SITE_URL}/baito-type-diagnosis`
const faqItems = [
  {
    question: "学生バイトタイプ診断だけで応募先を決めてもいいですか？",
    answer:
      "診断結果はあくまで求人を見る前の目安です。実際に応募するときは、時給、シフト、通勤時間、仕事内容、契約条件を必ず確認してください。",
  },
  {
    question: "扶養内で働きたい学生は何を見ればいいですか？",
    answer:
      "時給だけでなく、月に何時間働くか、長期休みにシフトが増えるか、有給分の賃金も年収に入るかを確認しましょう。",
  },
  {
    question: "初めてのバイトでも使えますか？",
    answer:
      "使えます。接客の多さ、作業の細かさ、体力面の負担など、初めてのバイトで迷いやすい条件を整理するための診断です。",
  },
] as const

export const metadata: Metadata = {
  title: BAITO_TYPE_DIAGNOSIS_PAGE.title,
  description: BAITO_TYPE_DIAGNOSIS_PAGE.description,
  keywords: [...BAITO_TYPE_DIAGNOSIS_PAGE.keywords],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "学生バイト",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `学生バイトタイプ診断 | ${SITE_NAME}`,
    description:
      "学生バイトを選ぶ前に、接客の多さ、作業内容、時給、シフトの組みやすさを確認できる無料診断です。",
    url: pageUrl,
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "学生バイトタイプ診断",
    description: "質問に答えて、自分に合いそうなバイトと職種別ガイドを確認できます。",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function BaitoTypeDiagnosisPage() {
  return (
    <>
      <BaitoDiagnosisStructuredData url={pageUrl} />
      <FAQStructuredData faqs={faqItems} />
      <ItemListStructuredData
        name="学生バイトの職種別ガイド"
        url={pageUrl}
        items={BAITO_REALITY_ARTICLES.map((article) => ({
          name: article.title,
          url: `${SITE_URL}/blog/${article.slug}`,
        }))}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "学生バイトタイプ診断", url: pageUrl },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <div className="space-y-10">
          <section className="mx-auto max-w-5xl space-y-4 text-center">
            <p className="text-xs font-semibold text-primary">学生バイト選びの入口</p>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              自分に合うバイトを見つける
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              時給だけで決める前に、シフトの組みやすさ、接客の多さ、体力面の負担、年収の壁、有給の確認しやすさを見ておきましょう。
            </p>
          </section>

          <BaitoTypeDiagnosis />

          <section className="mx-auto max-w-5xl space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">診断結果から読める記事</p>
              <h2 className="text-2xl font-bold text-foreground">学生バイトの職種別ガイド</h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                飲食、カフェ、アパレル、コンビニ、塾講師など、仕事内容や向き不向きを職種ごとに確認できます。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {BAITO_REALITY_ARTICLES.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} aria-label={`${article.jobName}の職種別ガイドを読む`}>
                  <Card className="h-full transition-colors hover:border-primary hover:bg-muted/30">
                    <CardContent className="flex h-full flex-col gap-2 p-4">
                      <span className="w-fit rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                        {article.category}
                      </span>
                      <h3 className="text-sm font-bold leading-snug text-foreground">{article.jobName}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{article.catchCopy}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-base font-bold text-foreground">求人を見る前の目安に</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  公的な適性検査ではありません。求人を比べる前に、自分が重視したい条件を整理するための診断です。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-base font-bold text-foreground">職種別ガイドで詳しく見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  結果に合わせて、仕事内容、大変なところ、向いている人をまとめた記事を確認できます。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <h2 className="text-base font-bold text-foreground">年収と有給もセットで見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  候補が決まったら、年収の壁や有給日数も確認して、働く時間やシフトを考えましょう。
                </p>
              </CardContent>
            </Card>
          </section>

          <StudentAffiliateHub />

          <section className="mx-auto max-w-5xl space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">よくある質問</p>
              <h2 className="text-2xl font-bold text-foreground">診断を使う前に確認したいこと</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {faqItems.map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="space-y-2 p-5">
                    <h3 className="text-sm font-bold text-foreground">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-foreground">候補を選んだら確認したいこと</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    時給、月収の目安、契約上の勤務日数がわかると、扶養・税金・有給の見通しを立てやすくなります。
                  </p>
                </div>
                <Button asChild className="shrink-0">
                  <Link href="/">
                    年収ラインを確認
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
