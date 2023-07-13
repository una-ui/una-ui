import { resolve } from 'node:path'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '../../packages/ui-nuxt/src/module',
  ],

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  css: [
    '~/style.css',
  ],

  app: {
    baseURL: '/framework/',
  },

  nexveltUI: {
    prefix: 'N',
  },

  nitro: {
    output: {
      publicDir: resolve(__dirname, '../.vitepress/dist/framework/'),
    },
  },
})
