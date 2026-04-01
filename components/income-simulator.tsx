"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { AlertCircle, AlertTriangle, BookOpen, CheckCircle, Clock, ExternalLink, Info, TrendingUp } from "lucide-react"
import { JobAdSlot, AdSlot } from "@/components/ad-slot"
import { GoogleAdSenseBanner } from "@/components/google-adsense"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { getSocialInsuranceDependentLimit, simulateIncome, type StudentType } from "@/lib/income-simulator"

interface ThresholdInfo {
  amount: number
  label: string
  description: string
}

const THRESHOLDS: ThresholdInfo[] = [
  { amount: 110, label: "110万", description: "住民税発生" },
  { amount: 123, label: "123万", description: "税法上の扶養目安" },
  { amount: 160, label: "160万", description: "所得税の壁" },
]

export function IncomeSimulator() {
  const [income, setIncome] = useState(100)
  const [age, setAge] = useState(20)
  const [attribute, setAttribute] = useState<"daytime-student" | "evening-student" | "freeter">("daytime-student")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (isNaN(value)) {
      setIncome(0)
    } else {
      setIncome(Math.min(200, Math.max(0, value)))
    }
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10)
    if (!isNaN(value)) {
      setAge(Math.min(30, Math.max(15, value)))
    }
  }

  const getStudentType = (): StudentType => {
    if (attribute === "daytime-student") return "day"
    if (attribute === "evening-student") return "night"
    return "none"
  }

  const simulationResult = useMemo(() => {
    return simulateIncome({
      annualIncome: income * 10_000,
      age,
      studentType: getStudentType(),
    })
  }, [income, age, attribute])

  const socialInsuranceLimit = useMemo(() => getSocialInsuranceDependentLimit(age) / 10_000, [age])
  const thresholdMarkers = useMemo(
    () => [
      THRESHOLDS[0],
      THRESHOLDS[1],
      { amount: socialInsuranceLimit, label: `${socialInsuranceLimit}万`, description: "被扶養者年収要件目安" },
      THRESHOLDS[2],
    ],
    [socialInsuranceLimit],
  )

  const statusConfig = useMemo(() => {
    const color = simulationResult.color
    const icon = color === "green" ? CheckCircle : color === "red" ? AlertCircle : AlertTriangle

    const bgClass =
      color === "green" ? "bg-emerald-50 border-emerald-200" :
      color === "red" ? "bg-red-50 border-red-200" :
      "bg-amber-50 border-amber-200"

    const textClass =
      color === "green" ? "text-emerald-700" :
      color === "red" ? "text-red-700" :
      "text-amber-700"

    const iconClass =
      color === "green" ? "text-emerald-500" :
      color === "red" ? "text-red-500" :
      "text-amber-500"

    const barColor =
      color === "green" ? "bg-emerald-500" :
      color === "red" ? "bg-red-500" :
      "bg-amber-500"

    return {
      icon,
      bgClass,
      textClass,
      iconClass,
      barColor,
    }
  }, [simulationResult.color])

  const getPositionPercent = (value: number) => (value / 200) * 100

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 lg:space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">年収の壁シミュレーター</h1>
        <p className="text-sm text-muted-foreground sm:text-base">親に怒られない年収をすぐに判定</p>
        <p className="text-xs text-primary font-semibold">🆕 令和7年度改正対応（103万→160万円）</p>
        <p className="text-sm text-muted-foreground">
          税金、税法上の扶養判定、社会保険の確認ポイントを分けてチェックできます。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
        <Card className="border border-border shadow-md">
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-baseline justify-center gap-2">
              <Input
                type="number"
                value={income}
                onChange={handleInputChange}
                min={0}
                max={200}
                className="w-28 text-5xl font-bold text-center border-none shadow-none focus-visible:ring-0 p-0 h-auto [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <span className="text-2xl text-muted-foreground font-medium">万円</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-semibold text-foreground">
                年齢
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  min={15}
                  max={30}
                  className="w-20 text-center"
                />
                <span className="text-sm text-muted-foreground">歳</span>
                {age >= 19 && age <= 22 && attribute === "daytime-student" && (
                  <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    特定扶養対象
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 pb-2 pt-2">
              <Label className="text-sm font-semibold text-foreground">
                あなたの属性（必須）
              </Label>
              <RadioGroup value={attribute} onValueChange={setAttribute as (value: string) => void} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daytime-student" id="daytime-student" />
                  <Label htmlFor="daytime-student" className="font-normal cursor-pointer">
                    大学生・専門学生（昼間）
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="evening-student" id="evening-student" />
                  <Label htmlFor="evening-student" className="font-normal cursor-pointer">
                    夜間・通信・休学生
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freeter" id="freeter" />
                  <Label htmlFor="freeter" className="font-normal cursor-pointer">
                    フリーター
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
              この判定は厳格運用です。親の税額増加や社会保険料額のような条件依存の強い数値は、誤解を避けるため表示していません。
            </div>

            <div className="pb-2">
              <Slider
                value={[income]}
                onValueChange={(value) => setIncome(value[0])}
                min={0}
                max={200}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0万円</span>
                <span>200万円</span>
              </div>
            </div>

            <div className="relative pt-8 pb-2">
              <div className="absolute top-0 left-0 right-0">
                {thresholdMarkers.map((threshold) => (
                  <div
                    key={threshold.amount}
                    className="absolute flex flex-col items-center -translate-x-1/2"
                    style={{ left: `${getPositionPercent(threshold.amount)}%` }}
                  >
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{threshold.label}</span>
                    <span className="text-[10px] text-muted-foreground/70 whitespace-nowrap">
                      {threshold.description}
                    </span>
                    <div className="w-px h-2 bg-border mt-1" />
                  </div>
                ))}
              </div>

              <div className="relative h-3 rounded-full overflow-hidden mt-8 flex">
                <div className="bg-emerald-200 h-full" style={{ width: "55%" }} />
                <div className="bg-amber-200 h-full" style={{ width: "10%" }} />
                <div className="bg-red-200 h-full" style={{ width: "15%" }} />
                <div className="bg-violet-200 h-full" style={{ width: "20%" }} />
              </div>

              <div
                className="absolute left-0 h-3 rounded-full overflow-hidden"
                style={{ top: "calc(2rem + 0.5rem)", width: `${getPositionPercent(income)}%` }}
              >
                <div className={`h-full w-full ${statusConfig.barColor} transition-colors duration-300`} />
              </div>

              <div
                className="absolute -translate-x-1/2 transition-all duration-300 mt-2"
                style={{
                  left: `${getPositionPercent(income)}%`,
                  top: "calc(2rem + 0.5rem + 0.75rem)",
                }}
              >
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-foreground mx-auto" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:sticky lg:top-24">
          <Card className={`border-2 ${statusConfig.bgClass} shadow-md transition-colors duration-300`}>
            <CardContent className="pt-5 pb-5 space-y-3">
              <div className="flex items-start gap-3">
                <statusConfig.icon className={`w-6 h-6 ${statusConfig.iconClass} mt-0.5 shrink-0`} />
                <div className="space-y-1">
                  <h2 className={`text-lg font-bold ${statusConfig.textClass}`}>{simulationResult.label}</h2>
                  <p className="text-sm font-medium text-foreground/90">{simulationResult.headline}</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                  {simulationResult.description}
                </p>
              </div>

              {simulationResult.advice.length > 0 && (
                <div className="pt-3 border-t border-current/10 space-y-2">
                  <h3 className="text-xs font-semibold text-foreground">💡 アドバイス</h3>
                  <ul className="space-y-1">
                    {simulationResult.advice.map((item, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-current shrink-0">・</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-3">
            {income >= socialInsuranceLimit && income < 160 && (
              <>
                <Button className="w-full h-12 text-base font-semibold gap-2" size="lg" asChild>
                  <a href={process.env.NEXT_PUBLIC_A8_HIGH_WAGE || "#"} target="_blank" rel="noopener noreferrer nofollow">
                    <TrendingUp className="w-5 h-5" />
                    160万円を目指す → 高時給バイトを見る
                  </a>
                </Button>
                <Button variant="outline" className="w-full h-12 text-base font-semibold gap-2 bg-background" size="lg" asChild>
                  <a href={process.env.NEXT_PUBLIC_A8_FLEXIBLE || "#"} target="_blank" rel="noopener noreferrer nofollow">
                    <Clock className="w-5 h-5" />
                    被扶養者年収要件内に抑える → シフト調整
                  </a>
                </Button>
              </>
            )}
            {income < socialInsuranceLimit && (
              <Button className="w-full h-12 text-base font-semibold gap-2" size="lg" asChild>
                <a href={process.env.NEXT_PUBLIC_A8_RECOMMENDED || "#"} target="_blank" rel="noopener noreferrer nofollow">
                  <TrendingUp className="w-5 h-5" />
                  このペースで続ける → おすすめバイト
                </a>
              </Button>
            )}
            {income >= 160 && (
              <Button className="w-full h-12 text-base font-semibold gap-2" size="lg" asChild>
                <a href={process.env.NEXT_PUBLIC_A8_CAREER || "#"} target="_blank" rel="noopener noreferrer nofollow">
                  <TrendingUp className="w-5 h-5" />
                  さらに稼ぐ → キャリアアップ求人
                </a>
              </Button>
            )}
          </div>

          <footer className="text-center space-y-1 pt-2">
            <p className="text-xs text-muted-foreground">※ 本シミュレーションは概算です</p>
            <p className="text-xs text-muted-foreground">※ 2026年4月2日時点で確認した公的情報に基づき、年収だけで断定できる範囲に限定して表示しています</p>
          </footer>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-5 pb-5 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-foreground">📚 公的情報を確認する</h3>
          </div>

          <div className="space-y-2">
            <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer">
              <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary mb-1">所得税</p>
                      <p className="text-sm font-bold text-foreground">国税庁: 給与所得控除</p>
                      <p className="text-xs text-muted-foreground mt-1">160万円ラインの前提になる公的資料</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm" target="_blank" rel="noopener noreferrer">
              <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-blue-600 mb-1">扶養</p>
                      <p className="text-sm font-bold text-foreground">国税庁: 特定親族特別控除</p>
                      <p className="text-xs text-muted-foreground mt-1">123万円と188万円の扱いを確認</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.nenkin.go.jp/section/faq/kounen/dependents/aged19to22/sokyu.html" target="_blank" rel="noopener noreferrer">
              <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-green-600 mb-1">社会保険</p>
                      <p className="text-sm font-bold text-foreground">日本年金機構: 19歳以上23歳未満の被扶養者認定</p>
                      <p className="text-xs text-muted-foreground mt-1">150万円未満の年収要件を確認</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </CardContent>
      </Card>

      <JobAdSlot
        title="💼 あなたにぴったりのバイトを探す"
        jobs={[
          {
            name: "タウンワーク",
            url: process.env.NEXT_PUBLIC_A8_TOWNWORK || "#",
            description: "豊富な求人数",
            tag: "人気",
          },
          {
            name: "マッハバイト",
            url: process.env.NEXT_PUBLIC_A8_MACHBAITO || "#",
            description: "最大1万円祝い金",
            tag: "祝い金",
          },
          {
            name: "バイトル",
            url: process.env.NEXT_PUBLIC_A8_BAITORU || "#",
            description: "動画でバイト検索",
          },
          {
            name: "アルバイトEX",
            url: process.env.NEXT_PUBLIC_A8_ARBEIT_EX || "#",
            description: "一括検索で効率的",
          },
        ].filter((job) => job.url !== "#")}
      />

      {process.env.NEXT_PUBLIC_A8_BANNER && (
        <AdSlot
          position="result-bottom"
          size="medium"
          title="PR"
          adCode={process.env.NEXT_PUBLIC_A8_BANNER}
        />
      )}

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground text-center">広告</p>
        <GoogleAdSenseBanner
          client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-2931164651880564"}
          slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || "5787776891"}
        />
      </div>
    </div>
  )
}
