export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],
  nexveltUI: {
    prefix: 'N',
  },
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
})
