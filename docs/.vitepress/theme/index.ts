// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue'
import Theme from 'vitepress/theme'
import { useStorage } from '@vueuse/core'
import type { ThemeColors } from '../../types'

import 'virtual:uno.css'
import '@nexvelt/ui-preset/style.css'
import '@unocss/reset/tailwind-compat.css'

import './color-transition.css'
import './transition.css'
import './vars.css'
import './override.css'

import TeamMember from './components/TeamMember.vue'

let nexveltUIStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  head: [
    ['script', { 'defer': true, 'data-domain': 'ui.nexvelt.com', 'src': 'https://plausible.io/js/script.js' }],
    ['script', { defer: true, src: '/_vercel/insights/script.js' }],
  ],
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
  // this hook is called before the root Vue app is mounted to the DOM.
  enhanceApp({ router }) {
    if (typeof window === 'undefined')
      return

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
  },
}
