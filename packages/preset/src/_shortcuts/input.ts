type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // config
  'input-default-variant': 'input-outline-primary',
  'input-loading-icon': 'i-loading',
  'input-info-icon': 'i-info',
  'input-error-icon': 'i-error',
  'input-success-icon': 'i-success',
  'input-warning-icon': 'i-warning',
  'input-leading-padding': 'pl-2.9em',
  'input-trailing-padding': 'pr-2.9em',

  // base
  'input': 'text-base text-0.875em leading-1.4285714285714286em px-0.8571428571428571em w-full focus-visible:outline-none input-disabled placeholder:text-muted block rounded-md shadow-sm bg-transparent transition-colors file:border-0  file:bg-transparent file:text-sm file:font-medium',
  'input-input': 'h-2.5714285714285716em py-0.2857142857142857em', // role='input'
  'input-textarea': 'min-h-4.285714285714286em py-0.5714285714em', // role='textarea'
  'input-disabled': 'disabled:(n-disabled)',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-status-icon-base': 'size-1.25em',
  'input-leading': 'size-1.25em',
  'input-trailing': 'size-1.25em',
  'input-loading': 'animate-spin size-1.25em',

  // wrappers
  'input-wrapper': 'relative flex items-center',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.75em text-muted',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0.75em text-muted',

  // variants
  'input-outline-gray': 'border border-input focus-visible:ring-input focus-visible:ring-1',
  'input-outline-black': 'border border-input focus:ring-$c-foreground focus-visible:ring-1',
}

export const dynamicInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // config
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 focus-visible:ring-1`],
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder-${c}-500 dark:placeholder-${c}-400`],

  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `border border-input input-focus-${c}`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input-focus-${c} border border-${c}-500 dark:border-${c}-400`],
]

export const input = [
  ...dynamicInput,
  staticInput,
]
