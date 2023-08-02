type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'switch-sm relative inline-flex flex-shrink-0 cursor-pointer p-0.125em rounded-full',
  'switch-slider': 'switch-slider-size pointer-events-none inline-block transform rounded-full bg-base shadow ring-0 transition duration-200 ease-in-out',
  'switch-slider-size': 'h-1.25em w-1.25em',
  'switch-slider-checked': 'translate-x-1.25em',
  'switch-slider-unchecked': 'translate-x-0',

  // switch normal
  'switch-normal': 'h-1.5em w-2.75em',

  // switch short
  'switch-short': 'h-1.2em w-2.75em',
}

export const dynamicSwitch: [RegExp, (params: RegExpExecArray) => string][] = [
  // size
  [/^switch-(\S+)?$/, ([, s]) => `text-${s}`],

  // base
  [/^switch-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-${c}`],

  // colors
  [/^switch-checked(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 dark:bg-${c}-500`],
  [/^switch-unchecked(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-200 dark:bg-${c}-700`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
