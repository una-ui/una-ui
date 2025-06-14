import type { Theme } from '@unocss/preset-mini'
import type { Preset, RuleContext } from 'unocss'
import type { unaUIOptions } from './types'
import { fonts } from '@unocss/preset-mini/rules'
import { handler as h, parseColor } from '@unocss/preset-mini/utils'
import { colors } from '@unocss/preset-wind4/colors'
import { shortcuts } from './shortcuts'

export default function presetUna(options: unaUIOptions = {
  // TODO: add options
}): Preset<Theme> {
  return {
    name: '@una-ui/preset',
    options,
    shortcuts,
    separators: [':'],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        maxWidth: {
          '2xl': '1400px',
        },
      },
      colors: {
        ...colors,
        brand: 'oklch(var(--una-brand) / <alpha-value>)',
        background: 'oklch(var(--una-background) / <alpha-value>)',
        foreground: 'oklch(var(--una-foreground) / <alpha-value>)',
        muted: 'oklch(var(--una-muted) / <alpha-value>)',
        mutedForeground: 'oklch(var(--una-muted-foreground) / <alpha-value>)',
        accent: 'oklch(var(--una-accent) / <alpha-value>)',
        accentForeground: 'oklch(var(--una-accent-foreground) / <alpha-value>)',
        secondary: 'oklch(var(--una-secondary) / <alpha-value>)',
        secondaryForeground: 'oklch(var(--una-secondary-foreground) / <alpha-value>)',
        popover: 'oklch(var(--una-popover) / <alpha-value>)',
        popoverForeground: 'oklch(var(--una-popover-foreground) / <alpha-value>)',
        selection: 'oklch(var(--una-selection) / <alpha-value>)',
        selectionForeground: 'oklch(var(--una-selection-foreground) / <alpha-value>)',
        input: 'oklch(var(--una-input) / <alpha-value>)',
        border: 'oklch(var(--una-border) / <alpha-value>)',
        ring: 'oklch(var(--una-ring) / <alpha-value>)',
        primary: {
          DEFAULT: 'oklch(var(--una-primary) / <alpha-value>)',
          active: 'oklch(var(--una-primary-active) / <alpha-value>)',
          50: 'oklch(var(--una-primary-50) / <alpha-value>)',
          100: 'oklch(var(--una-primary-100) / <alpha-value>)',
          200: 'oklch(var(--una-primary-200) / <alpha-value>)',
          300: 'oklch(var(--una-primary-300) / <alpha-value>)',
          400: 'oklch(var(--una-primary-400) / <alpha-value>)',
          500: 'oklch(var(--una-primary-500) / <alpha-value>)',
          600: 'oklch(var(--una-primary-600) / <alpha-value>)',
          700: 'oklch(var(--una-primary-700) / <alpha-value>)',
          800: 'oklch(var(--una-primary-800) / <alpha-value>)',
          900: 'oklch(var(--una-primary-900) / <alpha-value>)',
          950: 'oklch(var(--una-primary-950) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'oklch(var(--una-gray) / <alpha-value>)',
          active: 'oklch(var(--una-gray-active) / <alpha-value>)',
          50: 'oklch(var(--una-gray-50) / <alpha-value>)',
          100: 'oklch(var(--una-gray-100) / <alpha-value>)',
          200: 'oklch(var(--una-gray-200) / <alpha-value>)',
          300: 'oklch(var(--una-gray-300) / <alpha-value>)',
          400: 'oklch(var(--una-gray-400) / <alpha-value>)',
          500: 'oklch(var(--una-gray-500) / <alpha-value>)',
          600: 'oklch(var(--una-gray-600) / <alpha-value>)',
          700: 'oklch(var(--una-gray-700) / <alpha-value>)',
          800: 'oklch(var(--una-gray-800) / <alpha-value>)',
          900: 'oklch(var(--una-gray-900) / <alpha-value>)',
          950: 'oklch(var(--una-gray-950) / <alpha-value>)',
        },
        sidebar: {
          DEFAULT: 'oklch(var(--una-sidebar) / <alpha-value>)',
          foreground: 'oklch(var(--una-sidebar-foreground) / <alpha-value>)',
          primary: 'oklch(var(--una-sidebar-primary) / <alpha-value>)',
          primaryForeground: 'oklch(var(--una-sidebar-primary-foreground) / <alpha-value>)',
          accent: 'oklch(var(--una-sidebar-accent) / <alpha-value>)',
          accentForeground: 'oklch(var(--una-sidebar-accent-foreground) / <alpha-value>)',
          border: 'oklch(var(--una-sidebar-border) / <alpha-value>)',
          ring: 'oklch(var(--una-sidebar-ring) / <alpha-value>)',
        },
        error: colors.red,
        success: colors.green,
        warning: colors.amber,
        info: colors.blue,
      },
      boxShadow: {
        '2xs': '0 1px rgb(0 0 0 / 0.05)',
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      borderRadius: {
        xl: 'calc(var(--una-radius) + 4px)',
        lg: 'var(--una-radius)',
        md: 'calc(var(--una-radius) - 2px)',
        sm: 'calc(var(--una-radius) - 4px)',
        xs: 'calc(var(--una-radius) - 6px)',
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
    },
    rules: [
      [/^n-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if (color?.color && color.cssColor?.components) {
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
        // Support for n-disabled: variants
        const prefix = 'n-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        // Support for n-checked: variants
        const prefix = 'n-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
      (matcher) => {
        // Support for data-[vaul-drawer-direction=*] variants
        const dataVaulRegex = /^group-data-\[vaul-drawer-direction=([\w-]+)\]:/
        const match = matcher.match(dataVaulRegex)

        if (match) {
          return {
            matcher: matcher.slice(match[0].length),
            selector: s => `.group[data-vaul-drawer-direction="${match[1]}"] ${s}`,
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
