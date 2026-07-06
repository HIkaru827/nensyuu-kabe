import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Home,
  Smartphone,
  WalletCards,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { buildStudentAffiliateCards } from "@/lib/affiliate-links"

const iconByTag = {
  "バイト求人": BriefcaseBusiness,
  お金管理: WalletCards,
  通信費: Smartphone,
  学習: GraduationCap,
  生活費: Home,
} as const

interface StudentAffiliateHubProps {
  title?: string
  description?: string
}

export function StudentAffiliateHub({
  title = "学生バイトの次の悩みもまとめて確認",
  description = "税金・扶養・有給を見たあとに、求人探し、固定費、給与口座、学習までまとめて確認できます。",
}: StudentAffiliateHubProps) {
  const affiliateEnabled = process.env.NEXT_PUBLIC_ENABLE_AFFILIATE_UI === "true"
  const cards = buildStudentAffiliateCards(
    affiliateEnabled
      ? {
          NEXT_PUBLIC_A8_RECOMMENDED: process.env.NEXT_PUBLIC_A8_RECOMMENDED,
          NEXT_PUBLIC_A8_TOWNWORK: process.env.NEXT_PUBLIC_A8_TOWNWORK,
          NEXT_PUBLIC_A8_MACHBAITO: process.env.NEXT_PUBLIC_A8_MACHBAITO,
          NEXT_PUBLIC_A8_BAITORU: process.env.NEXT_PUBLIC_A8_BAITORU,
          NEXT_PUBLIC_A8_ARBEIT_EX: process.env.NEXT_PUBLIC_A8_ARBEIT_EX,
          NEXT_PUBLIC_A8_FLEXIBLE: process.env.NEXT_PUBLIC_A8_FLEXIBLE,
          NEXT_PUBLIC_A8_SHORT_TERM: process.env.NEXT_PUBLIC_A8_SHORT_TERM,
          NEXT_PUBLIC_A8_BANK_ACCOUNT: process.env.NEXT_PUBLIC_A8_BANK_ACCOUNT,
          NEXT_PUBLIC_A8_STUDENT_CARD: process.env.NEXT_PUBLIC_A8_STUDENT_CARD,
          NEXT_PUBLIC_A8_SIM: process.env.NEXT_PUBLIC_A8_SIM,
          NEXT_PUBLIC_A8_LEARNING: process.env.NEXT_PUBLIC_A8_LEARNING,
          NEXT_PUBLIC_A8_MOVING: process.env.NEXT_PUBLIC_A8_MOVING,
          NEXT_PUBLIC_A8_MONEY_APP: process.env.NEXT_PUBLIC_A8_MONEY_APP,
        }
      : {},
  )

  return (
    <section className="mx-auto w-full max-w-5xl space-y-4">
      <div className="space-y-1">
        <p className="text-xs font-semibold text-primary">学生バイト向けカテゴリ</p>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 md:grid-cols-5">
        {cards.map((card) => {
          const Icon = iconByTag[card.tag as keyof typeof iconByTag] ?? ArrowRight
          const content = (
            <Card className="h-full transition-colors hover:border-primary">
              <CardContent className="flex h-full flex-col gap-3 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                    {card.tag}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold leading-snug text-foreground">{card.label}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  {card.isExternal ? "詳しく見る" : "関連記事へ"}
                  {card.isExternal ? <ExternalLink className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                </span>
              </CardContent>
            </Card>
          )

          if (card.isExternal) {
            return (
              <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer nofollow">
                {content}
              </a>
            )
          }

          return (
            <Link key={card.label} href={card.href}>
              {content}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
