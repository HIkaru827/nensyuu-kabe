import type { Metadata } from "next"
import { IncomeSimulator } from "@/components/income-simulator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  OrganizationStructuredData,
  WebApplicationStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data"
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

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
      </main>
      <SiteFooter />
    </>
  )
}
