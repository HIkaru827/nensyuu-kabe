import Link from "next/link"
import { ExternalLink, ShieldAlert } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"

interface OfficialLink {
  href: string
  label: string
  note: string
}

interface ComplianceReviewArticleProps {
  title: string
  description: string
  url: string
  publishedTime: string
  officialLinks: OfficialLink[]
}

export function ComplianceReviewArticle({
  title,
  description,
  url,
  publishedTime,
  officialLinks,
}: ComplianceReviewArticleProps) {
  const breadcrumbItems = [
    { name: "ホーム", url: "https://nenshuu-kabe.com" },
    { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
    { name: title, url },
  ]

  return (
    <>
      <ArticleStructuredData
        title={title}
        description={description}
        datePublished={publishedTime}
        dateModified={publishedTime}
        url={url}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <SiteHeader />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="text-sm text-primary hover:underline">
              ← ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-amber-950">内容改訂中</h2>
                  <p className="text-sm leading-relaxed text-amber-900">
                    この記事には現行法とずれる可能性のある説明が含まれていたため、公開内容を見直しています。
                    間違いを残さないため、暫定的に公的情報への案内に切り替えています。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">現在の運用方針</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                このサイトでは、年収だけで断定できる範囲だけをシミュレーターに表示し、条件依存の強い論点は勤務先や公的機関での確認を前提にしています。
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>・ 所得税は国税庁の現行資料を基準に確認してください</li>
                <li>・ 税法上の扶養判定は 123万円、19歳以上23歳未満は 188万円までの特定親族特別控除を確認してください</li>
                <li>・ 社会保険は年収だけでなく、週20時間、月額8.8万円、勤務先規模、学生区分も確認が必要です</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">公的情報</h2>
              <div className="space-y-3">
                {officialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      </div>
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-4">
            <Link href="/" className="text-sm text-primary hover:underline">
              シミュレーターに戻る
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
