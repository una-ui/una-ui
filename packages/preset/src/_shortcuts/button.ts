export const staticButton = {
  /* btn-const */
  'btn-disabled': '!disabled:(opacity-75 cursor-not-allowed)',

  /* btn-size */
  'btn-sm': 'px-2 py-1 text-xs',
  'btn-md': 'px-4 py-2 text-sm',
  'btn-lg': 'px-6 py-3 text-base',

  'btn-icon': '-ml-0.2em mr-0.2em text-1.1em',
}

export const dynamicButton = [
  [/^btn-base(-(\S+))?$/, ([, , c = 'primary']) => `inline-flex justify-center items-center btn-disabled focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 rounded-md btn-md font-semibold cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`],
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} bg-${c}-600 text-white shadow-sm bg-${c}-500 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-900`],
]
