import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  TldrBox, 
  GoodCaseBox, 
  BadCaseBox, 
  TipBox,
  TargetAudienceBox,
  ComparisonTable,
  StepByStep,
  QaSection 
} from "@/components/blog-components"

export const metadata = {
  title: "【超危険】130万円の壁で働き損！手取りが減る理由をわかりやすく解説 | 年収の壁シミュレーター",
  description: "130万円の壁を超えると年間20万円の社会保険料が発生！なぜ働き損になるのか、具体例とともにわかりやすく解説します。",
}

export default function Blog130ManV2Page() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        {/* ヘッダー */}
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            【超危険】130万円の壁で働き損！<br />手取りが減る理由をわかりやすく解説
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">⚠️ 最重要</span>
            <span>2026年1月18日</span>
            <span>読了時間：約5分</span>
          </div>
        </div>

        {/* 対象者 */}
        <TargetAudienceBox 
          audiences={[
            "年収が130万円前後の学生・アルバイト",
            "シフトを増やそうか迷っている人",
            "親の扶養に入っている人",
            "働き損を避けたい人"
          ]}
        />

        {/* TL;DR */}
        <TldrBox>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>130万円を超えると社会保険料が年間約20万円発生</strong></li>
            <li><strong>年収140万円でも手取りは120万円以下より少ない</strong>（働き損）</li>
            <li><strong>130万円以内に抑えるか、160万円以上を目指すべき</strong></li>
            <li>社会保険の壁は2025年税制改正でも変更なし</li>
          </ul>
        </TldrBox>

        {/* メインコンテンツ */}
        <Card>
          <CardContent className="pt-6 space-y-8">
            {/* セクション1：130万円の壁とは */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                130万円の壁とは？
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                「130万円の壁」とは、年収が130万円を超えると、<strong className="text-foreground">親や配偶者の社会保険の扶養から外れ、自分で社会保険料を払う必要が出てくる</strong>ラインのことです。
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                この社会保険料が<span className="text-red-600 font-bold">年間約20万円</span>にもなるため、手取りが大きく減ってしまいます。これが「働き損」と呼ばれる理由です。
              </p>
            </section>

            {/* セクション2：具体例で理解 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                具体例で理解しよう
              </h2>
              
              <GoodCaseBox title="年収120万円の場合（セーフ）">
                <p className="mb-2"><strong>年収：120万円</strong></p>
                <p className="mb-2">税金：約2万円</p>
                <p className="mb-2">社会保険料：<strong className="text-emerald-600">0円</strong>（扶養内のため）</p>
                <p className="text-lg font-bold text-emerald-600 mt-3">
                  手取り：約118万円 ✨
                </p>
              </GoodCaseBox>

              <BadCaseBox title="年収140万円の場合（働き損！）">
                <p className="mb-2"><strong>年収：140万円</strong></p>
                <p className="mb-2">税金：約5万円</p>
                <p className="mb-2">社会保険料：<strong className="text-red-600">約21万円</strong>（健康保険+厚生年金）</p>
                <p className="text-lg font-bold text-red-600 mt-3">
                  手取り：約114万円 😱
                </p>
                <p className="text-sm mt-3 pt-3 border-t border-red-300">
                  → 年収120万円より<strong>手取りが4万円も少ない</strong>！
                </p>
              </BadCaseBox>

              <TipBox>
                <p>
                  年収を20万円増やしたのに、手取りは逆に減ってしまう。これが「働き損ゾーン」です。
                </p>
              </TipBox>
            </section>

            {/* セクション3：手取り比較表 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                年収別の手取り比較
              </h2>
              <ComparisonTable 
                headers={["年収", "社会保険料", "手取り（概算）", "判定"]}
                rows={[
                  { label: "100万円", values: ["0円", "約100万円", "✅ 安全"] },
                  { label: "120万円", values: ["0円", "約118万円", "✅ 安全"] },
                  { label: "130万円", values: ["0円", "約128万円", "✅ ギリギリOK"] },
                  { label: "140万円", values: ["約21万円", "約114万円", "❌ 働き損"], highlight: true },
                  { label: "150万円", values: ["約22万円", "約123万円", "❌ 働き損"], highlight: true },
                  { label: "160万円", values: ["約24万円", "約131万円", "⚠️ ギリギリ"], },
                  { label: "180万円", values: ["約27万円", "約148万円", "✅ OK"], },
                ]}
              />
              <p className="text-xs text-muted-foreground italic">
                ※ 税金・社会保険料を考慮した概算値です
              </p>
            </section>

            {/* セクション4：社会保険料の内訳 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                社会保険料の内訳
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                130万円を超えると、以下の2つの保険料を払う必要があります：
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <Card className="bg-slate-50">
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-foreground mb-2">健康保険料</h3>
                    <p className="text-2xl font-bold text-primary mb-1">年収の約5%</p>
                    <p className="text-sm text-muted-foreground">年収140万円なら約7万円</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50">
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-foreground mb-2">厚生年金保険料</h3>
                    <p className="text-2xl font-bold text-primary mb-1">年収の約9%</p>
                    <p className="text-sm text-muted-foreground">年収140万円なら約12.6万円</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-red-50 border-red-200">
                <CardContent className="pt-4">
                  <p className="text-center">
                    <span className="text-3xl font-bold text-red-600">合計：約15%</span>
                  </p>
                  <p className="text-center text-sm text-red-800 mt-2">
                    年収140万円 × 15% = <strong>約21万円</strong>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* セクション5：対策方法 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                働き損を防ぐ3つの対策
              </h2>
              <StepByStep 
                steps={[
                  {
                    title: "130万円以内に抑える（最も確実）",
                    description: "月額約10.8万円以内を目安にシフトを調整。社会保険料が発生しないため、手取りを最大化できます。"
                  },
                  {
                    title: "思い切って160万円以上を目指す",
                    description: "社会保険料を払っても、160万円以上稼げば手取りは増えていきます。長期的にはこちらがおすすめ。"
                  },
                  {
                    title: "106万円の壁にも注意",
                    description: "従業員101人以上の企業で週20時間以上働く場合、106万円から社会保険に加入する場合があります（昼間の大学生は対象外）。"
                  }
                ]}
              />
            </section>

            {/* セクション6：2025年改正との関係 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                2025年税制改正との関係
              </h2>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-blue-900 mb-3">📌 重要な注意点</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p>✅ <strong>所得税の壁：103万円 → 160万円</strong>（改正済み）</p>
                    <p>❌ <strong>社会保険の壁：130万円（変更なし！）</strong></p>
                  </div>
                  <p className="text-sm text-blue-800 mt-3 pt-3 border-t border-blue-300">
                    所得税の壁は引き上げられましたが、<strong>社会保険の壁（130万円）は変更されていません</strong>。そのため、130〜160万円は依然として「働き損ゾーン」です。
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Q&A */}
            <QaSection 
              qas={[
                {
                  question: "130万円ぴったりならどうなりますか？",
                  answer: "130万円以下であれば社会保険料は発生しません。ただし、月収が10.8万円を継続的に超える場合は対象になる可能性があるため、年間130万円以内に収めることが重要です。"
                },
                {
                  question: "社会保険料を払うメリットはありますか？",
                  answer: "将来の年金額が増える、傷病手当金がもらえる、出産手当金がもらえる等のメリットがあります。長期的に見れば、160万円以上稼いで社会保険に加入する方が有利な場合もあります。"
                },
                {
                  question: "バイトを掛け持ちしている場合は？",
                  answer: "複数のバイトの合計年収で判断されます。全ての収入を合わせて130万円以内に抑える必要があります。"
                },
                {
                  question: "12月に調整すれば間に合いますか？",
                  answer: "可能ですが、月収ベースでも判定されるため、特定の月だけ極端に稼ぐと社会保険の対象になる可能性があります。年間を通して調整することをおすすめします。"
                }
              ]}
            />

            {/* まとめ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                まとめ
              </h2>
              <Card className="bg-primary/5">
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>130万円の壁は最も危険</strong>：社会保険料が年間約20万円発生</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>130〜160万円は働き損ゾーン</strong>：手取りが逆に減る</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>対策は2つ</strong>：130万円以内に抑えるか、160万円以上を目指す</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>2025年改正でも変更なし</strong>：社会保険の壁（130万円）は据え置き</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の制度に基づいた概算です。最終的な判断は勤務先・社会保険事務所でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
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
  )
}

