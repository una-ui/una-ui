export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  nexveltUI: {
    prefix: 'N',
  },
  devtools: { enabled: true },
})
