import type { ReactNode } from "react"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface ContentPageShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function ContentPageShell({ title, description, children }: ContentPageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>

          {children}

          <div className="pt-6 text-center">
            <Link href="/" className="text-sm text-primary hover:underline">
              年収の壁シミュレーターへ戻る
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
