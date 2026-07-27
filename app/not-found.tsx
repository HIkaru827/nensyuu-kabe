import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center bg-background px-4 py-12">
        <Card className="mx-auto w-full max-w-2xl">
          <CardContent className="space-y-6 p-6 text-center md:p-10">
            <p className="text-sm font-semibold text-primary">404</p>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">ページが見つかりません</h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                URLが変更されたか、ページが削除された可能性があります。シミュレーターまたはブログ一覧から目的の情報を探せます。
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">
                  <Calculator className="mr-2 h-4 w-4" />
                  シミュレーターへ
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-4 w-4" />
                  ブログ一覧へ
                </Link>
              </Button>
            </div>
            <Link href="/site-map" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              サイトマップを見る
            </Link>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </>
  )
}
