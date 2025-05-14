import type { Extractor } from '@unocss/core'
import { defaultSplitRE } from '@unocss/core'

interface ExtractorVueScriptOptions {
  /**
   * @default []
   * @description List of prefixes to extract from the vue-script code.
   */
  prefixes?: string[]
}

function generateSelectors(prefix: string, values: string[]): string[] {
  // eg convert prefix to kebab-case
  prefix = prefix.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  return values
    .filter(v => Boolean(v) && v !== ':')
    .map(v => `[${prefix}~="${v}"]`)
}

function splitCodeWithArbitraryVariants(code: string, prefixes: string[]): string[] {
  const result: string[] = []
  const camelCasePrefixes = prefixes.map(prefix => prefix.replace(/-([a-z])/g, (_, c) => c.toUpperCase()))

  prefixes = [...new Set([...prefixes, ...camelCasePrefixes])]

  for (const prefix of prefixes) {
    const regex = new RegExp(`\\b${prefix}\\s*:\\s*(?:['"]([^'"]*)['"]|{[^}]*\\bdefault\\s*:\\s*['"]([^'"]*)['"]\\s*,?.*?})`, 'gms')
    let match: RegExpExecArray | null

    while (true) {
      match = regex.exec(code)
      if (match === null)
        break
      const values = (match[1] ?? match[2]).split(defaultSplitRE)
      const selectors = generateSelectors(prefix, values)

      result.push(...selectors)
    }
  }

  return result
}

function extractorVueScript(options?: ExtractorVueScriptOptions): Extractor {
  return {
    name: '@una-ui/extractor-vue-script',
    order: 0,
    async extract({ code }) {
      return splitCodeWithArbitraryVariants(code, options?.prefixes ?? [])
    },
  }
}

export default extractorVueScript
