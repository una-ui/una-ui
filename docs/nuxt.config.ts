import pkg from '../package.json'
import unaUI from '../packages/nuxt/src/module'

export default defineNuxtConfig({
  extends: '@una-ui/content',

  modules: [
    unaUI,
  ],

  devtools: {
    enabled: true,
    componentInspector: false,
  },

  sourcemap: {
    server: false,
    client: true,
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  routeRules: {
    '/': { prerender: true },
  },

  css: [
    '~/styles/index.css',
  ],

  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // To avoid lagging during page navigation on client-side
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global)
          comp.global = 'sync'
      }
    },
  },

  compatibilityDate: '2024-07-17',
})
