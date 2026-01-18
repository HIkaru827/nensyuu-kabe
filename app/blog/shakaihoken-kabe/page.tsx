import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "社会保険の壁を徹底解説｜130万円・106万円の違いとは | 年収の壁シミュレーター",
  description: "社会保険の扶養から外れる基準は130万円（または106万円）。それぞれの条件と対策を解説します。",
}

export default function ShakaiHokenPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            社会保険の壁を徹底解説｜130万円・106万円の違いとは
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">社会保険</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">社会保険には2つの壁がある</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  106万円の壁と130万円の壁。あなたがどちらに該当するかで、働き方が大きく変わります。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-0">社会保険の壁とは</h2>
            <p className="text-muted-foreground leading-relaxed">
              社会保険の壁とは、親や配偶者の社会保険の扶養から外れ、自分で社会保険料（健康保険料・厚生年金保険料）を払わなければならなくなる年収のラインのことです。
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              社会保険料は年収の約15%にもなるため、扶養から外れると手取りが大きく減ってしまいます。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">130万円の壁（原則）</h2>
            <p className="text-muted-foreground leading-relaxed">
              年収が<strong>130万円</strong>を超えると、原則として社会保険の扶養から外れます。これがいわゆる「130万円の壁」です。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">130万円の壁の条件</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>年収が130万円以上の見込みがあること</li>
              <li>月収換算で10.8万円以上が継続すること</li>
              <li>勤務先の規模に関係なく適用</li>
            </ul>

            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-semibold text-foreground mb-2">社会保険料の目安（年収140万円の場合）</p>
              <p className="text-sm text-foreground">健康保険料：年収の約5% = 約7万円</p>
              <p className="text-sm text-foreground">厚生年金保険料：年収の約9% = 約12.6万円</p>
              <p className="text-sm font-bold text-foreground mt-2">合計：約20万円</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">106万円の壁（一定の条件下）</h2>
            <p className="text-muted-foreground leading-relaxed">
              2016年10月から、一定の条件を満たすと、<strong>106万円</strong>から社会保険の加入義務が発生するようになりました。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">106万円の壁の適用条件（すべて満たす必要あり）</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li><strong>週の所定労働時間が20時間以上</strong></li>
              <li><strong>月額賃金が8.8万円以上</strong>（年収106万円相当）</li>
              <li><strong>2ヶ月を超える雇用の見込みがある</strong></li>
              <li><strong>従業員数が101人以上の企業</strong>（2024年10月から）</li>
              <li><strong>学生でないこと</strong>（ただし夜間・通信・定時制は対象）</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ 注意</p>
              <p className="text-sm text-amber-800">
                <strong>昼間の大学生・専門学生は106万円の壁の対象外</strong>です。夜間・通信・定時制の学生は対象になります。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">130万円と106万円の違い</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">項目</th>
                    <th className="border border-border px-4 py-2 text-left">130万円の壁</th>
                    <th className="border border-border px-4 py-2 text-left">106万円の壁</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">適用基準</td>
                    <td className="border border-border px-4 py-2">年収130万円以上</td>
                    <td className="border border-border px-4 py-2">月収8.8万円以上<br />（年収106万円相当）</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">勤務先の規模</td>
                    <td className="border border-border px-4 py-2">関係なし</td>
                    <td className="border border-border px-4 py-2">従業員101人以上</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">労働時間</td>
                    <td className="border border-border px-4 py-2">関係なし</td>
                    <td className="border border-border px-4 py-2">週20時間以上</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">学生の扱い</td>
                    <td className="border border-border px-4 py-2">関係なし</td>
                    <td className="border border-border px-4 py-2">昼間学生は対象外</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">あなたはどちらに該当する？</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">パターン1：昼間の大学生・専門学生</h3>
            <p className="text-muted-foreground leading-relaxed">
              → <strong>130万円の壁のみ</strong>を気にすればOK<br />
              106万円の壁は適用されません。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">パターン2：夜間・通信・定時制の学生</h3>
            <p className="text-muted-foreground leading-relaxed">
              → 勤務先が従業員101人以上の場合、<strong>106万円の壁に注意</strong><br />
              それ以外は130万円の壁。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">パターン3：フリーター（学生でない）</h3>
            <p className="text-muted-foreground leading-relaxed">
              → 勤務先が従業員101人以上で週20時間以上働く場合、<strong>106万円の壁に注意</strong><br />
              それ以外は130万円の壁。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">対策方法</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">対策1：年収を抑える</h3>
            <p className="text-muted-foreground leading-relaxed">
              最も確実な方法は、該当する壁の手前に年収を抑えることです。
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 my-4 ml-4">
              <li>106万円の壁 → 月収8.8万円以内</li>
              <li>130万円の壁 → 月収10.8万円以内</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">対策2：労働時間を調整（106万円の壁の場合）</h3>
            <p className="text-muted-foreground leading-relaxed">
              106万円の壁は週20時間以上が条件なので、<strong>週20時間未満に抑える</strong>ことで回避できます。
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6">対策3：思い切って160万円以上を目指す</h3>
            <p className="text-muted-foreground leading-relaxed">
              中途半端に稼ぐなら、いっそ160万円以上を目指すのも一つの手です。社会保険料を払っても、160万円以上稼げば手取りは増えていきます。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>社会保険の壁には130万円と106万円の2種類がある</li>
              <li>昼間の大学生は106万円の壁の対象外</li>
              <li>夜間・通信学生やフリーターは条件次第で106万円から加入</li>
              <li>社会保険料は年収の約15%（約20万円）</li>
              <li>106万円の壁は労働時間で回避可能</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の制度に基づいた情報です。最終的な判断は勤務先・社会保険事務所でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">あなたは社会保険の壁に引っかかる？</h3>
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
  )
}

