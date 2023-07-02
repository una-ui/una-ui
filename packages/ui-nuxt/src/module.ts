import { fileURLToPath } from 'node:url'
import { addComponentsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import defu from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {}

function rPath(p: string) {
  return fileURLToPath(new URL(p, import.meta.url).toString())
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nexvelt/ui-nuxt',
    configKey: 'nexveltUI',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    // Standard components
    addComponentsDir({ path: rPath('./components') })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))

    // @ts-expect-error - module options
    nuxt.options.vueuse = nuxt.options.vueuse || {}
    // @ts-expect-error - module options
    nuxt.options.colorMode = defu(nuxt.options.colorMode, { classSuffix: '' })

    const resolver = createResolver(import.meta.url)
    await installModule(await resolver.resolvePath('@unocss/nuxt'))
    await installModule(await resolver.resolvePath('@vueuse/nuxt'))
    await installModule(await resolver.resolvePath('@nuxtjs/color-mode'))
  },
})
