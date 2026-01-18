import { IncomeSimulator } from "@/components/income-simulator"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <IncomeSimulator />
      </main>
      <SiteFooter />
    </>
  )
}
