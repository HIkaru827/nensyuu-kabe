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
        <section className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="space-y-3 pt-5">
              <p className="text-xs font-semibold text-primary">学生アルバイト向け</p>
              <h2 className="text-lg font-bold text-foreground">バイトはいくらまで稼いでいい？</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                103万円・123万円・130万円・150万円・160万円・188万円の違いを、親の扶養・税金・社会保険に分けて確認できます。
              </p>
              <Button asChild className="w-full">
                <Link href="/student-baito">学生バイト向けガイドを見る</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 pt-5">
              <p className="text-xs font-semibold text-primary">このサイトの使い方</p>
              <h2 className="text-lg font-bold text-foreground">3ステップで判断できます</h2>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. まず年収と年齢を入れて、大きな分岐を確認する</li>
                <li>2. 気になる壁が出たら、詳細版で勤務条件や親の税率を追加する</li>
                <li>3. 判断が分かれる箇所は、記事と一次情報で最終確認する</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto mt-6 grid max-w-5xl gap-4 lg:grid-cols-3">
          <Card>
            <CardContent className="space-y-3 pt-5">
              <h2 className="text-base font-bold text-foreground">誰のためのサイトか</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                学生、扶養内で働きたい人、掛け持ちバイト中の人向けに、公的資料ベースで年収の壁を整理しています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 pt-5">
              <h2 className="text-base font-bold text-foreground">どう更新しているか</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                国税庁、日本年金機構、自治体の公開資料を確認し、制度改正があったページは更新日と根拠を明記しています。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 pt-5">
              <h2 className="text-base font-bold text-foreground">判断で迷いやすい点</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                106万円と130万円、123万円と188万円のように混同しやすい基準は、記事内でケース別に分けて説明しています。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto mt-6 max-w-5xl">
          <Card>
            <CardContent className="space-y-4 pt-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-primary">おすすめ記事</p>
                <h2 className="text-xl font-bold text-foreground">最初に読むと全体像がつかみやすい記事</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <Link href="/blog/student-123man-parent-impact" className="rounded-lg border border-border p-4 transition-colors hover:border-primary">
                  <p className="text-sm font-semibold text-foreground">123万円を超えると親に何が起こる？</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">扶養控除と特定親族特別控除の違いを、家計目線で整理しています。</p>
                </Link>
                <Link href="/blog/kake-mochi-baito-fuyo" className="rounded-lg border border-border p-4 transition-colors hover:border-primary">
                  <p className="text-sm font-semibold text-foreground">掛け持ちバイトの扶養判定</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">複数の勤務先があるときに、どの収入を合算して見るかを解説しています。</p>
                </Link>
                <Link href="/blog/social-insurance-case-study" className="rounded-lg border border-border p-4 transition-colors hover:border-primary">
                  <p className="text-sm font-semibold text-foreground">社会保険の壁をケース別で比較</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">学生、非学生、19歳以上23歳未満で分かれる論点を一覧化しています。</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
