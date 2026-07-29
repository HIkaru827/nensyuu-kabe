import { Card, CardContent } from "@/components/ui/card"
import { ContentPageShell } from "@/components/content-page-shell"
import {
  EMPLOYEE_SOCIAL_INSURANCE_EMPLOYEE_SHARE_RATE_2026,
  INCOME_SIMULATION_BASIS,
  INCOME_THRESHOLDS,
} from "@/lib/income-simulator"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  path: "/calculation-method",
  title: "計算方法",
  description:
    "学生バイトお金ナビの年収の壁シミュレーターで使っている2026年基準、所得税・住民税・親の扶養・社会保険料の概算方法、根拠資料をまとめています。",
})

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value)
}

const includedItems = [
  "給与収入のみのケースを前提にした給与所得の計算",
  "令和8年分以後の所得税の基礎控除・給与所得控除",
  "本人の所得税と復興特別所得税の概算",
  "住民税所得割の標準税率10%による概算",
  "親の扶養控除・特定親族特別控除が変わる場合の税負担増の概算",
  "加入先を選んだ場合の国民年金、国民健康保険入力額、勤務先社会保険料の概算",
]

const excludedItems = [
  "住民税の均等割、森林環境税、自治体ごとの非課税基準の細かな違い",
  "給与以外の所得、副業所得、奨学金、雑所得、退職所得などの個別事情",
  "勤労学生控除、医療費控除、生命保険料控除などの個人別控除",
  "健康保険組合ごとの保険料率、標準報酬月額の等級による端数差",
  "雇用保険料、会社独自の福利厚生、交通費の課税・非課税判定",
]

export default function CalculationMethodPage() {
  const employeeShareRateLabel = `${(EMPLOYEE_SOCIAL_INSURANCE_EMPLOYEE_SHARE_RATE_2026 * 100).toFixed(2)}%`

  return (
    <ContentPageShell title="計算方法" description={`${INCOME_SIMULATION_BASIS.targetYear}／確認日：${INCOME_SIMULATION_BASIS.checkedAt}`}>
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">このページで確認できること</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            年収の壁シミュレーターは、学生バイトが「本人の税金」「親の扶養」「社会保険」を分けて確認できるようにした概算ツールです。
            2026年（令和8年）基準の公的資料を確認し、給与収入のみのケースを中心に計算しています。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold text-muted-foreground">対象年度</p>
              <p className="mt-1 text-base font-bold text-foreground">{INCOME_SIMULATION_BASIS.targetYear}</p>
            </div>
            <div className="rounded-md border border-border bg-muted/30 p-4">
              <p className="text-xs font-semibold text-muted-foreground">確認日</p>
              <p className="mt-1 text-base font-bold text-foreground">{INCOME_SIMULATION_BASIS.checkedAt}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">本人の所得税・住民税</h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              給与収入から給与所得控除を差し引き、給与所得を出します。2026年基準では、低い年収帯の給与所得控除の最低保障を
              {formatCurrency(INCOME_THRESHOLDS.EMPLOYMENT_INCOME_DEDUCTION_MIN)}として扱います。
            </p>
            <p>
              所得税は、給与所得から所得税の基礎控除を差し引いた課税所得に、所得税率と復興特別所得税を反映して概算します。
              学生バイトで給与収入だけの場合、本人の所得税は年収178万円付近が大きな目安になります。
            </p>
            <p>
              住民税は、基礎控除43万円と標準的な所得割10%で概算しています。自治体によって均等割や非課税基準が異なるため、
              シミュレーターでは住民税の細かな地域差までは含めていません。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">親の扶養への影響</h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              親の税金への影響は、子どもの給与所得が扶養控除や特定親族特別控除の範囲に入るかで見ます。
              2026年基準では、給与収入だけなら136万円以下が通常の扶養控除の目安です。
            </p>
            <p>
              19歳以上23歳未満の場合は、給与収入159万円以下なら親の所得税の控除が満額となる目安で、
              159万円を超えると197万円以下まで特定親族特別控除が段階的に残る可能性があります。
              シミュレーターでは、親の所得税率を選択してもらい、控除が減る分にその税率をかけて親の所得税増を概算します。
              住民税は標準税率10%で概算しています。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">社会保険料の反映方法</h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              社会保険は税金とは別の判定です。家族の健康保険の被扶養者に残れるか、勤務先で社会保険に入るか、
              国民健康保険・国民年金になるかで手取りが変わります。
            </p>
            <p>
              「勤務先の社会保険」を選んだ場合は、協会けんぽ東京支部の令和8年度料率を目安に、
              健康保険、子ども・子育て支援金、厚生年金の本人負担分を合計し、月額賃金の約{employeeShareRateLabel}として年額概算を出します。
              この金額は計算結果の「本人の手元に残る見込み」から差し引きます。
            </p>
            <p>
              「国民健康保険・国民年金」を選んだ場合は、国民年金保険料を令和8年度の月額
              {formatCurrency(INCOME_THRESHOLDS.NATIONAL_PENSION_MONTHLY_2026)}として扱います。
              国民健康保険料は自治体差が大きいため、入力された年額がある場合のみ手取りから差し引きます。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">計算に含めているもの・含めていないもの</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground">含めているもの</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground">含めていないもの</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold text-foreground">根拠資料</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            主な根拠資料は次の通りです。制度改正や公的資料の更新が確認できた場合は、シミュレーターと記事の前提を見直します。
          </p>
          <ul className="space-y-2 text-sm">
            {INCOME_SIMULATION_BASIS.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </ContentPageShell>
  )
}
