import type { HTMLAttributes } from 'vue'
import type { DropdownMenuContentProps, DropdownMenuGroupProps, DropdownMenuLabelProps, DropdownMenuRootProps, DropdownMenuSeparatorProps, DropdownMenuSubContentProps, DropdownMenuSubProps, DropdownMenuSubTriggerProps, DropdownMenuTriggerProps } from 'radix-vue'
import type { NButtonProps } from './button'
import type { NSeparatorProps } from './separator'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NDropdownMenuProps extends
  Omit<NDropdownMenuRootProps, 'class' | 'size'>,
  NDropdownMenuTriggerProps,
  Pick<NDropdownMenuItemProps, 'shortcut'> {
  label?: string
  menuLabel?: string
  items?: NDropdownMenuProps[]

  // subcomponents
  _dropdownMenuRoot?: Partial<NDropdownMenuItemProps>
  _dropdownMenuItem?: Partial<NDropdownMenuItemProps>
  _dropdownMenuTrigger?: Partial<NDropdownMenuTriggerProps>
  _dropdownMenuContent?: Partial<NDropdownMenuContentProps>
  _dropdownMenuSubContent?: Partial<NDropdownMenuSubContentProps>
  _dropdownMenuLabel?: Partial<NDropdownMenuLabelProps>
  _dropdownMenuSeparator?: Partial<NDropdownMenuSeparatorProps>
  _dropdownMenuGroup?: Partial<NDropMenuGroupProps>
  _dropdownMenuSub?: Partial<NDropdownMenuSub>
  _dropdownMenuSubTrigger?: Partial<NDropdownMenuSubTrigger>
}

export interface NDropdownMenuRootProps extends BaseExtensions, DropdownMenuRootProps {
}

export interface NDropdownMenuTriggerProps extends NButtonProps, DropdownMenuTriggerProps {
}

export interface NDropdownMenuContentProps extends BaseExtensions, DropdownMenuContentProps {
}

export interface NDropdownMenuLabelProps extends BaseExtensions, DropdownMenuLabelProps {
  inset?: boolean
}

export interface NDropdownMenuSeparatorProps extends DropdownMenuSeparatorProps, NSeparatorProps {
}

export interface NDropMenuGroupProps extends BaseExtensions, DropdownMenuGroupProps {
}

export interface NDropdownMenuSubContentProps extends BaseExtensions, DropdownMenuSubContentProps {
}

export interface NDropdownMenuItemProps extends NButtonProps {
  inset?: boolean
  shortcut?: string
}

export interface NDropdownMenuSub extends BaseExtensions, DropdownMenuSubProps {
}

export interface NDropdownMenuSubTrigger extends NButtonProps, DropdownMenuSubTriggerProps {
  dropdownMenuItem?: string
}
