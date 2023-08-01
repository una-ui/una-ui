type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'switch-focus relative h-2.375em w-4.625em inline-flex flex-shrink-0 cursor-pointer border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out',
  'switch-checked': 'bg-primary',
  'switch-unchecked': 'bg-$c-gray-200',
  'switch-slider': 'pointer-events-none inline-block h-2.125em w-2.125em transform rounded-full bg-inverted shadow ring-0 transition duration-200 ease-in-out',
  'switch-slider-checked': 'translate-x-2.25em',
  'switch-slider-unchecked': 'translate-x-0',
}

export const dynamicSwitch: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^switch-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-${c}`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
