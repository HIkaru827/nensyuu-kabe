import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import { GoogleAdSenseScript } from "@/components/google-adsense"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nenshuu-kabe.com'),
  title: {
    default: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
    template: "%s | 年収の壁シミュレーター",
  },
  description: "扶養控除・社会保険の壁をシンプルに判定するシミュレーター。令和7年度改正対応で103万→160万円の壁を無料チェック。",
  keywords: ["年収の壁", "103万円の壁", "160万円の壁", "130万円の壁", "扶養控除", "社会保険", "学生バイト", "アルバイト", "税金シミュレーター", "令和7年度改正"],
  authors: [{ name: "年収の壁シミュレーター" }],
  creator: "年収の壁シミュレーター",
  publisher: "年収の壁シミュレーター",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://nenshuu-kabe.com",
    title: "親に怒られない年収をすぐに判定 | 年収の壁シミュレーター",
    description: "扶養控除・社会保険の壁をシンプルに判定。令和7年度改正対応で103万→160万円の壁を無料チェック。",
    siteName: "年収の壁シミュレーター",
    images: [
      {
        url: "/site-share-card.svg",
        width: 1200,
        height: 630,
        alt: "年収の壁シミュレーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "親に怒られない年収を30秒で判定",
    description: "扶養控除・社会保険の壁をシンプルに判定。令和7年度改正対応！",
    images: ["/site-share-card.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: '_3Ec801tBI3AkZyBI31adOxWGvWLiYx-hWHmmqMy6d8',
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <GoogleAdSenseScript client={adsenseClient} />
      </body>
    </html>
  )
}
