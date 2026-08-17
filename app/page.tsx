import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarCheck, Globe2, GraduationCap, Sparkles, WalletCards } from "lucide-react"
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
  title: "学生バイトの年収の壁・あといくら稼げるシミュレーター",
  description:
    "今年受け取った給与と今後の月給から、年末の年収見込み、各年収の壁まであといくら稼げるかを計算。親の扶養、税金、社会保険も確認できます。",
  keywords: [...DEFAULT_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `学生バイトの年収の壁・あといくら稼げるシミュレーター | ${SITE_NAME}`,
    description:
      "今年受け取った給与から年末の年収を予測し、各年収の壁まであといくら稼げるかを確認できます。",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "学生バイトの年収の壁・あといくら稼げるシミュレーター",
    description: "受取済み給与と今後の月給から、扶養・税金・社会保険の目安を確認できます。",
    images: [DEFAULT_OG_IMAGE],
  },
}

const toolCards = [
  {
    href: "/",
    icon: WalletCards,
    title: "年収の壁シミュレーター",
    text: "受取済み給与から年末年収と各年収の壁までの残額を確認します。",
    badge: "表示中",
    action: "このまま使う",
  },
  {
    href: "/paid-leave",
    icon: CalendarCheck,
    title: "バイト有給シミュレーター",
    text: "入社日と勤務日数から、有給日数と時給換算の目安を出します。",
    badge: "有給",
    action: "有給を見る",
  },
  {
    href: "/student-baito",
    icon: GraduationCap,
    title: "大学生の年収の壁・扶養ガイド",
    text: "大学生はいくらまでなら扶養内か、130万・150万・159万円などを整理します。",
    badge: "ガイド",
    action: "大学生の扶養を見る",
  },
  {
    href: "/baito-type-diagnosis",
    icon: Sparkles,
    title: "学生バイトタイプ診断",
    text: "質問に答えて、自分に合いそうなバイトと職種別ガイドを確認します。",
    badge: "診断",
    action: "診断してみる",
  },
]

const ruleCards = [
  {
    title: "本人の所得税",
    text: "給与所得控除と基礎控除を使い、本人に所得税がかかり始める目安を確認します。",
  },
  {
    title: "親の税金上の扶養",
    text: "扶養控除と特定親族特別控除を分け、親の税負担に影響する年収帯を確認します。",
  },
  {
    title: "健康保険の扶養",
    text: "税金とは別制度として、年齢や今後の収入見込みを含む被扶養者認定の目安を示します。",
  },
  {
    title: "勤務先の社会保険",
    text: "週の労働時間や月額賃金、学生区分などから、勤務先での加入条件を別に確認します。",
  },
] as const

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

            <div className="grid gap-3 md:grid-cols-4">
              {toolCards.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.title} href={item.href} aria-label={`${item.title}を開く`}>
                    <Card className="h-full transition-colors hover:border-primary hover:bg-muted/30">
                      <CardContent className="flex h-full flex-col gap-3 p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                            {item.badge}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          {item.action}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            <Link href="/international-student" aria-label="留学生アルバイトの週28時間と税金を確認する">
              <Card className="border-sky-200 bg-sky-50/70 transition-colors hover:border-sky-400 hover:bg-sky-50">
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-700">
                      <Globe2 className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sky-950">外国人留学生のアルバイトはこちら</h3>
                      <p className="text-sm leading-relaxed text-sky-900/75">
                        資格外活動許可、掛け持ち合計の週28時間、税金と健康保険を順番に確認します。
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-sky-800">
                    留学生向けに確認
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </section>

          <section className="mx-auto max-w-5xl space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary">このサイト独自の整理</p>
              <h2 className="text-2xl font-bold text-foreground">「年収の壁」を1本の線として扱わない</h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                同じ年収でも、本人の税金、親の税金上の扶養、健康保険の扶養、勤務先の社会保険では判定方法が異なります。
                当サイトは4つを分けて試算し、年収だけでは決まらない項目を明示します。
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {ruleCards.map((item) => (
                <Card key={item.title}>
                  <CardContent className="space-y-2 p-5">
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <Link href="/calculation-method" className="inline-flex items-center gap-1 text-primary hover:underline">
                計算方法と参照資料
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/updates" className="inline-flex items-center gap-1 text-primary hover:underline">
                更新履歴
                <ArrowRight className="h-4 w-4" />
              </Link>
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
