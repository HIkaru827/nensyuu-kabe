import Image from "next/image"
import Link from "next/link"
import { BookOpen, FileText, GraduationCap, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/icon-light-32x32.png" alt="" width={28} height={28} className="rounded-md" />
          <div className="min-w-0">
            <span className="block truncate font-bold text-foreground">年収の壁シミュレーター</span>
          </div>
        </Link>
        
        <nav className="flex items-center gap-1 md:gap-2">
          <Link href="/student-baito">
            <Button size="sm" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">学生ガイド</span>
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">ブログ</span>
            </Button>
          </Link>
          <Link href="/editorial-policy" className="hidden lg:block">
            <Button variant="ghost" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              <span>編集方針</span>
            </Button>
          </Link>
          <Link href="/site-map" className="hidden lg:block">
            <Button variant="ghost" size="sm" className="gap-2">
              <Map className="w-4 h-4" />
              <span>サイトマップ</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}


