import type { UnaSettings } from './runtime/types'
import { addComponentsDir, addImportsDir, addPlugin, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import extendUnocssOptions from './una.config'

export type * from './runtime/types'

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

    nuxt.options.alias['#una'] = resolve('./runtime')

    nuxt.options.appConfig.una = {
      ...{
        primary: 'yellow',
        gray: 'stone',
        radius: 0.5,
        fontSize: 16,
      },
      ...(nuxt.options.appConfig.una || {}),
    }

    // Isolate root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    // transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // modules
    await installModule('@unocss/nuxt', extendUnocssOptions(nuxt.options.unocss))
    await installModule('@nuxtjs/color-mode', {
      classSuffix: '',
      disableTransition: true,
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

    // components
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
      priority: 10,
    })

    // composables
    addImportsDir(resolve(runtimeDir, 'composables'))

    // plugins
    if (options.themeable) {
      addPlugin(resolve(runtimeDir, 'plugins', 'theme.client'))
      addPlugin(resolve(runtimeDir, 'plugins', 'theme.server'))
    }

    // utils
    addImportsDir(resolve(runtimeDir, 'utils', 'cn'))
  },
})
