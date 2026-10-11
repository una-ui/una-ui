import type { Component, DefineComponent, Plugin, Ref } from 'vue'
import type { UnaConfig } from './types'
import defu from 'defu'
import { shallowRef } from 'vue'
import { UNA_SETTINGS_KEY } from './utils/injectionKeys'

function useCookie<T>(_name: string, opts: { default: () => T }): Ref<T> {
  return shallowRef<T>(opts.default())
}

type Partials<T> = T extends
  | ((...args: any[]) => any)
  | unknown[]
  | Component
  | DefineComponent
  ? T
  : T extends object
    ? { [K in keyof T]?: Partials<T[K]> }
    : T

const plugin: Plugin<Partials<UnaConfig>> = {
  install(app, options) {
    // const RouterLink = resolveComponent('RouterLink')

    // `fontSizes` presets are intentionally omitted from these defaults: defu (and the
    // app.config.ts merge via defuFn) concatenates arrays, so a baked-in default would be
    // appended to — never replaced by — a user list. The ThemeSwitcher falls back to
    // DEFAULT_FONT_SIZE_PRESETS when `una.fontSizes` is unset, keeping user overrides clean.
    const opts = defu(options, {
      primary: 'yellow',
      gray: 'stone',
      radius: 0.625,
      fontSize: 16,
      theme: false,
      themes: [],
      sidebar: {
        cookieName: 'sidebar:state',
        cookieMaxAge: 60 * 60 * 24 * 7,
        width: '16rem',
        widthMobile: '18rem',
        widthIcon: '3rem',
        keyboardShortcut: 'b',
      },
      components: {
        RouterLink: 'RouterLink',
        useCookie,
      },
    } satisfies UnaConfig)

    app.provide(UNA_SETTINGS_KEY, opts)
  },
}

export default plugin
