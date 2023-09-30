import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetUna from './packages/preset/src/index'

export default {
  preflight: false,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUna(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  configDeps: [
    '../packages/preset/src/_shortcuts/link.ts',
    '../packages/preset/src/_shortcuts/nav-link-group.ts',
    '../packages/preset/src/_shortcuts/nav-link.ts',
    '../packages/preset/src/_shortcuts/kbd.ts',
    '../packages/preset/src/_shortcuts/indicator.ts',
    '../packages/preset/src/_shortcuts/avatar-group.ts',
    '../packages/preset/src/_shortcuts/avatar.ts',
    '../packages/preset/src/_shortcuts/badge.ts',
    '../packages/preset/src/_shortcuts/alert.ts',
    '../packages/preset/src/_shortcuts/input.ts',
    '../packages/preset/src/_shortcuts/button.ts',
    '../packages/preset/src/_shortcuts/form-group.ts',
    '../packages/preset/src/_shortcuts/accordion.ts',
    '../packages/preset/src/_shortcuts/switch.ts',
    '../packages/preset/src/_shortcuts/general.ts',
    '../packages/preset/src/_shortcuts/index.ts',

    '../packages/preset/src/index.ts',
    '../packages/nuxt/src/unocss.ts',
  ],
}
