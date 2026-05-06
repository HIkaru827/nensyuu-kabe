import Link from "next/link"
import { BriefcaseBusiness, Calculator, ExternalLink } from "lucide-react"
import { AdSlot, JobAdSlot } from "@/components/ad-slot"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildArticleJobCards } from "@/lib/affiliate-links"

export function ArticleMonetizationSection() {
  const jobs = buildArticleJobCards({
    NEXT_PUBLIC_A8_TOWNWORK: process.env.NEXT_PUBLIC_A8_TOWNWORK,
    NEXT_PUBLIC_A8_MACHBAITO: process.env.NEXT_PUBLIC_A8_MACHBAITO,
    NEXT_PUBLIC_A8_BAITORU: process.env.NEXT_PUBLIC_A8_BAITORU,
    NEXT_PUBLIC_A8_ARBEIT_EX: process.env.NEXT_PUBLIC_A8_ARBEIT_EX,
    NEXT_PUBLIC_A8_RECOMMENDED: process.env.NEXT_PUBLIC_A8_RECOMMENDED,
    NEXT_PUBLIC_A8_HIGH_WAGE: process.env.NEXT_PUBLIC_A8_HIGH_WAGE,
    NEXT_PUBLIC_A8_FLEXIBLE: process.env.NEXT_PUBLIC_A8_FLEXIBLE,
    NEXT_PUBLIC_A8_CAREER: process.env.NEXT_PUBLIC_A8_CAREER,
  })

  const hasBanner = Boolean(process.env.NEXT_PUBLIC_A8_BANNER)

  if (jobs.length === 0 && !hasBanner) {
    return null
  }

  return (
    <section className="space-y-4">
      <Card className="border-sky-200 bg-sky-50">
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-start gap-3">
            <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-sky-950">条件に合う仕事も合わせて見る</h2>
              <p className="text-sm leading-relaxed text-sky-900">
                壁の手前で調整するか、超えてしっかり働くかは、求人の選び方でかなり変わります。
                記事で論点を整理したあとに、探し方の入口もそろえておくと判断しやすくなります。
              </p>
            </div>
          </div>

          {jobs.length > 0 && (
            <JobAdSlot
              title="探し方の入口"
              jobs={jobs.map((job) => ({
                name: job.label,
                url: job.href,
                description: job.description,
                tag: job.tag,
              }))}
            />
          )}

          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-sky-200 bg-white/80 px-4 py-3">
            <Calculator className="h-4 w-4 text-sky-700" />
            <p className="flex-1 text-sm text-slate-700">
              先に年収のラインを試算してから求人を見ると、働き方の候補を絞り込みやすくなります。
            </p>
            <Button size="sm" asChild>
              <Link href="/">シミュレーターで確認する</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {hasBanner && (
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>PR</span>
            <ExternalLink className="h-3 w-3" />
          </div>
          <AdSlot position="inline" size="medium" adCode={process.env.NEXT_PUBLIC_A8_BANNER} />
        </div>
      )}
    </section>
  )
}
