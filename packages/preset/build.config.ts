import { writeFileSync } from 'fs-extra'
import { defineBuildConfig } from 'unbuild'
import sass from 'sass'

export default defineBuildConfig({
  entries: [
    'src/index',
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
        'dist/style.css',
        compiledSass.css,
        { encoding: 'utf-8' },
      )
    },
  },
})
