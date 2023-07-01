// https://vitepress.dev/guide/custom-theme
import { h, watch, watchEffect } from 'vue'
import Theme from 'vitepress/theme'
import { useStorage } from '@vueuse/core'
import type { ThemeColors } from '../../types'

import 'virtual:uno.css'
import '@nexvelt/ui-preset/style.css'
import '@unocss/reset/tailwind-compat.css'

// import './rainbow.css'
import './flow.css'
import './vars.css'
import './override.css'

import TeamMember from './components/TeamMember.vue'

let teamMemberStyle: HTMLStyleElement | undefined
let nexveltUIStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
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

    // update rainbow animation on route change
    watch(
      () => router.route.data.relativePath,
      () => updateteamMemberStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

// Speed up the rainbow animation on home page (default is 10s)
function updateteamMemberStyle(value: boolean) {
  if (value) {
    if (teamMemberStyle)
      return

    teamMemberStyle = document.createElement('style')
    teamMemberStyle.innerHTML = `
    :root {
      animation: rainbow 5s linear infinite;
    }`
    document.body.appendChild(teamMemberStyle)
  }
  else {
    if (!teamMemberStyle)
      return

    teamMemberStyle.remove()
    teamMemberStyle = undefined
  }
}
