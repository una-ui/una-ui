export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  css: [
    '@unocss/reset/tailwind.css',
  ],

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
  ],
})
