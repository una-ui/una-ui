import type { UnaSettings } from './runtime/types'
import { addComponentsDir, addImportsDir, addPlugin, addTemplate, createResolver, defineNuxtModule, installModule, useLogger } from '@nuxt/kit'
import { name, version } from '../package.json'
import extendUnocssOptions from './una.config'

export type * from './runtime/types'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    una?: Partial<UnaSettings>
  }
  interface AppConfig {
    una: UnaSettings
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
  themeable?: boolean | {
    storage?: {
      /**
       * The name of the storage object to use
       *
       * @default 'una-settings'
       */
      name?: string
      /**
       * The type of storage to use.
       *
       * - `localStorage`: the default, compatible with static generation. Saves the
       * current theme color values in the browser storage in order to prevent flashing
       * the default theme during reloads. A script is injected in the head of the document
       * to read the values from localStorage and apply them before the app is loaded.
       *
       * - `cookie`: themes can be read by the server and inlines the current theme values
       * in the HTML. Not compatible with static generation.
       *
       * @default 'localStorage'
       */
      type?: 'localStorage' | 'cookie'
    }
  }

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
    const logger = useLogger('una')
    const { resolve } = createResolver(import.meta.url)

    // css
    nuxt.options.css.unshift(
      import.meta.resolve('@unocss/reset/tailwind.css'),
      import.meta.resolve('@una-ui/preset/una.css'),
    )

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
    await installModule(import.meta.resolve('@unocss/nuxt'), extendUnocssOptions(nuxt.options.unocss))
    await installModule(import.meta.resolve('@nuxtjs/color-mode'), {
      classSuffix: '',
      disableTransition: true,
    })
    await installModule(import.meta.resolve('@vueuse/nuxt'))
    await installModule(import.meta.resolve('reka-ui/nuxt'), {
      prefix: options.prefix,
    })
    await installModule(import.meta.resolve('@vee-validate/nuxt'), {
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

      const { storage } = typeof options.themeable === 'boolean'
        ? {}
        : options.themeable

      if (storage?.type && !['cookie', 'localStorage'].includes(storage.type)) {
        logger.warn(`[una] The theming storage type '${storage?.type}' is not supported. Falling back to 'localStorage'.`)
        storage.type = 'localStorage'
      }

      if ((!nuxt.options.ssr || nuxt.options._generate) && storage?.type === 'cookie') {
        logger.warn('[una] Using localStorage for theming because no server runtime is targetted')
        storage.type = 'localStorage'
      }

      addTemplate({
        filename: 'una-theme.config.mjs',
        getContents: () => `\
export const themeStorageType = ${JSON.stringify(storage?.type || 'localStorage')}
export const themeStorageName = ${JSON.stringify(storage?.name || 'una-settings')}
`,
      })
      addTemplate({
        filename: 'una-theme.config.d.ts',
        getContents: () => `\
export declare const themeStorageType: 'localStorage' | 'cookie' 
export declare const themeStorageName: string
`,
      })
    }

    // utils
    addImportsDir(resolve(runtimeDir, 'utils', 'cn'))
  },
})
