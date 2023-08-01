type ButtonPrefix = 'btn'

export const staticButton: Record<`${ButtonPrefix}-${string}` | ButtonPrefix, string> = {
  // base
  'btn': 'btn-sm bg-transparent gap-1 btn-rectangle rounded inline-flex justify-center items-center btn-disabled font-semibold cursor-pointer',
  'btn-disabled': 'disabled:opacity-75 disabled:cursor-not-allowed',
  'btn-label-base': '',
  'btn-leading-base': '-ml-0.2em mr-0.2em',
  'btn-trailing-base': '-mr-0.2em ml-0.2em',
  'btn-icon-text-base': 'text-1.1em',

  // options
  'btn-block': 'w-full',
  'btn-reverse': 'flex-row-reverse',

  // loading
  'btn-loading-base': 'animate-spin',
  'btn-loading-icon': 'i-tabler-loader-2',

  // padding
  'btn-rectangle': 'px-.8em py-.4em',
  'btn-square': 'p-0.5em',

  // variants
  'btn-solid-white': 'bg-base text-base ring-1 ring-base shadow-sm btn-focus hover:bg-$c-gray-50',
  'btn-ghost-white': 'text-base btn-focus hover:bg-$c-gray-50',

  'btn-solid-gray': 'bg-$c-gray-50 text-$c-gray-800 ring-1 ring-base shadow-sm btn-focus hover:bg-$c-gray-100',
  'btn-ghost-gray': 'text-$c-gray-500 btn-focus hover:text-$c-gray-950 hover:bg-$c-gray-50',
  'btn-link-gray': 'text-$c-gray-500 btn-focus hover:text-$c-gray-950 hover:underline underline-offset-4',

  'btn-solid-black': 'bg-$c-gray-950 text-$c-gray-0 ring-1 ring-$c-gray-950 shadow-sm btn-focus hover:bg-$c-gray-800',
  'btn-link-black': 'text-$c-gray-950 btn-focus hover:underline underline-offset-4',
}

export const dynamicButton: [RegExp, (params: RegExpExecArray) => string][] = [
  // size
  [/^btn-(\S+)?$/, ([, s]) => `text-${s}`],

  // base
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 focus-visible:outline-2 focus-visible:outline-offset-2`],

  // variants
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent btn-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-500 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-900 bg-transparent`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline underline-offset-4 bg-transparent`],
]

export const button = [
  ...dynamicButton,
  staticButton,
]
