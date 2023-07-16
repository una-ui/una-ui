import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { defineNuxtPlugin } from '#app'

let nexveltUIStyle: HTMLStyleElement | undefined
export interface ThemeColors {
  [key: string]: string
}

export default defineNuxtPlugin(() => {
  const settings = useStorage('nv-settings', {
    primaryColors: undefined as ThemeColors | undefined,
    grayColors: undefined as ThemeColors | undefined,
    fontSize: 15,
  })

  nexveltUIStyle = document.createElement('style')
  nexveltUIStyle.id = 'nexvelt-ui'
  document.head.appendChild(nexveltUIStyle)

  // remove mock attribute from html tag
  const html = document.documentElement
  html.removeAttribute('style')

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
