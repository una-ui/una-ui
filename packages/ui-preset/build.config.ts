import { writeFileSync } from 'fs-extra'
import { defineBuildConfig } from 'unbuild'
import sass from 'sass'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/shortcuts',
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
  ],
  hooks: {
    'mkdist:done': () => {
      const compiledSass = sass.compile('./src/index.scss', { style: 'compressed', loadPaths: ['./node_modules/'] })
      writeFileSync(
        'style.css',
        compiledSass.css,
        { encoding: 'utf-8' },
      )
    },
  },
})
