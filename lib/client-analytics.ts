"use client"

import { track as trackVercelEvent } from "@vercel/analytics"

type AnalyticsEventValue = string | number | boolean | null | undefined

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string | number | boolean | null>) => void
  }
}

export function trackSimulatorEvent(eventName: string, params: Record<string, AnalyticsEventValue> = {}) {
  if (typeof window === "undefined") {
    return
  }

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter((entry): entry is [string, string | number | boolean | null] => entry[1] !== undefined),
  )

  trackVercelEvent(eventName, cleanParams)
  window.gtag?.("event", eventName, cleanParams)
}
