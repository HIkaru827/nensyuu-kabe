import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react"
import { ArticleMonetizationSection } from "@/components/article-monetization-section"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BAITO_REALITY_ARTICLES,
  getBaitoArticleFaqs,
  getBaitoArticleKeywords,
  getBaitoArticle,
  getBaitoResult,
  type BaitoRealityArticle,
} from "@/lib/baito-reality"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

const publishedAt = "2026-07-12T00:00:00Z"
const updatedAt = "2026-07-12T00:00:00Z"

export function generateStaticParams() {
  return BAITO_REALITY_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getBaitoArticle(slug)

  if (!article) {
    return {
      title: "記事が見つかりません",
    }
  }

  const url = `${SITE_URL}/blog/${article.slug}`
  const keywords = getBaitoArticleKeywords(article)

  return {
    title: article.title,
    description: article.description,
    keywords,
    authors: [{ name: `${SITE_NAME}編集部`, url: `${SITE_URL}/about` }],
    creator: `${SITE_NAME}編集部`,
    publisher: SITE_NAME,
    category: article.category,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | ${SITE_NAME}`,
      description: article.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: "ja_JP",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      section: article.category,
      tags: keywords,
      authors: [`${SITE_URL}/about`],
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: article.title,
        },
      ],
    },
  }
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ArticleSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <Card id={id} className={id ? "scroll-mt-20" : undefined}>
      <CardContent className="space-y-4 p-5 md:p-6">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        {children}
      </CardContent>
    </Card>
  )
}

function getRelatedArticles(article: BaitoRealityArticle) {
  return BAITO_REALITY_ARTICLES.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      (candidate.category === article.category ||
        candidate.diagnosisTypeIds.some((id) => article.diagnosisTypeIds.includes(id))),
  ).slice(0, 3)
}

export default async function BaitoRealityArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getBaitoArticle(slug)

  if (!article) {
    notFound()
  }

  const url = `${SITE_URL}/blog/${article.slug}`
  const relatedArticles = getRelatedArticles(article)
  const keywords = getBaitoArticleKeywords(article)
  const faqItems = getBaitoArticleFaqs(article)
  const resultTypes = article.diagnosisTypeIds.flatMap((id) => {
    const result = getBaitoResult(id)
    return result ? [result] : []
  })

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.description}
        datePublished={publishedAt}
        dateModified={updatedAt}
        url={url}
        section={article.category}
        keywords={keywords}
        about={[article.jobName, article.category, "学生バイト", "年収の壁", "有給"]}
      />
      <FAQStructuredData faqs={faqItems} />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: SITE_URL },
          { name: "ブログ", url: `${SITE_URL}/blog` },
          { name: article.jobName, url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-10">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            ブログ一覧へ
          </Link>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary">職種別ガイド</span>
              <span className="rounded-md bg-muted px-2 py-1 font-semibold">{article.category}</span>
              <span>更新日: 2026年7月12日</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">{article.title}</h1>
            <p className="text-base leading-relaxed text-muted-foreground">{article.description}</p>
          </header>

          <ArticleTrustSummary
            checkedAt="2026年7月12日"
            audience={`${article.jobName}の仕事内容やシフトを比較したい学生`}
            sources="厚生労働省 job tag、厚生労働省のアルバイト向け労働条件資料"
            note="仕事内容や勤務条件は店舗・企業・契約ごとに異なるため、応募前に求人票と労働条件通知書を確認してください。"
          />

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="space-y-3 p-5 md:p-6">
              <p className="text-xs font-semibold text-primary">{article.jobName}を一言でいうと</p>
              <h2 className="text-2xl font-bold text-foreground">{article.catchCopy}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.fitSummary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5 md:p-6">
              <h2 className="text-xl font-bold text-foreground">この記事でわかること</h2>
              <nav aria-label="記事内目次">
                <ul className="grid gap-2 text-sm md:grid-cols-2">
                  {[
                    ["仕事内容", "#work"],
                    ["メリットと大変なところ", "#pros-cons"],
                    ["向いている学生", "#fit"],
                    ["シフトと年収の壁", "#income-wall"],
                    ["有給の確認ポイント", "#paid-leave"],
                    ["よくある質問", "#faq"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="text-primary hover:underline">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>

          <ArticleSection id="work" title="仕事内容">
            <CheckList items={article.workItems} />
          </ArticleSection>

          <div id="pros-cons" className="grid scroll-mt-20 gap-4 md:grid-cols-2">
            <ArticleSection title="メリット">
              <CheckList items={article.goodPoints} />
            </ArticleSection>
            <ArticleSection title="大変なところ">
              <CheckList items={article.hardPoints} />
            </ArticleSection>
          </div>

          <div id="fit" className="grid scroll-mt-20 gap-4 md:grid-cols-2">
            <ArticleSection title="向いている学生">
              <CheckList items={article.suitedFor} />
            </ArticleSection>
            <ArticleSection title="慎重に考えたい人">
              <CheckList items={article.notSuitedFor} />
            </ArticleSection>
          </div>

          <ArticleSection id="income-wall" title="シフトと年収の壁">
            <p className="text-sm leading-relaxed text-muted-foreground">{article.shiftReality}</p>
            <div className="rounded-md border border-border bg-muted/30 p-4">
              <h3 className="text-sm font-bold text-foreground">年収調整の見方</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.incomeWallFit}</p>
            </div>
          </ArticleSection>

          <ArticleSection id="paid-leave" title="有給を確認するときのポイント">
            <p className="text-sm leading-relaxed text-muted-foreground">{article.paidLeaveFit}</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              アルバイトでも、継続勤務や出勤率などの条件を満たすと年次有給休暇の対象になります。
              実際の日数は契約上の所定労働日数と勤務実績で確認してください。
            </p>
          </ArticleSection>

          <Card className="border-primary/20">
            <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  診断結果の目安
                </div>
                <h2 className="text-xl font-bold text-foreground">{article.jobName}に合いやすいタイプ</h2>
                <div className="flex flex-wrap gap-2">
                  {resultTypes.map((result) => (
                    <span key={result.id} className="rounded-md bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
                      {result.shortTitle}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/baito-type-diagnosis">
                  診断してみる
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {relatedArticles.length > 0 && (
            <section className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-primary">関連記事</p>
                <h2 className="text-2xl font-bold text-foreground">似た職種も見比べる</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} aria-label={`${related.jobName}の記事を読む`}>
                    <Card className="h-full transition-colors hover:border-primary hover:bg-muted/30">
                      <CardContent className="flex h-full flex-col gap-3 p-4">
                        <span className="w-fit rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                          {related.category}
                        </span>
                        <h3 className="text-base font-bold text-foreground">{related.jobName}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{related.catchCopy}</p>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          読む
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <ArticleSection id="faq" title="よくある質問">
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <section key={faq.question} className="rounded-md border border-border bg-muted/30 p-4">
                  <h3 className="text-sm font-bold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </section>
              ))}
            </div>
          </ArticleSection>

          <ArticleMonetizationSection />

          <ArticleSection title="参考情報">
            <p className="text-sm leading-relaxed text-muted-foreground">
              仕事内容は厚生労働省 job tag、アルバイトの労働条件は厚生労働省の案内を確認し、学生バイト向けに要点をまとめています。
            </p>
            <div className="space-y-2">
              {article.sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  {source.title}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </ArticleSection>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
