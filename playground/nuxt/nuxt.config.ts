// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nexvelt/ui-nuxt',
  ],
  nexveltUI: {
    prefix: 'N',
  },
  css: [
    // '@unocss/reset/tailwind.css',
  ],
  devtools: { enabled: true },
})
