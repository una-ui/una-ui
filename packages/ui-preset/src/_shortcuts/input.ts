type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // base
  'input': 'px-0.75em py-0.5em w-full input-disabled ring-base placeholder:text-$c-gray-400 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-disabled': 'disabled:(n-disabled)',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-icon': 'h-1.375em w-1.375em',
  'input-status-icon': 'input-icon',
  'input-leading': 'input-icon',
  'input-trailing': 'input-icon',
  'input-loading': 'animate-spin input-icon',

  // wrappers
  'input-wrapper': 'relative flex items-center size-sm',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.75em text-$c-gray-400',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0.75em text-$c-gray-400',

  // icons
  'input-info-icon': 'i-heroicons-information-circle-20-solid',
  'input-error-icon': 'i-heroicons-exclamation-circle-20-solid',
  'input-success-icon': 'i-heroicons-check-circle-20-solid',
  'input-warning-icon': 'i-heroicons-exclamation-triangle-20-solid',
  'input-loading-icon': 'loading-icon',

  // override
  'input-outline-gray': 'input focus:ring-2 focus:bg-base ring-1 ring-inset ring-base',
}

export const dynamicInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400 focus:bg-base`],
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder-${c}-400/70 dark:placeholder-${c}-300/70`],

  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input ring-1 ring-inset ring-base input-focus-${c}`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input  ring-1 ring-inset ring-base input-focus-${c} ring-${c}-500 dark:ring-${c}-400`],
]

export const input = [
  ...dynamicInput,
  staticInput,
]
