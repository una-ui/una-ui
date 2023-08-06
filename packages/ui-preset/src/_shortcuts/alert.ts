type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // base
  'alert': 'p-1em',
  'alert-title': 'text-0.875em font-medium text-brand',
  'alert-description': 'mt-2 text-0.875em text-brand/90',
  'alert-icon': 'h-1.25em w-1.25em -mt-1.2',
  'alert-default-variant': 'alert-outline',

  // wrappers
  'alert-inner-wrapper': 'gap-0.75em flex items-start',
  'alert-icon-wrapper': 'flex-shrink-0',

  // icons
  'alert-info-icon': 'i-info',
  'alert-error-icon': 'i-error',
  'alert-success-icon': 'i-success',
  'alert-warning-icon': 'i-warning',
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
