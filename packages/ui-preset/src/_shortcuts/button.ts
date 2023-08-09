type ButtonPrefix = 'btn'

export const staticButton: Record<`${ButtonPrefix}-${string}` | ButtonPrefix, string> = {
  // config
  'btn-default-variant': 'btn-solid',
  'btn-loading-icon': 'i-loading',

  // base
  'btn': 'bg-transparent size-sm leading-tight gap-1 btn-rectangle rounded-md inline-flex justify-center items-center btn-disabled font-semibold cursor-pointer',
  'btn-disabled': 'disabled:n-disabled',
  'btn-label': '',
  'btn-icon-label': 'text-1.1em',
  'btn-leading': '-ml-0.2em mr-0.2em text-1.1em',
  'btn-trailing': '-mr-0.2em ml-0.2em text-1.1em',
  'btn-loading': 'animate-spin text-1em',

  // options
  'btn-block': 'w-full',
  'btn-reverse': 'flex-row-reverse',
  'btn-rectangle': 'px-0.75em py-0.5em',
  'btn-square': 'p-0.5em',

  // variants
  'btn-solid-white': 'btn bg-base text-base ring-1 ring-base shadow-sm btn-focus hover:bg-muted',
  'btn-ghost-white': 'btn text-base btn-focus hover:bg-$c-gray-50',
  'btn-solid-gray': 'btn bg-$c-gray-50 text-$c-gray-800 ring-1 ring-base shadow-sm btn-focus hover:bg-$c-gray-100',
  'btn-ghost-gray': 'btn text-$c-gray-500 btn-focus hover:text-$c-gray-950 hover:bg-$c-gray-50',
  'btn-link-gray': 'btn text-$c-gray-500 btn-focus hover:text-$c-gray-950 hover:underline underline-offset-4',
  'btn-solid-black': 'btn bg-inverted text-inverted ring-1 ring-$c-gray-950 shadow-sm btn-focus hover:bg-$c-gray-800',
  'btn-link-black': 'btn text-$c-gray-950 btn-focus hover:underline underline-offset-4',
}

export const dynamicButton: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 focus-visible:outline-2 focus-visible:outline-offset-2`],

  // variants
  [/^btn-text(-(\S+))?$/, ([, , c = 'primary']) => `btn btn-focus-${c} text-${c}-600 dark:text-${c}-500 hover:text-${c}-500 dark:hover:text-${c}-400`],
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `btn bg-transparent btn-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-current hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn btn-focus-${c} text-${c}-500 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-900`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline underline-offset-4`],
]

export const button = [
  ...dynamicButton,
  staticButton,
]
