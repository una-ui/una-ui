type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // config
  'alert-default-variant': 'alert-outline',
  'alert-info-icon': 'i-info',
  'alert-error-icon': 'i-error',
  'alert-success-icon': 'i-success',
  'alert-warning-icon': 'i-warning',
  'alert-close-icon': 'i-close',

  // base
  'alert': 'p-1em size-md',
  'alert-title': 'text-0.875em font-medium text-brand',
  'alert-description': 'text-0.875em leading-1.625em text-brand/90',
  'alert-icon-base': 'h-1.25em w-1.25em',
  'alert-close': 'p-0.5em rounded-md hover:bg-brand/10 active:bg-brand/20 transition-colors duration-200',
  'alert-close-icon-base': 'h-1.2em w-1.2em',

  // wrappers
  'alert-inner-wrapper': 'gap-0.75em flex',
  'alert-content-wrapper': 'flex flex-col w-full space-y-0.5em',
  'alert-icon-wrapper': '-mt-0.2em',
  'alert-close-wrapper': 'ml-auto pl-0.2em',
  'alert-close-inner-wrapper': '-mx-1.1 -my-1.1',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^alert-soft(-(\S+))?$/, ([, , c = 'primary']) => `alert rounded-md bg-${c}-50 text-${c}-400 dark:text-${c}-300 dark:bg-${c}-950 n-${c}-800 dark:n-${c}-100`],
  [/^alert-outline(-(\S+))?$/, ([, , c = 'primary']) => `alert rounded-md border border-${c}-600 dark:border-${c}-500 text-brand n-${c}-600 dark:n-${c}-500`],
  [/^alert-border(-(\S+))?$/, ([, , c = 'primary']) => `alert border-l-4 border-${c}-400 dark:border-${c}-500 bg-${c}-50 dark:bg-${c}-950 text-${c}-400 dark:text-${c}-300 n-${c}-800 dark:n-${c}-100`],
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
