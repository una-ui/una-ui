import fs from 'fs-extra'
import chroma from 'chroma-js'
import { colors } from './generate-themes'

const theme = Object.entries(colors).map(([name, color], key) => {
  return `${name}: ${
    typeof color === 'string'
      ? `'${color}'`
      : `{ ${Object.entries(color).map(([keyName, value], key) => {
          return `${key + 1}: '${chroma(value).hex()}'`
        },
      ).join(', \n')} }`
    }${key === Object.keys(colors).length - 1 ? '' : ','
  }`
}).join('\n')

await fs.writeFile('./packages/preset/src/_theme/radix-colors.ts',
  `export default {\n${theme}}`,
  { encoding: 'utf-8' })
