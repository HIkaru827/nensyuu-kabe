import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calculator, CalendarCheck, GraduationCap, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80">
          <Image src="/icon-light-32x32.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="truncate font-bold text-foreground">学生バイトお金ナビ</span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2" aria-label="主要ナビゲーション">
          <Button asChild size="sm" variant="ghost" className="gap-2">
            <Link href="/">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">年収</span>
            </Link>
          </Button>
          <Button asChild size="sm" className="gap-2">
            <Link href="/paid-leave">
              <CalendarCheck className="h-4 w-4" />
              <span className="hidden sm:inline">有給</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="gap-2">
            <Link href="/student-baito">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden md:inline">学生ガイド</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="hidden gap-2 md:inline-flex">
            <Link href="/blog">
              <BookOpen className="h-4 w-4" />
              <span>ブログ</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="hidden gap-2 lg:inline-flex">
            <Link href="/site-map">
              <Map className="h-4 w-4" />
              <span>サイトマップ</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
