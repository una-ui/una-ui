import type { Preset, StaticShortcutMap } from '@unocss/core'
import { icon } from './icon'
import { accordion } from './accordion'
import { button } from './button'
import { formGroup } from './form-group'
import { input } from './input'
import { general } from './general'
import { _switch } from './switch'
import { alert } from './alert'
import { badge } from './badge'

export const shortcuts = [
  ...general,
  ...accordion,
  ...button,
  ...formGroup,
  ...input,
  ...icon,
  ..._switch,
  ...alert,
  ...badge,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
