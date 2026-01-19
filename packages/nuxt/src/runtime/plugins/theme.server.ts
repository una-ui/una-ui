import { defineNuxtPlugin, useHead } from '#app'
import { themeStorageName, themeStorageType } from '#build/una-theme.config'

import { useUnaSettings } from '../composables/useUnaSettings'

export default defineNuxtPlugin(() => {
  const { defaultSettings, settings, primaryColors, grayColors } = useUnaSettings()
  if (themeStorageType === 'cookie') {
    useHead({
      htmlAttrs: {
        style: {
          ...primaryColors.value,
          ...grayColors.value,
          '--una-radius': settings.value.radius ? `${settings.value.radius}rem` : undefined,
          '--una-font-size': settings.value.fontSize ? `${settings.value.fontSize}px` : undefined,
        },
      },
    })
    return
  }
  useHead({
    script: [
      {
        innerHTML: `
        ;(function() {
          let settings = JSON.parse(localStorage.getItem(${JSON.stringify(themeStorageName)}))

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
