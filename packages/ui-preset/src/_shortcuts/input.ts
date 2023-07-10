export const miscInput = {
  'input-loading-base': 'animate-spin',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',

  'input-disabled': '!disabled:(cursor-not-allowed pointer-events-none bg-muted text-muted opacity-75)',

  'input-info-icon': 'i-heroicons-information-circle-20-solid',
  'input-error-icon': 'i-heroicons-exclamation-circle-20-solid',
  'input-success-icon': 'i-heroicons-check-circle-20-solid',
  'input-warning-icon': 'i-heroicons-exclamation-triangle-20-solid',
  'input-loading-icon': 'i-gg-spinner',

  'input-wrapper': 'relative',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-$c-gray-400',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-$c-gray-400',
  // options
  // TODO convert to regex and make sizes dynamic
  'input-xs': 'px-2 py-0.5 text-xs',
  'input-sm': 'px-2.5 py-1 text-sm',
  'input-md': 'px-3 py-1.5',
  'input-lg': 'px-3.5 py-2 text-lg',
  'input-xl': 'px-4 py-2.5 text-xl',
}

export const staticInput = {
  // defaults config
  'input-base': 'w-full input-md input-disabled ring-base sm:(text-sm leading-6) placeholder:text-gray-400 dark:placeholder:text-gray-500 block outline-none rounded-md border-0 shadow-sm bg-transparent',
}

export const dynamicInput = [
  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-base`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400`],

  // defaults config
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `input-status-ring focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400 focus:bg-base `],

  // status
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder-${c}-400/70 dark:placeholder-${c}-300/70`],
]

export const input = [
  ...dynamicInput,
  miscInput,
  staticInput,
]
