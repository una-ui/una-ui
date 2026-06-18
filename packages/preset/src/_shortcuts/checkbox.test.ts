import { theme } from '@unocss/preset-mini'
import { parseColor } from '@unocss/preset-mini/utils'
import { describe, expect, it } from 'vitest'

// Una UI custom color aliases (same as in checkbox.ts)
const unaColorAliases = new Set(['primary', 'error', 'warning', 'success', 'info', 'gray'])

// Simulates the checkbox color validation logic
function isValidCheckboxColor(body: string): boolean {
  // Check if it's a Una UI custom color alias
  if (unaColorAliases.has(body))
    return true

  // Check if it's a valid CSS color
  const color = parseColor(body, theme)
  return !!((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
}

describe('checkbox color validation', () => {
  it('should recognize standard CSS colors', () => {
    expect(isValidCheckboxColor('red')).toBe(true)
    expect(isValidCheckboxColor('blue')).toBe(true)
    expect(isValidCheckboxColor('green')).toBe(true)
  })

  it('should recognize Una UI custom color aliases', () => {
    expect(isValidCheckboxColor('primary')).toBe(true)
    expect(isValidCheckboxColor('error')).toBe(true)
    expect(isValidCheckboxColor('warning')).toBe(true)
    expect(isValidCheckboxColor('success')).toBe(true)
    expect(isValidCheckboxColor('info')).toBe(true)
    expect(isValidCheckboxColor('gray')).toBe(true)
  })

  it('should recognize color with shade suffix', () => {
    expect(isValidCheckboxColor('red-500')).toBe(true)
    expect(isValidCheckboxColor('blue-600')).toBe(true)
    expect(isValidCheckboxColor('gray-200')).toBe(true)
  })

  it('should reject non-color values (static class suffixes)', () => {
    expect(isValidCheckboxColor('wrapper')).toBe(false)
    expect(isValidCheckboxColor('label')).toBe(false)
    expect(isValidCheckboxColor('reverse')).toBe(false)
    expect(isValidCheckboxColor('indicator')).toBe(false)
    expect(isValidCheckboxColor('icon-base')).toBe(false)
    expect(isValidCheckboxColor('checked-icon')).toBe(false)
    expect(isValidCheckboxColor('unchecked-icon')).toBe(false)
    expect(isValidCheckboxColor('indeterminate-icon')).toBe(false)
  })

  it('should reject misspelled colors', () => {
    expect(isValidCheckboxColor('pruple')).toBe(false) // typo of purple
    expect(isValidCheckboxColor('grren')).toBe(false) // typo of green
    expect(isValidCheckboxColor('rde')).toBe(false) // typo of red
  })

  it('should reject arbitrary non-color strings', () => {
    expect(isValidCheckboxColor('foo')).toBe(false)
    expect(isValidCheckboxColor('bar')).toBe(false)
    expect(isValidCheckboxColor('some-random-string')).toBe(false)
  })
})
