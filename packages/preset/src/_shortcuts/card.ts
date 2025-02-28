type CardPrefix = 'card'

export const staticCard: Record<`${CardPrefix}-${string}` | CardPrefix, string> = {
  // base
  'card': 'rounded-xl shadow text-base',

  // components
  'card-header': 'flex flex-col gap-y-1.5 p-6',
  'card-title': 'font-semibold leading-none tracking-tight',
  'card-description': 'text-sm text-muted',
  'card-content': 'p-6 pt-0',
  'card-footer': 'flex items-center p-6 pt-0',

  // static variants
  'card-soft-gray': 'bg-muted border border-base',
  'card-outline-gray': 'bg-base border border-base',
}

export const dynamicCard = [
  [/^card-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-700/58`],
  [/^card-outline(-(\S+))?$/, ([, , c = 'gray']) => `border border-${c}-200 dark:border-${c}-700/58`],
]

export const card = [
  ...dynamicCard,
  staticCard,
]
