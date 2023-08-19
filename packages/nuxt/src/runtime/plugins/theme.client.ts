import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { defineNuxtPlugin } from '#app'

let unaUIStyle: HTMLStyleElement | undefined
export interface ThemeColors {
  [key: string]: string
}

export default defineNuxtPlugin(() => {
  const settings = useStorage('una-settings', {
    primaryColors: undefined as ThemeColors | undefined,
    grayColors: undefined as ThemeColors | undefined,
    // fontSize: 16, TODO: add font size
    // --font-size: ${settings.value.fontSize}px; TODO: add font size
  })

  unaUIStyle = document.createElement('style')
  unaUIStyle.id = 'una-ui'
  document.head.appendChild(unaUIStyle)

  // remove mock attribute from html tag
  const html = document.documentElement
  html.removeAttribute('style')

  watchEffect(() => {
    const styleTag = document.getElementById('una-ui')
    if (styleTag) {
      styleTag.innerHTML = `
    :root {
        ${Object.entries(settings.value.primaryColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
        ${Object.entries(settings.value.grayColors || {}).map(([k, v]) => `${k}: ${v};`).join('\n')}
    }
    `.replace(/\s*\n+\s*/g, '')
    }
  })
})
