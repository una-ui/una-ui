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
  Omit<NDropdownMenuTriggerProps, 'una'>,
  Pick<NDropdownMenuItemProps, 'shortcut'> {
  menuLabel?: string
  items?: NDropdownMenuProps[]
  inset?: boolean

  // subcomponents
  _dropdownMenuRoot?: Partial<NDropdownMenuRootProps>
  _dropdownMenuItem?: Partial<NDropdownMenuItemProps>
  _dropdownMenuTrigger?: Partial<NDropdownMenuTriggerProps>
  _dropdownMenuContent?: Partial<NDropdownMenuContentProps>
  _dropdownMenuSubContent?: Partial<NDropdownMenuSubContentProps>
  _dropdownMenuLabel?: Partial<NDropdownMenuLabelProps>
  _dropdownMenuSeparator?: Partial<NDropdownMenuSeparatorProps>
  _dropdownMenuGroup?: Partial<NDropMenuGroupProps>
  _dropdownMenuSub?: Partial<NDropdownMenuSub>
  _dropdownMenuSubTrigger?: Partial<NDropdownMenuSubTrigger>

  una?: NDropdownMenuUnaProps & NButtonProps['una']
}

export interface NDropdownMenuRootProps extends BaseExtensions, DropdownMenuRootProps {
}

export interface NDropdownMenuTriggerProps extends NButtonProps, DropdownMenuTriggerProps {
}

export interface NDropdownMenuContentProps extends BaseExtensions, DropdownMenuContentProps {
}

export interface NDropdownMenuLabelProps extends BaseExtensions, DropdownMenuLabelProps {
  inset?: boolean
  size?: string
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
  inset?: boolean
}

interface NDropdownMenuUnaProps {
  dropdownMenuContent?: HTMLAttributes['class']
  dropdownMenuSubContent?: HTMLAttributes['class']
  dropdownMenuSubTrigger?: HTMLAttributes['class']
  dropdownMenuTrigger?: HTMLAttributes['class']
  dropdownMenuLabel?: HTMLAttributes['class']
  dropdownMenuSeparator?: HTMLAttributes['class']
  dropdownMenuGroup?: HTMLAttributes['class']
  dropdownMenuItem?: HTMLAttributes['class']
  dropdownMenuRoot?: HTMLAttributes['class']
}
