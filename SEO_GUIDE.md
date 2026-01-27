# SEO対策実装ガイド

このドキュメントは、年収の壁シミュレーターに実装されたSEO対策の詳細をまとめたものです。

## 実装済みのSEO対策

### 1. サイトマップ（sitemap.xml）

**ファイル**: `app/sitemap.ts`

- 動的サイトマップの生成
- 全ページのURL、最終更新日、変更頻度、優先度を設定
- Google検索エンジンに自動的にサイト構造を通知

**設定が必要**:
- `baseUrl`を本番環境のURLに変更してください

### 2. robots.txt

**ファイル**: `app/robots.ts`

- 検索エンジンのクローリングを制御
- サイトマップの場所を指定
- APIルートなどのプライベートパスをクロール対象外に設定

**設定が必要**:
- `baseUrl`を本番環境のURLに変更してください

### 3. メタデータの最適化

**ファイル**: `app/layout.tsx`

#### 実装内容:
- Open Graphタグ（SNSシェア時の表示最適化）
- Twitter Cardタグ
- canonical URL（重複コンテンツの防止）
- robots設定（インデックス許可）
- キーワード設定
- viewport設定
- theme-color設定

**設定が必要**:
1. `metadataBase`を本番環境のURLに変更
2. Open Graph画像を作成（推奨サイズ: 1200x630px）
3. Twitterアカウントがあれば`creator`に設定
4. Google Search Consoleの確認コードを`verification.google`に設定

### 4. 構造化データ（JSON-LD）

**ファイル**: `components/structured-data.tsx`

#### 実装されたコンポーネント:
- `WebsiteStructuredData` - Webサイト情報
- `WebApplicationStructuredData` - Webアプリケーション情報
- `ArticleStructuredData` - ブログ記事情報
- `BreadcrumbStructuredData` - パンくずリスト
- `FAQStructuredData` - よくある質問
- `OrganizationStructuredData` - 組織情報

#### 使用場所:
- トップページ: WebSite、WebApplication、Organization
- ブログ記事: Article、Breadcrumb

**設定が必要**:
- 各構造化データコンポーネント内のURLを本番環境に変更

### 5. ページ別メタデータ

各ページに以下を設定済み:
- タイトル
- 説明文
- canonical URL
- Open Graph設定

#### 実装済みページ:
- ✅ トップページ（`app/page.tsx`）
- ✅ ブログ一覧（`app/blog/page.tsx`）
- ✅ ブログ記事（全5記事）
  - 103万円の壁
  - 130万円の壁
  - 学生バイトの税金対策
  - 特定扶養親族
  - 社会保険の壁
- ✅ 運営者情報（`app/about/page.tsx`）
- ✅ お問い合わせ（`app/contact/page.tsx`）

### 6. パフォーマンス最適化

**ファイル**: `next.config.mjs`

#### 実装内容:
- Gzip圧縮の有効化
- セキュリティヘッダーの追加
  - X-Frame-Options
  - X-Content-Type-Options
  - X-DNS-Prefetch-Control
  - Referrer-Policy
- X-Powered-Byヘッダーの削除
- 画像最適化の設定（AVIF、WebP対応）

## デプロイ前のチェックリスト

### 必須タスク

- [x] 全ファイルの`https://nenshuu-kabe.com`に変更済み
  - `app/sitemap.ts`
  - `app/robots.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - 全ブログ記事ページ
  - `components/structured-data.tsx`
  
- [ ] Open Graph画像の作成と配置
  - サイズ: 1200x630px
  - 形式: PNG or JPG
  - 配置場所: `/public/og-image.png`
  - 更新ファイル: `app/layout.tsx`

- [x] Google Search Consoleの設定
  1. ✅ Google Search Consoleにサイトを登録（URLプレフィックス方式を推奨）
  2. ✅ 確認コードを取得済み（HTMLタグ方式）
  3. ✅ `app/layout.tsx`の`verification.google`に設定済み
  
  **設定手順**:
  - プロパティタイプ: 「URLプレフィックス」を選択
  - URL: `https://nenshuu-kabe.com` を入力
  - 確認方法: 「HTMLタグ」を選択（最も簡単）
  - メタタグの content 値が設定済みコードと一致することを確認

### 推奨タスク

- [ ] Twitterアカウントがあれば`app/layout.tsx`の`twitter.creator`に設定

- [ ] SNSアカウントがあれば`components/structured-data.tsx`の`OrganizationStructuredData`に追加

- [ ] サイトマップをGoogle Search Consoleに送信

- [ ] 各ブログ記事の公開日・更新日を実際の日付に変更

## デプロイ後の確認

### 1. サイトマップの確認
- `https://nenshuu-kabe.com/sitemap.xml`にアクセスして正しく表示されるか確認

### 2. robots.txtの確認
- `https://nenshuu-kabe.com/robots.txt`にアクセスして正しく表示されるか確認

### 3. 構造化データの検証
- [Rich Results Test](https://search.google.com/test/rich-results)でテスト
- 各ブログ記事のURLを入力して検証

### 4. Open Graphの確認
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)でテスト
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)でテスト

### 5. パフォーマンステスト
- [PageSpeed Insights](https://pagespeed.web.dev/)でスコアを確認
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)で総合的なチェック

### 6. モバイルフレンドリーテスト
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)でテスト

## SEOベストプラクティス

### コンテンツ面
- ✅ ユニークで価値のあるコンテンツ
- ✅ 適切な見出し階層（h1→h2→h3）
- ✅ 内部リンクの設置
- ✅ 読みやすい文章構成
- ✅ 定期的なコンテンツ更新

### 技術面
- ✅ 高速なページ読み込み
- ✅ モバイル対応
- ✅ 構造化データの実装
- ✅ 適切なメタデータ
- ✅ XMLサイトマップ
- ✅ セキュアな接続（HTTPS）

### ユーザー体験
- ✅ 直感的なナビゲーション
- ✅ 明確なCTA（Call to Action）
- ✅ 高速なレスポンス
- ✅ アクセシビリティ対応

## トラブルシューティング

### Q: サイトマップが表示されない
A: ビルド後に`/.next/`ディレクトリが生成されているか確認してください。

### Q: 構造化データが認識されない
A: [Rich Results Test](https://search.google.com/test/rich-results)でエラーを確認し、JSON-LDの構文をチェックしてください。

### Q: Google検索に表示されない
A: Google Search Consoleでインデックス登録をリクエストし、数日〜数週間待ってください。

## 参考リンク

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## 更新履歴

- 2026-01-28: 初版作成、全SEO対策を実装

