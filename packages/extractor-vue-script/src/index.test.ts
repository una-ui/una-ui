import { expect, it } from 'vitest'
import extractorVueScript from './index'

const prefixes = [
  'size',
]

const extractor = extractorVueScript({ prefixes })

async function extract(code: string): Promise<string[]> {
  /* @ts-expect-error extract accepts {code} and returns string[] */
  return await extractor.extract!({ code })
}

it('test extractor typescript with defaults', async () => {
  const code = `
const props = withDefaults(defineProps<{size?: string}>(), {
    size: 'md'
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~=\"md\"]'])
})

it('test extractor vue object prop default', async () => {
  const code = `
const props = defineProps({
    size: { type: String, default: 'md' }
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~=\"md\"]'])
})

it.todo('test extractor quote agnostic', async () => {
  const code = `
defineProps({
    size: {type: String, default: "md"}
})
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~=\"md\"]'])
})

it.todo('test extractor prop destructure', async () => {
  const code = `
const {size = "md"} = defineProps<{size?: string}>()
`
  const result = await extract(code)
  expect(result).toStrictEqual(['[size~=\"md\"]'])
})
