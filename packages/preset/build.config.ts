import { writeFileSync } from 'fs-extra'
import sass from 'sass'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/shortcuts',
    'src/prefixes',
    // 'src/theme',
    // 'src/utils',
    // 'src/rules',
    // 'src/colors',
    // 'src/variants',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    'unocss',
    '@unocss/preset-mini',
  ],
  hooks: {
    'mkdist:done': () => {
      const compiledSass = sass.compile('./src/index.scss', { style: 'expanded', loadPaths: ['./node_modules/'] })
      writeFileSync(
        'una.css',
        `${compiledSass.css}\n`,
        { encoding: 'utf-8' },
      )
    },
  },
})
