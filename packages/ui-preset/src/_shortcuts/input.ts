type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // base
  'input': 'text-0.875em leading-1.5em px-0.75em py-0.45em w-full input-disabled ring-base placeholder:text-$c-gray-400 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-disabled': 'disabled:(n-disabled)',
  'input-leading': '',
  'input-trailing': '',
  'input-icon': 'text-1em',
  'input-loading': 'animate-spin',

  // wrappers
  'input-wrapper': 'relative',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.6em text-$c-gray-400',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0.6em text-$c-gray-400',

  // icons
  'input-info-icon': 'i-heroicons-information-circle-20-solid',
  'input-error-icon': 'i-heroicons-exclamation-circle-20-solid',
  'input-success-icon': 'i-heroicons-check-circle-20-solid',
  'input-warning-icon': 'i-heroicons-exclamation-triangle-20-solid',
  'input-loading-icon': 'loading-icon',

  // TODO: add input-solid|outline-gray variant
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
