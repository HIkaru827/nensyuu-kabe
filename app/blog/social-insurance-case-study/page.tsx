import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "社会保険の壁をケース別に比較。学生・非学生・19歳以上23歳未満の違い",
  description:
    "106万円、130万円、150万円未満の基準がどう分かれるかを、学生、非学生、19歳以上23歳未満のケース別に整理します。どこで判断が分かれるかをまとめた記事です。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/social-insurance-case-study",
  },
}

export default function SocialInsuranceCaseStudyPage() {
  const url = "https://nenshuu-kabe.com/blog/social-insurance-case-study"

  return (
    <>
      <ArticleStructuredData
        title="社会保険の壁をケース別に比較。学生・非学生・19歳以上23歳未満の違い"
        description="106万円、130万円、150万円未満の基準がどう分かれるかを、学生、非学生、19歳以上23歳未満のケース別に整理します。どこで判断が分かれるかをまとめた記事です。"
        datePublished="2026-04-15T00:00:00Z"
        dateModified="2026-04-15T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "社会保険の壁をケース別に比較", url },
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
              社会保険の壁をケース別に比較
              <br />
              学生・非学生・19歳以上23歳未満の違い
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年4月15日時点の公的資料に基づき、同じ年収でも判断が変わる理由をケース別に整理しています。
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-amber-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-amber-900">
                <li>106万円は独立した法定ラインではなく、月額8.8万円の目安として使われる通称です。</li>
                <li>130万円は被扶養者認定の基本ラインですが、19歳以上23歳未満は150万円未満の特例があります。</li>
                <li>勤務先で自分が加入するかどうかは、週20時間、月額賃金、学生区分、企業規模などを確認します。</li>
                <li>そのため、同じ年収130万円でも学生と非学生では結論が変わり得ます。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">ケース1: 20歳の昼間学生が年収140万円</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  このケースでは、家族の社会保険の被扶養者認定は19歳以上23歳未満の150万円未満要件に照らして確認します。
                  一方で、短時間労働者の加入判定では昼間学生が除外に当たることがあるため、勤務先加入は年収だけでは決まりません。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  つまり、140万円という数字だけを見ると危険で、学生区分を必ず先に確認する必要があります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">ケース2: 24歳の非学生が年収140万円</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  19歳以上23歳未満の特例は使えないため、被扶養者認定では130万円未満が基本ラインになります。
                  勤務先で週20時間以上、月額8.8万円以上などの条件を満たすなら、自分で社会保険へ加入する可能性も高まります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  同じ140万円でも、20歳学生とは論点が違うことが分かります。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">ケース3: 21歳の夜間学生が年収120万円</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  夜間学生や通信制などは、短時間労働者の学生除外の扱いが昼間学生と異なることがあります。
                  そのため、年収120万円であっても勤務条件しだいで社会保険加入の判定に影響する可能性があります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  「学生だから対象外」と思い込むのが一番危険なパターンです。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">どのケースでも共通して確認する項目</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 年齢が19歳以上23歳未満に当たるか。</li>
                    <li>2. 学生なら昼間か、夜間・通信・定時制か。</li>
                    <li>3. 週20時間以上、月額賃金8.8万円以上などの勤務条件を満たすか。</li>
                    <li>4. 家族の健康保険の扶養認定と、勤務先加入を混同していないか。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">このテーマが誤解されやすい理由</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ネット上では「106万円の壁」「130万円の壁」のように、ひとつの数字だけで説明されることが多いです。
                  しかし実際には、被扶養者認定、勤務先加入、学生区分、年齢特例が別々に動いています。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  このサイトでは、年収だけで断定しにくい部分を隠さず、どの追加条件で結果が変わるかまで示す方針を取っています。
                </p>
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
                        <p className="text-sm font-semibold text-foreground">日本年金機構 短時間労働者の取得要件</p>
                        <p className="text-xs text-muted-foreground">勤務先加入の主な条件を確認できます。</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                  <a
                    href="https://www.nenkin.go.jp/faq/kounen/tekiyoukakudai/tanjikan/gakusei02.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border p-4 hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">日本年金機構 学生の扱い</p>
                        <p className="text-xs text-muted-foreground">昼間学生、夜間学生などの扱いを確認できます。</p>
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
                        <p className="text-xs text-muted-foreground">150万円未満の特例を確認できます。</p>
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
              <h3 className="text-xl font-bold text-foreground">自分のケースで条件を追加する</h3>
              <p className="text-sm text-muted-foreground">
                詳細版では、勤務時間や勤務先規模を入れて年収だけでは分からない部分を確認できます。
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
