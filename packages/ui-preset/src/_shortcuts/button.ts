export const staticButton = {
  // default config
  'btn-base': 'bg-transparent inline-flex justify-center items-center btn-disabled rounded btn-md text-sm font-semibold cursor-pointer',
  'btn-disabled': '!disabled:(opacity-75 cursor-not-allowed)',
  'btn-wrapper': 'space-x-2 flex flex-row',
  'btn-block': 'w-full',
  'btn-icon': '-ml-0.2em mr-0.2em text-1.1em',

  /* size */
  'btn-xs': 'px-1.5 py-0.5',
  'btn-sm': 'px-2 py-1',
  'btn-md': 'px-2.5 py-1.5',
  'btn-lg': 'px-3 py-2',
  'btn-xl': 'px-3.5 py-2.5',

  // variants
  'btn-solid-white': 'btn-base bg-base text-base ring-1 ring-base shadow-sm btn-focus-primary hover:bg-$c-gray-50',
  'btn-ghost-white': 'btn-base text-base btn-focus-primary hover:bg-$c-gray-50',

  'btn-solid-gray': 'btn-base bg-$c-gray-50 text-$c-gray-800 ring-1 ring-base shadow-sm btn-focus-primary hover:bg-$c-gray-100',
  'btn-ghost-gray': 'btn-base text-$c-gray-500 btn-focus-primary hover:text-$c-gray-950 hover:bg-$c-gray-50',
  'btn-link-gray': 'btn-base text-$c-gray-500 btn-focus-primary hover:text-$c-gray-950 hover:underline underline-offset-4',

  'btn-solid-black': 'btn-base bg-$c-gray-950 text-$c-gray-0 ring-1 ring-$c-gray-950 shadow-sm btn-focus-primary hover:bg-$c-gray-800',
  'btn-link-black': 'btn-base text-$c-gray-950 btn-focus-primary hover:underline underline-offset-4',
}

export const dynamicButton = [
  // default config
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`],

  // variants
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `btn-base bg-transparent btn-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-900 bg-transparent`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-base btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline underline-offset-4 bg-transparent`],
]

export const button = [
  ...dynamicButton,
  staticButton,
]
