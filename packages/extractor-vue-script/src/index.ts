import type { Extractor } from '@unocss/core'
import type { RootNode } from '@vue/compiler-core'
import * as babel from '@babel/types'
import { defaultSplitRE } from '@unocss/core'
import { NodeTypes, transform as transformVueTemplate } from '@vue/compiler-core'
import { parse as parseSFC } from '@vue/compiler-sfc'
import { parseModule } from 'magicast'
import { parsePath } from 'ufo'

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

function getLiteralValue(node: babel.Expression | babel.PatternLike): any {
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

function getObjectLiteralValue(node: babel.ObjectExpression): object {
  return Object.fromEntries(
    node.properties
      .filter(prop => prop.type === 'ObjectProperty')
      .flatMap((prop) => {
        const key = prop.key.type === 'Identifier' ? prop.key.name : prop.key.type === 'StringLiteral' ? prop.key.value : null
        if (!key) {
          return []
        }
        return [[key, getLiteralValue(prop.value)]]
      }),
  )
}

function discoverVariants(node: babel.Node, prefixes: string[]): string[] {
  const result: [string, string][] = []
  babel.traverse(node, {
    enter(node) {
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

function parseCodeAst(code: string, id?: string) {
  const { $ast: node } = parseModule(code, {
    sourceFileName: id,
  })
  return node
}

function extractTemplateExpressions(node: RootNode): babel.Node[] {
  const expressions: babel.Node[] = []
  transformVueTemplate(node as any, {
    nodeTransforms: [
      // readonly "transformer", doesn't do any changes
      (node) => {
        if (node.type === NodeTypes.ELEMENT) {
          node.props.forEach((prop) => {
            if (prop.type === NodeTypes.DIRECTIVE && prop.exp?.ast) {
              expressions.push(prop.exp.ast)
            }
          })
        }
      },
    ],
  })
  return expressions
}

function extractorVueScript(options?: ExtractorVueScriptOptions): Extractor {
  return {
    name: '@una-ui/extractor-vue-script',
    order: 0,
    async extract({ code, id }) {
      // the id can contain query parameters, so we need to clean it up
      const astExprs = []
      const cleanPath = parsePath(id).pathname
      if (cleanPath.endsWith('.vue')) {
        const sfc = parseSFC(code, {
          filename: cleanPath,
        })
        if (sfc.descriptor.script) {
          astExprs.push(parseCodeAst(sfc.descriptor.script.content))
        }
        if (sfc.descriptor.scriptSetup) {
          astExprs.push(parseCodeAst(sfc.descriptor.scriptSetup.content))
        }
        if (sfc.descriptor.template?.ast) {
          // parse template bindings
          astExprs.push(...extractTemplateExpressions(sfc.descriptor.template.ast))
        }
      }
      else {
        astExprs.push(parseCodeAst(code, id))
      }

      const prefixes = normalizePrefixes(options?.prefixes ?? [])
      return Array.from(astExprs
        .map((node) => {
          const regularResults = discoverVariants(node, prefixes)
          return new Set(regularResults)
        })
        .reduce((a, b) => a.union(b), new Set()),
      )
    },
  }
}

export default extractorVueScript
