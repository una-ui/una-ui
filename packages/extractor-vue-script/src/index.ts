import { defaultSplitRE } from '@unocss/core'
import type { Extractor } from '@unocss/core'
import type { ExtractorVueScriptOptions } from './types'

function generateSelectors(prefix: string, values: string[]): string[] {
  return values
    .filter(v => Boolean(v) && v !== ':')
    .map(v => `[${prefix}~="${v}"]`)
}

export function splitCodeWithArbitraryVariants(code: string, prefixes: string[]): string[] {
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

export default function extractor(options?: ExtractorVueScriptOptions): Extractor {
  return {
    name: '@una-ui/extractor-vue-script',
    order: 0,
    async extract({ code }) {
      return splitCodeWithArbitraryVariants(code, options?.prefixes ?? [])
    },
  }
}
