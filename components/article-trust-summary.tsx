import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ArticleTrustSummaryProps {
  checkedAt: string
  audience: string
  sources: string
  note: string
}

export function ArticleTrustSummary({
  checkedAt,
  audience,
  sources,
  note,
}: ArticleTrustSummaryProps) {
  return (
    <Card className="border border-border bg-muted/40">
      <CardContent className="space-y-2 pt-4 text-xs leading-relaxed text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">確認日:</span> {checkedAt}
        </p>
        <p>
          <span className="font-semibold text-foreground">想定読者:</span> {audience}
        </p>
        <p>
          <span className="font-semibold text-foreground">主な参照先:</span> {sources}
        </p>
        <p>{note}</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-2">
          <Link href="/about" className="font-semibold text-primary hover:underline">
            運営者情報
          </Link>
          <Link href="/editorial-policy" className="font-semibold text-primary hover:underline">
            編集方針
          </Link>
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            修正を連絡
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
