import { addComponentsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'NV'
   */
  prefix?: string

  /**
   * @default true
   * @description Register components globally
   */
  global?: boolean

  // add some options here
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
    prefix: 'NV',
    global: true,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // transpile
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // css
    // nuxt.options.css.unshift('@unocss/reset/tailwind-compat.css')
    nuxt.options.css.unshift('@nexvelt/ui-preset/style.css')

    // modules
    await installModule('@unocss/nuxt', {
      preflight: true,
      configFile: resolve(__dirname, '../unocss.config.ts'),
    })
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    // await installModule('@vueuse/nuxt')

    // components
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
      global: options.global,
      watch: false, // nuxt.options.dev
    })

    // composables
  },
})
