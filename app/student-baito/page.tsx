import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, ExternalLink } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BreadcrumbStructuredData, FAQStructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  STUDENT_BAITO_PAGE,
} from "@/lib/seo"

const faqItems = [
  {
    question: "学生バイトはいくらまでなら親の扶養で安心ですか？",
    answer:
      "まずは年収130万円以内を目安にすると、社会保険の扶養から外れるリスクを抑えやすいです。親の税金への影響は年齢や制度により変わるため、123万円と188万円も確認しましょう。",
  },
  {
    question: "160万円の壁は学生にも関係ありますか？",
    answer:
      "はい。160万円は主に本人の所得税を考えるときの目安です。ただし、親の扶養や社会保険は別の基準で判断されるため、160万円だけで判断しない方が安全です。",
  },
  {
    question: "19歳から22歳の学生は188万円まで稼いでも大丈夫ですか？",
    answer:
      "188万円は特定親族特別控除の上限目安です。親の控除が段階的に変わる可能性があるため、親と事前に確認してからシフトを増やすのがおすすめです。",
  },
]

export const metadata: Metadata = {
  title: STUDENT_BAITO_PAGE.title,
  description: STUDENT_BAITO_PAGE.description,
  keywords: STUDENT_BAITO_PAGE.keywords,
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
    description: "扶養・税金・社会保険の年収ラインを学生向けに整理。",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function StudentBaitoPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "学生バイト向け年収ガイド", url: `${SITE_URL}${STUDENT_BAITO_PAGE.path}` },
        ]}
      />
      <FAQStructuredData faqs={faqItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <article className="mx-auto max-w-4xl space-y-8">
          <section className="space-y-5 text-center">
            <p className="text-xs font-semibold text-primary">学生アルバイト向けSEOランディング</p>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              学生バイトはいくらまで稼げる？
              <br />
              扶養・税金・社会保険の年収ガイド
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              「親の扶養から外れたくない」「130万円を超えるとどうなるか不安」
              という学生向けに、見るべき年収ラインをシンプルに整理しました。
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="flex-1">
                <Link href="/">
                  <Calculator className="mr-2 h-4 w-4" />
                  年収をシミュレーション
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/blog/gakusei-baito-zeikin">詳しい税金記事へ</Link>
              </Button>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-4">
            {[
              ["103万円", "旧来の所得税の目安として検索されやすいライン"],
              ["130万円", "社会保険の扶養で特に注意したいライン"],
              ["160万円", "本人の所得税を考えるときの新しい目安"],
              ["188万円", "19〜22歳の特定親族特別控除で見る上限目安"],
            ].map(([amount, text]) => (
              <Card key={amount}>
                <CardContent className="space-y-2 pt-5">
                  <p className="text-2xl font-bold text-primary">{amount}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <Card>
            <CardContent className="space-y-6 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  まずは「130万円以内」か「160万円以上」を考える
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  学生アルバイトで迷いやすいのは、所得税・親の扶養・社会保険の基準が別々に動くことです。
                  特に130万円を超えると社会保険の扶養から外れる可能性が出るため、
                  中途半端に超えるよりも、130万円以内に抑えるか、しっかり働いて手取り増を狙うかを早めに決めるのが現実的です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  親の扶養は「123万円」と「188万円」もセットで見る
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  親の税金への影響を考えるときは、学生本人の所得税だけで判断しないことが大切です。
                  通常の扶養控除では給与収入123万円前後が目安になり、19歳から22歳の人は特定親族特別控除により
                  188万円まで段階的に扱われる可能性があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">学生バイト向けの判断フロー</h2>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li>1. まず年収見込みをシミュレーターに入れる</li>
                  <li>2. 130万円を超えるか確認する</li>
                  <li>3. 19〜22歳なら123万円と188万円のラインも親と確認する</li>
                  <li>4. 年末前にシフトを調整するか、しっかり働く方向に切り替える</li>
                </ol>
              </section>
            </CardContent>
          </Card>

          <section className="grid gap-4 md:grid-cols-3">
            {[
              {
                href: "/blog/gakusei-baito-zeikin",
                title: "学生バイトの税金対策",
                text: "160万円・123万円・188万円の違いを詳しく確認できます。",
              },
              {
                href: "/blog/130man-no-kabe-v2",
                title: "130万円の壁を超えると？",
                text: "社会保険料と手取りの変化を確認できます。",
              },
              {
                href: "/blog/tokutei-fuyo",
                title: "特定親族特別控除とは？",
                text: "19〜22歳の学生が特に確認したい制度です。",
              },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="flex h-full flex-col justify-between gap-4 pt-5">
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
          </section>

          <Card className="bg-muted/40">
            <CardContent className="space-y-3 pt-5">
              <h2 className="text-lg font-bold text-foreground">参考にした公的情報</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                税制の細かい判定は年度や家庭状況で変わるため、最終判断は税務署・自治体・勤務先で確認してください。
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.keisan.nta.go.jp/r3yokuaru_sp/scat2/scat22/scat228/scid120.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁: 勤労学生控除とは
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180_qa.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  国税庁: 扶養控除
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
