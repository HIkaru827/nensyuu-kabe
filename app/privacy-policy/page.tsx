import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "プライバシーポリシー | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターのプライバシーポリシーです。",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">プライバシーポリシー</h1>
          <p className="text-sm text-muted-foreground">最終更新日：2026年1月18日</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. 個人情報の取得について</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイト「年収の壁シミュレーター（nenshuu-kabe.com）」では、ユーザーの皆様により良いサービスを提供するため、以下の情報を取得する場合があります：
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>アクセス情報（IPアドレス、ブラウザ情報、デバイス情報）</li>
                <li>Cookie及びこれに類する技術を用いて取得する情報</li>
                <li>シミュレーション入力情報（年齢、年収等）※サーバーには保存されません</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. 個人情報の利用目的</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                取得した情報は以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>サービスの提供・改善</li>
                <li>アクセス解析及び統計データの作成</li>
                <li>広告配信の最適化</li>
                <li>お問い合わせへの対応</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Cookieについて</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、ユーザーの利便性向上やアクセス解析のためにCookieを使用しています。Cookieの設定は、ブラウザの設定から変更できますが、一部機能が制限される場合があります。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. アクセス解析ツールについて</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。これらのツールはCookieを使用してアクセス情報を収集しますが、個人を特定する情報は含まれません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. 広告配信について</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、第三者配信の広告サービス（A8.net、Google AdSense等）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                これらの広告配信事業者は、独自のプライバシーポリシーを有しています。詳細は各事業者のプライバシーポリシーをご確認ください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. 免責事項</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトで提供する情報は、2025年度の税制に基づいた概算であり、実際の税額とは異なる場合があります。最終的な判断は、税務署・自治体等の公的機関でご確認ください。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトの情報をもとに生じたいかなる損害についても、当サイトは一切の責任を負いかねます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">7. 個人情報の第三者提供</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">8. プライバシーポリシーの変更</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトは、法令の変更や事業内容の変更に伴い、本プライバシーポリシーを予告なく変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">9. お問い合わせ</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                プライバシーポリシーに関するお問い合わせは、<a href="/contact" className="text-primary hover:underline">お問い合わせページ</a>よりご連絡ください。
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

