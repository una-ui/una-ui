import type { Preset, StaticShortcutMap } from '@unocss/core'
import { dynamicButton, staticButton } from './button'
import { dynamicInput, staticInput } from './input'
import { staticGeneral } from './general'

export const shortcuts = [
  /* static */
  staticGeneral,
  staticButton,
  staticInput,

  /* dynamic */
  ...dynamicButton,
  ...dynamicInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
