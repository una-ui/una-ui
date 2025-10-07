export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],

  una: {
    dev: true,
  },

  experimental: {
    componentIslands: true,
  },

  devtools: {
    enabled: true,
    componentInspector: false,
  },

  app: {
    keepalive: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/dashboards/default',
      ],
      failOnError: false,
    },

    routeRules: {
      '/': {
        redirect: '/dashboards/default',
      },
      '/dashboards': {
        redirect: '/dashboards/default',
      },
      '/components': {
        redirect: '/components/accordion',
      },
    },
  },

  compatibilityDate: '2024-07-17',
})
