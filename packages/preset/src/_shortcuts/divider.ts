type DividerPrefix = 'divider'

export const staticDivider: Record<`${DividerPrefix}-${string}` | DividerPrefix, string> = {
  // base
  'divider': 'divider-gray relative',

  // variants
  'divider-horizontal': 'block w-full h-px my-8 relative border-b-1',
  'divider-vertical': 'block w-px h-full border-l-1 mx-6 relative align-middle',
  'divider-content': 'absolute bg-base font-medium text-sm',
  // for horizontal
  'divider-position-left': 'left-6 top-1/2 -translate-y-1/2',
  'divider-position-right': 'right-6 top-1/2 -translate-y-1/2',
  'divider-position-center': 'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',
  // for vertical
  'divider-position-bottom': 'bottom-4 left-1/2 -translate-x-1/2',
  'divider-position-top': 'top-4 left-1/2 -translate-x-1/2',

  // types of border
  'divider-type-solid': 'border-solid',
  'divider-type-dashed': 'border-dashed',
  'divider-type-dotted': 'border-dotted',
}

export const dynamicDivider = [
  [/^divider(-(\S+))?$/, ([, , c = 'gray']) => `border-${c}-300 dark:border-${c}-500 text-${c}-700 dark:text-${c}-400`],
]

export const divider = [
  ...dynamicDivider,
  staticDivider,
]
