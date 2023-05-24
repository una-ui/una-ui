import chroma from 'chroma-js'
import colors from './radix-colors'

export const radixTheme = Object.entries(colors).map(([name, color], key) => {
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
