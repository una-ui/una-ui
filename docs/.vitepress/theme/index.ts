// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import Theme from 'vitepress/theme'

import 'virtual:uno.css'
import '@nexvelt/ui-preset/style.css'
import '@unocss/reset/tailwind.css'

import './rainbow.css'
import './vars.css'
import './override.css'

import TeamMember from './components/TeamMember.vue'

let teamMemberStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
  enhanceApp({ router }) {
    if (typeof window === 'undefined')
      return

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
      animation: rainbow 12s linear infinite;
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
