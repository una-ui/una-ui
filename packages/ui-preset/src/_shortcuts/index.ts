import type { Preset, StaticShortcutMap } from '@unocss/core'
import { button } from './button'
import { formGroup } from './form-group'
import { dynamicInput, staticInput } from './input'
import { staticGeneral } from './general'

export const shortcuts = [
  ...button,
  ...formGroup,

  /* TODO */
  ...dynamicInput,
  staticGeneral,
  staticInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
