import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calculator, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "学生バイトの税金対策｜勤労学生控除で所得税を0円に | 年収の壁シミュレーター",
  description: "勤労学生控除を使えば、年収130万円まで所得税が0円に。申請方法と注意点を詳しく解説します。",
}

export default function GakuseiZeikinPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            ブログ一覧に戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            学生バイトの税金対策｜勤労学生控除で所得税を0円に
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">節税</span>
            <span>2026年1月18日</span>
          </div>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">勤労学生控除で年収130万円まで所得税0円！</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  学生なら勤労学生控除（27万円）を申請することで、年収130万円まで所得税がかかりません。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-0">勤労学生控除とは</h2>
            <p className="text-muted-foreground leading-relaxed">
              勤労学生控除とは、学生がアルバイトで得た収入に対して、27万円の控除が受けられる制度です。これにより、通常103万円から課税される所得税が、130万円まで非課税になります。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">控除額の計算</h2>
            <div className="bg-muted p-4 rounded-lg my-4">
              <p className="text-sm font-semibold text-foreground mb-3">通常の場合（控除なし）</p>
              <p className="text-sm text-foreground">給与所得控除：55万円</p>
              <p className="text-sm text-foreground">基礎控除：48万円</p>
              <p className="text-sm font-bold text-foreground mt-2">= 103万円まで非課税</p>
              
              <hr className="my-4 border-border" />
              
              <p className="text-sm font-semibold text-foreground mb-3">勤労学生控除を使った場合</p>
              <p className="text-sm text-foreground">給与所得控除：55万円</p>
              <p className="text-sm text-foreground">基礎控除：48万円</p>
              <p className="text-sm text-primary font-bold">+ 勤労学生控除：27万円</p>
              <p className="text-sm font-bold text-foreground mt-2">= 130万円まで非課税 ✨</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8">適用条件</h2>
            <p className="text-muted-foreground leading-relaxed">
              勤労学生控除を受けるには、以下の条件をすべて満たす必要があります：
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>給与所得などの勤労による所得があること</li>
              <li>合計所得金額が75万円以下であること（給与収入なら130万円以下）</li>
              <li>特定の学校の学生・生徒であること</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6">対象となる学校</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 my-4 ml-4">
              <li>大学、大学院</li>
              <li>高等学校、高等専門学校</li>
              <li>専修学校、各種学校（一定の要件を満たすもの）</li>
              <li>職業訓練校（一定の要件を満たすもの）</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">申請方法</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">方法1：年末調整で申請（最も簡単）</h3>
            <p className="text-muted-foreground leading-relaxed">
              アルバイト先で年末調整を受ける場合、「扶養控除等（異動）申告書」に勤労学生控除の欄があります。ここにチェックを入れ、学校名を記入するだけでOKです。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="text-sm font-semibold text-blue-900 mb-2">📝 必要なもの</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>・学生証のコピー（提出を求められる場合）</li>
                <li>・扶養控除等（異動）申告書</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-6">方法2：確定申告で申請</h3>
            <p className="text-muted-foreground leading-relaxed">
              複数のアルバイトをしている場合や、年末調整で申請し忘れた場合は、翌年2〜3月に確定申告を行います。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">注意点</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6">⚠️ 親の扶養控除には影響する</h3>
            <p className="text-muted-foreground leading-relaxed">
              重要なのは、<strong>勤労学生控除を使っても、親の扶養控除の判定には影響しない</strong>ということです。年収103万円を超えると、親の扶養控除は減額され始めます。
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">例：年収120万円の場合</p>
              <p className="text-sm text-amber-800">✅ 本人の所得税：0円（勤労学生控除により）</p>
              <p className="text-sm text-amber-800">⚠️ 親の扶養控除：影響あり（103万円超のため）</p>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-6">⚠️ 住民税には使えない（自治体による）</h3>
            <p className="text-muted-foreground leading-relaxed">
              勤労学生控除は所得税の控除です。住民税については、自治体によって取り扱いが異なります。多くの自治体では、勤労学生控除は26万円として適用されます。
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">まとめ</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 my-4">
              <li>勤労学生控除で年収130万円まで所得税0円</li>
              <li>年末調整または確定申告で申請</li>
              <li>親の扶養控除には影響する（103万円超で影響）</li>
              <li>社会保険の130万円の壁とは別の話</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-sm text-foreground font-semibold mb-2">💡 重要</p>
              <p className="text-sm text-muted-foreground">
                本記事は2025年度の税制に基づいた情報です。最終的な判断は税務署でご確認ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center space-y-4">
            <Calculator className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-foreground">あなたの年収で税金はいくら？</h3>
            <p className="text-sm text-muted-foreground">
              勤労学生控除を使った場合の税金をシミュレーション
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

