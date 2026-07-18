type CardPrefix = 'card'

export const staticCard: Record<`${CardPrefix}-${string}` | CardPrefix, string> = {
  // base
  'card': 'text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm',

  // components
  'card-header': '[@container/card-header]:grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[[data-slot=card-action]]:grid-cols-[1fr_auto] [&.border-b]:pb-6',
  'card-title': 'leading-none font-semibold',
  'card-description': 'text-muted-foreground text-sm',
  'card-content': 'px-6',
  'card-footer': 'flex items-center px-6 [&.border-t]:pt-6',
  'card-action': 'col-start-2 row-span-2 row-start-1 self-start justify-self-end',

  // static variants
  'card-solid-gray': 'bg-card border',
  'card-solid': 'card-solid-gray',
  'card-soft-gray': 'bg-card',
  'card-soft': 'card-soft-gray',
  'card-outline-gray': 'bg-background border',
  'card-outline': 'card-outline-gray',
}

export const dynamicCard = [
  [/^card-solid(-(\S+))?$/, ([, , c = 'gray']) => `border bg-background dark:bg-${c}-900 border-${c}-200 dark:border-${c}-800`],
  [/^card-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900`],
  [/^card-outline(-(\S+))?$/, ([, , c = 'gray']) => `border bg-background dark:bg-${c}-900 border-${c}-200 dark:border-${c}-800`],
]

export const card = [
  ...dynamicCard,
  staticCard,
]
