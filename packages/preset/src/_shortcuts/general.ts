export const staticGeneral = {
  // text-size
  'text-md': 'text-1rem leading-1.5rem',
  'size-md': 'text-md',

  // text color
  'text-base': 'text-$c-foreground',
  'text-inverted': 'text-$c-background',
  'text-muted': 'text-$c-muted-foreground',

  'text-accent': 'text-$c-accent-foreground',
  'text-accent-foreground': 'text-$c-accent',

  'text-popover': 'text-$c-popover-foreground',
  'text-popover-foreground': 'text-$c-popover',

  'text-info': 'text-info-600 dark:text-info-500',
  'text-error': 'text-error-600 dark:text-error-500',
  'text-success': 'text-success-600 dark:text-success-500',
  'text-warning': 'text-warning-600 dark:text-warning-500',

  // ring
  'ring-base': 'ring-$c-ring',
  'ring-inverted': 'ring-$c-ring-foreground',
  'ring-offset-base': 'ring-offset-$c-background',
  'ring-offset-inverted': 'ring-offset-$c-bg-foreground',

  // border
  'border-base': 'border-$c-border',
  'border-foreground': 'border-$c-border-foreground',

  // divide
  'divide-base': 'divide-$c-divider',

  // bg
  'bg-base': 'bg-$c-background',
  'bg-inverted': 'bg-$c-foreground',
  'bg-muted': 'bg-$c-muted',

  'bg-accent': 'bg-$c-accent',
  'bg-accent-foreground': 'bg-$c-accent-foreground',

  'bg-popover': 'bg-$c-popover',
  'bg-popover-foreground': 'bg-$c-popover-foreground',

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
