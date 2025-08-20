import { expect, it } from 'vitest'
import extractorVueScript from './index'

const prefixes = [
  'size',
  'badge',
  'btn',
]

const extractor = extractorVueScript({ prefixes })

async function extract(code: string, id?: string): Promise<string[]> {
  /* @ts-expect-error extract accepts {code} and returns string[] */
  return await extractor.extract!({ code, id })
}

it('test extractor typescript with defaults', async () => {
  const code = `
const props = withDefaults(defineProps<{size?: string}>(), {
    size: 'md'
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~="md"]'])
})

it('test extractor vue object prop default', async () => {
  const code = `
const props = defineProps({
    size: { type: String, default: 'md' }
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~="md"]'])
})

it('test extractor double quotes', async () => {
  const code = `
defineProps({
    size: {type: String, default: "md"}
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~="md"]'])
})

// New tests for conditional statements
it('test extractor simple ternary operator', async () => {
  const code = `
const badges = [
  {
    badge: status.value === 'success' ? 'solid-violet' : 'outline-primary',
  }
]
`
  const result = await extract(code)
  expect(result).toContain('[badge~="solid-violet"]')
  expect(result).toContain('[badge~="outline-primary"]')
})

it('test extractor ternary with kebab-case prefix', async () => {
  const code = `
const config = {
  btn: isActive ? 'solid-blue' : 'ghost-gray'
}
`
  const result = await extract(code)
  expect(result).toContain('[btn~="solid-blue"]')
  expect(result).toContain('[btn~="ghost-gray"]')
})

it('test extractor ternary with template literals', async () => {
  const code = `
const config = {
  badge: condition ? \`solid-green\` : \`outline-red\`
}
`
  const result = await extract(code)
  expect(result).toContain('[badge~="solid-green"]')
  expect(result).toContain('[badge~="outline-red"]')
})

it('test extractor ternary with multiple spaces', async () => {
  const code = `
const config = {
  size  :   isLarge   ?   'lg'   :   'sm'  
}
`
  const result = await extract(code)
  expect(result).toContain('[size~="lg"]')
  expect(result).toContain('[size~="sm"]')
})

it('test extractor ternary with complex condition', async () => {
  const code = `
const config = {
  badge: status.value === 'info' && isActive ? 'solid-blue' : 'outline-primary'
}
`
  const result = await extract(code)
  expect(result).toContain('[badge~="solid-blue"]')
  expect(result).toContain('[badge~="outline-primary"]')
})

it('test extractor multiple ternaries', async () => {
  const code = `
const badges = [
  {
    badge: status === 'success' ? 'solid-green' : 'outline-gray',
    size: isLarge ? 'lg' : 'sm'
  }
]
`
  const result = await extract(code)
  expect(result).toContain('[badge~="solid-green"]')
  expect(result).toContain('[badge~="outline-gray"]')
  expect(result).toContain('[size~="lg"]')
  expect(result).toContain('[size~="sm"]')
})

it('test extractor ternary with compound classes', async () => {
  const code = `
const config = {
  btn: isPrimary ? 'solid-blue hover:solid-blue-600' : 'outline-gray hover:outline-gray-600'
}
`
  const result = await extract(code)
  expect(result).toContain('[btn~="solid-blue"]')
  expect(result).toContain('[btn~="hover:solid-blue-600"]')
  expect(result).toContain('[btn~="outline-gray"]')
  expect(result).toContain('[btn~="hover:outline-gray-600"]')
})

it('test extractor mixed regular and conditional', async () => {
  const code = `
const props = withDefaults(defineProps<{size?: string}>(), {
    size: 'md'
})

const config = {
  badge: isActive ? 'solid-blue' : 'outline-primary'
}
`
  const result = await extract(code)
  expect(result).toContain('[size~="md"]')
  expect(result).toContain('[badge~="solid-blue"]')
  expect(result).toContain('[badge~="outline-primary"]')
})

it('test extractor deduplicates results', async () => {
  const code = `
const config = {
  badge: first ? 'solid-blue' : 'outline-primary',
  size: second ? 'solid-blue' : 'lg'
}
`
  const result = await extract(code)
  const solidBlueCount = result.filter(r => r === '[badge~="solid-blue"]' || r === '[size~="solid-blue"]').length
  expect(solidBlueCount).toBe(2) // Should have both [badge~="solid-blue"] and [size~="solid-blue"]

  // Check no duplicates in the final result
  expect(result.length).toBe(new Set(result).size)
})

it('test extractor prop destructure', async () => {
  const code = `
const {size = "md"} = defineProps<{size?: string}>()
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~="md"]'])
})

it('test vue sfc syntax is parsed correctly', async () => {
  const code = `
<script setup lang="ts">
const props = withDefaults(defineProps<{size?: string}>(), {
    size: 'md'
})
</script>
<template>
  <div :size>Content</div>
</template>
`
  const result = await extract(code, 'index.vue')
  expect(result).toStrictEqual(['[size~="md"]'])
})
