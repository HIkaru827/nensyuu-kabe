interface AffiliateLinkInput {
  href?: string | null
  label?: string
  description?: string
  tag?: string
}

export interface AffiliateLinkCard {
  href: string
  label: string
  description?: string
  tag?: string
}

function normalizeAffiliateUrl(raw?: string | null): string | undefined {
  if (!raw) {
    return undefined
  }

  const trimmed = raw.trim()
  if (!trimmed || trimmed === "#") {
    return undefined
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`
  }

  return trimmed
}

function extractAffiliateHref(raw?: string | null): string | undefined {
  if (!raw) {
    return undefined
  }

  const trimmed = raw.trim()

  if (!trimmed || trimmed === "#") {
    return undefined
  }

  if (!trimmed.startsWith("<")) {
    return normalizeAffiliateUrl(trimmed)
  }

  const hrefMatch = trimmed.match(/href=["']([^"']+)["']/i)
  return normalizeAffiliateUrl(hrefMatch?.[1])
}

function dedupeCards(cards: AffiliateLinkInput[]): AffiliateLinkCard[] {
  const seen = new Set<string>()

  return cards.flatMap((card) => {
    const href = extractAffiliateHref(card.href)

    if (!href || seen.has(href)) {
      return []
    }

    seen.add(href)

    return [
      {
        href,
        label: card.label ?? "仕事を探す",
        description: card.description,
        tag: card.tag,
      },
    ]
  })
}

export function getAffiliateHref(...candidates: Array<string | undefined>): string | undefined {
  for (const candidate of candidates) {
    const href = extractAffiliateHref(candidate)

    if (href) {
      return href
    }
  }

  return undefined
}

export function buildResultCtaLinks(env: Record<string, string | undefined>) {
  const general = getAffiliateHref(
    env.NEXT_PUBLIC_A8_RECOMMENDED,
    env.NEXT_PUBLIC_A8_TOWNWORK,
    env.NEXT_PUBLIC_A8_MACHBAITO,
    env.NEXT_PUBLIC_A8_BAITORU,
    env.NEXT_PUBLIC_A8_ARBEIT_EX,
  )

  return {
    recommended: getAffiliateHref(env.NEXT_PUBLIC_A8_RECOMMENDED, general),
    highWage: getAffiliateHref(env.NEXT_PUBLIC_A8_HIGH_WAGE, env.NEXT_PUBLIC_A8_TOWNWORK, general),
    flexible: getAffiliateHref(env.NEXT_PUBLIC_A8_FLEXIBLE, env.NEXT_PUBLIC_A8_TOWNWORK, general),
    career: getAffiliateHref(env.NEXT_PUBLIC_A8_CAREER, env.NEXT_PUBLIC_A8_TOWNWORK, general),
  }
}

export function buildArticleJobCards(env: Record<string, string | undefined>): AffiliateLinkCard[] {
  const fallback = getAffiliateHref(
    env.NEXT_PUBLIC_A8_TOWNWORK,
    env.NEXT_PUBLIC_A8_RECOMMENDED,
    env.NEXT_PUBLIC_A8_MACHBAITO,
    env.NEXT_PUBLIC_A8_BAITORU,
    env.NEXT_PUBLIC_A8_ARBEIT_EX,
  )

  return dedupeCards([
    {
      href: env.NEXT_PUBLIC_A8_FLEXIBLE ?? fallback,
      label: "扶養内で働けるバイト",
      description: "シフトを抑えやすい求人から探す",
      tag: "扶養内",
    },
    {
      href: env.NEXT_PUBLIC_A8_RECOMMENDED ?? env.NEXT_PUBLIC_A8_TOWNWORK ?? fallback,
      label: "人気の学生バイトを探す",
      description: "定番の求人をまとめて確認する",
      tag: "定番",
    },
    {
      href: env.NEXT_PUBLIC_A8_HIGH_WAGE ?? env.NEXT_PUBLIC_A8_MACHBAITO ?? fallback,
      label: "短時間・単発バイトを探す",
      description: "時給重視で探したいときの入口",
      tag: "高時給",
    },
    {
      href: env.NEXT_PUBLIC_A8_CAREER ?? env.NEXT_PUBLIC_A8_BAITORU ?? env.NEXT_PUBLIC_A8_ARBEIT_EX ?? fallback,
      label: "条件でバイトを比較する",
      description: "複数条件を見比べながら候補を絞る",
      tag: "比較",
    },
  ])
}
