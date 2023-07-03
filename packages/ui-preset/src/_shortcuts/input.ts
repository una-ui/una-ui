export const staticInput = {
  /* default */
  'input-base': 'input-md input-disabled ring-base sm:(text-sm leading-6) placeholder:(text-gray-400) dark:placeholder:text-gray-500 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-disabled': '!disabled:(cursor-not-allowed pointer-events-none bg-muted text-muted opacity-75)',
  // 'input-base-error': 'input-base-error ring-error-500 dark:ring-error-400',

  // TODO convert to regex and make sizes dynamic
  'input-xs': 'px-2 py-0.5 text-xs',
  'input-sm': 'px-2.5 py-1 text-sm',
  'input-md': 'px-3 py-1.5',
  'input-lg': 'px-3.5 py-2 text-lg',
  'input-xl': 'px-4 py-2.5 text-xl',

  'input-block': 'w-full',
}

export const dynamicInput = [
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400`],
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-base`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c}  ring-1 ring-${c}-500 dark:ring-${c}-400`],
]
