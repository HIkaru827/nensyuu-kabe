import Link from "next/link"
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleMonetizationSection } from "@/components/article-monetization-section"
import { ArticleStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"
import { ArticleTrustSummary } from "@/components/article-trust-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "学生バイトの資格・学習で時給を上げる考え方｜塾講師・事務・IT系の選び方",
  description:
    "学生バイト向けに、塾講師、事務、IT系などへつなげる学習・資格の選び方、求人比較、実質時給の見方を公式情報ベースで整理します。",
  alternates: {
    canonical: "https://nenshuu-kabe.com/blog/student-skill-up-baito",
  },
}

export default function StudentSkillUpBaitoPage() {
  const url = "https://nenshuu-kabe.com/blog/student-skill-up-baito"

  return (
    <>
      <ArticleStructuredData
        title="学生バイトの資格・学習で時給を上げる考え方｜塾講師・事務・IT系の選び方"
        description="学生バイト向けに、塾講師、事務、IT系などへつなげる学習・資格の選び方、求人比較、実質時給の見方を公式情報ベースで整理します。"
        datePublished="2026-07-07T00:00:00Z"
        dateModified="2026-07-07T00:00:00Z"
        url={url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://nenshuu-kabe.com" },
          { name: "ブログ", url: "https://nenshuu-kabe.com/blog" },
          { name: "学生バイトの資格・学習で時給を上げる考え方", url },
        ]}
      />
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12">
        <article className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              学生バイトの資格・学習で時給を上げる考え方
              <br />
              塾講師・事務・IT系の選び方
            </h1>
            <p className="text-sm text-muted-foreground">
              2026年7月7日時点の厚生労働省、IPA、学生アルバイト向け労働条件情報を確認して整理しています。
            </p>
          </div>

          <ArticleTrustSummary
            checkedAt="2026年7月7日"
            audience="少ない勤務時間でも稼ぎやすいバイトへ移りたい学生、資格・学習サービスを検討している学生"
            sources="厚生労働省 職業情報提供サイト job tag、IPA、厚生労働省 確かめよう労働条件"
            note="資格を取れば必ず時給が上がる、という記事ではありません。求人で評価されやすいスキルと、契約条件の確認方法を整理しています。"
          />

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-bold text-slate-950">先に結論</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>時給を上げたいときは、資格名よりも「その求人で使うスキル」から逆算します。</li>
                <li>塾講師は担当教科の理解、授業準備、個別対応まで含めて実質時給を見ます。</li>
                <li>事務はパソコン、文書作成、表計算、正確さが評価されやすい領域です。</li>
                <li>IT系はプログラミングや基礎IT知識が武器になりますが、未経験可でも学習時間は必要です。</li>
                <li>高時給に見えても、研修無給、準備時間、移動時間、最低賃金、残業手当、有給の条件を確認します。</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-8 pt-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">「資格」より先に、狙う職種を決める</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  学習サービスや資格講座を見る前に、まず求人で求められる仕事内容を確認します。
                  同じ「高時給」でも、塾講師、事務、ITサポート、プログラミング補助では評価されるスキルが違います。
                  資格そのものよりも、求人票にある「担当教科」「Excel」「データ入力」「HTML」「Python」「電話対応」などの言葉に合わせて学ぶほうが、面接で説明しやすくなります。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  もう一つ大事なのは、実質時給です。時給1,500円でも、授業準備や移動に長くかかるなら、実際に自由になる時間は減ります。
                  学業との両立を考えるなら、時給だけでなく、勤務場所、シフト固定の有無、研修時間の扱い、持ち帰り作業の有無まで見ます。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">職種別に見る、学習の優先順位</h2>
                <div className="overflow-hidden rounded-lg border border-border text-sm">
                  {[
                    [
                      "塾講師",
                      "担当教科の復習、説明の練習、板書や教材準備、個別指導での声かけを整える。時給だけでなく準備時間も確認します。",
                    ],
                    [
                      "事務",
                      "Word、Excel、Googleスプレッドシート、メール文面、正確な入力を優先。MOSや簿記などは求人内容と合う場合に検討します。",
                    ],
                    [
                      "IT系",
                      "ITパスポートなどで基礎用語を押さえ、HTML、CSS、JavaScript、Pythonなどは求人で使うものから選びます。",
                    ],
                    [
                      "接客から転向",
                      "接客経験は説明力、傾聴力、段取り力として伝えられます。学習内容と過去の経験をセットで話せるようにします。",
                    ],
                  ].map(([label, note]) => (
                    <div key={label} className="grid gap-2 border-t border-border px-4 py-3 first:border-t-0 sm:grid-cols-[120px_1fr]">
                      <span className="font-semibold text-foreground">{label}</span>
                      <span className="text-muted-foreground">{note}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">塾講師は「授業時間だけ」で判断しない</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  厚生労働省の職業情報では、学習塾教師の仕事には、授業だけでなく、授業計画、出席・成績の記録、教材準備、個別指導、保護者対応、入試情報の収集などが含まれます。
                  学生バイトの場合も、担当教科を教えられるかに加えて、準備や記録の時間がどのように扱われるかを確認しておくと安心です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  「1コマいくら」の求人は、コマ前後の準備、報告書、移動時間を含めた実質時給に直して比べます。
                  授業が得意でも、学期末や受験期にシフトが増えすぎると扶養や年収の壁に近づくことがあるので、月ごとの見込みも見ておきましょう。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">事務・IT系は「見せられる成果物」が強い</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  一般事務は、文書作成、データ入力、書類やデータのチェックなど、正確さが求められる仕事です。
                  パソコンスキル、文書作成能力、簿記、英会話などが求められる場合もあるため、求人の仕事内容に近いスキルから学ぶのが現実的です。
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  IT系は、資格だけでなく、簡単なWebページ、表計算の自動化、ポートフォリオなど「何ができるか」を見せられると伝わりやすくなります。
                  ITパスポートはITの基礎知識を整理する入口として使いやすいですが、求人が求める実務スキルとは分けて考えます。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">高時給求人を見るときのチェックリスト</h2>
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  <ol className="space-y-2">
                    <li>1. 研修中の時給、研修時間、無給の準備時間がないか確認する。</li>
                    <li>2. 1コマ制・日給制なら、時間額に直して最低賃金を下回らないか見る。</li>
                    <li>3. 残業、深夜、長時間勤務がある場合の割増賃金を確認する。</li>
                    <li>4. 学業と両立できるシフトか、試験期間に休めるか確認する。</li>
                    <li>5. 資格講座やスクール代は、何か月で回収できるか計算してから申し込む。</li>
                  </ol>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">公的情報</h2>
                <div className="space-y-3">
                  <OfficialLink href="https://shigoto.mhlw.go.jp/User/Occupation/Detail/396" title="厚生労働省 job tag 学習塾教師" description="学習塾教師の仕事内容、授業準備、個別指導、必要なスキルを確認できます。" />
                  <OfficialLink href="https://shigoto.mhlw.go.jp/User/Occupation/Detail/428" title="厚生労働省 job tag 一般事務" description="一般事務で求められる文書作成、データ入力、パソコンスキルなどを確認できます。" />
                  <OfficialLink href="https://shigoto.mhlw.go.jp/User/Occupation/Detail/313" title="厚生労働省 job tag プログラマー" description="プログラマーの仕事内容、開発・テスト・デバッグ、使う技術を確認できます。" />
                  <OfficialLink href="https://www3.jitec.ipa.go.jp/JitesCbt/index.html" title="IPA ITパスポート試験" description="IT基礎知識の学習や試験情報を確認できます。" />
                  <OfficialLink href="https://www.check-roudou.mhlw.go.jp/parttime/" title="厚生労働省 アルバイトをする前に知っておきたいポイント" description="賃金、最低賃金、残業手当、有給休暇など学生バイトが確認したい労働条件を確認できます。" />
                </div>
              </section>
            </CardContent>
          </Card>

          <ArticleMonetizationSection />

          <Card className="border-slate-200 bg-slate-100/80">
            <CardContent className="space-y-4 pt-6 text-center">
              <Calculator className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-foreground">時給を上げる前に、年収ラインも確認する</h3>
              <p className="text-sm text-muted-foreground">
                高時給のバイトに移ると、同じ勤務時間でも年収の壁に近づきやすくなります。扶養や社会保険の見込みも一緒に見ておくと安心です。
              </p>
              <Link href="/">
                <Button size="lg">年収の壁を確認する</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}

function OfficialLink({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border p-4 hover:border-primary">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
    </a>
  )
}
