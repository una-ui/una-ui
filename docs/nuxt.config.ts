import pkg from '../package.json'
import unaUI from '../packages/nuxt/src/module'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  modules: [
    'nuxt-content-snippet',
    unaUI,
  ],

  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
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
})
