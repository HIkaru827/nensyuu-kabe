"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, RefreshCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BAITO_DIAGNOSIS_QUESTIONS,
  BAITO_REALITY_ARTICLES,
  BAITO_TYPE_RESULTS,
  type BaitoScore,
  type BaitoTypeId,
} from "@/lib/baito-reality"

type Answer = {
  questionId: string
  label: string
  scores: BaitoScore
}

const typeIds: BaitoTypeId[] = ["service", "steady", "focus", "high-wage", "style", "skill-up"]

function addScores(base: Record<BaitoTypeId, number>, scores: BaitoScore) {
  typeIds.forEach((id) => {
    base[id] += scores[id] ?? 0
  })
}

export function BaitoTypeDiagnosis() {
  const [answers, setAnswers] = useState<Answer[]>([])
  const currentQuestion = BAITO_DIAGNOSIS_QUESTIONS[answers.length]
  const progress = Math.round((answers.length / BAITO_DIAGNOSIS_QUESTIONS.length) * 100)

  const rankedResults = useMemo(() => {
    const totals = typeIds.reduce(
      (acc, id) => {
        acc[id] = 0
        return acc
      },
      {} as Record<BaitoTypeId, number>,
    )

    answers.forEach((answer) => addScores(totals, answer.scores))

    return [...BAITO_TYPE_RESULTS]
      .map((result) => ({ ...result, score: totals[result.id] }))
      .sort((a, b) => b.score - a.score)
  }, [answers])

  const mainResult = answers.length === BAITO_DIAGNOSIS_QUESTIONS.length ? rankedResults[0] : null
  const secondResult = answers.length === BAITO_DIAGNOSIS_QUESTIONS.length ? rankedResults[1] : null
  const recommendedArticles = mainResult
    ? mainResult.recommendedSlugs
        .map((slug) => BAITO_REALITY_ARTICLES.find((article) => article.slug === slug))
        .filter((article): article is (typeof BAITO_REALITY_ARTICLES)[number] => Boolean(article))
    : []

  const handleAnswer = (label: string, scores: BaitoScore) => {
    if (!currentQuestion) return
    setAnswers((current) => [...current, { questionId: currentQuestion.id, label, scores }])
  }

  const handleReset = () => {
    setAnswers([])
  }

  const handleBack = () => {
    setAnswers((current) => current.slice(0, -1))
  }

  return (
    <section className="mx-auto max-w-5xl space-y-6" aria-label="学生バイトタイプ診断">
      <Card className="border-primary/20">
        <CardContent className="space-y-6 p-5 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                6問でわかる
              </div>
              <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                向いていそうなバイトを探す
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                気軽に答えながら、接客の多さ、作業内容、時給、扶養内で働きやすいかをチェックできます。
                結果から職種別ガイドを確認できます。
              </p>
            </div>
            <div className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm">
              <p className="font-semibold text-foreground">{answers.length} / {BAITO_DIAGNOSIS_QUESTIONS.length}問</p>
              <p className="mt-1 text-xs text-muted-foreground">公的な適性検査ではありません。求人を見る前の目安として使ってください。</p>
            </div>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>

          {currentQuestion && (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary">質問 {answers.length + 1}</p>
                <h3 className="text-xl font-bold text-foreground">{currentQuestion.question}</h3>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    data-testid={`diagnosis-option-${index}`}
                    onClick={() => handleAnswer(option.label, option.scores)}
                    className="min-h-32 rounded-md border border-border bg-background p-4 text-left transition-colors hover:border-primary hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span className="block text-base font-bold text-foreground">{option.label}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{option.description}</span>
                  </button>
                ))}
              </div>

              {answers.length > 0 && (
                <div className="flex flex-wrap justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    1つ前へ
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleReset}>
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    最初から
                  </Button>
                </div>
              )}
            </div>
          )}

          {mainResult && (
            <div className="space-y-6" data-testid="diagnosis-result" aria-live="polite">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-md border border-primary/30 bg-primary/5 p-5">
                  <p className="text-xs font-semibold text-primary">診断結果</p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{mainResult.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mainResult.summary}</p>
                  {secondResult && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      次に近いのは「{secondResult.title}」です。迷ったら、両方の記事を見比べてみてください。
                    </p>
                  )}
                </div>

                <div className="rounded-md border border-border p-5">
                  <h4 className="text-sm font-bold text-foreground">活かしやすい強み</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {mainResult.strengths.map((strength) => (
                      <li key={strength} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-md border border-border bg-muted/30 p-4">
                  <h4 className="text-sm font-bold text-foreground">注意点</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mainResult.watchOut}</p>
                </div>
                <div className="rounded-md border border-border bg-muted/30 p-4">
                  <h4 className="text-sm font-bold text-foreground">年収の壁</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mainResult.incomeWallTip}</p>
                </div>
                <div className="rounded-md border border-border bg-muted/30 p-4">
                  <h4 className="text-sm font-bold text-foreground">有給</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mainResult.paidLeaveTip}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-primary">おすすめの職種別ガイド</p>
                    <h4 className="text-xl font-bold text-foreground">仕事内容と向き不向きを見る</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={handleBack}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      1つ前へ
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleReset}>
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      最初から
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {recommendedArticles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} aria-label={`${article.jobName}の職種別ガイドを読む`}>
                      <Card className="h-full transition-colors hover:border-primary hover:bg-muted/30">
                        <CardContent className="flex h-full flex-col gap-3 p-4">
                          <span className="w-fit rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                            {article.category}
                          </span>
                          <div className="space-y-1">
                            <h5 className="text-base font-bold text-foreground">{article.jobName}</h5>
                            <p className="text-sm leading-relaxed text-muted-foreground">{article.catchCopy}</p>
                          </div>
                          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            記事を見る
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  候補が見えてきたら、年収の壁と有給日数も確認して、働く時間やシフトを考えましょう。
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/">年収を試算</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/paid-leave">有給を確認</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
