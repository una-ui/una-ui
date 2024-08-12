type CardPrefix = 'card'

export const staticCard: Record<`${CardPrefix}-${string}` | CardPrefix, string> = {
  // base
  'card': 'relative flex flex-col rounded-lg overflow-hidden shadow-sm border',
  'card-default-variant': 'card-soft-gray',

  // components
  'card-header': 'flex flex-col gap-y-1.5',
  'card-title': 'text-2xl font-semibold leading-none tracking-tight',
  'card-description': 'text-sm text-muted',
  'card-content': 'px-4 py-5 sm:p-6 pt-0 sm:pt-0',
  'card-footer': 'flex items-center p-6 pt-0',
  'card-about': 'flex flex-col gap-1 px-4 py-5 sm:p-6',

  // static variants
  'card-soft-gray': 'bg-muted border-base',
  'card-outline-gray': 'bg-base border-base',
}

export const dynamicCard = [
  // dynamic variants
  [/^card-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900`],
  [/^card-outline(-(\S+))?$/, ([, , c = 'gray']) => `border-${c}-200 dark:border-${c}-700/58`],
]

export const card = [
  ...dynamicCard,
  staticCard,
]
