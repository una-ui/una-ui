import { readdirSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

import extratorUna from './packages/extractor-vue-script/src/index'
import presetUna from './packages/preset/src/index'
import prefixes from './packages/preset/src/prefixes'

/**
 * Search a directory for all files with a `.ts` extension
 * and return their absolute paths.
 *
 * This is a workaround for unocss/unocss#2613
 *
 * @param dir The directory to read
 * @returns An array of file paths
 */
function getAllConfigFiles(dir: string): string[] {
  const basedir = join(dirname(fileURLToPath(import.meta.url)), dir)
  const files = readdirSync(basedir)
  return files.filter(file => extname(file) === '.ts').map(file => join(basedir, file))
}

export default defineConfig({
  safelist: [
    'i-radix-icons-github-logo',
    'i-tabler-brand-x',
    'i-tabler-brand-discord-filled',
    'i-heroicons-arrow-up-right',
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1em',
        'width': '1em',
        'vertical-align': 'middle',
      },
    }),
    presetUna(),
    presetAnimations(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Geist',
        mono: 'GeistMono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
  configDeps: [
    ...getAllConfigFiles('./packages/preset/src/_shortcuts'),
  ],
})
