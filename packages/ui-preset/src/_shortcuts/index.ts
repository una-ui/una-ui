import type { Preset, StaticShortcutMap } from '@unocss/core'
import { button } from './button'
import { dynamicInput, staticInput } from './input'
import { staticGeneral } from './general'

export const shortcuts = [
  /* dynamic */
  ...button,
  ...dynamicInput,

  /* static */
  staticGeneral,
  staticInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
