import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
    './src/una.config',
    { builder: 'mkdist', input: './src/runtime', outDir: './dist/runtime' },
  ],
  declaration: true,
  clean: true,
  externals: ['@unocss/nuxt'],
})
