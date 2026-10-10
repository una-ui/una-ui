import { NuxtLink } from '#components'
import UnaUI from '#una/plugin'
import defu from 'defu'
import { defineNuxtPlugin, useAppConfig, useCookie } from 'nuxt/app'

export default defineNuxtPlugin({
  setup: (nuxtApp) => {
    const { una } = useAppConfig()
    nuxtApp.vueApp.use(UnaUI, defu(una, {
      components: {
        RouterLink: NuxtLink,
        useCookie,
      },
    }))
  },
})
