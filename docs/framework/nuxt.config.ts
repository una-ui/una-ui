import { resolve } from 'node:path'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    // '@nexvelt/ui-nuxt',
    '../../packages/ui-nuxt/src/module',
  ],

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  debug: true,

  css: [
    '~/style.css',
  ],

  app: {
    baseURL: '/framework/',
  },

  nitro: {
    output: {
      publicDir: resolve(__dirname, '../.vitepress/dist/framework/'),
    },
  },
})
