export const staticButton = {
  /* btn-const */
  'btn-block': 'w-full',
  'btn-disabled': '!disabled:(opacity-75 cursor-not-allowed)',

  /* btn-size */
  'btn-sm': 'px-2 py-1 text-xs',
  'btn-md': 'px-4 py-2 text-sm',
  'btn-lg': 'px-6 py-3 text-md',

  /* btn-icon */
  'btn-icon': '-ml-0.2em mr-0.2em text-1.1em',
}

export const dynamicButton = [
  [/^btn-base(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent inline-flex justify-center items-center btn-disabled focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 rounded btn-md font-semibold cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`],
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent btn-base-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} text-${c}-500 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-900 bg-transparent`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-base-${c} text-${c}-500 dark:text-${c}-400 hover:underline bg-transparent`],
]
