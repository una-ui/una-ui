import type { Preset, StaticShortcutMap } from '@unocss/core'
import { accordion } from './accordion'
import { alert } from './alert'
import { avatar } from './avatar'
import { avatarGroup } from './avatar-group'
import { badge } from './badge'
import { breadcrumb } from './breadcrumb'
import { btn } from './btn'
import { card } from './card'
import { checkbox } from './checkbox'
import { collapsible } from './collapsible'
import { dialog } from './dialog'
import { dropdowMenu } from './dropdown-menu'
import { form } from './form'
import { formGroup } from './form-group'
import { general } from './general'
import { icon } from './icon'
import { indicator } from './indicator'
import { input } from './input'
import { kbd } from './kbd'
import { label } from './label'
import { link } from './link'
import { navigationMenu } from './navigation-menu'
import { pagination } from './pagination'
import { popover } from './popover'
import { progress } from './progress'
import { radioGroup } from './radio-group'
import { scrollArea } from './scroll-area'
import { select } from './select'
import { separator } from './separator'
import { sheet } from './sheet'
import { sidebar } from './sidebar'
import { skeleton } from './skeleton'
import { slider } from './slider'
import { _switch } from './switch'
import { table } from './table'
import { tabs } from './tabs'
import { toast } from './toast'
import { toggle } from './toggle'
import { tooltip } from './tooltip'

export const shortcuts = [
  ...general,
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
  ...link,
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
  ...toast,
  ...toggle,
  ...collapsible,
  ...radioGroup,
  ...form,
  ...sheet,
  ...scrollArea,
  ...navigationMenu,
  ...sidebar,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
