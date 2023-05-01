import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  activate: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nexvelt/ui-nuxt',
    configKey: 'nexveltUi',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    activate: true,
  },
  setup() {
    // options, nuxt

    const { resolve } = createResolver(import.meta.url)

    // add composables
    addImportsDir(resolve('runtime/composables/'))

    //
  },
})
