import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

import extratorUna from './packages/extractor-vue-script/src/index'
import presetUna from './packages/preset/src/index'
import prefixes from './packages/preset/src/prefixes'

export default defineConfig({
  safelist: [
    'i-radix-icons-github-logo',
    'i-tabler-brand-x',
    'i-tabler-brand-discord-filled',
    'i-heroicons-arrow-up-right',
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1em',
        'width': '1em',
        'vertical-align': 'middle',
      },
    }),
    presetUna(),
    presetAnimations(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
  configDeps: [
    './packages/preset/src/_shortcuts/navigation-menu.ts',
    './packages/preset/src/_shortcuts/sidebar.ts',
    './packages/preset/src/_shortcuts/sheet.ts',
    './packages/preset/src/_shortcuts/toast.ts',
    './packages/preset/src/_shortcuts/form.ts',
    './packages/preset/src/_shortcuts/radio-group.ts',
    './packages/preset/src/_shortcuts/collapsible.ts',
    './packages/preset/src/_shortcuts/calendar.ts',
    './packages/preset/src/_shortcuts/pagination.ts',
    './packages/preset/src/_shortcuts/label.ts',
    './packages/preset/src/_shortcuts/dropdown-menu.ts',
    './packages/preset/src/_shortcuts/breadcrumb.ts',
    './packages/preset/src/_shortcuts/table.ts',
    './packages/preset/src/_shortcuts/card.ts',
    './packages/preset/src/_shortcuts/tabs.ts',
    './packages/preset/src/_shortcuts/separator.ts',
    './packages/preset/src/_shortcuts/select.ts',
    './packages/preset/src/_shortcuts/skeleton.ts',
    './packages/preset/src/_shortcuts/progress.ts',
    './packages/preset/src/_shortcuts/slider.ts',
    './packages/preset/src/_shortcuts/checkbox.ts',
    './packages/preset/src/_shortcuts/link.ts',
    './packages/preset/src/_shortcuts/kbd.ts',
    './packages/preset/src/_shortcuts/indicator.ts',
    './packages/preset/src/_shortcuts/avatar-group.ts',
    './packages/preset/src/_shortcuts/avatar.ts',
    './packages/preset/src/_shortcuts/badge.ts',
    './packages/preset/src/_shortcuts/alert.ts',
    './packages/preset/src/_shortcuts/input.ts',
    './packages/preset/src/_shortcuts/btn.ts',
    './packages/preset/src/_shortcuts/form-group.ts',
    './packages/preset/src/_shortcuts/accordion.ts',
    './packages/preset/src/_shortcuts/switch.ts',
    './packages/preset/src/_shortcuts/dialog.ts',
    './packages/preset/src/_shortcuts/general.ts',
    './packages/preset/src/_shortcuts/index.ts',
    './packages/preset/src/index.ts',
  ],
})
