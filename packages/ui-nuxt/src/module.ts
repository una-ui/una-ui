import { addComponentsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nexvelt/ui-nuxt',
    configKey: 'nexveltUI',
    version: '0.0.0', // TODO: get version from package.json
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

    // transpile and alias
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.css.push('@unocss/reset/tailwind-compat.css')
    nuxt.options.css.push('@nexvelt/ui-preset/style.css')

    // nuxt.options.css.unshift('@unocss/reset/tailwind-compat.css')
    // nuxt.options.css.unshift('@nexvelt/ui-preset/style.css')

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
