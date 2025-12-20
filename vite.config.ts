import { defineConfig } from 'vite'

/**
 * Vite設定
 *
 * ローカル開発では base path なし（PDF エクスポート対応）
 * GitHub Pages デプロイ時は、GitHub Actions 側で --base フラグを指定
 *
 * @see https://vitejs.dev/config/
 * @see https://sli.dev/custom/config-vite.html
 */
export default defineConfig({
  // ローカル開発・PDF エクスポート用にデフォルトは base path なし
  // GitHub Actions では `slidev build --base /YearEndReview2025/` で上書き
  base: process.env.BASE_PATH || '/',
})
