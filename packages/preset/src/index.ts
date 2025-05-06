import type { Preset } from 'unocss'
import type { unaUIOptions } from './types'
import { colors } from '@unocss/preset-wind4/colors'
import { fonts } from '@unocss/preset-wind4/rules'
import { handler as h } from '@unocss/preset-wind4/utils'
import { shortcuts } from './shortcuts'

export default function presetUna(options: unaUIOptions = {
  // TODO: add options
}): Preset {
  return {
    name: '@una-ui/preset',
    options,
    shortcuts,
    theme: {
      // container: {
      //   center: true,
      //   padding: '2rem',
      //   maxWidth: {
      //     '2xl': '1400px',
      //   },
      // },
      colors: {
        // background: 'var(--una-background)',
        // foreground: 'var(--una-foreground)',
        // brand: 'var(--una-brand)',
        // input: 'var(--una-input)',
        primary: {
          DEFAULT: 'var(--una-primary)',
          active: 'var(--una-primary-active)',
          50: 'var(--una-primary-50)',
          100: 'var(--una-primary-100)',
          200: 'var(--una-primary-200)',
          300: 'var(--una-primary-300)',
          400: 'var(--una-primary-400)',
          500: 'var(--una-primary-500)',
          600: 'var(--una-primary-600)',
          700: 'var(--una-primary-700)',
          800: 'var(--una-primary-800)',
          900: 'var(--una-primary-900)',
          950: 'var(--una-primary-950)',
        },
        gray: {
          DEFAULT: 'var(--una-gray)',
          active: 'var(--una-gray-active)',
          50: 'var(--una-gray-50)',
          100: 'var(--una-gray-100)',
          200: 'var(--una-gray-200)',
          300: 'var(--una-gray-300)',
          400: 'var(--una-gray-400)',
          500: 'var(--una-gray-500)',
          600: 'var(--una-gray-600)',
          700: 'var(--una-gray-700)',
          800: 'var(--una-gray-800)',
          900: 'var(--una-gray-900)',
          950: 'var(--una-gray-950)',
        },
        // sidebar: {
        //   DEFAULT: 'var(--una-sidebar)',
        //   foreground: 'var(--una-sidebar-foreground)',
        //   primary: 'var(--una-sidebar-primary)',
        //   primaryForeground: 'var(--una-sidebar-primary-foreground)',
        //   accent: 'var(--una-sidebar-accent)',
        //   accentForeground: 'var(--una-sidebar-accent-foreground)',
        //   border: 'var(--una-sidebar-border)',
        //   ring: 'var(--una-sidebar-ring)',
        // },
        error: colors.red,
        success: colors.green,
        warning: colors.amber,
        info: colors.blue,
      },
      // radius: {
      //   xl: 'calc(var(--una-radius) + 4px)',
      //   lg: 'var(--una-radius)',
      //   md: 'calc(var(--una-radius) - 2px)',
      //   sm: 'calc(var(--una-radius) - 4px)',
      //   xs: 'calc(var(--una-radius) - 6px)',
      // },
      // animation: {
      //   keyframes: {
      //     'collapsible-down': '{from{height: 0}to{height:var(--reka-collapsible-content-height)}}',
      //     'collapsible-up': '{from{height:var(--reka-collapsible-content-height)}to{height: 0}}',
      //     'fadeIn': '{from{ opacity: 0 }to{ opacity: 1 }}',
      //     'fadeOut': '{from{ opacity: 1 }to{ opacity: 0 }}',
      //   },
      //   durations: {
      //     'collapsible-down': '0.2s',
      //     'collapsible-up': '0.2s',
      //     'fadeIn': '0.2s',
      //     'fadeOut': '0.2s',
      //   },
      //   timingFns: {
      //     'collapsible-down': 'ease-in-out',
      //     'collapsible-up': 'ease-in-out',
      //     'fadeIn': 'ease-out',
      //     'fadeOut': 'ease-out',
      //   },
      // },
    },
    rules: [
      // [/^n-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
      //   const color = parseColor(body, theme)
      //   if ((color?.cssColor?.type === 'hsl' || color?.cssColor?.type === 'hsla') && color.cssColor.components) {
      //     return {
      //       '--una-brand': `${color.cssColor.components.join(',')}`,
      //     }
      //   }
      // }],
      [/^size-(.*)$/, fonts[1][1] as any],
      [/^square-(min-|max-)?(.+)$/, ([, _m, s]) => ({
        width: h.bracket.cssvar.global.auto.fraction.rem(s),
        height: h.bracket.cssvar.global.auto.fraction.rem(s),
      })],
      ['n-disabled', {
        'opacity': 0.5,
        'pointer-events': 'none',
      }],
    ],
    variants: [
      (input: string) => {
        const prefix = 'n-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        const prefix = 'n-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
    ],
    preflights: [
      {
        getCSS: () => `
          *:focus-visible {
            outline: 2px solid rgb(var(--una-primary)); /* 2 */
            border-radius: 0.25rem; /* 1 */
            outline-offset: 0.10rem; /* 1 */
          }
        `,
      },
    ],
  }
}
