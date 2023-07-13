import { fileURLToPath } from 'node:url'
import { addComponentsDir, addPlugin, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'

import { extendUnocssOptions } from './unocss'

function rPath(p: string) {
  return fileURLToPath(new URL(p, import.meta.url).toString())
}
// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'N'
   */
  prefix?: string

  /**
   * @default true
   * @description Register components globally
   */
  global?: boolean

  /**
   * @default '@nexvelt/ui-preset'
   * @description Path to preset
   * @example
   */
  preset?: string

  /**
   * @default false
   */
  dev: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'nexveltUI',
    version,
    compatibility: {
      nuxt: '^3.0.0-rc.8',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'N',
    preset: rPath('./preset'),
    global: true,
    dev: false,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // css
    nuxt.options.css.unshift('@nexvelt/ui-preset/style.css')
    nuxt.options.css.unshift('@unocss/reset/tailwind-compat.css')

    // transpile
    const runtimeDir = resolve('./runtime')
    // nuxt.options.build.transpile.push(runtimeDir) // enable this later

    // components
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
      global: options.global,
      watch: nuxt.options.dev,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'forms'),
      prefix: options.prefix,
      global: options.global,
      watch: nuxt.options.dev,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'misc'),
      prefix: options.prefix,
      global: options.global,
      watch: nuxt.options.dev,
    })

    // plugins
    addPlugin(resolve(runtimeDir, 'plugins', 'setup-theme.client.ts'))
    addPlugin(resolve(runtimeDir, 'plugins', 'setup-theme.server.ts'))

    // @ts-expect-error - module options
    nuxt.options.vueuse = nuxt.options.vueuse || {}

    if (!options.dev)
      nuxt.options.unocss = extendUnocssOptions(nuxt.options.unocss)

    // modules
    await installModule('@unocss/nuxt')
    await installModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })
    await installModule('@vueuse/nuxt')

    // composables
  },
})
