import type { UnaSettings } from './runtime/types'
import { addComponentsDir, addImportsDir, addPlugin, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import extendUnocssOptions from './una.config'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    una?: Partial<Omit<UnaSettings, 'primaryColors' | 'grayColors'>>
  }
  interface AppConfig {
    una: Omit<UnaSettings, 'primaryColors' | 'grayColors'>
  }
}

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'N'
   */
  prefix?: string

  /**
   * @default true
   * @description Enable themeable ui
   *
   */
  themeable?: boolean

  /**
   * @default true
   * @description Register components globally
   */
  global?: boolean

  /**
   * @default false
   */
  dev: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'una',
    version,
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    prefix: 'N',
    themeable: true,
    global: true,
    dev: false,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // css
    nuxt.options.css.unshift('@una-ui/preset/una.css')

    nuxt.options.appConfig.una = {
      ...{
        primary: 'yellow',
        gray: 'stone',
        radius: 0.5,
        fontSize: 16,
      },
      ...(nuxt.options.appConfig.una || {}),
    }

    // transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('@headlessui/vue')

    // components
    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'tabs'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'card'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'dropdown-menu'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'popover'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'collapsible'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'tooltip'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'pagination'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/elements', 'dialog'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'forms'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/forms', 'select'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/forms', 'radio-group'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'misc'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'navigation'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/data', 'table'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/navigation', 'breadcrumb'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'overlays'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/overlays', 'toast'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'sheet'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'sidebar'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'scroll-area'),
      prefix: options.prefix,
      global: options.global,
      watch: options.dev,
      priority: 10,
    })

    // plugins
    if (options.themeable) {
      addPlugin(resolve(runtimeDir, 'plugins', 'theme.client'))
      addPlugin(resolve(runtimeDir, 'plugins', 'theme.server'))
    }

    // utils
    addImportsDir(resolve(runtimeDir, 'utils', 'cn'))

    // modules
    await installModule('@unocss/nuxt', extendUnocssOptions(nuxt.options.unocss))
    await installModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })
    await installModule('@vueuse/nuxt')
    await installModule('reka-ui/nuxt', {
      prefix: options.prefix,
    })
    await installModule('@vee-validate/nuxt', {
      componentNames: {
        Form: `${options.prefix}Form`,
        // Field: `${options.prefix}FormField`,
        FieldArray: `${options.prefix}FormFieldArray`,
        ErrorMessage: `${options.prefix}FormErrorMessage`,
      },
    })

    // composables
    addImportsDir(resolve(runtimeDir, 'composables'))
  },
})
