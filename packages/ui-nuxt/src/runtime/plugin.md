import { useStorage } from '@vueuse/core'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected!')

  const settings = useStorage('nv-settings', {
    primaryColors: undefined as ThemeColors | undefined,
    grayColors: undefined as ThemeColors | undefined,
    fontSize: 15,
  })

  nexveltUIStyle = document.createElement('style')
  nexveltUIStyle.id = 'nexvelt-ui'
  document.head.appendChild(nexveltUIStyle)

  watchEffect(() => {
    const styleTag = document.getElementById('nexvelt-ui')
    if (styleTag) {
      styleTag.innerHTML = `
  :root {
      --font-size: ${settings.value.fontSize}px;
      ${Object.entries(settings.value.primaryColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
      ${Object.entries(settings.value.grayColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
  }
  `.replace(/\s*\n+\s*/g, '')
    }
  })
})
