type CardPrefix = 'card'

export const staticCard: Record<`${CardPrefix}-${string}` | CardPrefix, string> = {
  // base
  'card': 'relative flex flex-col rounded-lg overflow-hidden shadow-sm',
  'card-default-variant': 'card-outline-gray',

  // components
  'card-title': 'text-2xl font-medium leading-none tracking-tight',
  'card-description': 'text-sm text-brand/85',

  'card-body': 'flex flex-col gap-5 p-4',
}

export const dynamicCard = [
  // dynamic variants
  [/^card-soft(-(\S+))?$/, ([, , c = 'primary']) => `rounded-md bg-${c}-50 text-${c}-400 dark:text-${c}-300 dark:bg-${c}-950 n-${c}-800 dark:n-${c}-100`],
  [/^card-outline(-(\S+))?$/, ([, , c = 'primary']) => `rounded-md border border-${c}-200 dark:border-${c}-700/58 text-${c}-800 dark:text-${c}-200 n-${c}-600 dark:n-${c}-500`],
]

export const card = [
  ...dynamicCard,
  staticCard,
]
