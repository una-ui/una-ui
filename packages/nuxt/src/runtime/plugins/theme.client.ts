import { computed, watchEffect } from 'vue'
import { useUnaSettings } from '../composables/useUnaSettings'

// @ts-expect-error tsconfig
import { defineNuxtPlugin } from '#app'

let unaUIStyle: HTMLStyleElement

export default defineNuxtPlugin(() => {
  const { settings } = useUnaSettings()

  unaUIStyle = document.createElement('style')
  unaUIStyle.id = 'una-ui-theme'
  document.head.appendChild(unaUIStyle)

  // remove mock attribute from html tag
  const html = document.documentElement
  html.removeAttribute('style')

  // created a computed property for styles
  const computedStyles = computed(() => {
    return `
    :root {
        ${Object.entries(settings.value.primaryColors).map(([k, v]) => `${k}: ${v};`).join('\n')}
        ${Object.entries(settings.value.grayColors).map(([k, v]) => `${k}: ${v};`).join('\n')}
        --una-radius: ${settings.value.radius}rem;
        --una-font-size: ${settings.value.fontSize}px;
    }
    `.replace(/\s*\n\s*/g, '')
  })

  watchEffect(() => {
    const styleTag = document.getElementById('una-ui-theme')
    if (styleTag)
      styleTag.innerHTML = computedStyles.value // Use computed styles
  })
})
