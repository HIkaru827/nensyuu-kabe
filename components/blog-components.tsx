import { AlertCircle, CheckCircle, Info, Lightbulb, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

/**
 * TL;DR（要約）ボックス
 */
export function TldrBox({ children }: { children: React.ReactNode }) {
  return (
    <Card className="my-6 border-slate-200 bg-slate-50">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
          <div>
            <h3 className="mb-2 text-sm font-bold text-slate-950">この記事のポイント</h3>
            <div className="space-y-2 text-sm text-slate-700">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * 成功ケース（良い例）ボックス
 */
export function GoodCaseBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="my-4 border-sky-200 bg-sky-50">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-bold text-sky-950">{title}</h4>
            <div className="text-sm text-slate-700">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * 注意ケース（悪い例）ボックス
 */
export function BadCaseBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="my-4 border-slate-200 bg-slate-50">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" />
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-bold text-slate-950">{title}</h4>
            <div className="text-sm text-slate-700">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * ヒントボックス
 */
export function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <Card className="my-4 border-slate-200 bg-slate-50">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-bold text-slate-950">ヒント</h4>
            <div className="text-sm text-slate-700">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * アクションボックス
 */
export function ActionBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="my-4 border-sky-200 bg-sky-50">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
          <div className="flex-1">
            <h4 className="mb-2 text-sm font-bold text-sky-950">{title}</h4>
            <div className="text-sm text-slate-700">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * 対象者ボックス
 */
export function TargetAudienceBox({ audiences }: { audiences: string[] }) {
  return (
    <Card className="bg-slate-50 border-slate-200 my-6">
      <CardContent className="pt-4">
        <h3 className="mb-3 text-sm font-bold text-slate-950">こんな人におすすめ</h3>
        <ul className="space-y-2">
          {audiences.map((audience, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="shrink-0 text-sky-700">✓</span>
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

/**
 * 比較表（シンプル版）
 */
export function ComparisonTable({ 
  headers, 
  rows 
}: { 
  headers: string[];
  rows: { label: string; values: (string | number)[]; highlight?: boolean }[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-border rounded-lg overflow-hidden">
        <thead className="bg-slate-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-border px-4 py-3 text-left text-sm font-semibold text-slate-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={row.highlight ? "bg-slate-100" : rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <td className="border border-border px-4 py-3 text-sm font-medium text-slate-900">
                {row.label}
              </td>
              {row.values.map((value, valueIndex) => (
                <td 
                  key={valueIndex} 
                  className={`border border-border px-4 py-3 text-sm ${row.highlight ? "font-semibold text-slate-950" : "text-slate-700"}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * ステップバイステップガイド
 */
export function StepByStep({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="space-y-4 my-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Q&Aセクション
 */
export function QaSection({ qas }: { qas: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4 my-6">
      <h3 className="text-lg font-bold text-foreground">よくある質問</h3>
      {qas.map((qa, index) => (
        <Card key={index}>
          <CardContent className="pt-4">
            <h4 className="text-sm font-bold text-foreground mb-2">Q. {qa.question}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A. {qa.answer}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


