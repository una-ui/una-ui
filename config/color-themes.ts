import type { Theme } from '@unocss/preset-wind4'
import { colors } from '@unocss/preset-wind4/colors'
import chroma from 'chroma-js'

// filter out the primary colors from the color palette
const filteredPrimaryColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([key]) => [
      'blue',
      'cyan',
      'sky',
      'amber',
      'yellow',
      'emerald',
      'lime',
      'orange',
      'purple',
      'indigo',
      'pink',
      'tomato',
      'green',
      'fuchsia',
      'violet',
      'rose',
      'amber',
      'red',
      'teal',
    ].includes(key))
    .map(([key, value]) => [key, Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
    )]),
)

const filteredGrayColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([key]) => ['slate', 'gray', 'zinc', 'neutral', 'stone'].includes(key))
    .map(([key, value]) => [key, Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
    )]),
) as unknown as Record<string, Theme['colors']>

// merge the primary colors and the gray colors
const filteredColors = {
  ...filteredPrimaryColors,
  ...filteredGrayColors,
} as Record<string, Theme['colors']>

export function getColors(color: string, prefix: string): Record<string, string> {
  const colorPalette: Theme['colors'] = filteredColors[color]

  if (!colorPalette)
    throw new Error(`Invalid primary color: ${color}`)

  const colors: Record<string, string> = {} // Initialize with a more specific type

  colors[`--una-${prefix}-hex`] = chroma(colorPalette[600] as string).hex() // Assign the primary color hex code to the corresponding theme variable

  // Iterate over each shade in the color palette and assign it to the corresponding theme variable
  for (const shade of Object.keys(colorPalette) as unknown as (keyof Theme['colors'])[]) {
    colors[`--una-${prefix}-${shade}`] = colorPalette[shade] as string
  }

  return colors
}

export const primaryThemes = Object.entries({ ...filteredPrimaryColors, ...filteredGrayColors }).map(([color]) => [
  color,
  getColors(color, 'primary'),
]) as [string, Record<string, string>][]

export const grayThemes = Object.entries({ ...filteredPrimaryColors, ...filteredGrayColors }).map(([color]) => [
  color,
  getColors(color, 'gray'),
]) as [string, Record<string, string>][]
