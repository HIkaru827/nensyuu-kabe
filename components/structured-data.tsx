import { BLOG_POSTS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "学生バイトの扶養・税金・有給シミュレーター",
    description:
      "学生バイト向けに、年収の壁、親の扶養、社会保険、有給休暇をまとめて確認できる情報サイトです。",
    url: SITE_URL,
    inLanguage: "ja-JP",
  }

  return <JsonLd data={data} />
}

export function WebApplicationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "学生バイトの年収の壁、有給付与日数、親の扶養や社会保険への影響を確認できる無料シミュレーターです。",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    browserRequirements: "JavaScript required",
    inLanguage: "ja-JP",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    featureList: [
      "年収の壁シミュレーション",
      "親の扶養への影響確認",
      "社会保険の扶養目安",
      "学生バイト向け有給シミュレーション",
      "関連記事とバイト関連カテゴリへの導線",
    ],
  }

  return <JsonLd data={data} />
}

export function BaitoDiagnosisStructuredData({
  url,
}: {
  url: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "学生バイトタイプ診断",
    url,
    description:
      "6つの質問で、学生バイトを選ぶ前に接客量、作業内容、時給、シフトの組みやすさを確認できる無料診断です。",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    browserRequirements: "JavaScript required",
    inLanguage: "ja-JP",
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "学生アルバイト",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    featureList: [
      "学生バイトのタイプ診断",
      "職種別ガイドへの案内",
      "年収の壁と有給確認への導線",
    ],
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  return <JsonLd data={data} />
}

export function BlogListStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `ブログ | ${SITE_NAME}`,
    url: `${SITE_URL}/blog`,
    description:
      "学生バイトの年収の壁、扶養、社会保険、有給、税金について解説した記事一覧です。",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return <JsonLd data={data} />
}

export function ItemListStructuredData({
  name,
  url,
  items,
}: {
  name: string
  url: string
  items: Array<{ name: string; url: string }>
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
    inLanguage: "ja-JP",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url,
        name: item.name,
      })),
    },
  }

  return <JsonLd data={data} />
}

export function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl,
  section,
  keywords,
  about,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
  section?: string
  keywords?: readonly string[]
  about?: readonly string[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: [imageUrl || DEFAULT_OG_IMAGE],
    inLanguage: "ja-JP",
    isAccessibleForFree: true,
    articleSection: section,
    keywords,
    about: about?.map((name) => ({
      "@type": "Thing",
      name,
    })),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
  }

  return <JsonLd data={data} />
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={data} />
}

export function FAQStructuredData({
  faqs,
}: {
  faqs: readonly { question: string; answer: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}

export function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "学生バイトの年収の壁、扶養、社会保険、有給をわかりやすく整理する情報サイトです。",
  }

  return <JsonLd data={data} />
}
