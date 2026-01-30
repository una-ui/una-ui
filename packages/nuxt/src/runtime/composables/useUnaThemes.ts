import type { Theme } from '@unocss/preset-wind4'
import type { Colors, UnaSettings } from '../types'
import { colors } from '@unocss/preset-wind4/colors'

// filter out the primary colors from the color palette + insert 0 and 1000 for each color
const filteredPrimaryColors = (() => {
  const primaryColors = Object.fromEntries(
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
        'red',
        'teal',
      ].includes(key))
      .map(([key, value]) => [
        key,
        Object.fromEntries(
          Object.entries(value as Record<string, string>)
            .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
        ),
      ]),
  )

  return primaryColors
})()

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

export function useUnaThemes() {
  const primaryThemes = Object.entries(filteredPrimaryColors).map(([color]) => [
    color,
    getColors(color, 'primary'),
  ]) as [string, Colors][]

  const grayThemes = Object.entries(filteredGrayColors).map(([color]) => [
    color,
    getColors(color, 'gray'),
  ]) as [string, Colors][]

  function getColors(color: string, prefix: string): Colors {
    const colorPalette = filteredColors[color] as Colors

    if (!colorPalette)
      throw new Error(`Invalid primary color: ${color}`)

    // Initialize an empty object to store the theme colors
    const colors: Colors = {}

    // Iterate over each shade in the color palette and assign it to the corresponding theme variable
    for (const shade of Object.keys(colorPalette)) {
      const value = colorPalette[shade] as string
      if (value.startsWith('oklch('))
        colors[`--una-${prefix}-${shade}`] = value.replace('oklch(', '').replace(')', '')
    }

    // Assign the primary color hex code to the corresponding theme variable
    colors[`--una-${prefix}-hex`] = colorPalette[600]

    return colors
  }

  function getPrimaryColors(color: string, defaultColor: string = 'yellow'): Colors {
    const theme = primaryThemes.find(([colorName, _]) => colorName === color)
    if (!theme)
      return getPrimaryColors(defaultColor)

    return theme[1]
  }

  function getGrayColors(color: string, defaultColor: string = 'stone'): Colors {
    const theme = grayThemes.find(([colorName, _]) => colorName === color)
    if (!theme)
      return getGrayColors(defaultColor)

    return theme[1]
  }

  const themes = [] satisfies UnaSettings['themes']

  return {
    primaryThemes,
    grayThemes,
    themes,
    getPrimaryColors,
    getGrayColors,
  }
}
