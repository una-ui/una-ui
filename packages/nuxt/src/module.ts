import type { ModuleDependencyMeta } from '@nuxt/schema'
import type { UnaSettings } from './runtime/types'
import { addComponentsDir, addImportsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import { unaConfig } from './una.config'

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
      nuxt: '^3.19.0 || >=4.1.0',
    },
  },
  defaults: {
    prefix: 'N',
    themeable: true,
    global: true,
    dev: false,
  },
  moduleDependencies: {
    '@unocss/nuxt': <ModuleDependencyMeta<import('@unocss/nuxt').UnocssNuxtOptions>>{
      version: '>=66.5.0',
      defaults: unaConfig,
    },
    '@nuxtjs/color-mode': <ModuleDependencyMeta<import('@nuxtjs/color-mode').ModuleOptions>>{
      overrides: {
        classSuffix: '',
      },
      defaults: {
        disableTransition: true,
      },
    },
  },
  async setup(options, nuxt) {
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
