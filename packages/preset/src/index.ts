import type { Preset } from 'unocss'
import { theme } from './theme'
import { shortcuts } from './shortcuts'
import type { presetNexveltOptions } from './types'

export default function presetNexvelt(options: presetNexveltOptions = {}): Preset {
  return {
    name: '@nexvelt/ui-preset',
    shortcuts,
    theme,
  }
}
