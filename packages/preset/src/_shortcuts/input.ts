type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // config
  'input-default-variant': 'input-outline',
  'input-loading-icon': 'i-loading',
  'input-info-icon': 'i-info',
  'input-error-icon': 'i-error',
  'input-success-icon': 'i-success',
  'input-warning-icon': 'i-warning',
  'input-leading-padding': 'pl-2.9em',
  'input-trailing-padding': 'pr-2.9em',

  // base
  'input': 'text-0.875em leading-6 px-0.8571428571428571em py-0.5em w-full input-disabled ring-base ring-inset placeholder:text-$c-gray-400 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-input': 'h-9', // role='input'
  'input-textarea': '', // role='textarea'
  'input-disabled': 'disabled:(n-disabled)',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-status-icon-base': 'text-1.042em',
  'input-leading': 'text-1.042em',
  'input-trailing': 'text-1.042em',
  'input-loading': 'animate-spin text-1.042em',

  // wrappers
  'input-wrapper': 'relative flex items-center',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.75em text-$c-gray-400',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0.75em text-$c-gray-400',

  // variants
  'input-outline-gray': 'focus:ring-2 ring-1',
  'input-outline-black': 'ring-1 focus:ring-$c-foreground',
}

export const dynamicInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // config
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400`],
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder-${c}-400/70 dark:placeholder-${c}-300/70`],

  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `ring-1 input-focus-${c}`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => ` ring-1 input-focus-${c} ring-${c}-500 dark:ring-${c}-400`],
]

export const input = [
  ...dynamicInput,
  staticInput,
]
