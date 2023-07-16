import { extendUnocssOptions } from '../packages/ui-nuxt/src/unocss'

// for IDE support
export default {
  ...extendUnocssOptions(),
  configDeps: [
    '../packages/ui-nuxt/src/unocss',
  ],
}
