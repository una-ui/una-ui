import chroma from 'chroma-js'
import { colors } from './generate-themes'

// write gray-theme.css
const grayName = colors.slate
const grayDarkName = colors.slateDark
const grayThemeLight = Object.entries(grayName).map(([name, color], key) => {
  return `--c-gray-${key + 1}: ${chroma(color).rgb()};`
}).join(' ')

const grayThemeDark = Object.entries(grayDarkName).map(([name, color], key) => {
  return `--c-dark-gray-${key + 1}: ${chroma(color).rgb()};`
}).join('')

export const grayTheme = grayThemeLight + grayThemeDark

export const grayColors = Object.entries(grayName).map(([name, color], key) => {
  return `${key + 1}: 'rgb(var(--c-gray-${key + 1}) / <alpha-value>)'`
}).join(',')

// write primary-theme.css
const primaryName = colors.tomato
const primaryDarkName = colors.tomatoDark
const primaryThemeLight = Object.entries(primaryName).map(([name, color], key) => {
  return `--c-primary-${key + 1}: ${chroma(color).rgb()};`
}).join(' ')

const primaryThemeDark = Object.entries(primaryDarkName).map(([name, color], key) => {
  return `--c-dark-primary-${key + 1}: ${chroma(color).rgb()};`
}).join('')

export const primaryTheme = primaryThemeLight + primaryThemeDark

export const primaryColors = Object.entries(primaryName).map(([name, color], key) => {
  return `${key + 1}: 'rgb(var(--c-primary-${key + 1}) / <alpha-value>)'`
}).join(',')
