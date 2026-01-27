import { IncomeSimulator } from "@/components/income-simulator"
import { SiteFooter } from "@/components/site-footer"
import { WebsiteStructuredData, WebApplicationStructuredData, OrganizationStructuredData } from "@/components/structured-data"

export const metadata = {
  title: "年収の壁シミュレーター【2025年改正対応】103万→160万円",
  description: "2025年税制改正対応！年収の壁（103万円→160万円）をシミュレーション。学生バイト・アルバイトの税金や社会保険料、親への影響を30秒で判定。",
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
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <IncomeSimulator />
      </main>
      <SiteFooter />
    </>
  )
}
