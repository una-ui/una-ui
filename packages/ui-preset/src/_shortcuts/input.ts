export const staticInput = {
  /* default */
  'input-base': 'input-md input-disabled ring-base sm:(text-sm leading-6) placeholder:(font-light text-gray-400) dark:placeholder:text-gray-500 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-disabled': '!disabled:(cursor-not-allowed pointer-events-none bg-muted text-muted opacity-75)',
  // 'input-base-error': 'input-base-error ring-error-500 dark:ring-error-400',

  // TODO convert to regex and make sizes dynamic
  'input-sm': 'px-2 py-1',
  'input-md': 'px-3 py-1.5',
  'input-lg': 'px-4 py-2',
  'input-xl': 'px-5 py-2.5',

  'input-block': 'w-full',
}

export const dynamicInput = [
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400`],
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-base`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c}  ring-1 ring-${c}-500 dark:ring-${c}-400`],
]
