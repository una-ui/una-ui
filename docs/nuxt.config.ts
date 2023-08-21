import pkg from '../package.json'
import unaUI from '../packages/nuxt/src/module'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    'nuxt-content-snippet',
    unaUI,
  ],

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  routeRules: {
    '/': { redirect: '/docs', prerender: false },
    '/guide': { redirect: '/guide/getting-started' },
    '/components': { redirect: '/components/elements' },
  },

  css: [
    '~/styles/index.css',
  ],
})
