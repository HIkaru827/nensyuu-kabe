import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import { GoogleAdSenseScript } from "@/components/google-adsense"
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "103万円・106万円・130万円・160万円の年収の壁を比較し、扶養・社会保険・学生バイトへの影響をすぐ確認できる無料シミュレーター。",
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
    description:
      "扶養・税金・社会保険の壁を年収別に比較。学生バイトや親の扶養への影響もすぐ確認できます。",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "親に怒られない年収を30秒で判定",
    description: "103万円・106万円・130万円・160万円の壁を比較できる無料シミュレーター。",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "_3Ec801tBI3AkZyBI31adOxWGvWLiYx-hWHmmqMy6d8",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const adsenseClient = "ca-pub-2931164651880564"

  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <GoogleAdSenseScript client={adsenseClient} />
      </body>
    </html>
  )
}
