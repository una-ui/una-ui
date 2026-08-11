import type { Rule } from '@unocss/core'
import { scrollFade, scrollFadePreflight } from './scroll-fade'
import { scrollbar } from './scrollbar'

export const rules: Rule[] = [
  ...scrollbar,
  ...scrollFade,
]

export const preflights = [
  scrollFadePreflight,
]

export { scrollbar, scrollFade, scrollFadePreflight }
