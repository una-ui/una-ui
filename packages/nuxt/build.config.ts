import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/una.config',
  ],
  externals: [
    'nuxt',
    'nuxt/schema',
    '@nuxt/schema',
    '@nuxt/kit',
  ],
})
