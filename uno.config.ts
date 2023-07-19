import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from './packages/ui-preset/src/index'

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
    presetNexvelt(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: () => `
        *:focus-visible {
          outline: 2px solid rgb(var(--c-primary-active)); /* 2 */
          border-radius: 0.25rem; /* 1 */
          outline-offset: 0.10rem; /* 1 */
        }

        input:focus, textarea:focus, select:focus{
          /* outline: none; !* 1 *! */
          outline: 2px solid transparent; /* 1 */
        }
      `,
    },
  ],
  configDeps: [
    './packages/ui-preset/src/_shortcuts/button.ts',
    '../packages/ui-preset/src/_shortcuts/button.ts',
    // './packages/ui-preset/src/_shortcuts/general.ts',
    // './packages/ui-preset/src/_shortcuts/index.ts',
    // './packages/ui-preset/src/_shortcuts/input.ts',
  ],
}
