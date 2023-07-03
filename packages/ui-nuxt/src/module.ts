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
    // nuxt.options.build.transpile.push(runtimeDir) // explain this line

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

    // css
    nuxt.options.css.push('@nexvelt/ui-preset/style.css')
    nuxt.options.css.push('@unocss/reset/tailwind-compat.css')

    // insert tailwind compat css before meta tag in head

    // modules
    await installModule('@unocss/nuxt', {
      preflight: false,
      configFile: resolve(__dirname, '../unocss.config.ts'),
    })
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    // await installModule('@vueuse/nuxt')

    // composables
  },
})
