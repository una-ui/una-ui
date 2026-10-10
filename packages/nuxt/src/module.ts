import type { UnaConfig } from '@una-ui/components/types'
import { addComponentsDir, addImportsDir, addPlugin, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import extendUnocssOptions from './una.config'

export type * from '@una-ui/components/types'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    una?: Partial<UnaConfig>
  }
  interface AppConfig {
    una: UnaConfig
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
    const { resolve: selfResolve } = createResolver(import.meta.url)
    const { resolve: componentsResolve } = createResolver(import.meta.resolve('@una-ui/components'))

    // css
    nuxt.options.css.unshift(
      import.meta.resolve('@unocss/reset/tailwind.css'),
      import.meta.resolve('@una-ui/preset/una.css'),
      // required — vue-sonner's JS entry does not import its own stylesheet
      import.meta.resolve('vue-sonner/style.css'),
    )

    nuxt.options.alias['#una'] = componentsResolve('./runtime')

    // Isolate root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

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

    for (const resolve of [selfResolve, componentsResolve]) {
      // transpile runtime
      nuxt.options.build.transpile.push(resolve('./runtime'))

      // components
      addComponentsDir({
        path: resolve('./runtime/components'),
        prefix: options.prefix,
        pathPrefix: false,
        priority: 10,
        // collocated composable/engine modules (message-scroller/useMessageScroller.ts)
        // have no default export and must not be scanned as components
        ignore: ['**/use*.ts'],
      })
      // composables
      addImportsDir(resolve('./runtime/composables'))
    }

    // plugins
    if (options.themeable) {
      addPlugin(selfResolve('./runtime/plugins/theme.client'))
      addPlugin(selfResolve('./runtime/plugins/theme.server'))
    }
    // settings plugin must go last because addPlugin defaults to prepend
    addPlugin(selfResolve('./runtime/plugins/settings'))

    // utils
    addImportsDir(componentsResolve('./runtime/utils/cn'))
  },
})
