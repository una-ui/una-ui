type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base p-0.125em
  'switch': 'relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-full',
  'switch-slider': 'switch-slider-size absolute pointer-events-none inline-block transform rounded-full bg-base shadow ring-0 transition duration-200 ease-in-out',
  'switch-slider-size': 'h-1.25em w-1.25em',
  'switch-slider-checked': 'translate-x-1.25em',
  'switch-slider-unchecked': 'translate-x-0',

  'switch-disabled': 'opacity-75 cursor-not-allowed',

  // switch normal
  'switch-normal': 'h-1.5em w-2.75em',

  // switch short
  'switch-short': 'h-1.25em w-2.50em',

  'switch-slider-bg-short': 'h-1em w-2.25em',
  'switch-slider-bg-normal': 'h-1.5em w-2.75em',

  // switch slider bg short
  'switch-slider-bg': 'pointer-events-none absolute mx-auto rounded-full transition-colors duration-200 ease-in-out',

}

export const dynamicSwitch: [RegExp, (params: RegExpExecArray) => string][] = [
  // size
  [/^switch-(\S+)?$/, ([, s]) => `text-${s}`],

  // base
  [/^switch-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-${c}`],

  // colors (to refactor)
  [/^switch-checked(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 dark:bg-${c}-500`],
  [/^switch-unchecked(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-200 dark:bg-${c}-700`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
