import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp, Shield } from "lucide-react"

export const metadata = {
  title: "運営者情報 | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの運営者情報。学生やアルバイト従事者が年収の壁を正しく理解し、最適な働き方を選択できるよう支援します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">運営者情報</h1>
          <p className="text-sm text-muted-foreground">
            年収の壁シミュレーターについて
          </p>
        </div>

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
              <p className="text-sm text-muted-foreground">
                年収の壁シミュレーター運営事務局
              </p>
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

        <div className="text-center pt-6">
          <a href="/" className="text-primary hover:underline text-sm">
            ← シミュレーターに戻る
          </a>
        </div>
      </div>
    </main>
  )
}


