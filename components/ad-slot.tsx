"use client"

import { Card, CardContent } from "@/components/ui/card"

interface AdSlotProps {
  /**
   * 広告の位置（トラッキング用）
   */
  position: "result-top" | "result-bottom" | "sidebar" | "inline"
  
  /**
   * 広告のサイズ
   */
  size?: "small" | "medium" | "large"
  
  /**
   * 広告のタイトル（任意）
   */
  title?: string

  /**
   * 広告タグ（HTML文字列）
   */
  adCode?: string
}

/**
 * 広告枠コンポーネント
 * 
 * A8.net等のアフィリエイト広告を配置するためのプレースホルダー
 * 実際の広告タグは、このコンポーネント内に配置してください
 */
export function AdSlot({ position, size = "medium", title, adCode }: AdSlotProps) {
  if (!adCode) {
    return null
  }

  // サイズに応じた高さを設定
  const heightClass = 
    size === "small" ? "min-h-[100px]" :
    size === "medium" ? "min-h-[200px]" :
    "min-h-[300px]"

  return (
    <div className="w-full space-y-2">
      {title && (
        <p className="text-xs text-muted-foreground text-center">{title}</p>
      )}
      <Card className="border-dashed border-2 border-border">
        <CardContent className={`${heightClass} flex items-center justify-center p-6`}>
          <div className="text-center space-y-2">
            <div dangerouslySetInnerHTML={{ __html: adCode }} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * A8.netのバイト求人広告用の型定義
 */
interface A8JobLink {
  name: string
  url: string
  description?: string
  tag?: string // 「祝い金」「人気」など
}

interface JobAdSlotProps {
  title?: string
  jobs?: A8JobLink[]
}

/**
 * バイト求人広告用のカスタム広告枠
 * 
 * A8.netのバイト求人広告を配置するための専用コンポーネント
 */
export function JobAdSlot({ 
  title = "あなたにぴったりのバイトを探す",
  jobs = []
}: JobAdSlotProps) {
  if (jobs.length === 0) {
    return null
  }

  return (
    <div className="w-full space-y-2">
      <p className="text-xs text-muted-foreground text-center">{title}</p>
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {jobs.map((job, index) => (
              <a
                key={index}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-background border-2 border-border hover:border-primary rounded-lg p-3 text-center transition-all hover:shadow-md group"
              >
                <div className="space-y-1">
                  {job.tag && (
                    <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {job.tag}
                    </span>
                  )}
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.name}
                  </p>
                  {job.description && (
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      {job.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
