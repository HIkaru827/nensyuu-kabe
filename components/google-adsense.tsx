"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

interface GoogleAdSenseScriptProps {
  client: string
}

interface GoogleAdSenseBannerProps {
  client: string
  slot: string
  className?: string
}

export function GoogleAdSenseScript({ client }: GoogleAdSenseScriptProps) {
  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  )
}

export function GoogleAdSenseBanner({ client, slot, className }: GoogleAdSenseBannerProps) {
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      initializedRef.current = true
    } catch {
      // Script load timing can cause a transient error on first render.
    }
  }, [])

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`.trim()}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

