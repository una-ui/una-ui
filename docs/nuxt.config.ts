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

  routeRules: {
    // Static generation
    '/': { prerender: false },
  },

  typescript: {
    strict: false,
    includeWorkspace: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  css: [
    '~/style.css',
  ],
})
