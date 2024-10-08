import { defineNuxtPlugin, useHead } from '#app'

import { useUnaSettings } from '../composables/useUnaSettings'

export default defineNuxtPlugin(() => {
  const { defaultSettings } = useUnaSettings()
  useHead({
    script: [
      {
        innerHTML: `
        ;(function() {
          let settings = JSON.parse(localStorage.getItem('una-settings'))

          if (!settings) {
            settings = ${JSON.stringify(defaultSettings)}
          }

          const html = document.documentElement
          ${process.dev ? 'console.log({ settings })' : ''}

          if (settings.primary)
            Object.entries(settings.primaryColors).map(i => html.style.setProperty(i[0], i[1]))
          if (settings.gray)
            Object.entries(settings.grayColors).map(i => html.style.setProperty(i[0], i[1]))
          if (settings.radius)
            html.style.setProperty('--una-radius', settings.radius + 'rem')
          if (settings.fontSize)
            html.style.setProperty('--una-font-size', settings.fontSize + 'px')
        })()`.trim().replace(/\s*\n\s*/g, ';'),
      },
    ],
  })
})
