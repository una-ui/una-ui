export const staticButton = {
  /* btn-const */
  'btn-base': 'bg-transparent inline-flex justify-center items-center btn-disabled rounded btn-md font-semibold cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  'btn-block': 'w-full',
  'btn-disabled': '!disabled:(opacity-75 cursor-not-allowed)',

  /* btn-default */
  'btn-solid-white': 'shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 text-gray-950 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-950 dark:hover:bg-gray-900/50 dark:disabled:bg-gray-950 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',
  'btn-ghost-white': 'text-gray-950 dark:text-white hover:bg-white dark:hover:bg-gray-950 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',

  'btn-solid-gray': 'shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 text-gray-800 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',
  'btn-ghost-gray': 'text-gray-800 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',
  'btn-link-gray': 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',

  'btn-solid-black': 'btn-base btn-focus-black text-white dark:text-gray-950 bg-gray-950 hover:bg-gray-900 disabled:bg-gray-950 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white',
  'btn-link-black': 'text-gray-950 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400',

  /* btn-size */
  'btn-sm': 'px-2 py-1 text-xs',
  'btn-md': 'px-4 py-2 text-sm',
  'btn-lg': 'px-6 py-3',

  /* btn-icon */
  'btn-icon': '-ml-0.2em mr-0.2em text-1.1em',
}

export const dynamicButton = [
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400`],
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `btn-base bg-transparent btn-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-900 bg-transparent`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline bg-transparent`],
]
