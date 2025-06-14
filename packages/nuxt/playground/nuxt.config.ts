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

  routeRules: {
    '/': {
      redirect: '/dashboards/project-management',
    },
    '/dashboards': {
      redirect: '/dashboards/default',
    },
    '/components': {
      redirect: '/components/accordion',
    },
    '/components/**': {
      prerender: true,
    },
  },

  compatibilityDate: '2024-07-17',
})
