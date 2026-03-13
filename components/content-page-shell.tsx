import type { ReactNode } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface ContentPageShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function ContentPageShell({ title, description, children }: ContentPageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>

          {children}

          <div className="text-center pt-6">
            <Link href="/" className="text-primary hover:underline text-sm">
              ← シミュレーターに戻る
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
