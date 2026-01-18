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
 * バイト求人広告用のカスタム広告枠
 * 
 * A8.netのバイト求人広告を配置するための専用コンポーネント
 */
export function JobAdSlot({ title = "あなたにぴったりのバイトを探す" }: { title?: string }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-xs text-muted-foreground text-center">{title}</p>
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-4 space-y-3">
          {/* ここにA8.netのバイト求人広告タグを配置 */}
          
          {/* プレースホルダー表示（本番では削除） */}
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-foreground">
              💼 バイト求人広告枠
            </p>
            <p className="text-xs text-muted-foreground">
              タウンワーク / バイトル / マッハバイト等の<br />
              A8.net広告リンクをここに配置
            </p>
          </div>
          
          {/* サンプルボタン（実際の広告に置き換える） */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-background border border-border rounded p-2 text-center">
              <p className="text-xs font-medium">タウンワーク</p>
            </div>
            <div className="bg-background border border-border rounded p-2 text-center">
              <p className="text-xs font-medium">バイトル</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

