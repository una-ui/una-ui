import type { Preset, StaticShortcutMap } from '@unocss/core'
import { accordion } from './accordion'
import { alert } from './alert'
import { animate } from './animate'
import { avatar } from './avatar'
import { avatarGroup } from './avatar-group'
import { badge } from './badge'
import { breadcrumb } from './breadcrumb'
import { btn } from './btn'
import { card } from './card'
import { checkbox } from './checkbox'
import { dialog } from './dialog'
import { dropdowMenu } from './dropdown-menu'
import { formGroup } from './form-group'
import { general } from './general'
import { icon } from './icon'
import { indicator } from './indicator'
import { input } from './input'
import { kbd } from './kbd'
import { label } from './label'
import { link } from './link'
import { navLink } from './nav-link'
import { navLinkGroup } from './nav-link-group'
import { pagination } from './pagination'
import { popover } from './popover'
import { progress } from './progress'
import { radio } from './radio'
import { select } from './select'
import { separator } from './separator'
import { skeleton } from './skeleton'
import { slider } from './slider'
import { _switch } from './switch'
import { table } from './table'
import { tabs } from './tabs'
import { tooltip } from './tooltip'

export const shortcuts = [
  ...general,
  ...animate,
  ...breadcrumb,
  ...accordion,
  ...btn,
  ...dialog,
  ...formGroup,
  ...input,
  ...icon,
  ..._switch,
  ...alert,
  ...badge,
  ...avatarGroup,
  ...avatar,
  ...indicator,
  ...kbd,
  ...navLink,
  ...navLinkGroup,
  ...link,
  ...radio,
  ...checkbox,
  ...slider,
  ...progress,
  ...skeleton,
  ...tabs,
  ...select,
  ...separator,
  ...card,
  ...table,
  ...dropdowMenu,
  ...label,
  ...popover,
  ...tooltip,
  ...pagination,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
