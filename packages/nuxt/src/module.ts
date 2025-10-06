import type { UnaSettings } from './runtime/types'
import { addComponentsDir, addImportsDir, addPlugin, addServerHandler, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import { grayThemes, primaryThemes } from './runtime/utils/colors'
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
    nuxt.options.css.unshift(
      import.meta.resolve('@unocss/reset/tailwind.css'),
      import.meta.resolve('@una-ui/preset/una.css'),
    )

    nuxt.options.alias['#una'] = resolve('./runtime')

    nuxt.options.appConfig.una = {
      primary: 'yellow',
      gray: 'stone',
      radius: 0.5,
      fontSize: 16,
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
      addServerHandler({ route: '/_una/colors/:prefix/:color', method: 'get', handler: resolve(runtimeDir, 'server', 'colors') })
      nuxt.hook('prerender:routes', (ctx) => {
        for (const [color] of primaryThemes) {
          ctx.routes.add(`/_una/colors/primary/${color}.json`)
        }
        for (const [color] of grayThemes) {
          ctx.routes.add(`/_una/colors/gray/${color}.json`)
        }
      })
    }

    // utils
    addImportsDir(resolve(runtimeDir, 'utils', 'cn'))
  },
})
