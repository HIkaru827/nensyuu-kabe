"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calculator, CalendarCheck, GraduationCap, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2 transition-opacity hover:opacity-80">
          <Image src="/icon-light-32x32.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="truncate font-bold text-foreground">学生バイトお金ナビ</span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2" aria-label="主要ナビゲーション">
          <Button asChild size="sm" variant={isActive("/") ? "default" : "ghost"} className="h-11 min-w-11 gap-2 px-2 sm:px-3 md:h-9 md:min-w-0">
            <Link href="/" aria-current={isActive("/") ? "page" : undefined} aria-label="年収の壁シミュレーター">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">年収</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant={isActive("/paid-leave") ? "default" : "ghost"} className="h-11 min-w-11 gap-2 px-2 sm:px-3 md:h-9 md:min-w-0">
            <Link href="/paid-leave" aria-current={isActive("/paid-leave") ? "page" : undefined} aria-label="有給シミュレーター">
              <CalendarCheck className="h-4 w-4" />
              <span className="hidden sm:inline">有給</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant={isActive("/student-baito") ? "default" : "ghost"} className="h-11 min-w-11 gap-2 px-2 sm:px-3 md:h-9 md:min-w-0">
            <Link href="/student-baito" aria-current={isActive("/student-baito") ? "page" : undefined} aria-label="学生バイトガイド">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden md:inline">学生ガイド</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant={isActive("/blog") ? "default" : "ghost"} className="hidden gap-2 md:inline-flex md:h-9">
            <Link href="/blog" aria-current={isActive("/blog") ? "page" : undefined}>
              <BookOpen className="h-4 w-4" />
              <span>ブログ</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant={isActive("/site-map") ? "default" : "ghost"} className="hidden gap-2 lg:inline-flex lg:h-9">
            <Link href="/site-map" aria-current={isActive("/site-map") ? "page" : undefined}>
              <Map className="h-4 w-4" />
              <span>サイトマップ</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
