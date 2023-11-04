import unaSettings from '../composables/una-settings'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { defineNuxtPlugin, useHead } from '#app'

export default defineNuxtPlugin(() => {
  const { defaultSettings } = unaSettings()
  useHead({
    script: [
      {
        innerHTML: `
        ;(function() {
          const settings = JSON.parse(localStorage.getItem('una-settings'))

          if (!settings) {
            settings = ${JSON.stringify(defaultSettings)}
          }

          const html = document.documentElement
          ${process.dev ? 'console.log({ settings })' : ''}

          if (settings.primaryColors) {
            Object.entries(settings.primaryColors).map(i => html.style.setProperty(i[0], i[1]))
          }
          if (settings.grayColors) {
            Object.entries(settings.grayColors).map(i => html.style.setProperty(i[0], i[1]))
          }
        })()`.trim().replace(/\s*\n+\s*/g, ';'),
      },
    ],
  })
})
