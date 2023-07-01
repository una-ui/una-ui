import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: [
      // 'vitepress',
      // '@nexvelt/ui-preset',
      // 'unocss',
    ],
  },
  plugins: [
    UnoCSS({
      configFile: '../uno.config.ts',
    }),
    AutoImport({
      imports: [
        // List the libraries you want to automatically import
        'vue',
        '@vueuse/core',
        'vitepress',
        // Add more imports as needed
      ],
      dirs: [
        // List the directories to search for components.
        'vitepress/theme/components',
      ],
    }),
  ],
})
