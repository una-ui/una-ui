import { defineNuxtPlugin, useAppConfig, useHead } from '#app'

export default defineNuxtPlugin(() => {
  const { una: settings } = useAppConfig()

  useHead({
    script: [
      {
        // not available on firefox
        // https://bugzil.la/1751383
        blocking: 'render',
        type: 'module',
        async: true,
        innerHTML: `
        "use strict";
        await (async function() {
          let settings = JSON.parse(localStorage.getItem('una-settings'))

          if (!settings) {
            settings = ${JSON.stringify(settings)}
          }

          async function applyColors(color, prefix) {
            const res = await fetch('/_una/colors/' + prefix + '/' + color + '.json', {
              cache: 'force-cache',
              priority: 'high'
            })
            if (!res.ok) return

            for (const [k, v] of Object.entries(await res.json())) {
              document.documentElement.style.setProperty(k, v)
            }
          }

          const html = document.documentElement
          ${process.dev ? 'console.log({ settings })' : ''}

          await Promise.all([
            settings.primary && applyColors(settings.primary, 'primary'),
            settings.gray && applyColors(settings.gray, 'gray'),
          ])
          if (settings.radius)
            html.style.setProperty('--una-radius', settings.radius + 'rem')
          if (settings.fontSize)
            html.style.setProperty('--una-font-size', settings.fontSize + 'px')
        })()`.trim(),
      },
    ],
  })
})
