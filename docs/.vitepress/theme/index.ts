import type { App } from 'vue'
import { h, watchEffect } from 'vue'
import Theme from 'vitepress/theme'
import { useStorage } from '@vueuse/core'
import type { ThemeColors } from '../../types'

import 'uno.css'
import './styles/index.css'

import TeamMember from './components/TeamMember.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppExemplar from './components/AppExemplar.vue'
import SlotsTable from './components/SlotsTable.vue'

// import AppMisc from './components/AppMisc.vue'

const NVComponents = import.meta.glob('../../../packages/ui-nuxt/src/runtime/components/forms/*.vue', { eager: true })
const NVElements = import.meta.glob('../../../packages/ui-nuxt/src/runtime/components/elements/*.vue', { eager: true })
const ExampleVueInputComponents = import.meta.glob('../../components/examples/vue/input/*.vue', { eager: true })
const ExampleVueIndexComponents = import.meta.glob('../../components/examples/vue/index/*.vue', { eager: true })

let nexveltUIStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
      'nav-bar-content-after': () => h(ThemeSwitcher),
      // 'aside-bottom': () => h(AppMisc),
    })
  },

  // this hook is called before the root Vue app is mounted to the DOM.
  enhanceApp({ app }: { app: App }) {
    // register components
    app.component('AppExemplar', AppExemplar)
    app.component('SlotsTable', SlotsTable)

    // register input vue components from examples
    for (const path in ExampleVueInputComponents) {
      const mod = ExampleVueInputComponents[path] as any
      const name = path.match(/\/([^/]+)\.vue$/)![1]
      app.component(`ExampleVueInput${name}`, mod.default)
    }

    // register index vue components from examples
    for (const path in ExampleVueIndexComponents) {
      const mod = ExampleVueIndexComponents[path] as any
      const name = path.match(/\/([^/]+)\.vue$/)![1]
      app.component(`ExampleVueIndex${name}`, mod.default)
    }

    // register components from @nexvelt/ui-nuxt
    for (const path in NVComponents) {
      const mod = NVComponents[path] as any
      const name = path.match(/\/([^/]+)\.vue$/)![1]
      app.component(`NV${name}`, mod.default)
    }
    for (const path in NVElements) {
      const mod = NVElements[path] as any
      const name = path.match(/\/([^/]+)\.vue$/)![1]
      app.component(`NV${name}`, mod.default)
    }

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
