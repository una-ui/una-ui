export const staticGeneral = {
  // text-size
  'text-md': 'text-1rem leading-1.5rem',
  'size-md': 'text-md',

  'text-info': 'text-info-600 dark:text-info-500',
  'text-error': 'text-error-600 dark:text-error-500',
  'text-success': 'text-success-600 dark:text-success-500',
  'text-warning': 'text-warning-600 dark:text-warning-500',

  // icon
  'i-loading': 'i-tabler-loader-2',
  'i-warning': 'i-heroicons-exclamation-triangle-20-solid',
  'i-error': 'i-heroicons-exclamation-circle-20-solid',
  'i-success': 'i-heroicons-check-circle-20-solid',
  'i-info': 'i-heroicons-information-circle-20-solid',
  'i-close': 'i-heroicons-x-mark-20-solid',
  'i-dot': 'i-tabler-circle-filled',
  'i-check': 'i-lucide-check',

  // transition
  'transition-base': 'transition-all duration-100 ease-out',

  // overrides
  'square-false': '',
}

export const dynamicGeneral: [RegExp, (params: RegExpExecArray) => string][] = [
  // TODO: una-text-<color><-number><-number>
  // [/^una-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-700 dark:text-${c}-400`],

  /**
   * Since we override the default `size` utility, we need to provide an alternative for it.
   * @refer https://tailwindcss.com/docs/size
   * @example area-100 -> w-100 h-100
   */
  [/^square-([^-]+)$/, ([, size]) => `w-${size} h-${size}`],
]

export const general = [
  ...dynamicGeneral,
  staticGeneral,
]
