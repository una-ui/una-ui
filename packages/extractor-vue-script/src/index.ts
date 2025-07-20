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

function normalizePrefixes(prefixes: string[]): string[] {
  const camelCasePrefixes = prefixes.map(prefix => prefix.replace(/-([a-z])/g, (_, c) => c.toUpperCase()))
  return [...new Set([...prefixes, ...camelCasePrefixes])]
}

function splitCodeWithArbitraryVariants(code: string, prefixes: string[]): string[] {
  const result: string[] = []
  const normalizedPrefixes = normalizePrefixes(prefixes)

  for (const prefix of normalizedPrefixes) {
    const regex = new RegExp(`\\b${prefix}\\s*:\\s*(?:['"]([^'"]*)['"]|{[^}]*\\bdefault\\s*:\\s*['"]([^'"]*)['"]\\s*,?.*?})`, 'gms')
    let match: RegExpExecArray | null

    // eslint-disable-next-line no-cond-assign
    while ((match = regex.exec(code)) !== null) {
      const values = (match[1] ?? match[2]).split(defaultSplitRE)
      const selectors = generateSelectors(prefix, values)
      result.push(...selectors)
    }
  }

  return result
}

function extractConditionalStatements(code: string, prefixes: string[]): string[] {
  const result: string[] = []
  const normalizedPrefixes = normalizePrefixes(prefixes)

  for (const prefix of normalizedPrefixes) {
    // Match ternary operators: prefix: condition ? 'value1' : 'value2'
    // Also handles template literals and computed properties
    const ternaryRegex = new RegExp(
      `\\b${prefix}\\s*:\\s*[^?]*?\\?\\s*['"\`]([^'"\`]*?)['"\`]\\s*:\\s*['"\`]([^'"\`]*?)['"\`]`,
      'gms',
    )
    let match: RegExpExecArray | null

    // eslint-disable-next-line no-cond-assign
    while ((match = ternaryRegex.exec(code)) !== null) {
      const [, trueValue, falseValue] = match

      const allValues = [
        ...trueValue.split(defaultSplitRE),
        ...falseValue.split(defaultSplitRE),
      ]

      const selectors = generateSelectors(prefix, allValues)
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
      const prefixes = options?.prefixes ?? []

      const regularResults = splitCodeWithArbitraryVariants(code, prefixes)
      const conditionalResults = extractConditionalStatements(code, prefixes)

      return [...new Set([...regularResults, ...conditionalResults])]
    },
  }
}

export default extractorVueScript
