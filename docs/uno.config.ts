import { extendUnocssOptions } from '../packages/ui-nuxt/src/unocss'

// for IDE support
export default {
  ...extendUnocssOptions(),
  configDeps: [
    '../packages/ui-nuxt/src/unocss.ts',
    '../packages/ui-preset/src/index.ts',
    '../packages/ui-preset/src/_shortcuts/button.ts',
    '../packages/ui-preset/src/_shortcuts/input.ts',
  ],
}
