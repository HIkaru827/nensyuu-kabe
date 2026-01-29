import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
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
  title: "【2025年最新】学生バイトの税金対策｜勤労学生控除で年収188万円まで！",
  description: "2025年改正で大きく変更！勤労学生控除を使えば年収188万円まで親の扶養維持。申請方法と注意点をわかりやすく解説。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/gakusei-baito-zeikin",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-01-29T00:00:00Z",
    modifiedTime: "2026-01-29T00:00:00Z",
    authors: ["年収の壁シミュレーター"],
    tags: ["学生バイト", "勤労学生控除", "税金対策", "節税", "2025年改正"],
  },
}

export default function GakuseiZeikinPage() {
  const breadcrumbItems = [
    { name: "ホーム", url: "https://nenshuu-kabe.com" },
    { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
    { name: "学生バイトの税金対策", url: "https://nenshuu-kabe.com/blog/gakusei-baito-zeikin" },
  ]

  return (
    <>
      <ArticleStructuredData
        title="【2025年最新】学生バイトの税金対策｜勤労学生控除で年収188万円まで！"
        description="2025年改正で大きく変更！勤労学生控除を使えば年収188万円まで親の扶養維持。申請方法と注意点をわかりやすく解説。"
        datePublished="2026-01-29T00:00:00Z"
        dateModified="2026-01-29T00:00:00Z"
        url="https://nenshuu-kabe.com/blog/gakusei-baito-zeikin"
        imageUrl="https://nenshuu-kabe.com/placeholder-logo.png"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <main className="min-h-screen bg-background py-12 px-4">
        <article className="max-w-3xl mx-auto space-y-8">
        {/* ヘッダー */}
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            【2025年最新】学生バイトの税金対策<br />
            勤労学生控除で年収188万円まで！
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">✨ 朗報</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">節税</span>
            <span>2026年1月29日</span>
            <span>読了時間：約7分</span>
          </div>
        </div>

        {/* 対象者 */}
        <TargetAudienceBox 
          audiences={[
            "アルバイトをしている大学生・専門学生",
            "勤労学生控除について知りたい人",
            "親の扶養に入っている学生",
            "年収をどこまで増やせるか知りたい人"
          ]}
        />

        {/* TL;DR */}
        <TldrBox>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>2025年改正で学生にとって大きく有利に！</strong></li>
            <li><strong>年収160万円まで所得税0円</strong>（給与所得控除123万円+基礎控除48万円-10万円）</li>
            <li><strong>勤労学生控除（27万円）は不要になった！？</strong></li>
            <li>19〜22歳の昼間学生なら<strong>年収188万円（学生は201万円）まで親の扶養維持</strong></li>
          </ul>
        </TldrBox>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">🆕 2025年改正でここが変わった！</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  給与所得控除が55万円→123万円に大幅アップ。勤労学生控除を使わなくても、年収160万円まで所得税がかかりません。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-8">
            {/* セクション1：勤労学生控除とは */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                勤労学生控除とは？
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                勤労学生控除とは、学生がアルバイトで得た収入に対して、<strong className="text-foreground">27万円の追加控除</strong>が受けられる制度です。
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                ただし、<strong className="text-foreground">2025年の税制改正により、勤労学生控除の重要性は大きく低下しました</strong>。後ほど詳しく説明します。
              </p>
            </section>

            {/* セクション2：2025年改正前後の比較 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                2025年改正で何が変わった？
              </h2>
              
              <ComparisonTable 
                headers={["項目", "改正前（〜2024年）", "改正後（2025年〜）"]}
                rows={[
                  { label: "給与所得控除", values: ["55万円", "123万円"] },
                  { label: "基礎控除", values: ["48万円", "48万円"] },
                  { label: "勤労学生控除", values: ["27万円", "27万円（変更なし）"] },
                  { label: "所得税が発生するライン", values: ["103万円", "約160万円"], highlight: true },
                  { label: "勤労学生控除使用時", values: ["130万円", "約187万円"], highlight: true },
                ]}
              />

              <TipBox>
                <p className="mb-2"><strong>つまり、こういうこと！</strong></p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>改正前：103万円までしか稼げなかった → 勤労学生控除で130万円に</li>
                  <li>改正後：160万円まで稼げる → 勤労学生控除はほぼ不要に！</li>
                </ul>
              </TipBox>
            </section>

            {/* セクション3：具体例で理解 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                具体例で理解しよう
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <GoodCaseBox title="年収150万円の場合">
                  <p className="mb-2"><strong>年収：150万円</strong></p>
                  <p className="text-sm mb-2">所得税：<strong className="text-emerald-600">0円</strong></p>
                  <p className="text-sm mb-2">勤労学生控除：<strong className="text-emerald-600">不要</strong></p>
                  <p className="text-sm text-emerald-800">✨ 160万円以下なので自動的に非課税！</p>
                </GoodCaseBox>

                <GoodCaseBox title="年収170万円の場合">
                  <p className="mb-2"><strong>年収：170万円</strong></p>
                  <p className="text-sm mb-2">所得税：約5,100円（少額）</p>
                  <p className="text-sm mb-2">勤労学生控除を使うと：<strong className="text-emerald-600">さらに少なく！</strong></p>
                  <p className="text-sm text-emerald-800">✨ 勤労学生控除で追加の27万円控除</p>
                </GoodCaseBox>
              </div>
            </section>

            {/* セクション4：勤労学生控除を使うべきケース */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                勤労学生控除を使うべきケース
              </h2>
              
              <StepByStep 
                steps={[
                  {
                    title: "年収が160万円を超える場合",
                    description: "年収160万円を超えて稼ぐ場合、勤労学生控除を使うことで所得税をさらに減らせます。"
                  },
                  {
                    title: "住民税を減らしたい場合",
                    description: "多くの自治体では、勤労学生控除（26万円）が住民税にも適用されます。"
                  },
                  {
                    title: "親の扶養控除を気にしない場合",
                    description: "親の扶養から外れることを了承している場合、勤労学生控除で本人の税金を減らせます。"
                  }
                ]}
              />

              <Card className="bg-amber-50 border-amber-200 my-4">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-amber-900 mb-3">⚠️ 重要な注意点</h3>
                  <div className="space-y-2 text-sm text-amber-800">
                    <p><strong>勤労学生控除を使っても、親の扶養控除の判定には影響しません！</strong></p>
                    <p>つまり、年収160万円を超えると、勤労学生控除を使っていても親の扶養控除に影響が出る可能性があります。</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* セクション5：親の扶養控除との関係 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                親の扶養控除との関係
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                2025年改正により、親の扶養控除の基準も大きく緩和されました。
              </p>

              <ComparisonTable 
                headers={["年齢・状況", "改正前", "改正後（2025年〜）"]}
                rows={[
                  { label: "16〜18歳", values: ["123万円", "約160万円"] },
                  { label: "19〜22歳（昼間学生）", values: ["123万円", "約188万円（学生は201万円）"], highlight: true },
                  { label: "23歳以上", values: ["123万円", "約160万円"] },
                ]}
              />

              <GoodCaseBox title="19〜22歳の昼間学生の場合（最も有利！）">
                <ul className="text-sm space-y-2">
                  <li>✅ 年収188万円まで親の扶養控除が満額維持</li>
                  <li>✅ 年収201万円まで親の扶養控除が一部維持（特定扶養親族）</li>
                  <li>✅ 年収160万円まで所得税0円</li>
                  <li>⚠️ ただし130万円を超えると社会保険料が発生</li>
                </ul>
              </GoodCaseBox>
            </section>

            {/* セクション6：申請方法 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                勤労学生控除の申請方法
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                年収が160万円を超えて勤労学生控除を使いたい場合の申請方法です。
              </p>

              <StepByStep 
                steps={[
                  {
                    title: "年末調整で申請（最も簡単）",
                    description: "アルバイト先で「扶養控除等（異動）申告書」を提出する際、勤労学生控除の欄にチェック＋学校名を記入。学生証のコピーを求められる場合があります。"
                  },
                  {
                    title: "確定申告で申請",
                    description: "複数のバイトをしている場合や、年末調整を忘れた場合は、翌年2〜3月に確定申告を行います。"
                  }
                ]}
              />
            </section>

            {/* セクション7：適用条件 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                勤労学生控除の適用条件
              </h2>

              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  <span>給与所得などの勤労による所得があること</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  <span>合計所得金額が75万円以下であること（給与収入なら130万円以下）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  <span>特定の学校の学生・生徒であること</span>
                </li>
              </ul>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">対象となる学校</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 大学、大学院</li>
                  <li>• 高等学校、高等専門学校</li>
                  <li>• 専修学校、各種学校（一定の要件を満たすもの）</li>
                  <li>• 職業訓練校（一定の要件を満たすもの）</li>
                </ul>
              </div>
            </section>

            {/* Q&A */}
            <QaSection 
              qas={[
                {
                  question: "2025年改正後、勤労学生控除はもう必要ないの？",
                  answer: "年収160万円以下なら不要です。ただし、160万円を超えて稼ぐ場合や、住民税を減らしたい場合は依然として有効です。"
                },
                {
                  question: "親の扶養控除に影響しないって本当？",
                  answer: "はい、勤労学生控除を使っても、親の扶養控除の判定には影響しません。ただし、年収160万円（学生は188〜201万円）を超えると、親の扶養控除に影響が出ます。"
                },
                {
                  question: "社会保険の130万円の壁との関係は？",
                  answer: "勤労学生控除は税金（所得税・住民税）の控除であり、社会保険の壁（130万円）には影響しません。130万円を超えると社会保険料が発生します。"
                },
                {
                  question: "結局、学生はいくらまで稼げばいいの？",
                  answer: "おすすめは130万円以内（社会保険料なし）、または160万円以上（社会保険料を払っても手取りが増える）。19〜22歳の昼間学生なら188万円まで親の扶養も維持できます。"
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
                      <span className="text-foreground"><strong>2025年改正で学生に大きく有利に！</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>年収160万円まで所得税0円</strong>（勤労学生控除不要）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground">勤労学生控除は年収160万円超で使う</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0 font-bold">✓</span>
                      <span className="text-foreground"><strong>19〜22歳の昼間学生なら188〜201万円まで親の扶養維持</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 shrink-0 font-bold">⚠</span>
                      <span className="text-foreground">社会保険の壁（130万円）は据え置き</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の税制改正に基づいた情報です。最終的な判断は税務署・自治体でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">あなたの年収で税金はいくら？</h3>
            <p className="text-sm text-muted-foreground">
              2025年改正対応！勤労学生控除を使った場合の税金をシミュレーション
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
