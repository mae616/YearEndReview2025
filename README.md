# YearEndReview2025

2025年の振り返りLT - Slidevプレゼンテーション

## ローカル開発

スライドショーを開始するには：

- `pnpm install`
- `pnpm dev`
- <http://localhost:3030> にアクセス

[slides.md](./slides.md) を編集すると、変更がリアルタイムに反映されます。

詳細は [Slidev公式ドキュメント](https://sli.dev/) を参照してください。

## GitHub Pagesへのデプロイ

このプロジェクトは、mainブランチへのpush時に自動的にGitHub Pagesへデプロイされます。

### 初回設定手順

1. GitHubリポジトリの **Settings** → **Pages** に移動
2. **Source** を **GitHub Actions** に設定
3. mainブランチにpushすると、自動的にビルド＆デプロイが実行されます

### 公開URL

デプロイ後、以下のURLでスライドにアクセスできます：

**https://mae616.github.io/YearEndReview2025/**

### 手動デプロイ

GitHub Actionsの **Actions** タブから `Deploy to GitHub Pages` ワークフローを手動実行することもできます。

## ビルド

静的サイトとして出力する場合：

```bash
pnpm build
```

ビルド成果物は `dist` ディレクトリに出力されます。
