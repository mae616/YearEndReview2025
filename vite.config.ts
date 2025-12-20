import { defineConfig } from 'vite'

/**
 * Vite設定
 * GitHub Pagesでのホスティングに必要なbase pathを設定
 *
 * @see https://vitejs.dev/config/
 * @see https://sli.dev/custom/config-vite.html
 */
export default defineConfig({
  // GitHub Pagesのbase path設定
  // 形式: https://mae616.github.io/YearEndReview2025/
  base: '/YearEndReview2025/',
})
