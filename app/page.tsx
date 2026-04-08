import type { Metadata } from "next"
import Link from "next/link"
import { IncomeSimulator } from "@/components/income-simulator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  OrganizationStructuredData,
  WebApplicationStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data"
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
  description:
    "103万円・106万円・130万円・160万円の年収の壁を比較して、扶養・社会保険・学生バイトへの影響をすぐ確認できます。",
  keywords: [
    ...DEFAULT_KEYWORDS,
    "扶養内 バイト",
    "学生 扶養 年収",
    "年収の壁 2026",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
    description:
      "扶養・社会保険・学生バイトへの影響を年収別に比較。103万円・106万円・130万円・160万円の壁を一目で確認。",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "親に怒られない年収を30秒で判定",
    description: "年収の壁を比較して、扶養や社会保険への影響をすぐ確認。",
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function Home() {
  return (
    <>
      <WebsiteStructuredData />
      <WebApplicationStructuredData />
      <OrganizationStructuredData />
      <SiteHeader />
      <main className="min-h-screen bg-background p-4 pt-20 pb-10">
        <IncomeSimulator />
        <section className="mx-auto mt-8 max-w-md">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="space-y-3 pt-5 text-center">
              <p className="text-xs font-semibold text-primary">学生アルバイト向け</p>
              <h2 className="text-lg font-bold text-foreground">
                バイトはいくらまで稼いでいい？
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                103万円・130万円・160万円・188万円の違いを、親の扶養・税金・社会保険に分けて確認できます。
              </p>
              <Button asChild className="w-full">
                <Link href="/student-baito">学生バイト向けガイドを見る</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
