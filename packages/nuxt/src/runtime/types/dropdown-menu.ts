import type { HTMLAttributes } from 'vue'
import type { DropdownMenuContentProps, DropdownMenuGroupProps, DropdownMenuLabelProps, DropdownMenuRootProps, DropdownMenuSeparatorProps, DropdownMenuSubContentProps, DropdownMenuSubProps, DropdownMenuTriggerProps } from 'radix-vue'
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
  _dropdownMenuShortcut?: Partial<NDropdownMenuShortcut>
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

export interface NDropdownMenuSeparatorProps extends BaseExtensions, DropdownMenuSeparatorProps {
}

export interface NDropMenuGroupProps extends BaseExtensions, DropdownMenuGroupProps {
}

export interface NDropdownMenuSubContentProps extends BaseExtensions, DropdownMenuSubContentProps {
}

export interface NDropdownMenuItemProps extends BaseExtensions {
  inset?: boolean
}

export interface NDropdownMenuSub extends BaseExtensions, DropdownMenuSubProps {
}

export interface NDropdownMenuSubTrigger extends BaseExtensions, DropdownMenuTriggerProps {
}

export interface NDropdownMenuShortcut extends BaseExtensions {

}
