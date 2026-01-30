#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { consola } from 'consola'

interface ThemeColors {
  [key: string]: string
}

interface ConvertedTheme {
  cssVars: {
    light: ThemeColors
    dark: ThemeColors
  }
}

export function convertTheme(cssInput: string, showDebug: boolean = true): ConvertedTheme {
  const lightVars: ThemeColors = {}
  const darkVars: ThemeColors = {}

  // Parse :root variables (light mode) - fixed regex with /s flag for multiline
  const rootMatch = cssInput.match(/:root\s*\{([^}]+)\}/)
  if (rootMatch) {
    const rootContent = rootMatch[1]
    parseVariables(rootContent, lightVars, showDebug)
  }

  // Parse .dark variables (dark mode) - fixed regex with /s flag for multiline
  const darkMatch = cssInput.match(/\.dark\s*\{([^}]+)\}/)
  if (darkMatch) {
    const darkContent = darkMatch[1]
    parseVariables(darkContent, darkVars, showDebug)
  }

  return {
    cssVars: {
      light: lightVars,
      dark: darkVars,
    },
  }
}

function parseVariables(cssContent: string, target: ThemeColors, showDebug: boolean = true): void {
  // Match CSS variable declarations with more robust regex that handles whitespace and line breaks
  const variableRegex = /--([^:]+):\s*oklch\(([^)]+)\)\s*;/g
  const matches = Array.from(cssContent.matchAll(variableRegex))

  if (showDebug) {
    consola.info(`Found ${matches.length} oklch variables`)
  }

  for (const match of matches) {
    const varName = match[1].trim()
    const oklchValue = match[2].trim()

    // Skip non-color variables (font, radius, shadow)
    if (varName.startsWith('font-') || varName === 'radius' || varName.startsWith('shadow')) {
      continue
    }

    // Convert to Una format
    const unaVarName = `--una-${varName}`
    target[unaVarName] = oklchValue
  }
}

export function convertThemeToString(cssInput: string, themeName: string = 'converted-theme', showDebug: boolean = true): string {
  const converted = convertTheme(cssInput, showDebug)

  const output = `{
  name: '${themeName}',
  cssVars: {
    light: {
${Object.entries(converted.cssVars.light).map(([key, value]) => `      '${key}': '${value}',`).join('\n')}
    },
    dark: {
${Object.entries(converted.cssVars.dark).map(([key, value]) => `      '${key}': '${value}',`).join('\n')}
    },
  },
}`

  return output
}

// Helper function for interactive input
async function getInteractiveInput(_themeName: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  consola.info('🎨 Interactive Theme Converter')
  consola.info('Paste your CSS theme below (press Enter twice when done):')
  consola.info('─'.repeat(50))

  let cssInput = ''
  let emptyLineCount = 0

  return new Promise((resolve) => {
    rl.on('line', (line) => {
      if (line.trim() === '') {
        emptyLineCount++
        if (emptyLineCount >= 2) {
          rl.close()
          return
        }
      }
      else {
        emptyLineCount = 0
      }
      cssInput += `${line}\n`
    })

    rl.on('close', () => {
      resolve(cssInput.trim())
    })
  })
}

// CLI functionality
async function main() {
  const args = process.argv.slice(2)

  let cssInput: string
  let themeName: string
  let rawOutput = false

  // Check for --raw flag
  if (args.includes('--raw')) {
    rawOutput = true
    // Remove --raw from args
    const rawIndex = args.indexOf('--raw')
    args.splice(rawIndex, 1)
  }

  // If no arguments (or only --raw), go interactive
  if (args.length === 0) {
    themeName = 'converted-theme'
    cssInput = await getInteractiveInput(themeName)
    if (!rawOutput)
      consola.info(`\n✨ Processing your theme...`)
  }
  else if (args[0] === '--file') {
    if (args.length < 2) {
      consola.error('Please provide a file path after --file')
      process.exit(1)
    }

    const filePath = args[1]
    if (!existsSync(filePath)) {
      consola.error(`File not found: ${filePath}`)
      process.exit(1)
    }

    cssInput = readFileSync(filePath, 'utf-8')
    themeName = args[2] || 'converted-theme'
    if (!rawOutput)
      consola.info(`Reading CSS from file: ${filePath}`)
  }
  else if (args[0] === '--help' || args[0] === '-h') {
    consola.info('🎨 Una UI Theme Converter')
    consola.info('')
    consola.info('Usage:')
    consola.info('  pnpm run tweak-converter                              # Interactive mode (default)')
    consola.info('  pnpm run tweak-converter --file <css-file> [name]     # Convert from file')
    consola.info('  pnpm run tweak-converter "<css-string>" [name]        # Convert from string')
    consola.info('')
    consola.info('Options:')
    consola.info('  --raw           Output plain text for easy copying')
    consola.info('  --help, -h      Show this help message')
    consola.info('')
    consola.info('Examples:')
    consola.info('  pnpm run tweak-converter --raw')
    consola.info('  pnpm run tweak-converter --file theme.css my-theme')
    process.exit(0)
  }
  else {
    cssInput = args[0]
    themeName = args[1] || 'converted-theme'
  }

  try {
    if (!rawOutput) {
      consola.start('Converting theme...')
      const converted = convertTheme(cssInput, true)
      consola.success(`Theme converted successfully! Found ${Object.keys(converted.cssVars.light).length + Object.keys(converted.cssVars.dark).length} color variables`)
    }

    const result = convertThemeToString(cssInput, themeName, !rawOutput)

    if (rawOutput) {
      // Plain output for easy copying - no extra logs
      consola.info(result)
    }
    else {
      // Fancy formatted output
      consola.box(result)
      consola.info('💡 Tip: Use --raw flag for plain text output that\'s easy to copy!')
    }
  }
  catch (error) {
    if (!rawOutput) {
      consola.error('Error converting theme:', error)
    }
    else {
      console.error('Error:', error)
    }
    process.exit(1)
  }
}

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
