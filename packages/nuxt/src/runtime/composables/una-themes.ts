import { colors } from '@unocss/preset-mini/colors'
import { hexToRgb } from '../utils'
import type { ColorPalette, Colors } from '../types'

type Shade = keyof ColorPalette

// filter out the primary colors from the color palette
const filteredPrimaryColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([key]) => [
      'blue', 'cyan', 'sky', 'amber',
      'yellow', 'emerald', 'lime', 'orange',
      'purple', 'indigo', 'pink', 'tomato',
      'green', 'fuchsia', 'violet', 'rose',
      'amber', 'red', 'teal',
    ].includes(key))
    .map(([key, value]) => [key, Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
    )]),
) as unknown as Record<string, ColorPalette>

// insert your custom primary colors here
filteredPrimaryColors.tomato = {
  50: '#fdf2f2',
  100: '#fde8e8',
  200: '#fbd5d5',
  300: '#f8b4b4',
  400: '#f98080',
  500: '#f05252',
  600: '#e02424',
  700: '#c81e1e',
  800: '#9b1c1c',
  900: '#771d1d',
  950: '#3f0708',
} satisfies ColorPalette

const filteredGrayColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([key]) => ['slate', 'gray', 'zinc', 'neutral', 'stone'].includes(key))
    .map(([key, value]) => [key, Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].includes(key)),
    )]),
) as unknown as Record<string, ColorPalette>

// insert your custom gray colors here
filteredGrayColors.sage = {
  50: '#f2f2f2',
  100: '#e6e6e6',
  200: '#d9d9d9',
  300: '#b8b8b8',
  400: '#939393',
  500: '#6f6f6f',
  600: '#4b4b4b',
  700: '#323232',
  800: '#1f1f1f',
  900: '#0b0b0b',
  950: '#000000',
} satisfies ColorPalette

filteredGrayColors.ash = {
  50: '#f9f9f8',
  100: '#f1f0ee',
  200: '#dad7d3',
  300: '#c3beb8',
  400: '#a9a49e',
  500: '#908c84',
  600: '#777168',
  700: '#5e5950',
  800: '#45403a',
  900: '#2c2823',
  950: '#161511',
} satisfies ColorPalette

filteredGrayColors.olive = {
  50: '#fafaf2',
  100: '#f5f5e6',
  200: '#ebebd9',
  300: '#d6d6b8',
  400: '#b3b393',
  500: '#8f8f6f',
  600: '#6b6b4b',
  700: '#4a4a32',
  800: '#2a2a1f',
  900: '#0e0e0b',
  950: '#000000',
} satisfies ColorPalette

filteredGrayColors.leaf = {
  50: '#f2faf2',
  100: '#e6f5e6',
  200: '#d9ebd9',
  300: '#b8d6b8',
  400: '#93b393',
  500: '#6f8f6f',
  600: '#4b6b4b',
  700: '#326432',
  800: '#1f2a1f',
  900: '#0b0e0b',
  950: '#000000',
} satisfies ColorPalette

// merge the primary colors and the gray colors
const filteredColors = {
  ...filteredPrimaryColors,
  ...filteredGrayColors,
} as Record<string, ColorPalette>

export default function useUnaThemes() {
  // transfer to utils
  function getColors(color: string, prefix: string): Colors {
    const colorPalette: ColorPalette = filteredColors[color]

    if (!colorPalette)
      throw new Error(`Invalid primary color: ${color}`)

    const colors = {} as Required<Colors> // Initialize an empty object to store the theme colors

    colors[`--una-${prefix}-hex`] = colorPalette[600] as string // Assign the primary color hex code to the corresponding theme variable

    // Iterate over each shade in the color palette and assign it to the corresponding theme variable
    for (const shade of Object.keys(colorPalette) as unknown as Shade[])
      colors[`--una-${prefix}-${shade}`] = hexToRgb(colorPalette[shade]).join(', ')

    return colors
  }

  const primaryThemes = Object.entries(filteredPrimaryColors).map(([color]) => [
    color,
    getColors(color, 'primary'),
  ]) as [string, Colors][]

  const grayThemes = Object.entries(filteredGrayColors).map(([color]) => [
    color,
    getColors(color, 'gray'),
  ]) as [string, Colors][]

  const getPrimaryColors = (color: string) => {
    return primaryThemes.filter(([colorName, _]) => colorName === color)[0][1]
  }

  const getGrayColors = (color: string) => {
    return grayThemes.filter(([colorName, _]) => colorName === color)[0][1]
  }

  return {
    primaryThemes, grayThemes, getPrimaryColors, getGrayColors,
  }
}
