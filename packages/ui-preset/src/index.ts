import type { Preset } from 'unocss'
import type { RuleContext } from '@unocss/core'
import { fonts } from '@unocss/preset-mini/rules'
import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import { theme as unoTheme } from '@unocss/preset-mini'
import { mergeDeep } from 'unocss'
import { colors } from '@unocss/preset-mini/colors'
import type { nexveltUIOptions } from './types'
import { shortcuts } from './shortcuts'

export default function presetNexvelt(options: nexveltUIOptions = {
}): Preset {
  return {
    name: '@nexvelt/ui-preset',
    options,
    shortcuts,
    theme: mergeDeep<Theme>(unoTheme, {
      colors: {
        brand: 'rgba(var(--una-c-brand),%alpha)',
        primary: {
          DEFAULT: 'rgba(var(--c-primary) / <alpha-value>)',
          active: 'rgba(var(--c-primary-active) / <alpha-value>)',
          50: 'rgba(var(--nv-primary-50) / <alpha-value>)',
          100: 'rgba(var(--nv-primary-100) / <alpha-value>)',
          200: 'rgba(var(--nv-primary-200) / <alpha-value>)',
          300: 'rgba(var(--nv-primary-300) / <alpha-value>)',
          400: 'rgba(var(--nv-primary-400) / <alpha-value>)',
          500: 'rgba(var(--nv-primary-500) / <alpha-value>)',
          600: 'rgba(var(--nv-primary-600) / <alpha-value>)',
          700: 'rgba(var(--nv-primary-700) / <alpha-value>)',
          800: 'rgba(var(--nv-primary-800) / <alpha-value>)',
          900: 'rgba(var(--nv-primary-900) / <alpha-value>)',
          950: 'rgba(var(--nv-primary-950) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgba(var(--c-gray) / <alpha-value>)',
          active: 'rgba(var(--c-gray-active) / <alpha-value>)',
          50: 'rgba(var(--nv-gray-50) / <alpha-value>)',
          100: 'rgba(var(--nv-gray-100) / <alpha-value>)',
          200: 'rgba(var(--nv-gray-200) / <alpha-value>)',
          300: 'rgba(var(--nv-gray-300) / <alpha-value>)',
          400: 'rgba(var(--nv-gray-400) / <alpha-value>)',
          500: 'rgba(var(--nv-gray-500) / <alpha-value>)',
          600: 'rgba(var(--nv-gray-600) / <alpha-value>)',
          700: 'rgba(var(--nv-gray-700) / <alpha-value>)',
          800: 'rgba(var(--nv-gray-800) / <alpha-value>)',
          900: 'rgba(var(--nv-gray-900) / <alpha-value>)',
          950: 'rgba(var(--nv-gray-950) / <alpha-value>)',
        },
        error: colors.red,
        success: colors.lime,
        warning: colors.amber,
        info: colors.blue,
      },
    }),
    rules: [
      [/^n-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components) {
          return {
            '--una-c-brand': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
      // TODO: optimize this
      [/^switch-(.*)$/, fonts[1][1] as any],
      [/^size-(.*)$/, fonts[1][1] as any],
      ['n-disabled', {
        'opacity': 0.7,
        'pointer-events': 'none',
      }],
    ],
    preflights: [
      {
        getCSS: () => `
        *:focus-visible {
          outline: 2px solid rgb(var(--c-primary)); /* 2 */
          border-radius: 0.25rem; /* 1 */
          outline-offset: 0.10rem; /* 1 */
        }

        * {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        `,
      },
    ],
  }
}
