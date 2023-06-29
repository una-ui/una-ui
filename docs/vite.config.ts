import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
      '@nexvelt/ui-preset',
      'unocss',
    ],
  },
  plugins: [
    UnoCSS({
      configFile: '../uno.config.ts',
    }),
  ],
})
