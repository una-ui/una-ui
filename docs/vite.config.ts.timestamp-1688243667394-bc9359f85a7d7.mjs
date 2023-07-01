// vite.config.ts
import { defineConfig } from "file:///Users/einstein/_Future/Projects/nexvelt/ui/node_modules/.pnpm/vite@4.3.2_@types+node@20.3.3_sass@1.63.6/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/einstein/_Future/Projects/nexvelt/ui/node_modules/.pnpm/unocss@0.53.4_postcss@8.4.24_rollup@3.26.0_vite@4.3.9/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/einstein/_Future/Projects/nexvelt/ui/node_modules/.pnpm/unplugin-auto-import@0.16.4_@vueuse+core@10.2.1_rollup@3.26.0/node_modules/unplugin-auto-import/dist/vite.js";
var vite_config_default = defineConfig({
  optimizeDeps: {
    exclude: [
      "vitepress",
      "@nexvelt/ui-preset",
      "unocss"
    ]
  },
  plugins: [
    UnoCSS({
      configFile: "../uno.config.ts"
    }),
    AutoImport({
      imports: [
        // List the libraries you want to automatically import
        "vue",
        "@vueuse/core",
        "vitepress"
        // Add more imports as needed
      ],
      dirs: [
        // List the directories to search for components.
        ".vitepress/theme/components"
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWluc3RlaW4vX0Z1dHVyZS9Qcm9qZWN0cy9uZXh2ZWx0L3VpL2RvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9laW5zdGVpbi9fRnV0dXJlL1Byb2plY3RzL25leHZlbHQvdWkvZG9jcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZWluc3RlaW4vX0Z1dHVyZS9Qcm9qZWN0cy9uZXh2ZWx0L3VpL2RvY3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbXG4gICAgICAndml0ZXByZXNzJyxcbiAgICAgICdAbmV4dmVsdC91aS1wcmVzZXQnLFxuICAgICAgJ3Vub2NzcycsXG4gICAgXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFVub0NTUyh7XG4gICAgICBjb25maWdGaWxlOiAnLi4vdW5vLmNvbmZpZy50cycsXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIExpc3QgdGhlIGxpYnJhcmllcyB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IGltcG9ydFxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICd2aXRlcHJlc3MnLFxuICAgICAgICAvLyBBZGQgbW9yZSBpbXBvcnRzIGFzIG5lZWRlZFxuICAgICAgXSxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgLy8gTGlzdCB0aGUgZGlyZWN0b3JpZXMgdG8gc2VhcmNoIGZvciBjb21wb25lbnRzLlxuICAgICAgICAnLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzJyxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLG9CQUFvQjtBQUMvVixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BRUY7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUo7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
