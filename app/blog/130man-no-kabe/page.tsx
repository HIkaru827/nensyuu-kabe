import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "130万円の壁とは何か。社会保険の扶養判定を現行ルールで整理",
  description:
    "130万円の壁は税金の壁ではなく、主に社会保険の被扶養者認定で使われる年収要件です。106万円との違い、19歳以上23歳未満の150万円未満要件も含めて、現行ルールに沿って整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/130man-no-kabe",
  },
}

export default function Blog130ManPage() {
  const url = "https://nenshuu-kabe.com/blog/130man-no-kabe"

  return (
    <>
      <ArticleStructuredData
        title="130万円の壁とは何か。社会保険の扶養判定を現行ルールで整理"
        description="130万円の壁は税金の壁ではなく、主に社会保険の被扶養者認定で使われる年収要件です。106万円との違い、19歳以上23歳未満の150万円未満要件も含めて、現行ルールに沿って整理します。"
        datePublished="2026-04-02T00:00:00Z"
        dateModified="2026-04-02T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "130万円の壁とは何か", url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              130万円の壁とは何か
              <br />
              社会保険の扶養判定を現行ルールで整理
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月2日時点で確認した国税庁・日本年金機構の公的情報に基づいて整理しています。
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-blue-950">先に要点</h2>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>130万円の壁は、主に社会保険の被扶養者認定で使われる年間収入要件です。</li>
                <li>税金の壁とは別です。所得税や扶養控除の判定とは分けて見ます。</li>
                <li>19歳以上23歳未満は、2025年10月1日以後、被扶養者認定の年間収入要件が150万円未満に変わっています。</li>
                <li>106万円は単独で断定できる壁ではなく、週20時間や月額賃金8.8万円以上など複数条件で見ます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">130万円の壁は税金ではなく社会保険の話</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一般に「130万円の壁」と呼ばれるものは、健康保険などで家族の被扶養者として認定されるかどうかを見るときの年間収入要件を指すことが多いです。
                  税金の世界で使う123万円や160万円とは別の基準なので、同じ「年収の壁」としてひとまとめにしない方が安全です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  このサイトでも、税金の判定と社会保険の判定は分けて表示しています。年収だけで一括判断すると誤解が生まれやすいためです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">通常は130万円未満、19歳以上23歳未満は150万円未満</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  日本年金機構の案内では、被扶養者認定の年間収入要件は通常130万円未満です。ただし、19歳以上23歳未満の被扶養者については、
                  2025年10月1日から年間収入要件が150万円未満に見直されています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  そのため、学生や若年層のアルバイトでは、古い記事にある「一律130万円」と書かれた説明をそのまま信じない方が安全です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">106万円との違い</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  106万円は、短時間労働者の社会保険加入でよく使われる通称です。ただし、日本年金機構は「106万円以上かどうか」ではなく、
                  主に月額賃金8.8万円以上かどうかで判定する案内を出しています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  実際には、週20時間以上、学生でないこと、勤務先の企業規模なども確認が必要です。したがって、年収だけで
                  「106万円を超えたから必ず加入」「超えていないから加入しない」と断定するのは正確ではありません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">確認の順番</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 税金の話か、社会保険の話かを先に分ける。</li>
                    <li>2. 社会保険なら、被扶養者認定を見るのか、勤務先で自分が加入する話なのかを分ける。</li>
                    <li>3. 被扶養者認定なら130万円未満、19歳以上23歳未満なら150万円未満の特例も確認する。</li>
                    <li>4. 短時間労働者の加入なら、週20時間、月額賃金8.8万円、学生区分、勤務先規模を確認する。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <a
                    href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/shutokuyouken.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 短時間労働者の加入要件</p>
                        <p className="text-xs text-muted-foreground">週20時間、月額賃金8.8万円、学生でないことなどの条件を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/nenshuu.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 106万円は参考であるというFAQ</p>
                        <p className="text-xs text-muted-foreground">年収106万円そのものではなく、月額賃金8.8万円などで判定する旨が示されています。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nenkin.go.jp/oshirase/taisetu/2025/202508/0819.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 19歳以上23歳未満の被扶養者認定</p>
                        <p className="text-xs text-muted-foreground">2025年10月1日から年間収入要件が150万円未満に変わった案内です。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">年収だけで断定しない形で確認する</h3>
              <p className="text-sm text-muted-foreground">
                シミュレーターでは、現行法で年収だけから安全に判断できる範囲だけを表示しています。
              </p>
              <Link href="/">
                <Button size="lg">シミュレーターに戻る</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
