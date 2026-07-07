import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"

export const metadata = {
  title: "編集方針 | 学生バイトお金ナビ",
  description: "学生バイトお金ナビの記事作成方針、参照先、更新ルール、広告と編集の分離方針をまとめたページです。",
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
              <li>厚生労働省、消費者庁、金融庁、国民生活センターなどの公的機関の公開情報</li>
              <li>自治体、健康保険組合、求人サービス、金融機関、通信会社などの公式情報</li>
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
              <li>学生バイトの具体的な判断手順に落とし込み、単なる制度説明だけで終わらないようにします。</li>
              <li>古い年収ラインや制度名が残らないよう、関連ページ間の表記をそろえます。</li>
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
            <h2 className="text-xl font-bold text-foreground">5. 広告・アフィリエイトとの関係</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              当サイトでは、Google AdSenseなどの広告サービスや、求人、通信、金融、学習、生活関連サービスのアフィリエイトリンクを掲載する場合があります。
              ただし、広告掲載の有無によって、制度説明、シミュレーターの計算ロジック、注意喚起の内容を変更することはありません。
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              広告やアフィリエイトリンクを掲載する場合も、読者が一次情報や公式情報を確認できる導線を残し、PR・広告であることが分かる表記を行います。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. 修正受付</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              誤記、リンク切れ、制度改正による古い記載、読者に誤解を与える表現が見つかった場合は、
              <a href="/contact" className="text-primary hover:underline">お問い合わせ</a>
              からご連絡ください。内容を確認し、必要に応じて記事やシミュレーターに反映します。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">7. できないこと</h2>
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
