import type { HTMLAttributes } from 'vue'
import type { DropdownMenuRootProps, DropdownMenuTriggerProps } from 'radix-vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NDropdownMenuProps extends Omit<NDropdownMenuRootProps, 'class' | 'size'>, NDropdownMenuTriggerProps {
  label?: string
  menuLabel?: string
  items?: NDropdownMenuProps[]
  shortcut?: string

  // subcomponents
  _dropdownMenuRoot?: NDropdownMenuItemProps
  _dropdownMenuItem?: NDropdownMenuItemProps
  _dropdownMenuTrigger?: NDropdownMenuTriggerProps
}

export interface NDropdownMenuRootProps extends BaseExtensions, DropdownMenuRootProps {
}

export interface NDropdownMenuTriggerProps extends NButtonProps, DropdownMenuTriggerProps {
}

export interface NDropdownMenuItemProps extends BaseExtensions {
}
