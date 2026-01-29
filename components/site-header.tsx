import Link from "next/link"
import { BookOpen, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between max-w-7xl mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Home className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">年収の壁シミュレーター</span>
        </Link>
        
        <nav className="flex items-center gap-2">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">ブログ</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

