import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/una.config.ts',
  ],
  externals: [
    'nuxt',
    'nuxt/schema',
    '@nuxt/schema',
    '@nuxt/kit',
  ],
})
