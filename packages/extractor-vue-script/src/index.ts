import type { Expression, Identifier, Node, ObjectExpression, PatternLike } from '@babel/types'
import type { Extractor } from '@unocss/core'
import traverseDefault from '@babel/traverse'
import { defaultSplitRE } from '@unocss/core'
import { parse } from '@vue/language-core'
import { parseModule } from 'magicast'
import { parsePath } from 'ufo'

// esm interop
const traverse = 'default' in traverseDefault
  ? (traverseDefault as any).default as typeof traverseDefault
  : traverseDefault

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

function getLiteralValue(node: Expression | PatternLike): any {
  if (node.type === 'ConditionalExpression') {
    return [node.consequent, node.alternate].map(getLiteralValue)
  }
  if (node.type === 'StringLiteral') {
    return node.value
  }
  if (node.type === 'TemplateLiteral') {
    if (node.expressions.length > 0) {
      return undefined // template literals with expressions are not supported
    }
    return node.quasis.map(q => q.value.cooked).join('')
  }
  if (node.type === 'ObjectExpression') {
    return getObjectLiteralValue(node)
  }
  return undefined
}

function getObjectLiteralValue(node: ObjectExpression): object {
  return Object.fromEntries(
    node.properties.filter(prop => prop.type === 'ObjectProperty')
      .filter((prop): prop is typeof prop & { key: Identifier } => prop.key.type === 'Identifier')
      .map((prop) => {
        const key = prop.key.name
        return [key, getLiteralValue(prop.value)]
      }),
  )
}

function discoverVariants(node: Node, prefixes: string[]): string[] {
  const result: [string, string][] = []
  traverse(node, {
    noScope: true, // scope doesn't work for some reason.
    enter({ node }) {
      // standard object properties
      if (node.type === 'ObjectExpression') {
        const object = getObjectLiteralValue(node)

        for (let [key, value] of Object.entries(object)) {
          if (prefixes.includes(key) && value) {
            if (!Array.isArray(value)) {
              value = [value]
            }
            for (let v of value) {
              if (typeof v === 'object' && v !== null && 'default' in v) {
                v = v.default
              }
              if (typeof v !== 'string') {
                continue // only string values are supported
              }
              result.push([key, v])
            }
          }
        }
      }

      // props unpacking
      if (node.type === 'AssignmentPattern') {
        const { left, right } = node
        if (
          left.type === 'Identifier'
          && right.type === 'StringLiteral'
        ) {
          const prefix = left.name
          const value = right.value
          if (prefixes.includes(prefix)) {
            result.push([prefix, value])
          }
        }
      }
    },
  })

  return result.flatMap(([key, v]) => {
    const values = v.split(defaultSplitRE)
    return generateSelectors(key, values)
  })
}

function extractorVueScript(options?: ExtractorVueScriptOptions): Extractor {
  return {
    name: '@una-ui/extractor-vue-script',
    order: 0,
    async extract({ code, id }) {
      // the id can contain query parameters, so we need to clean it up
      const cleanPath = parsePath(id).pathname
      if (cleanPath.endsWith('.vue')) {
        const sfc = parse(code)
        code = sfc.descriptor.scriptSetup?.content || sfc.descriptor.script?.content || ''
      }
      const { $ast: node } = parseModule(code, {
        sourceFileName: id,
      })

      const prefixes = normalizePrefixes(options?.prefixes ?? [])

      const regularResults = discoverVariants(node, prefixes)

      return [...new Set(regularResults)]
    },
  }
}

export default extractorVueScript
