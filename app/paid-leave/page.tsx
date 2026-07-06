import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import { PaidLeaveSimulator } from "@/components/paid-leave-simulator"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudentAffiliateHub } from "@/components/student-affiliate-hub"
import { BreadcrumbStructuredData, FAQStructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DEFAULT_OG_IMAGE, PAID_LEAVE_PAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const faqItems = [
  {
    question: "学生バイトでも有給はありますか？",
    answer:
      "あります。雇用形態がアルバイトでも、6か月以上継続勤務し、全労働日の8割以上出勤するなどの条件を満たすと年次有給休暇の対象になります。",
  },
  {
    question: "週1日や週2日のバイトでも対象になりますか？",
    answer:
      "対象になることがあります。契約上の週所定労働日数が少ない人は、勤務日数に応じた比例付与の日数で判断します。週が固定でない場合は年間の所定労働日数も確認します。",
  },
  {
    question: "有給を使った日は給料が全額出ますか？",
    answer:
      "勤務先が定める賃金方式によります。通常賃金方式なら所定労働時間どおり働いた場合の賃金が目安ですが、平均賃金方式では直近3か月の賃金から計算するため、通常のシフト1日分より低くなることがあります。標準報酬日額方式は労使協定がある場合の扱いです。",
  },
  {
    question: "有給を使うと扶養や年収の壁に影響しますか？",
    answer:
      "有給中に支払われる賃金も収入に含まれるため、年間収入を見ながら判断するのが安心です。年収の壁シミュレーターとあわせて確認してください。",
  },
]

export const metadata: Metadata = {
  title: PAID_LEAVE_PAGE.title,
  description: PAID_LEAVE_PAGE.description,
  keywords: [...PAID_LEAVE_PAGE.keywords],
  alternates: {
    canonical: `${SITE_URL}${PAID_LEAVE_PAGE.path}`,
  },
  openGraph: {
    title: PAID_LEAVE_PAGE.title,
    description: PAID_LEAVE_PAGE.description,
    url: `${SITE_URL}${PAID_LEAVE_PAGE.path}`,
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "バイト有給シミュレーター",
    description: "学生バイトの有給付与日数、次の付与日、有給日の賃金方式ごとの目安を確認できます。",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function PaidLeavePage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "バイト有給シミュレーター", url: `${SITE_URL}${PAID_LEAVE_PAGE.path}` },
        ]}
      />
      <FAQStructuredData faqs={faqItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <div className="space-y-10">
          <PaidLeaveSimulator />

          <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-bold text-foreground">有給と年収の壁はセットで見る</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  有給で支払われる賃金も、年収や扶養判定では収入に含めて考えるのが基本です。平均賃金方式で通常の1日分より少ない場合でも、年末に近い人は年収の壁もあわせて確認しておくと安心です。
                </p>
                <Button asChild>
                  <Link href="/">
                    <Calculator className="mr-2 h-4 w-4" />
                    年収の壁をシミュレーション
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-bold text-foreground">学生バイトの悩みを横断する</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  税金、扶養、有給、掛け持ち、シフト調整は別々に見えるようでつながっています。学生バイト向けガイドから関連記事へ進めます。
                </p>
                <Button asChild variant="outline">
                  <Link href="/student-baito">
                    学生バイトガイドへ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <StudentAffiliateHub
            title="有給を見たあとに確認したいこと"
            description="休める日数だけでなく、次のバイト探し、給与口座、スマホ代、学習投資まで一緒に確認できます。"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
