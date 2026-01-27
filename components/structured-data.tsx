// 構造化データ（JSON-LD）コンポーネント

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "年収の壁シミュレーター",
    "description": "扶養控除・社会保険の壁をシンプルに判定するシミュレーター",
    "url": "https://nenshuu-kabe.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nenshuu-kabe.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebApplicationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "年収の壁シミュレーター",
    "description": "2025年税制改正対応！年収の壁（103万円→160万円）を30秒でシミュレーション",
    "url": "https://nenshuu-kabe.com",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "featureList": [
      "年収シミュレーション",
      "所得税計算",
      "社会保険料計算",
      "扶養控除判定",
      "2025年改正対応"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "年収の壁シミュレーター"
    },
    "publisher": {
      "@type": "Organization",
      "name": "年収の壁シミュレーター",
      "logo": {
        "@type": "ImageObject",
        "url": imageUrl || "https://nenshuu-kabe.com/placeholder-logo.png"
      }
    },
    "url": url,
    "image": imageUrl || "https://nenshuu-kabe.com/placeholder-logo.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "年収の壁シミュレーター",
    "url": "https://nenshuu-kabe.com",
    "logo": "https://nenshuu-kabe.com/placeholder-logo.png",
    "description": "扶養控除・社会保険の壁をシンプルに判定するシミュレーター",
    "sameAs": [
      // TODO: SNSアカウントがあれば追加してください
      // "https://twitter.com/yourtwitter",
      // "https://facebook.com/yourfacebook"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

