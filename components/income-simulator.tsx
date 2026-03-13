"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { AlertCircle, AlertTriangle, ArrowRight, BookOpen, CheckCircle, Clock, Info, TrendingUp } from "lucide-react"
import Link from "next/link"
import { JobAdSlot, AdSlot } from "@/components/ad-slot"
import { GoogleAdSenseBanner } from "@/components/google-adsense"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { simulateIncome, type ParentIncomeLevel, type StudentType } from "@/lib/income-simulator"

interface ThresholdInfo {
  amount: number
  label: string
  description: string
}

const THRESHOLDS: ThresholdInfo[] = [
  { amount: 110, label: "110万", description: "住民税発生" },
  { amount: 130, label: "130万", description: "社会保険の壁" },
  { amount: 160, label: "160万", description: "所得税の壁" },
]

export function IncomeSimulator() {
  const [income, setIncome] = useState(100)
  const [age, setAge] = useState(20)
  const [attribute, setAttribute] = useState<"daytime-student" | "evening-student" | "freeter">("daytime-student")
  const [parentIncome, setParentIncome] = useState<ParentIncomeLevel>("middle")
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

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
      parentIncomeLevel: parentIncome,
    })
  }, [income, age, attribute, parentIncome])

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
          税金、社会保険、親の扶養への影響をまとめてチェックできます。
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

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Info className="w-3 h-3" />
                {showAdvancedOptions ? "詳細設定を隠す" : "詳細設定を表示"}
              </button>
            </div>

            {showAdvancedOptions && (
              <div className="space-y-3 pb-2 pt-2 border-t border-border">
                <Label className="text-sm font-semibold text-foreground">
                  親の所得レベル（任意）
                </Label>
                <RadioGroup value={parentIncome} onValueChange={(v) => setParentIncome(v as ParentIncomeLevel)} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="font-normal cursor-pointer text-sm">
                      低所得（住民税非課税世帯など）
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="middle" id="middle" />
                    <Label htmlFor="middle" className="font-normal cursor-pointer text-sm">
                      中所得（一般的な会社員など）
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="font-normal cursor-pointer text-sm">
                      高所得（高額納税者など）
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

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
                {THRESHOLDS.map((threshold) => (
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

              {(simulationResult.estimatedSelfLoss !== undefined || simulationResult.estimatedParentLoss !== undefined) && (
                <div className="space-y-3 pt-3 border-t border-current/10">
                  {simulationResult.selfBurdenBreakdown !== undefined && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground font-semibold">あなたの負担</span>
                        <span className={`font-bold ${statusConfig.textClass}`}>
                          約 {Math.floor(simulationResult.selfBurdenBreakdown.total / 10_000).toLocaleString()}万円
                        </span>
                      </div>
                      <div className="ml-3 space-y-1">
                        {simulationResult.selfBurdenBreakdown.incomeTax > 0 && (
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">└ 所得税</span>
                            <span className="text-muted-foreground">
                              約 {simulationResult.selfBurdenBreakdown.incomeTax.toLocaleString()}円
                            </span>
                          </div>
                        )}
                        {simulationResult.selfBurdenBreakdown.residentTax > 0 && (
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">└ 住民税</span>
                            <span className="text-muted-foreground">
                              約 {simulationResult.selfBurdenBreakdown.residentTax.toLocaleString()}円
                            </span>
                          </div>
                        )}
                        {simulationResult.selfBurdenBreakdown.socialInsurance > 0 && (
                          <>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-muted-foreground">└ 社会保険料</span>
                              <span className="text-muted-foreground">
                                約 {simulationResult.selfBurdenBreakdown.socialInsurance.toLocaleString()}円
                              </span>
                            </div>
                            {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown && (
                              <div className="ml-3 space-y-0.5">
                                {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.healthInsurance > 0 && (
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-muted-foreground/80">　└ 健康保険料</span>
                                    <span className="text-muted-foreground/80">
                                      約 {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.healthInsurance.toLocaleString()}円
                                    </span>
                                  </div>
                                )}
                                {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.pensionInsurance > 0 && (
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-muted-foreground/80">　└ 厚生年金保険料</span>
                                    <span className="text-muted-foreground/80">
                                      約 {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.pensionInsurance.toLocaleString()}円
                                    </span>
                                  </div>
                                )}
                                {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.employmentInsurance > 0 && (
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-muted-foreground/80">　└ 雇用保険料</span>
                                    <span className="text-muted-foreground/80">
                                      約 {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.employmentInsurance.toLocaleString()}円
                                    </span>
                                  </div>
                                )}
                                {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.nursingInsurance > 0 && (
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-muted-foreground/80">　└ 介護保険料</span>
                                    <span className="text-muted-foreground/80">
                                      約 {simulationResult.selfBurdenBreakdown.socialInsuranceBreakdown.nursingInsurance.toLocaleString()}円
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {simulationResult.estimatedSelfLoss !== undefined && simulationResult.selfBurdenBreakdown === undefined && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">あなたの負担増</span>
                      <span className={`font-bold ${statusConfig.textClass}`}>
                        約 {Math.floor(simulationResult.estimatedSelfLoss / 10_000)}万円
                      </span>
                    </div>
                  )}
                  {simulationResult.estimatedParentLoss !== undefined && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-semibold">親の負担増</span>
                      <span className={`font-bold ${statusConfig.textClass}`}>
                        約 {Math.floor(simulationResult.estimatedParentLoss / 10_000)}万円
                      </span>
                    </div>
                  )}
                </div>
              )}

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
            {income >= 130 && income < 160 && (
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
                    130万円以下に抑える → シフト調整
                  </a>
                </Button>
              </>
            )}
            {income < 130 && (
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
            <p className="text-xs text-muted-foreground">※ 令和7年度税制改正（2025年分以後適用）を参考</p>
          </footer>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-5 pb-5 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-foreground">📚 もっと詳しく知る</h3>
          </div>

          <div className="space-y-2">
            {income >= 120 && income <= 160 && (
              <Link href="/blog/130man-no-kabe-v2">
                <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                  <CardContent className="pt-3 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-primary mb-1">⚠️ 必読</p>
                        <p className="text-sm font-bold text-foreground">130万円の壁で働き損を防ぐ方法</p>
                        <p className="text-xs text-muted-foreground mt-1">社会保険料で手取りが減る理由</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}

            {income >= 150 && income <= 170 && (
              <Link href="/blog/103man-no-kabe">
                <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                  <CardContent className="pt-3 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-green-600 mb-1">✨ 朗報</p>
                        <p className="text-sm font-bold text-foreground">160万円の壁とは？令和7年度改正を解説</p>
                        <p className="text-xs text-muted-foreground mt-1">103万円から大きく変更！</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}

            {attribute !== "freeter" && (
              <Link href="/blog/gakusei-baito-zeikin">
                <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                  <CardContent className="pt-3 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-blue-600 mb-1">🎓 学生向け</p>
                        <p className="text-sm font-bold text-foreground">学生バイトの税金対策</p>
                        <p className="text-xs text-muted-foreground mt-1">160万円の壁と特定親族特別控除を解説</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}

            <Link href="/blog">
              <Card className="hover:border-primary transition-all cursor-pointer bg-white/80 backdrop-blur">
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-foreground">その他の記事を見る</p>
                      <p className="text-xs text-muted-foreground mt-1">社会保険の壁、特定扶養親族など</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
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
