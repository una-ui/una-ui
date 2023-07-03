import type { Preset, StaticShortcutMap } from '@unocss/core'
import { dynamicButton, staticButton } from './button'
import { dynamicInput, staticInput } from './input'
import { staticGeneral } from './general'

export const shortcuts = [
  /* dynamic */
  ...dynamicButton,
  ...dynamicInput,

  /* static */
  staticGeneral,
  staticButton,
  staticInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
