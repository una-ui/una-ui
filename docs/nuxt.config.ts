export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    // '@nexvelt/ui-nuxt',
    '../../packages/ui-nuxt/src/module',
  ],

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },

  css: [
    '~/style.css',
  ],
})
