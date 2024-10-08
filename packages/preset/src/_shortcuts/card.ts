type CardPrefix = 'card'

export const staticCard: Record<`${CardPrefix}-${string}` | CardPrefix, string> = {
  // base
  'card': 'relative flex flex-col rounded-lg overflow-hidden shadow-sm',
  'card-default-variant': 'card-outline-gray',

  // components
  'card-header': '',
  'card-title': 'text-2xl font-semibold leading-none tracking-tight',
  'card-description': 'text-sm text-muted',
  'card-content': 'px-4 py-5 pt-0 sm:p-6 sm:pt-0',
  'card-footer': 'flex items-center p-6 pt-0',
  'card-about': 'flex flex-col gap-y-1.5 px-4 py-5 sm:p-6',

  // static variants
  'card-soft-gray': 'bg-muted border border-border',
  'card-outline-gray': 'bg-background border border-border',
}

export const dynamicCard = [
  // dynamic variants
  [/^card-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-700/58`],
  [/^card-outline(-(\S+))?$/, ([, , c = 'gray']) => `border border-${c}-200 dark:border-${c}-700/58`],
]

export const card = [
  ...dynamicCard,
  staticCard,
]
