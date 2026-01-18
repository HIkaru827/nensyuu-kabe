"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle, AlertCircle, TrendingUp, Clock, Info } from "lucide-react"
import { simulateIncome, type StudentType, type ParentIncomeLevel } from "@/lib/income-simulator"
import { JobAdSlot, AdSlot } from "@/components/ad-slot"

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

  // 属性をStudentTypeに変換
  const getStudentType = (): StudentType => {
    if (attribute === "daytime-student") return "day"
    if (attribute === "evening-student") return "night"
    return "none"
  }

  // シミュレーション実行
  const simulationResult = useMemo(() => {
    return simulateIncome({
      annualIncome: income * 10_000, // 万円 → 円に変換
      age,
      studentType: getStudentType(),
      parentIncomeLevel: parentIncome,
    })
  }, [income, age, attribute, parentIncome])

  // UIの色とアイコンを設定
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
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-foreground">年収シミュレーター</h1>
        <p className="text-sm text-muted-foreground">親に怒られない年収を30秒で判定</p>
        <p className="text-xs text-primary font-semibold">🆕 2025年改正対応（103万→160万円）</p>
      </div>

      {/* Income Input Area */}
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

          {/* Age Input */}
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

          {/* Attribute Selection */}
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

          {/* Advanced Options Toggle */}
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

          {/* Parent Income Level (Advanced) */}
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

          {/* Slider */}
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
            {/* Threshold Markers */}
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
              {/* Safe zone: 0-110 (55%) */}
              <div className="bg-emerald-200 h-full" style={{ width: "55%" }} />
              {/* Caution zone: 110-130 (10%) */}
              <div className="bg-amber-200 h-full" style={{ width: "10%" }} />
              {/* Danger zone: 130-160 (15%) */}
              <div className="bg-red-200 h-full" style={{ width: "15%" }} />
              {/* Adjustment zone: 160-200 (20%) */}
              <div className="bg-violet-200 h-full" style={{ width: "20%" }} />
            </div>

            {/* Progress overlay */}
            <div
              className="absolute left-0 h-3 rounded-full overflow-hidden"
              style={{ top: "calc(2rem + 0.5rem)", width: `${getPositionPercent(income)}%` }}
            >
              <div className={`h-full w-full ${statusConfig.barColor} transition-colors duration-300`} />
            </div>

            {/* Current Position Indicator */}
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

      {/* Result Card */}
      <Card className={`border-2 ${statusConfig.bgClass} shadow-md transition-colors duration-300`}>
        <CardContent className="pt-5 pb-5 space-y-3">
          <div className="flex items-start gap-3">
            <statusConfig.icon className={`w-6 h-6 ${statusConfig.iconClass} mt-0.5 shrink-0`} />
            <div className="space-y-1">
              <h2 className={`text-lg font-bold ${statusConfig.textClass}`}>{simulationResult.label}</h2>
              <p className="text-sm font-medium text-foreground/90">{simulationResult.headline}</p>
            </div>
          </div>

          {/* Description */}
          <div className="pt-2">
            <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
              {simulationResult.description}
            </p>
          </div>

          {/* Deduction Display */}
          {(simulationResult.estimatedSelfLoss !== undefined || simulationResult.estimatedParentLoss !== undefined) && (
            <div className="space-y-3 pt-3 border-t border-current/10">
              {/* 本人の負担（内訳あり） */}
              {simulationResult.selfBurdenBreakdown !== undefined && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground font-semibold">あなたの負担</span>
                    <span className={`font-bold ${statusConfig.textClass}`}>
                      約 {Math.floor(simulationResult.selfBurdenBreakdown.total / 10_000).toLocaleString()}万円
                    </span>
                  </div>
                  {/* 内訳 */}
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
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">└ 社会保険料</span>
                        <span className="text-muted-foreground">
                          約 {simulationResult.selfBurdenBreakdown.socialInsurance.toLocaleString()}円
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* 本人の負担（内訳なし・後方互換性のため残す） */}
              {simulationResult.estimatedSelfLoss !== undefined && simulationResult.selfBurdenBreakdown === undefined && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">あなたの負担増</span>
                  <span className={`font-bold ${statusConfig.textClass}`}>
                    約 {Math.floor(simulationResult.estimatedSelfLoss / 10_000)}万円
                  </span>
                </div>
              )}
              {/* 親の負担 */}
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

          {/* Advice */}
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

      {/* Action Buttons */}
      <div className="space-y-3">
        {income >= 130 && income < 160 && (
          <>
            <Button className="w-full h-12 text-base font-semibold gap-2" size="lg">
              <TrendingUp className="w-5 h-5" />
              160万円を目指す → 高時給バイトを見る
            </Button>
            <Button variant="outline" className="w-full h-12 text-base font-semibold gap-2 bg-background" size="lg">
              <Clock className="w-5 h-5" />
              130万円以下に抑える → シフト調整
            </Button>
          </>
        )}
        {income < 130 && (
          <Button className="w-full h-12 text-base font-semibold gap-2" size="lg">
            <TrendingUp className="w-5 h-5" />
            このペースで続ける → おすすめバイト
          </Button>
        )}
        {income >= 160 && (
          <Button className="w-full h-12 text-base font-semibold gap-2" size="lg">
            <TrendingUp className="w-5 h-5" />
            さらに稼ぐ → キャリアアップ求人
          </Button>
        )}
      </div>

      {/* Advertisement - Job Listings */}
      <JobAdSlot title="💼 あなたにぴったりのバイトを探す" />

      {/* Advertisement - General */}
      <AdSlot 
        position="result-bottom" 
        size="medium"
        title="PR"
      />

      {/* Footer */}
      <footer className="text-center space-y-1 pt-2">
        <p className="text-xs text-muted-foreground">※ 本シミュレーションは概算です</p>
        <p className="text-xs text-muted-foreground">※ 2025年税制改正大綱を参考</p>
      </footer>
    </div>
  )
}
