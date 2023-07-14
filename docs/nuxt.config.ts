import pkg from '../package.json'
import nexveltUI from '../packages/ui-nuxt/src/module'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    nexveltUI,
  ],

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  routeRules: {
    '/': { redirect: '/home' },
  },

  experimental: {
    payloadExtraction: true,
  },

  css: [
    '~/style.css',
  ],
})
