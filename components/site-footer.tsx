import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">学生バイトお金ナビ</h2>
          <p className="text-xs leading-relaxed text-muted-foreground">
            学生バイトの年収の壁、親の扶養、社会保険、有給休暇をまとめて確認できる情報サイトです。
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">主要ツール</h2>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                年収の壁シミュレーター
              </Link>
            </li>
            <li>
              <Link href="/paid-leave" className="text-muted-foreground transition-colors hover:text-primary">
                バイト有給シミュレーター
              </Link>
            </li>
            <li>
              <Link href="/student-baito" className="text-muted-foreground transition-colors hover:text-primary">
                学生バイト年収ガイド
              </Link>
            </li>
            <li>
              <Link href="/baito-type-diagnosis" className="text-muted-foreground transition-colors hover:text-primary">
                学生バイトタイプ診断
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                ブログ
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">サイト情報</h2>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                運営者情報
              </Link>
            </li>
            <li>
              <Link href="/calculation-method" className="text-muted-foreground transition-colors hover:text-primary">
                計算方法
              </Link>
            </li>
            <li>
              <Link href="/editorial-policy" className="text-muted-foreground transition-colors hover:text-primary">
                編集方針
              </Link>
            </li>
            <li>
              <Link href="/site-map" className="text-muted-foreground transition-colors hover:text-primary">
                サイトマップ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 学生バイトお金ナビ. 掲載内容は一般的な目安です。最終判断は勤務先・税務署・自治体などで確認してください。
        </p>
      </div>
    </footer>
  )
}
