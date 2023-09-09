import type { Extractor } from '@unocss/core'
import { defaultSplitRE } from '@unocss/core'

const prefixes = ['badge', 'size', 'btn']

function generateSelectors(prefix: string, values: string[]): string[] {
  return values
    .filter(v => Boolean(v) && v !== ':')
    .map(v => `[${prefix}~="${v}"]`)
}

export function splitCodeWithArbitraryVariants(code: string): string[] {
  const result: string[] = []

  for (const prefix of prefixes) {
    const regex = new RegExp(`^\\s*${prefix}:\\s+'.*',?\\s*$`, 'mg')
    const matches = code.match(regex)

    if (!matches)
      continue

    for (const match of matches) {
      const values = match.replace(/^.*:\s*'(.*)',?\s*$/, '$1').split(defaultSplitRE)
      const selectors = generateSelectors(prefix, values)

      result.push(...selectors)
    }
  }

  return result
}

export const myExtractors: Extractor = {
  name: 'my-extractors',
  order: 0,
  extract({ code }) {
    return splitCodeWithArbitraryVariants(code)
  },
}

export default myExtractors
