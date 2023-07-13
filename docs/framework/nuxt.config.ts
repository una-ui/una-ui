import { resolve } from 'node:path'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    // '@nexvelt/ui-nuxt',
    '../../packages/ui-nuxt/src/module',
  ],

  routeRules: {
    '/': { redirect: '/guide' },
  },

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  experimental: {
    payloadExtraction: false,
  },

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
