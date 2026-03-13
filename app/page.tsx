import { IncomeSimulator } from "@/components/income-simulator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WebsiteStructuredData, WebApplicationStructuredData, OrganizationStructuredData } from "@/components/structured-data"

export const metadata = {
  title: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
  description: "令和7年度税制改正対応！年収の壁（103万円→160万円）をシミュレーション。学生バイト・アルバイトの税金や社会保険料、親への影響をすぐに判定。",
  alternates: {
    canonical: "https://nenshuu-kabe.com",
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
