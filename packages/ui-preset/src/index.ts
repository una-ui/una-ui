import type { Preset } from 'unocss'
import type { nexveltUIOptions } from './types'
import { shortcuts } from './shortcuts'

// import { theme } from './theme'

export default function presetNexvelt(options: nexveltUIOptions = {
  colorThemes: [
    'blue',
    'green',
  ],
}): Preset {
  return {
    name: '@nexvelt/ui-preset',
    options,
    safelist: [
      // text
      'text-info',
      'text-warning',
      'text-success',
      'text-error',

      // input
      'input-info-icon',
      'input-warning-icon',
      'input-success-icon',
      'input-error-icon',
      'input-loading-icon',

      'input-status-info',
      'input-status-error',
      'input-status-success',
      'input-status-warning',

      'input-solid-info',
      'input-solid-error',
      'input-solid-success',
      'input-solid-warning',
    ],
    shortcuts,
    // theme,
    theme: {
      colors: {
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
        error: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',
          600: '#e02424',
          700: '#c81e1e',
          800: '#9b1c1c',
          900: '#771d1d',
          950: '#3f0708',
        },
        success: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          950: '#1a2e05',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  }
}
