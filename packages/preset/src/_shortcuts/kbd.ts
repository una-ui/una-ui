type KbdPrefix = 'kbd'

export const staticKbd: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // config
  'kbd-default-variant': 'kbd-solid-gray',

  // base
  'kbd': 'inline-flex text-nowrap items-center h-1.8181818181818181em min-w-1.8181818181818181em font-sans justify-center rounded px-0.5454545454545454em py-0.18181818181818182em text-0.6875em font-normal',
}

export const dynamicKbd: [RegExp, (params: RegExpExecArray) => string][] = [
  // modifiers
  [/^kbd-ring(-(\S+))?$/, ([, , c = 'gray']) => `ring-1 ring-inset ring-${c}-200 dark:ring-${c}-700`],

  // variants
  [/^kbd-solid(-(\S+))?$/, ([, , c = 'gray']) => `kbd-ring-${c} bg-${c}-50 text-${c}-500 dark:bg-${c}-900 dark:text-${c}-400`],
  [/^kbd-outline(-(\S+))?$/, ([, , c = 'gray']) => `kbd-ring-${c} bg-transparent text-${c}-500 dark:text-${c}-400`],
]

export const kbd = [
  ...dynamicKbd,
  staticKbd,
]
