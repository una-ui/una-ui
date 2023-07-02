import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

// this is optional
import '@unocss/nuxt'

export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],
  myModule: {},
  css: [
    '@nexvelt/ui-preset/style.css',
  ],
  devtools: { enabled: true },
  unocss: {
    preflight: true,
    configFile: resolve(__dirname, '../unocss.config.ts'),
  },
})
