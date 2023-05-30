import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  plugins: [
    UnoCSS(),
    AutoImport({
      dirs: [
        './vitepress/theme/components',
      ],
    }),
  ],
})
