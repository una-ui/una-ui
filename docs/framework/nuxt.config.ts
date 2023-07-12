import { resolve } from 'node:path'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  app: {
    baseURL: '/framework/',
  },

  nitro: {
    output: {
      publicDir: resolve(__dirname, '../.vitepress/dist/framework/'),
    },
  },
})
