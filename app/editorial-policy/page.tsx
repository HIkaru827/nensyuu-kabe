import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"

export const metadata = {
  title: "編集方針 | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの記事作成方針、参照先、更新ルールをまとめたページです。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/editorial-policy",
  },
}

export default function EditorialPolicyPage() {
  return (
    <ContentPageShell
      title="編集方針"
      description="記事の作り方、参照先、更新ルールを公開しています"
    >
      <Card>
        <CardContent className="space-y-6 pt-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. このサイトが重視すること</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              当サイトは、年収の壁、扶養、社会保険について、数字だけを並べるのではなく
              「どの制度の話か」「誰に影響するか」「年収だけで断定できるか」を分けて説明することを重視しています。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. 主な参照先</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>国税庁のタックスアンサー、制度解説、FAQ</li>
              <li>日本年金機構のFAQ、適用拡大資料、被扶養者認定の案内</li>
              <li>自治体や公的機関の公開情報</li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              民間サイトを参照する場合もありますが、制度の根拠としては一次情報を優先します。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. 記事の書き方</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>所得税、扶養控除、社会保険を混同しないように分けて説明します。</li>
              <li>年収だけで断定できないテーマでは、必要な追加条件を明記します。</li>
              <li>想定読者がどのケースに当てはまるかを冒頭で分かるようにします。</li>
              <li>確認日、参照元、記事の前提をできるだけ明記します。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. 更新ルール</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              制度改正や一次情報の変更を確認したときは、該当ページの文面と更新日を見直します。
              大きな変更は <a href="/updates" className="text-primary hover:underline">更新履歴</a> にも反映します。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. できないこと</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              当サイトは一般的な制度整理と試算の入口を提供するものであり、個別事情を踏まえた税務・社保の最終判断や代行は行いません。
              最終確認は税務署、自治体、勤務先、保険者などの公的・公式窓口で行ってください。
            </p>
          </section>
        </CardContent>
      </Card>
    </ContentPageShell>
  )
}
