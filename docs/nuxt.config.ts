export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    // '@nexvelt/ui-nuxt',
    '../packages/ui-nuxt/src/module',
  ],

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  // routeRules: {
  //   '/': { redirect: '/getting-started' },
  // },

  // generate: {
  //   routes: ['/getting-started'],
  // },

  css: [
    '~/style.css',
  ],
})
