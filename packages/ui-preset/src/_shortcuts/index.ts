import type { Preset, StaticShortcutMap } from '@unocss/core'
import { button } from './button'
import { formGroup } from './form-group'
import { input } from './input'
import { general } from './general'

export const shortcuts = [
  ...button,
  ...formGroup,
  ...input,
  ...general,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
