import { defineNuxtPlugin, useAppConfig, useHead } from '#app'

import { useUnaSettings } from '../composables/useUnaSettings'

export default defineNuxtPlugin(() => {
  const { una: { themes } } = useAppConfig()
  const { defaultSettings } = useUnaSettings()
  useHead({
    script: [
      {
        innerHTML: `
        ;(function() {
          const themes = ${JSON.stringify(themes)}
          let settings = JSON.parse(localStorage.getItem('una-settings'))

          if (!settings) {
            settings = ${JSON.stringify(defaultSettings)}
          }

          const html = document.documentElement
          ${process.dev ? 'console.log({ settings })' : ''}

          if (settings.theme) {
            const theme = themes.find(t => t.name === settings.theme)
            if (theme) {
              Object.entries(theme.cssVars.light).map(i => html.style.setProperty(i[0], i[1]))
              Object.entries(theme.cssVars.dark).map(i => html.style.setProperty(i[0], i[1]))
            }

            html.style.setProperty('--una-radius', settings.radius + 'rem')
            html.style.setProperty('--una-font-size', settings.fontSize + 'px')
            return
          }

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
