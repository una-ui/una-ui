import type {
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuRootProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { FocusOutsideEvent, PointerDownOutsideEvent } from './'
import type { NButtonProps } from './button'
import type { NSeparatorProps } from './separator'

/**
 * Base extensions for dropdown menu components.
 */
interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

/**
 * Props for the NDropdownMenu component.
 */
export interface NDropdownMenuProps extends
  Omit<NDropdownMenuRootProps, 'class' | 'size'>,
  Omit<NDropdownMenuTriggerProps, 'una'>,
  Omit<NDropdownMenuItemProps, 'una'> {
  /** Label for the menu */
  menuLabel?: string
  /** Items in the dropdown menu */
  items?: NDropdownMenuProps[]
  /** Whether the menu is inset */
  inset?: boolean

  // Subcomponents
  /** Props for the dropdown menu root */
  _dropdownMenuRoot?: Partial<NDropdownMenuRootProps>
  /** Props for the dropdown menu item */
  _dropdownMenuItem?: Partial<NDropdownMenuItemProps>
  /** Props for the dropdown menu trigger */
  _dropdownMenuTrigger?: Partial<NDropdownMenuTriggerProps>
  /** Props for the dropdown menu content */
  _dropdownMenuContent?: Partial<NDropdownMenuContentProps>
  /** Props for the dropdown menu sub-content */
  _dropdownMenuSubContent?: Partial<NDropdownMenuSubContentProps>
  /** Props for the dropdown menu label */
  _dropdownMenuLabel?: Partial<NDropdownMenuLabelProps>
  /** Props for the dropdown menu separator */
  _dropdownMenuSeparator?: Partial<NDropdownMenuSeparatorProps>
  /** Props for the dropdown menu group */
  _dropdownMenuGroup?: Partial<NDropdownMenuGroupProps>
  /** Props for the dropdown menu sub-trigger */
  _dropdownMenuSubTrigger?: Partial<NDropdownMenuSubTriggerProps>
  /** Props for the dropdown menu shortcut */
  _dropdownMenuShortcut?: Partial<NDropdownMenuShortcutProps>

  /** Additional properties for the una component */
  una?: NDropdownMenuUnaProps & NButtonProps['una']
}

/**
 * Props for the NDropdownMenuRoot component.
 */
export interface NDropdownMenuRootProps extends BaseExtensions, DropdownMenuRootProps {
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuRoot'>
}

/**
 * Props for the NDropdownMenuTrigger component.
 */
export interface NDropdownMenuTriggerProps extends NButtonProps, DropdownMenuTriggerProps {
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuTrigger'> & NButtonProps['una']
}

/**
 * Props for the NDropdownMenuContent component.
 */
export interface NDropdownMenuContentProps extends BaseExtensions, DropdownMenuContentProps {
  /** Event handler called when auto-focusing on close. Can be prevented. */
  onCloseAutoFocus?: (e: Event) => void
  /** Event handler called when the escape key is down. Can be prevented. */
  onEscapeKeyDown?: (e: KeyboardEvent) => void
  /** Event handler called when the focus moves outside of the DismissableLayer. Can be prevented. */
  onFocusOutside?: (e: FocusOutsideEvent) => void
  /** Event handler called when an interaction happens outside the DismissableLayer. Can be prevented. */
  onInteractOutside?: (e: PointerDownOutsideEvent | FocusOutsideEvent) => void
  /** Event handler called when a pointerdown event happens outside of the DismissableLayer. Can be prevented. */
  onPointerDownOutside?: (e: PointerDownOutsideEvent) => void

  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuContent'>
}

/**
 * Props for the NDropdownMenuLabel component.
 */
export interface NDropdownMenuLabelProps extends BaseExtensions, DropdownMenuLabelProps {
  /** Whether the label is inset */
  inset?: boolean
  /** Size of the label */
  size?: HTMLAttributes['class']
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuLabel'>
}

/**
 * Props for the NDropdownMenuSeparator component.
 */
export interface NDropdownMenuSeparatorProps extends DropdownMenuSeparatorProps, NSeparatorProps {
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuSeparator'> & NSeparatorProps['una']
}

/**
 * Props for the NDropdownMenuGroup component.
 */
export interface NDropdownMenuGroupProps extends BaseExtensions, DropdownMenuGroupProps {
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuGroup'>
}

/**
 * Props for the NDropdownMenuSubContent component.
 */
export interface NDropdownMenuSubContentProps extends BaseExtensions, DropdownMenuSubContentProps {
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuSubContent'>
}

/**
 * Props for the NDropdownMenuItem component.
 */
export interface NDropdownMenuItemProps extends DropdownMenuItemProps, NButtonProps {
  /** Dropdown menu item */
  dropdownMenuItem?: HTMLAttributes['class']
  /** Whether the item is inset */
  inset?: boolean
  /** Shortcut key for the item */
  shortcut?: string
  /** Props for the dropdown menu shortcut */
  _dropdownMenuShortcut?: Partial<NDropdownMenuShortcutProps>
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuItem'> & NButtonProps['una']

  /** Select event handler */
  onSelect?: (e: Event) => void
}

/**
 * Props for the NDropdownMenuSubTrigger component.
 */
export interface NDropdownMenuSubTriggerProps extends NButtonProps, DropdownMenuSubTriggerProps {
  /** Dropdown menu item */
  dropdownMenuItem?: HTMLAttributes['class']
  /** Whether the sub-trigger is inset */
  inset?: boolean
}

/**
 * Props for the NDropdownMenuShortcut component.
 */
export interface NDropdownMenuShortcutProps extends BaseExtensions {
  /** Shortcut key for the item */
  value?: string
  /** Additional properties for the una component */
  una?: Pick<NDropdownMenuUnaProps, 'dropdownMenuShortcut'>
}

/**
 * Props for the NDropdownMenuUna component.
 */
export interface NDropdownMenuUnaProps {
  /** CSS class for the dropdown menu content */
  dropdownMenuContent?: HTMLAttributes['class']
  /** CSS class for the dropdown menu sub-content */
  dropdownMenuSubContent?: HTMLAttributes['class']
  /** CSS class for the dropdown menu sub-trigger */
  dropdownMenuSubTrigger?: HTMLAttributes['class']
  /** CSS class for the dropdown menu trigger */
  dropdownMenuTrigger?: HTMLAttributes['class']
  /** CSS class for the dropdown menu label */
  dropdownMenuLabel?: HTMLAttributes['class']
  /** CSS class for the dropdown menu separator */
  dropdownMenuSeparator?: HTMLAttributes['class']
  /** CSS class for the dropdown menu group */
  dropdownMenuGroup?: HTMLAttributes['class']
  /** CSS class for the dropdown menu item */
  dropdownMenuItem?: HTMLAttributes['class']
  /** CSS class for the dropdown menu root */
  dropdownMenuRoot?: HTMLAttributes['class']
  /** CSS class for the dropdown menu shortcut */
  dropdownMenuShortcut?: HTMLAttributes['class']
}
