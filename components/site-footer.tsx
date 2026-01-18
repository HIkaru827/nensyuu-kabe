import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">年収の壁シミュレーター</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              学生・アルバイト向けの年収シミュレーター。税金や社会保険の影響を30秒で判定します。
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">サイト情報</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">免責事項</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              当サイトの情報は2025年度税制に基づいた概算です。最終判断は税務署・自治体でご確認ください。
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 年収の壁シミュレーター (nenshuu-kabe.com). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

