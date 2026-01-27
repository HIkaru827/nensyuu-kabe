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
}

/**
 * 広告枠コンポーネント
 * 
 * A8.net等のアフィリエイト広告を配置するためのプレースホルダー
 * 実際の広告タグは、このコンポーネント内に配置してください
 */
export function AdSlot({ position, size = "medium", title }: AdSlotProps) {
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
            {/* ここにA8.netやGoogle AdSenseの広告タグを配置 */}
            {/* 例：
              <div dangerouslySetInnerHTML={{ __html: adCode }} />
            */}
            
            {/* プレースホルダー表示（本番では削除） */}
            <div className="opacity-50">
              <p className="text-sm font-medium text-muted-foreground">広告枠</p>
              <p className="text-xs text-muted-foreground mt-1">
                {position} - {size}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                ここにA8.netまたはGoogle AdSenseの<br />
                広告タグを配置してください
              </p>
            </div>
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
  // 広告データがない場合はプレースホルダー表示
  const showPlaceholder = jobs.length === 0
  
  return (
    <div className="w-full space-y-2">
      <p className="text-xs text-muted-foreground text-center">{title}</p>
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-4 space-y-3">
          {showPlaceholder ? (
            // プレースホルダー表示
            <div className="text-center space-y-2">
              <p className="text-sm font-semibold text-foreground">
                💼 バイト求人広告枠
              </p>
              <p className="text-xs text-muted-foreground">
                タウンワーク / バイトル / マッハバイト等の<br />
                A8.net広告リンクをここに配置
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-background border border-border rounded p-2 text-center">
                  <p className="text-xs font-medium">タウンワーク</p>
                </div>
                <div className="bg-background border border-border rounded p-2 text-center">
                  <p className="text-xs font-medium">バイトル</p>
                </div>
              </div>
            </div>
          ) : (
            // 実際の広告リンク表示
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}


