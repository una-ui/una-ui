import type { Theme } from '@unocss/preset-wind4'
import type { Colors } from '../types'
import { colors } from '@unocss/preset-wind4/colors'

// filter out the primary colors from the color palette + insert 0 and 1000 for each color
const filteredPrimaryColors = (() => {
  const primaryColors = Object.fromEntries(
    Object.entries(colors)
      .filter(([key]) => [
        'black',
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
      .map(([key, value]) => [
        key,
        Object.fromEntries(
          Object.entries(value as Record<string, string>)
            .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
        ),
      ]),
  )

  // insert 0 and 1000 for each color
  for (const color of Object.keys(primaryColors)) {
    primaryColors[color][0] = '1 0 0'
    primaryColors[color][1000] = '0 0 0'
  }

  return primaryColors
})()

// insert white to primary colors
filteredPrimaryColors.black = {
  0: 'oklch(1 0 0)',
  50: 'oklch(1 0 0)',
  100: 'oklch(1 0 0)',
  200: 'oklch(1 0 0)',
  300: 'oklch(1 0 0)',
  400: 'oklch(1 0 0)',
  500: 'oklch(1 0 0)',
  600: 'oklch(1 0 0)',
  700: 'oklch(1 0 0)',
  800: 'oklch(1 0 0)',
  900: 'oklch(1 0 0)',
  950: 'oklch(1 0 0)',
  1000: 'oklch(0 0 0)',
}

// insert your custom primary colors here
// filteredPrimaryColors.tomato = {
//   50: '#fdf2f2',
//   100: '#fde8e8',
//   200: '#fbd5d5',
//   300: '#f8b4b4',
//   400: '#f98080',
//   500: '#f05252',
//   600: '#e02424',
//   700: '#c81e1e',
//   800: '#9b1c1c',
//   900: '#771d1d',
//   950: '#3f0708',
// }

const filteredGrayColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([key]) => ['slate', 'gray', 'zinc', 'neutral', 'stone'].includes(key))
    .map(([key, value]) => [key, Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
    )]),
) as unknown as Record<string, Theme['colors']>

// insert your custom gray colors here
// filteredGrayColors.sage = {
//   50: '#f2f2f2',
//   100: '#e6e6e6',
//   200: '#d9d9d9',
//   300: '#b8b8b8',
//   400: '#939393',
//   500: '#6f6f6f',
//   600: '#4b4b4b',
//   700: '#323232',
//   800: '#1f1f1f',
//   900: '#0b0b0b',
//   950: '#000000',
// }

// merge the primary colors and the gray colors
const filteredColors = {
  ...filteredPrimaryColors,
  ...filteredGrayColors,
} as Record<string, Theme['colors']>

export interface UseUnaThemesReturn {
  primaryThemes: [string, Colors][]
  grayThemes: [string, Colors][]
  getPrimaryColors: (color: string, defaultColor?: string) => Colors
  getGrayColors: (color: string, defaultColor?: string) => Colors
}

export function useUnaThemes(): UseUnaThemesReturn {
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

  return {
    primaryThemes,
    grayThemes,
    getPrimaryColors,
    getGrayColors,
  }
}
