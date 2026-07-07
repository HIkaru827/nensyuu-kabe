import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"

export const metadata = {
  title: "プライバシーポリシー | 学生バイトお金ナビ",
  description: "学生バイトお金ナビのプライバシーポリシーです。Cookie、アクセス解析、広告配信、アフィリエイトリンクの扱いを説明します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <ContentPageShell title="プライバシーポリシー" description="最終更新日：2026年7月8日">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. 個人情報の取得について</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイト「学生バイトお金ナビ（nenshuu-kabe.com）」では、ユーザーの皆様により良いサービスを提供するため、以下の情報を取得する場合があります。
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>アクセス情報（IPアドレス、ブラウザ情報、デバイス情報）</li>
                <li>Cookie及びこれに類する技術を用いて取得する情報</li>
                <li>お問い合わせ時にユーザーが入力したメールアドレス、本文などの情報</li>
                <li>シミュレーション入力情報（年齢、年収、勤務条件等）※計算はブラウザ上で行い、当サイトのサーバーには保存しません</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. 個人情報の利用目的</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                取得した情報は以下の目的で利用します。
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cookieは、利用状況の把握、サイト改善、広告配信、広告効果測定などの目的で使用されることがあります。Cookieには、氏名、住所、電話番号など、単独で個人を直接特定する情報は含まれません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. アクセス解析ツールについて</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、Google アナリティクス等のアクセス解析ツールを使用しています。これらのツールはCookieを使用してアクセス情報を収集しますが、個人を直接特定する情報は含まれません。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                収集された情報は、ページの改善、利用状況の把握、人気コンテンツの分析などに利用します。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Googleによるデータの取り扱いについては、
                <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google プライバシーポリシー
                </a>
                及び
                <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google アナリティクス利用規約
                </a>
                をご確認ください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. 広告配信について</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、第三者配信の広告サービス（Google AdSense、A8.net、その他アフィリエイトサービス等）を利用する場合があります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Googleなどの第三者配信事業者は、Cookieを使用して、ユーザーが当サイトや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信することがあります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Googleが広告Cookieを使用することにより、Google及びそのパートナーは、ユーザーが当サイトや他のサイトにアクセスした情報に基づいて、適切な広告を表示できるようになります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                第三者配信事業者や広告ネットワークは、広告配信のためにユーザーのブラウザにCookieを保存したり、Cookieを読み取ったり、ウェブビーコンやIPアドレス等を使用したりする場合があります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                パーソナライズ広告を望まない場合は、
                <a href="https://adssettings.google.com/authenticated?hl=ja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google の広告設定
                </a>
                から無効にできます。また、第三者配信事業者のCookieを利用したパーソナライズ広告については、
                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  aboutads.info
                </a>
                でも無効化できる場合があります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Googleがパートナーサイトで取得する情報の利用については、
                <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google のポリシーと規約
                </a>
                をご確認ください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. アフィリエイトリンクについて</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトには、アフィリエイトプログラムを利用したリンクが含まれる場合があります。ユーザーがリンク先で申し込みや購入を行った場合、当サイトが報酬を受け取ることがあります。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                広告・アフィリエイトリンクの有無にかかわらず、記事では公的資料や公式情報への導線を残し、制度説明と広告掲載を区別するよう努めます。リンク先サービスの利用条件、料金、キャンペーン内容等は、必ずリンク先の公式情報をご確認ください。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">7. 免責事項</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトで提供する情報は、各ページに記載した確認日時点の公的資料に基づく概算であり、実際の税額・社会保険料とは異なる場合があります。最終的な判断は、税務署・自治体・年金事務所・加入中の健康保険等でご確認ください。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトの情報をもとに生じたいかなる損害についても、当サイトは一切の責任を負いかねます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">8. 個人情報の第三者提供</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトでは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">9. 保存しない情報について</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                シミュレーターに入力した年齢、年収、勤務条件などの値は、ページ内での計算処理にのみ使用し、当サイトのサーバーには送信・保存しません。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">10. プライバシーポリシーの変更</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当サイトは、法令の変更や事業内容の変更に伴い、本プライバシーポリシーを予告なく変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">11. お問い合わせ</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                プライバシーポリシーに関するお問い合わせは、<a href="/contact" className="text-primary hover:underline">お問い合わせページ</a>よりご連絡ください。
              </p>
            </section>
          </CardContent>
        </Card>
    </ContentPageShell>
  )
}




