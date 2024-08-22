type BtnPrefix = 'btn'

export const staticBtn: Record<`${BtnPrefix}-${string}` | BtnPrefix, string> = {
  // config
  'btn-default-variant': 'btn-solid',
  'btn-loading-icon': 'i-loading',

  // base
  'btn': 'bg-transparent text-0.875em leading-5 gap-0.42857142857142855em btn-rectangle rounded-md inline-flex justify-center items-center btn-disabled font-medium cursor-pointer',
  'btn-disabled': 'disabled:n-disabled',
  'btn-label': '',
  'btn-icon-label': 'text-1.191em',
  'btn-leading': '-ml-0.14285714285714285em text-1.191em',
  'btn-trailing': '-mr-0.14285714285714285em text-1.191em',
  'btn-loading': 'animate-spin text-1.191em',

  // options
  'btn-block': 'w-full',
  'btn-reverse': 'flex-row-reverse',
  'btn-rectangle': 'px-0.7142857142857143em py-0.42857142857142855em',
  'btn-square': 'p-0.42857142857142855em',

  // variants
  'btn-solid-white': 'bg-base text-base ring-1 ring-base ring-inset shadow-sm btn-focus hover:bg-muted',
  'btn-ghost-white': 'text-base btn-focus hover:bg-$c-gray-50',
  'btn-outline-white': 'bg-transparent text-base ring-1 ring-base ring-inset btn-focus',

  'btn-solid-gray': 'bg-$c-gray-50 text-$c-gray-800 ring-1 ring-base ring-inset shadow-sm btn-focus hover:bg-$c-gray-100',
  'btn-ghost-gray': 'text-$c-gray-600 btn-focus hover:bg-$c-gray-100',
  'btn-soft-gray': 'text-$c-gray-600 bg-$c-gray-50 btn-focus hover:bg-$c-gray-100',
  'btn-outline-gray': 'bg-transparent text-muted ring-1 ring-base ring-inset btn-focus',
  'btn-link-gray': 'text-muted btn-focus hover:text-base hover:underline underline-offset-4',
  'btn-text-gray': 'text-$c-gray-600 btn-focus hover:text-$c-gray-900',

  'btn-solid-black': 'bg-inverted text-inverted shadow-sm btn-focus',
  'btn-link-black': 'text-base btn-focus hover:underline underline-offset-4',
  'btn-text-black': 'text-base btn-focus',
  'btn-soft-black': 'text-base bg-base btn-focus shadow-sm',

  'btn-text-muted': 'text-muted btn-focus hover:text-accent',
}

export const dynamicBtn: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-${c}-600 dark:focus-visible:outline-${c}-500 focus-visible:outline-2 focus-visible:outline-offset-2`],

  // variants
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-text(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-500 hover:text-${c}-500 dark:hover:text-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent btn-focus-${c} text-${c}-500 dark:text-${c}-400 ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-400 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-500 dark:text-${c}-400 hover:underline underline-offset-4`],
]

export const btn = [
  ...dynamicBtn,
  staticBtn,
]
