import fs from 'fs-extra'
import { grayColors, grayDarkTheme, grayTheme, primaryColors, primaryDarkTheme, primaryTheme } from './theme-generator'
import { radixTheme } from './radix-generator'

await fs.writeFile('./packages/preset/src/_theme/radix-colors.ts',
  `export default {\n${radixTheme}}`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_style/default-vars.css',
  `:root{ ${primaryTheme} }\n:root{ ${grayTheme} }\n.dark{ ${primaryDarkTheme};${grayDarkTheme} }`,
  { encoding: 'utf-8' })

await fs.writeFile('./packages/preset/src/_theme/default-colors.ts',
  `export const primary = { primary: { ${primaryColors} } }\nexport const gray = { gray: { ${grayColors} } }\n`,
  { encoding: 'utf-8' })
