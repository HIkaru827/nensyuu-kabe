import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp, Shield } from "lucide-react"
import { ContentPageShell } from "@/components/content-page-shell"

export const metadata = {
  title: "運営者情報 | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの運営者情報。学生やアルバイト従事者が年収の壁を正しく理解し、最適な働き方を選択できるよう支援します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/about",
  },
}

export default function AboutPage() {
  return (
    <ContentPageShell title="運営者情報" description="年収の壁シミュレーターについて">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">サイト名</h2>
              <p className="text-sm text-muted-foreground">
                年収の壁シミュレーター
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">URL</h2>
              <p className="text-sm text-muted-foreground">
                <a href="https://nenshuu-kabe.com" className="text-primary hover:underline">
                  https://nenshuu-kabe.com
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">運営者</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>年収の壁シミュレーター運営事務局</p>
                <p>
                  学生アルバイトや扶養内就業の情報を調べるときに、税金と社会保険の基準が混ざって分かりにくいという課題を解消するために運営しています。
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">お問い合わせ</h2>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:lcose.dev@gmail.com" className="text-primary hover:underline">
                  lcose.dev@gmail.com
                </a><br />
                <a href="/contact" className="text-primary hover:underline">お問い合わせページ</a>
              </p>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">サイトの目的</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    学生やアルバイト従事者が、年収による税金・社会保険の影響を理解し、適切な働き方を選択できるよう支援することを目的としています。「年収の壁」を正しく理解することで、働き損を防ぎ、最適な収入計画を立てるお手伝いをします。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">対象ユーザー</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    主に大学生・専門学生・高校生などの学生や、フリーターとして働く方を対象としています。特に、親の扶養に入っている方、これからアルバイトを始める方、シフトを増やすか迷っている方に役立つ情報を提供します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">提供する価値</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>年収による税金・社会保険料の概算を即座に計算</li>
                    <li>特定扶養親族（19〜22歳の昼間学生）の特例に対応</li>
                    <li>親への影響（扶養控除）も同時に確認可能</li>
                    <li>所得税・住民税・社会保険料の内訳を詳細表示</li>
                    <li>「働き損ゾーン」を明確に警告</li>
                    <li>具体的なアドバイスを提供</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">編集方針と確認方法</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>国税庁、日本年金機構、自治体などの公的資料を優先して確認します。</li>
                    <li>制度改正のあったテーマは、該当ページの更新日と参照先を見直します。</li>
                    <li>年収だけで断定できない論点は、断定表現を避けて追加確認の条件を明記します。</li>
                    <li>体験談や誤解しやすい論点は、ケース別の記事として分離して整理します。</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">更新体制</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    シミュレーターと記事は、制度改正や公的資料の更新が確認できたタイミングで見直しています。
                    主要ページには確認日を明記し、読者が情報の鮮度を判断しやすいようにしています。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">免責事項</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    当サイトで提供する情報は、2025年度の税制に基づいた概算です。実際の税額・社会保険料は、個人の状況や自治体により異なります。最終的な判断は、税務署・自治体・社会保険事務所等の公的機関でご確認ください。
                  </p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-lg font-bold text-foreground">広告掲載について</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              当サイトでは、サービス運営のため、第三者配信の広告サービス（A8.net、Google AdSense等）を利用しています。広告は、ユーザーの興味に応じて最適化されることがあります。
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              詳しくは<a href="/privacy-policy" className="text-primary hover:underline">プライバシーポリシー</a>をご確認ください。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-lg font-bold text-foreground">読者への約束</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>煽り見出しより、基準の違いが分かる見出しを優先します。</li>
              <li>広告の有無にかかわらず、一次情報への導線を残します。</li>
              <li>不明確な点は問い合わせで受け付け、必要に応じて記事へ反映します。</li>
            </ul>
          </CardContent>
        </Card>
    </ContentPageShell>
  )
}
