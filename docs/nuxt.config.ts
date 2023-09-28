import pkg from '../package.json'
import unaUI from '../packages/nuxt/src/module'

export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: [
    'nuxt-content-snippet',
    unaUI,
  ],

  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
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
    '/': { redirect: process.env.NODE_ENV === 'development' ? '/docs' : undefined },
  },

  css: [
    '~/styles/index.css',
  ],
})
