import chroma from 'chroma-js'
import { colors } from './generate-themes'

// write gray-theme.css
const grayName = colors.slate
const grayDarkName = colors.slateDark
const grayThemeLight = Object.entries(grayName).map(([name, color], key) => {
  return `--n-gray-${key + 1}: ${chroma(color).rgb()};`
}).join(' ')

const grayThemeDark = Object.entries(grayDarkName).map(([name, color], key) => {
  return `--n-dark-gray-${key + 1}: ${chroma(color).rgb()};`
}).join('')

export const grayTheme = grayThemeLight + grayThemeDark

export const grayColors = Object.entries(grayName).map(([name, color], key) => {
  return `${key + 1}: 'rgb(var(--n-gray-${key + 1}) / <alpha-value>)'`
}).join(', ')

export const grayDarkTheme = Object.entries(grayName).map(([name, color], key) => {
  return `--n-gray-${key + 1}: var(--n-dark-gray-${key + 1})`
}).join('; ')

// write primary-theme.css
const primaryName = colors.orange
const primaryDarkName = colors.orangeDark
const primaryThemeLight = Object.entries(primaryName).map(([name, color], key) => {
  return `--n-primary-${key + 1}: ${chroma(color).rgb()};`
}).join(' ')

const primaryThemeDark = Object.entries(primaryDarkName).map(([name, color], key) => {
  return `--n-dark-primary-${key + 1}: ${chroma(color).rgb()};`
}).join(' ')

export const primaryTheme = primaryThemeLight + primaryThemeDark

export const primaryColors = Object.entries(primaryName).map(([name, color], key) => {
  return `${key + 1}: 'rgb(var(--n-primary-${key + 1}) / <alpha-value>)'`
}).join(', ')

export const primaryDarkTheme = Object.entries(primaryName).map(([name, color], key) => {
  return `--n-primary-${key + 1}: var(--n-dark-primary-${key + 1})`
}).join('; ')
