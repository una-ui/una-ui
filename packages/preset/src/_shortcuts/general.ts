import { staticIcons } from './config/icons'

export const staticGeneral = {
  // text-size
  'text-md': 'text-1rem leading-1.5rem',
  'size-md': 'text-md',

  'text-info': 'text-info-600 dark:text-info-500',
  'text-info-active': 'text-info-500 dark:text-info-400',
  'text-error': 'text-error-600 dark:text-error-500',
  'text-error-active': 'text-error-500 dark:text-error-400',
  'text-success': 'text-success-600 dark:text-success-500',
  'text-success-active': 'text-success-500 dark:text-success-400',
  'text-warning': 'text-warning-600 dark:text-warning-500',
  'text-warning-active': 'text-warning-500 dark:text-warning-400',

  // transition
  'transition-base': 'transition-all duration-100 ease-out',

  // overrides
  'square-false': '',
}

export const dynamicGeneral: [RegExp, (params: RegExpExecArray) => string][] = [
  // TODO: una-text-<color><-number><-number>
  // [/^una-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-700 dark:text-${c}-400`],
]

export const general = [
  ...dynamicGeneral,
  staticGeneral,
  staticIcons,
]
