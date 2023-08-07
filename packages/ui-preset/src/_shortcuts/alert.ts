type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // base
  'alert': 'p-1em size-md',
  'alert-title': 'text-0.875em font-medium text-brand',
  'alert-description': 'text-0.875em text-brand/90',
  'alert-icon': 'h-1.25em w-1.25em -mt-0.5em',
  'alert-default-variant': 'alert-outline',
  'alert-close': 'p-0.5em rounded-full hover:bg-brand/10 active:bg-brand/20 transition-colors duration-200',

  // wrappers
  'alert-inner-wrapper': 'gap-0.75em flex items-start',
  'alert-content-wrapper': 'flex-grow flex flex-col space-y-0.5em',
  'alert-icon-wrapper': 'flex-shrink-0',
  'alert-close-wrapper': 'flex-shrink-0 ml-auto',

  // icons
  'alert-info-icon': 'i-info',
  'alert-error-icon': 'i-error',
  'alert-success-icon': 'i-success',
  'alert-warning-icon': 'i-warning',
  'alert-close-icon': 'i-heroicons-x-mark-20-solid',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^alert-soft(-(\S+))?$/, ([, , c = 'primary']) => `alert rounded-md bg-${c}-50 text-${c}-400 dark:text-${c}-300 dark:bg-${c}-950 n-${c}-800 dark:n-${c}-100`],
  [/^alert-outline(-(\S+))?$/, ([, , c = 'primary']) => `alert rounded-md border border-${c}-600 text-brand dark:border-${c}-500 n-${c}-600 dark:n-${c}-500`],
  [/^alert-border(-(\S+))?$/, ([, , c = 'primary']) => `alert border-l-4 border-${c}-400 dark:border-${c}-500 bg-${c}-50 dark:bg-${c}-950 text-${c}-400 dark:text-${c}-300 n-${c}-800 dark:n-${c}-100`],
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
