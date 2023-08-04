type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // base
  'input': 'text-0.875em leading-1.5em px-.75em py-0.45em w-full input-disabled ring-base placeholder:text-$c-gray-400 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-disabled': '!disabled:(cursor-not-allowed pointer-events-none bg-muted text-muted opacity-75)',
  'input-loading-base': 'animate-spin',
  'input-leading-base': 'text-0.875em',
  'input-trailing-base': 'text-0.875em',

  // wrappers
  'input-wrapper': 'relative',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.75em text-$c-gray-400',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0.75em text-$c-gray-400',

  // icons
  'input-info-icon': 'i-heroicons-information-circle-20-solid',
  'input-error-icon': 'i-heroicons-exclamation-circle-20-solid',
  'input-success-icon': 'i-heroicons-check-circle-20-solid',
  'input-warning-icon': 'i-heroicons-exclamation-triangle-20-solid',
  'input-loading-icon': 'i-tabler-loader-2',
}

export const dynamicInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400 focus:bg-base`],
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder-${c}-400/70 dark:placeholder-${c}-300/70`],

  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input input-focus-${c} ring-1 ring-inset ring-base`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input input-focus-${c} ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400`],
]

export const input = [
  ...dynamicInput,
  staticInput,
]
