type SeparatorPrefix = 'separator'

export const staticSeparator: Record<`${SeparatorPrefix}-${string}` | SeparatorPrefix, string> = {
  // base
  'separator': 'text-md shrink-0 relative',
  'separator-default-variant': 'separator-solid-gray',
  'separator-content': 'text-0.75em text-muted-foreground bg-background absolute flex justify-center items-center',

  // orientation states
  'separator-horizontal': 'h-px my-4 w-full border-t-0.0625em',
  'separator-vertical': 'w-px mx-4 h-full border-l-0.0625em',
  'separator-content-horizontal': 'h-1px py-1 px-2',
  'separator-content-vertical': 'w-1px px-1 py-2',

  // horizontal positions
  'separator-position-left': 'left-6 top-1/2 -translate-y-1/2',
  'separator-position-right': 'right-6 top-1/2 -translate-y-1/2',
  'separator-position-center': 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',

  // vertical positions
  'separator-position-bottom': 'bottom-4 left-1/2 -translate-x-1/2',
  'separator-position-top': 'top-4 left-1/2 -translate-x-1/2',

  // static variants
  'separator-solid-gray': 'border-border',
}

export const dynamicSeparator = [
  // dynamic variants
  [/^separator-solid(-(\S+))?$/, ([, , c = 'gray']) => `border-solid border-${c}-200 dark:border-${c}-700/58`],
  [/^separator-dashed(-(\S+))?$/, ([, , c = 'gray']) => `border-dashed border-${c}-200 dark:border-${c}-700/58`],
  [/^separator-dotted(-(\S+))?$/, ([, , c = 'gray']) => `border-dotted border-${c}-200 dark:border-${c}-700/58`],
]

export const separator = [
  ...dynamicSeparator,
  staticSeparator,
]
