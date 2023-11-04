import { watchEffect } from 'vue'
import useUnaSettings from '../composables/una-settings'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { defineNuxtPlugin } from '#app'

let unaUIStyle: HTMLStyleElement

export default defineNuxtPlugin(() => {
  const { settings } = useUnaSettings()

  unaUIStyle = document.createElement('style')
  unaUIStyle.id = 'una-ui-colors'
  document.head.appendChild(unaUIStyle)

  // remove mock attribute from html tag
  const html = document.documentElement
  html.removeAttribute('style')

  watchEffect(() => {
    const styleTag = document.getElementById('una-ui-colors')
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
