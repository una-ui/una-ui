import { readdirSync } from 'node:fs'

import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],

  devtools: {
    enabled: true,
    componentInspector: false,
  },

  compatibilityDate: '2024-07-17',

  unocss: {
    configDeps: readdirSync(resolve('../../preset/src/_shortcuts')),
  },
})
