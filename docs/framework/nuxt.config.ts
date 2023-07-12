import { resolve } from 'node:path'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  app: {
    baseURL: '/framework/',
  },

  nitro: {
    rootDir: resolve(__dirname, '../..'),
    output: {
      publicDir: resolve(__dirname, '../.vitepress/dist/framework/'),
    },
  },
})
