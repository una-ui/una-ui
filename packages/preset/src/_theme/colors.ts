import type { Theme } from './types'
import { gray, primary } from './default-colors'
import radixColors from './radix-colors'

export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...radixColors,
  ...gray,
  ...primary,
} satisfies Theme['colors']

// assign default color
Object.values(colors as Required<Theme>['colors']).forEach((color) => {
  if (typeof color !== 'string' && color !== undefined)
    color.DEFAULT = color.DEFAULT || color[9] as string
})
