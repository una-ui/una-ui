import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import type { Preset } from 'unocss'
import type { unaUIOptions } from './types'
import { theme as unoTheme } from '@unocss/preset-mini'
import { colors } from '@unocss/preset-mini/colors'
import { fonts } from '@unocss/preset-mini/rules'
import { handler as h, parseColor } from '@unocss/preset-mini/utils'
import { mergeDeep } from 'unocss'
import { shortcuts } from './shortcuts'

export default function presetUna(options: unaUIOptions = {
  // TODO: add options
}): Preset {
  return {
    name: '@una-ui/preset',
    options,
    shortcuts,
    theme: mergeDeep<Theme>(unoTheme, {
      container: {
        center: true,
        padding: '2rem',
        maxWidth: {
          '2xl': '1400px',
        },
      },
      colors: {
        background: 'rgba(var(--una-background) / <alpha-value>)',
        foreground: 'rgba(var(--una-foreground) / <alpha-value>)',
        brand: 'rgba(var(--una-brand) / <alpha-value>)',
        input: 'rgba(var(--una-input) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgba(var(--una-primary) / <alpha-value>)',
          active: 'rgba(var(--una-primary-active) / <alpha-value>)',
          50: 'rgba(var(--una-primary-50) / <alpha-value>)',
          100: 'rgba(var(--una-primary-100) / <alpha-value>)',
          200: 'rgba(var(--una-primary-200) / <alpha-value>)',
          300: 'rgba(var(--una-primary-300) / <alpha-value>)',
          400: 'rgba(var(--una-primary-400) / <alpha-value>)',
          500: 'rgba(var(--una-primary-500) / <alpha-value>)',
          600: 'rgba(var(--una-primary-600) / <alpha-value>)',
          700: 'rgba(var(--una-primary-700) / <alpha-value>)',
          800: 'rgba(var(--una-primary-800) / <alpha-value>)',
          900: 'rgba(var(--una-primary-900) / <alpha-value>)',
          950: 'rgba(var(--una-primary-950) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgba(var(--una-gray) / <alpha-value>)',
          active: 'rgba(var(--una-gray-active) / <alpha-value>)',
          50: 'rgba(var(--una-gray-50) / <alpha-value>)',
          100: 'rgba(var(--una-gray-100) / <alpha-value>)',
          200: 'rgba(var(--una-gray-200) / <alpha-value>)',
          300: 'rgba(var(--una-gray-300) / <alpha-value>)',
          400: 'rgba(var(--una-gray-400) / <alpha-value>)',
          500: 'rgba(var(--una-gray-500) / <alpha-value>)',
          600: 'rgba(var(--una-gray-600) / <alpha-value>)',
          700: 'rgba(var(--una-gray-700) / <alpha-value>)',
          800: 'rgba(var(--una-gray-800) / <alpha-value>)',
          900: 'rgba(var(--una-gray-900) / <alpha-value>)',
          950: 'rgba(var(--una-gray-950) / <alpha-value>)',
        },
        sidebar: {
          DEFAULT: 'rgba(var(--una-sidebar) / <alpha-value>)',
          foreground: 'rgba(var(--una-sidebar-foreground) / <alpha-value>)',
          primary: 'rgba(var(--una-sidebar-primary) / <alpha-value>)',
          primaryForeground: 'rgba(var(--una-sidebar-primary-foreground) / <alpha-value>)',
          accent: 'rgba(var(--una-sidebar-accent) / <alpha-value>)',
          accentForeground: 'rgba(var(--una-sidebar-accent-foreground) / <alpha-value>)',
          border: 'rgba(var(--una-sidebar-border) / <alpha-value>)',
          ring: 'rgba(var(--una-sidebar-ring) / <alpha-value>)',
        },
        error: colors.red,
        success: colors.green,
        warning: colors.amber,
        info: colors.blue,
      },
      borderRadius: {
        xl: 'calc(var(--una-radius) + 4px)',
        lg: 'var(--una-radius)',
        md: 'calc(var(--una-radius) - 2px)',
        sm: 'calc(var(--una-radius) - 4px)',
      },
      animation: {
        keyframes: {
          'collapsible-down': '{from{height: 0}to{height:var(--reka-collapsible-content-height)}}',
          'collapsible-up': '{from{height:var(--reka-collapsible-content-height)}to{height: 0}}',
          'fadeIn': '{from{ opacity: 0 }to{ opacity: 1 }}',
          'fadeOut': '{from{ opacity: 1 }to{ opacity: 0 }}',
        },
        durations: {
          'collapsible-down': '0.2s',
          'collapsible-up': '0.2s',
          'fadeIn': '0.2s',
          'fadeOut': '0.2s',
        },
        timingFns: {
          'collapsible-down': 'ease-in-out',
          'collapsible-up': 'ease-in-out',
          'fadeIn': 'ease-out',
          'fadeOut': 'ease-out',
        },
      },
    }),
    rules: [
      [/^n-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components) {
          return {
            '--una-brand': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
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
