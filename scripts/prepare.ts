import fs from 'fs-extra'
import { grayColors, grayDarkTheme, grayTheme, primaryColors, primaryDarkTheme, primaryTheme } from './theme-generator'

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

await fs.writeFile('./packages/preset/src/_style/default-vars.css',
  `:root{ ${primaryTheme} }\n:root{ ${grayTheme} }\n.dark{ ${primaryDarkTheme};${grayDarkTheme} }`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_theme/default-colors.ts',
  `export const primary = { primary: { ${primaryColors} } }\nexport const gray = { gray: { ${grayColors} } }\n`,
  { encoding: 'utf-8' })
