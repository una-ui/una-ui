import fs from 'fs-extra'
import { grayColors, grayTheme, primaryColors, primaryTheme } from './theme-generator'

// const theme = Object.entries(colors).map(([name, color], key) => {
//   return `${name}: ${
//     typeof color === 'string'
//       ? `'${color}'`
//       : `{ ${Object.entries(color).map(([keyName, value], key) => {
//           return `${key + 1}: '${chroma(value).hex()}'`
//         },
//       ).join(', \n')} }`
//     }${key === Object.keys(colors).length - 1 ? '' : ','
//   }`
// }).join('\n')

// await fs.writeFile('./packages/preset/src/_theme/radix-colors.ts',
//   `export default {\n${theme}}`,
//   { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_style/gray-theme.css',
  `:root{${grayTheme}}`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_theme/gray-colors.ts',
  `export default {gray:{${grayColors}}}`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_style/primary-theme.css',
  `:root{${primaryTheme}}`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_theme/primary-colors.ts',
  `export default {primary:{${primaryColors}}}`,
  { encoding: 'utf-8' })
