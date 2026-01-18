import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "利用規約 | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターの利用規約です。",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">利用規約</h1>
          <p className="text-sm text-muted-foreground">最終更新日：2026年1月18日</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第1条（適用）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                本規約は、当サイト「年収の壁シミュレーター（nenshuu-kabe.com）」（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーの皆様には、本規約に従って当サイトをご利用いただきます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第2条（サービス内容）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトは、学生やアルバイト従事者向けに、年収による税金・社会保険の影響を概算で試算するシミュレーションサービスを無料で提供します。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第3条（禁止事項）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません：
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当サイトの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当サイトが許諾しない方法での商用利用行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第4条（免責事項）</h2>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>1. 情報の正確性について</strong><br />
                  当サイトで提供する情報は、2025年度の税制に基づいた概算であり、実際の税額・社会保険料とは異なる場合があります。最終的な判断は、税務署・自治体・社会保険事務所等の公的機関でご確認ください。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>2. 損害賠償責任</strong><br />
                  当サイトの情報をもとに生じた、いかなる直接的・間接的損害についても、当サイトは一切の責任を負いかねます。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>3. サービスの中断・終了</strong><br />
                  当サイトは、予告なくサービスの内容を変更、中断、または終了することがあります。これによりユーザーに生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第5条（広告について）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、第三者配信の広告サービス（A8.net、Google AdSense等）を利用しています。広告のリンク先サービスの利用については、各リンク先のサイトの利用規約・プライバシーポリシーに従ってください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第6条（著作権・知的財産権）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトに掲載されているコンテンツ（文章、画像、プログラム等）の著作権・知的財産権は、当サイト運営者または正当な権利者に帰属します。無断での転載、複製、改変は禁止します。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第7条（リンクについて）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトへのリンクは、営利・非営利を問わず原則自由です。ただし、公序良俗に反するサイトや、当サイトの信用を損なうおそれのあるサイトからのリンクはお断りします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第8条（準拠法・管轄裁判所）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">第9条（規約の変更）</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当ページに掲載した時点で効力を生じるものとします。
              </p>
            </section>
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

