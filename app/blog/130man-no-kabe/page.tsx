import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"

export const metadata = {
  title: "130万円の壁が最も危険な理由｜働き損を防ぐ方法",
  description: "130万円の壁を超えると社会保険料が発生し、手取りが大きく減ります。働き損ゾーンを回避する方法を解説。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/130man-no-kabe",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-01-18T00:00:00Z",
    authors: ["年収の壁シミュレーター"],
    tags: ["130万円の壁", "社会保険", "働き損", "年収の壁"],
  },
}

export default function Blog130ManPage() {
  const breadcrumbItems = [
    { name: "ホーム", url: "https://nenshuu-kabe.com" },
    { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
    { name: "130万円の壁が最も危険な理由", url: "https://nenshuu-kabe.com/blog/130man-no-kabe" },
  ]

  return (
    <>
      <ArticleStructuredData
        title="130万円の壁が最も危険な理由｜働き損を防ぐ方法"
        description="130万円の壁を超えると社会保険料が発生し、手取りが大きく減ります。働き損ゾーンを回避する方法を解説。"
        datePublished="2026-01-18T00:00:00Z"
        url="https://nenshuu-kabe.com/blog/130man-no-kabe"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            130万円の壁が最も危険な理由｜働き損を防ぐ方法
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">注意点</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">130万円の壁は最も危険！</h3>
                <p className="text-sm text-red-800 leading-relaxed">
                  130万円を超えると社会保険料（年間約20万円）が発生し、手取りが大きく減少します。これが「働き損ゾーン」と呼ばれる理由です。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-0">130万円の壁とは</h2>
            <p className="text-muted-foreground leading-relaxed">
              「130万円の壁」とは、年収が130万円を超えると、親や配偶者の社会保険の扶養から外れ、自分で社会保険料を払う必要が出てくるラインのことです。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">なぜ「働き損」になるのか</h2>
            <p className="text-muted-foreground leading-relaxed">
              年収130万円を超えると、以下の社会保険料を自分で負担する必要があります：
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li><strong>健康保険料</strong>：年収の約5%</li>
              <li><strong>厚生年金保険料</strong>：年収の約9%</li>
              <li><strong>合計</strong>：年収の約15%</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
              <p className="text-sm font-semibold text-red-900 mb-2">具体例：年収140万円の場合</p>
              <p className="text-sm text-red-800">社会保険料：約21万円</p>
              <p className="text-sm text-red-800">手取り：119万円</p>
              <p className="text-sm font-bold text-red-900 mt-2">
                → 年収130万円（手取り約128万円）より手取りが減る！
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">年収別の手取り比較</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">年収</th>
                    <th className="border border-border px-4 py-2 text-left">社会保険料</th>
                    <th className="border border-border px-4 py-2 text-left">手取り（概算）</th>
                    <th className="border border-border px-4 py-2 text-left">判定</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">120万円</td>
                    <td className="border border-border px-4 py-2">0円</td>
                    <td className="border border-border px-4 py-2">約118万円</td>
                    <td className="border border-border px-4 py-2 text-green-600 font-semibold">安全</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-border px-4 py-2">140万円</td>
                    <td className="border border-border px-4 py-2">約21万円</td>
                    <td className="border border-border px-4 py-2">約117万円</td>
                    <td className="border border-border px-4 py-2 text-red-600 font-semibold">危険</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-border px-4 py-2">150万円</td>
                    <td className="border border-border px-4 py-2">約22万円</td>
                    <td className="border border-border px-4 py-2">約125万円</td>
                    <td className="border border-border px-4 py-2 text-red-600 font-semibold">危険</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-border px-4 py-2">180万円</td>
                    <td className="border border-border px-4 py-2">約27万円</td>
                    <td className="border border-border px-4 py-2">約148万円</td>
                    <td className="border border-border px-4 py-2 text-green-600 font-semibold">OK</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic">
              ※ 税金・社会保険料を考慮した概算値です
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">働き損を防ぐ3つの対策</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">対策1：130万円以内に抑える</h3>
            <p className="text-muted-foreground leading-relaxed">
              最も確実な方法は、年収を130万円以内に抑えることです。月額約10.8万円以内を目安にシフトを調整しましょう。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">対策2：160万円以上を目指す</h3>
            <p className="text-muted-foreground leading-relaxed">
              中途半端に稼ぐなら、いっそ160万円以上を目指すのも一つの手です。160万円以上稼げば、社会保険料を払っても手取りは増えていきます。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">対策3：106万円の壁にも注意</h3>
            <p className="text-muted-foreground leading-relaxed">
              以下の条件を満たすと、106万円から社会保険の加入義務が発生する場合があります：
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 my-4 ml-4">
              <li>従業員数101人以上の企業</li>
              <li>週20時間以上勤務</li>
              <li>月収8.8万円以上</li>
              <li>2ヶ月を超える雇用見込み</li>
              <li>学生でない（夜間・通信は除く）</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>130万円を超えると社会保険料が年間約20万円発生</li>
              <li>130〜160万円は「働き損ゾーン」</li>
              <li>130万円以内に抑えるか、160万円以上を目指すべき</li>
              <li>106万円の壁にも注意が必要</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の制度に基づいた概算です。最終的な判断は勤務先・社会保険事務所でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">あなたは働き損ゾーンに入っていませんか？</h3>
            <p className="text-sm text-muted-foreground">
              年収と社会保険料の影響を今すぐシミュレーション
            </p>
            <Link href="/">
              <Button size="lg" className="w-full md:w-auto">
                無料でシミュレーションする
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="text-center pt-6 space-y-4">
          <Link href="/blog" className="text-primary hover:underline text-sm block">
            ← ブログ一覧に戻る
          </Link>
        </div>
        </article>
      </main>
    </>
  )
}


