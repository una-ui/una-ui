import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const _filename = fileURLToPath(import.meta.url)

// relative to scripts directory
const destinations = [
  ['../README.md', '../packages/nuxt/README.md'],
  ['../README.md', '../packages/preset/README.md'],
]

destinations.forEach(([src, dest]) => {
  copyFileSync(resolve(_filename, '..', src), resolve(_filename, '..', dest))
})
