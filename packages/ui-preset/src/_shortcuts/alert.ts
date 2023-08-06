type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // base
  'alert': 'rounded-md p-4',
  'alert-title': 'text-sm font-medium text-brand',
  'alert-description': 'mt-2 text-sm text-brand/90',
  'alert-icon': 'h-5 w-5',
  'alert-default-variant': 'alert-outline',

  // wrappers
  'alert-inner-wrapper': 'gap-3 flex items-start',

  // icons
  'alert-info-icon': 'i-info',
  'alert-error-icon': 'i-error',
  'alert-success-icon': 'i-success',
  'alert-warning-icon': 'i-warning',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^alert-soft(-(\S+))?$/, ([, , c = 'primary']) => `alert border border-${c}-600/5 bg-${c}-50 text-${c}-400 dark:text-${c}-300 dark:bg-${c}-950 n-${c}-800 dark:n-${c}-100`],
  [/^alert-outline(-(\S+))?$/, ([, , c = 'primary']) => `alert border border-${c}-600 text-brand dark:border-${c}-500 n-${c}-600 dark:n-${c}-500`],
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
