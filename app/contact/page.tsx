import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export const metadata = {
  title: "お問い合わせ | 年収の壁シミュレーター",
  description: "年収の壁シミュレーターへのお問い合わせページ。ご質問・ご要望・不具合報告など、お気軽にお問い合わせください。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">お問い合わせ</h1>
          <p className="text-sm text-muted-foreground">
            ご質問・ご要望・不具合報告など、お気軽にお問い合わせください
          </p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">お問い合わせ内容</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    以下のような内容について、お問い合わせを受け付けています：
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>シミュレーション結果に関するご質問</li>
                    <li>サイトの使い方に関するご質問</li>
                    <li>不具合・エラーの報告</li>
                    <li>機能追加のご要望</li>
                    <li>広告掲載に関するお問い合わせ</li>
                    <li>その他ご意見・ご感想</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-foreground">メールアドレス</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    お問い合わせは以下のメールアドレスまでお願いいたします：
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <a 
                      href="mailto:lcose.dev@gmail.com" 
                      className="text-base font-mono text-primary hover:underline"
                    >
                      lcose.dev@gmail.com
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ※ 件名に「お問い合わせ」とご記入ください
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-6 border-t border-border space-y-3">
              <h2 className="text-lg font-bold text-foreground">ご注意</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 ml-4">
                <li>
                  個別の税務相談・確定申告の代行等は承っておりません。専門的なご相談は、税理士または税務署にお問い合わせください。
                </li>
                <li>
                  お問い合わせへの回答には数日かかる場合があります。あらかじめご了承ください。
                </li>
                <li>
                  内容によっては回答できない場合もございます。
                </li>
              </ul>
            </section>

            <section className="pt-6 border-t border-border space-y-3">
              <h2 className="text-lg font-bold text-foreground">よくある質問</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Q. シミュレーション結果は正確ですか？</p>
                  <p className="text-sm text-muted-foreground">
                    A. 2025年度の税制に基づいた概算です。最終的な判断は税務署・自治体でご確認ください。
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Q. 入力した情報は保存されますか？</p>
                  <p className="text-sm text-muted-foreground">
                    A. いいえ。入力情報はブラウザ上でのみ計算され、サーバーには一切送信・保存されません。
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Q. 学生以外でも使えますか？</p>
                  <p className="text-sm text-muted-foreground">
                    A. はい。フリーター等の選択肢もご用意しています。
                  </p>
                </div>
              </div>
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


