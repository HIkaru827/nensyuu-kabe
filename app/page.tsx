import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarCheck, GraduationCap, WalletCards } from "lucide-react"
import { IncomeSimulator } from "@/components/income-simulator"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudentAffiliateHub } from "@/components/student-affiliate-hub"
import {
  OrganizationStructuredData,
  WebApplicationStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "学生バイトの年収の壁・扶養・有給シミュレーター",
  description:
    "学生バイト向けに、年収の壁、親の扶養、社会保険、有給休暇をまとめて確認できる無料シミュレーターです。",
  keywords: [...DEFAULT_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `学生バイトの年収の壁・扶養・有給シミュレーター | ${SITE_NAME}`,
    description:
      "年収の壁、親の扶養、社会保険、有給休暇を学生バイト向けにまとめて確認できます。",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "学生バイトの年収の壁・扶養・有給シミュレーター",
    description: "年収と勤務条件を入れて、扶養・税金・社会保険・有給の目安を確認できます。",
    images: [DEFAULT_OG_IMAGE],
  },
}

const toolCards = [
  {
    href: "/",
    icon: WalletCards,
    title: "年収の壁シミュレーター",
    text: "扶養、本人の税金、社会保険の目安を年収から確認します。",
    current: true,
  },
  {
    href: "/paid-leave",
    icon: CalendarCheck,
    title: "バイト有給シミュレーター",
    text: "入社日と勤務日数から、有給日数と時給換算の目安を出します。",
    current: false,
  },
  {
    href: "/student-baito",
    icon: GraduationCap,
    title: "学生バイト年収ガイド",
    text: "大学生・高校生向けに、扶養や税金の全体像を整理します。",
    current: false,
  },
]

export default function Home() {
  return (
    <>
      <WebsiteStructuredData />
      <WebApplicationStructuredData />
      <OrganizationStructuredData />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <div className="space-y-10">
          <IncomeSimulator />

          <section className="mx-auto max-w-5xl space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary">学生バイトの悩みをまとめて確認</p>
              <h2 className="text-2xl font-bold text-foreground">学生バイトのお金と働き方を横断する</h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                税金の壁だけでなく、有給、シフト、バイト探し、固定費の見直しまで一緒に考えると、働き方を決めやすくなります。
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {toolCards.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.title} href={item.href}>
                    <Card className="h-full transition-colors hover:border-primary">
                      <CardContent className="flex h-full flex-col gap-3 p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                            {item.current ? "表示中" : "追加済み"}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          開く
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>

          <StudentAffiliateHub />

          <section className="mx-auto max-w-5xl">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-foreground">年収だけで迷うときは</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    有給の日数や、いまのシフトでいくら稼ぐ見込みかも一緒に見ると、年末前の調整がしやすくなります。
                  </p>
                </div>
                <Button asChild className="shrink-0">
                  <Link href="/paid-leave">
                    有給シミュレーターを見る
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
