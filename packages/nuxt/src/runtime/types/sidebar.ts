import type { PrimitiveProps } from 'reka-ui'
import type { Component, HTMLAttributes } from 'vue'
import type { NButtonProps } from '.'
import type { NSheetContentProps } from './sheet'

/**
 * Sidebar component props interface
 */
export interface NSidebarProps {
  /**
   * The side of the sidebar.
   *
   * @default 'left'
   */
  sheet?: 'left' | 'right'

  /**
   * The variant of the sidebar.
   *
   * @default 'sidebar'
   */
  sidebar?: 'sidebar' | 'floating' | 'inset'

  /**
   * Collapsible behavior.
   *
   * @default 'offcanvas'
   */
  collapsible?: 'offcanvas' | 'icon' | 'none'

  /**
   * Additional classes to apply to the sidebar.
   */
  class?: HTMLAttributes['class']

  /**
   * Whether to display the sidebar rail for resizing.
   *
   * @default true
   */
  rail?: boolean

  /**
   * Props passed to the sheet content component when in mobile view.
   */
  _sheetContent?: NSheetContentProps

  // Sub components
  _sidebarContent?: NSidebarContentProps
  _sidebarHeader?: NSidebarHeaderProps
  _sidebarFooter?: NSidebarFooterProps
  _sidebarGroup?: NSidebarGroupProps
  _sidebarGroupContent?: NSidebarGroupContentProps
  _sidebarGroupLabel?: NSidebarGroupLabelProps
  _sidebarGroupAction?: NSidebarGroupActionProps
  _sidebarMenu?: NSidebarMenuProps
  _sidebarMenuItem?: NSidebarMenuItemProps
  _sidebarMenuButton?: NSidebarMenuButtonProps
  _sidebarMenuButtonChild?: NSidebarMenuButtonChildProps
  _sidebarMenuSub?: NSidebarMenuSubProps
  _sidebarMenuSubItem?: NSidebarMenuSubItemProps
  _sidebarMenuSubButton?: NSidebarMenuSubButtonProps
  _sidebarMenuAction?: NSidebarMenuActionProps
  _sidebarMenuBadge?: NSidebarMenuBadgeProps
  _sidebarMenuSkeleton?: NSidebarMenuSkeletonProps
  _sidebarSeparator?: NSidebarSeparatorProps
  _sidebarRail?: NSidebarRailProps
  _sidebarInset?: NSidebarInsetProps
  _sidebarInput?: NSidebarInputProps
  _sidebarTrigger?: NSidebarTriggerProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/sidebar.ts
   */
  una?: NSidebarUnaProps
}

/**
 * Sidebar provider component props interface
 */
export interface NSidebarProviderProps {
  /**
   * Default open state.
   *
   * @default true
   */
  defaultOpen?: boolean

  /**
   * Controlled open state.
   */
  open?: boolean

  /**
   * Additional classes to apply to the provider.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarProvider'>
}

/**
 * Sidebar content component props interface
 */
export interface NSidebarContentProps {
  /**
   * Additional attributes that can be passed to the sidebar content element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the content.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarContent'>
}

/**
 * Sidebar header component props interface
 */
export interface NSidebarHeaderProps {
  /**
   * Additional attributes that can be passed to the sidebar header element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the header.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarHeader'>
}

/**
 * Sidebar footer component props interface
 */
export interface NSidebarFooterProps {
  /**
   * Additional attributes that can be passed to the sidebar footer element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the footer.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarFooter'>
}

/**
 * Sidebar group component props interface
 */
export interface NSidebarGroupProps {
  /**
   * The label of the group.
   */
  label?: string

  /**
   * Additional attributes that can be passed to the sidebar group element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the group.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarGroup'>
}

/**
 * Sidebar group content component props interface
 */
export interface NSidebarGroupContentProps {
  /**
   * Additional attributes that can be passed to the sidebar group content element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the group content.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarGroupContent'>
}

/**
 * Sidebar group label component props interface
 */
export interface NSidebarGroupLabelProps extends PrimitiveProps {
  /**
   * Additional attributes that can be passed to the sidebar group label element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the group label.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarGroupLabel'>
}

/**
 * Sidebar group action component props interface
 */
export interface NSidebarGroupActionProps extends PrimitiveProps {
  /**
   * Additional attributes that can be passed to the sidebar group action element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the group action.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarGroupAction'>
}

/**
 * Sidebar menu component props interface
 */
export interface NSidebarMenuProps<T extends { id?: string | number } | Record<string, any> = any> {
  /**
   * Array of items to render in the menu.
   */
  items?: T[]

  /**
   * Property from each item to use as a key.
   *
   * @default 'id'
   */
  itemKey?: keyof T

  /**
   * Additional attributes that can be passed to the sidebar menu element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenu'>
}

/**
 * Sidebar menu item component props interface
 */
export interface NSidebarMenuItemProps {
  /**
   * Additional attributes that can be passed to the sidebar menu item element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu item.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuItem'>
}

/**
 * Sidebar menu button child component props interface
 */
export interface NSidebarMenuButtonChildProps extends PrimitiveProps {
  /**
   * The variant of the button.
   *
   * @default 'default'
   */
  variant?: 'default' | 'outline'

  /**
   * The size of the button.
   *
   * @default 'default'
   */
  size?: 'default' | 'sm' | 'lg'

  /**
   * Whether the button is in active state.
   *
   * @default false
   */
  isActive?: boolean

  /**
   * Additional classes to apply to the button.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuButtonChild'>
}

/**
 * Sidebar menu button component props interface
 */
export interface NSidebarMenuButtonProps extends Omit<NSidebarMenuButtonChildProps, 'una'> {
  /**
   * Tooltip content to show when sidebar is collapsed.
   */
  tooltip?: string | Component

  /**
   * Whether the button is in active state.
   *
   * @default false
   */
  isActive?: boolean

  /**
   * The variant of the button.
   *
   * @default 'default'
   */
  variant?: 'default' | 'outline'

  /**
   * The size of the button.
   *
   * @default 'default'
   */
  size?: 'default' | 'sm' | 'lg'

  /**
   * Additional classes to apply to the button.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuButton' | 'sidebarMenuButtonChild'>
}

/**
 * Sidebar menu sub component props interface
 */
export interface NSidebarMenuSubProps {
  /**
   * Additional attributes that can be passed to the sidebar menu sub element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu sub.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuSub'>
}

/**
 * Sidebar menu sub item component props interface
 */
export interface NSidebarMenuSubItemProps {
  /**
   * Additional attributes that can be passed to the sidebar menu sub item element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu sub item.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuSubItem'>
}

/**
 * Sidebar menu sub button component props interface
 */
export interface NSidebarMenuSubButtonProps extends PrimitiveProps {
  /**
   * Whether the button is in active state.
   *
   * @default false
   */
  isActive?: boolean

  /**
   * The size of the button.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md'

  /**
   * Additional classes to apply to the button.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuSubButton'>
}

/**
 * Sidebar menu action component props interface
 */
export interface NSidebarMenuActionProps extends PrimitiveProps {
  /**
   * Whether to show the action only on hover.
   *
   * @default false
   */
  showOnHover?: boolean

  /**
   * Additional attributes that can be passed to the sidebar menu action element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu action.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuAction'>
}

/**
 * Sidebar menu badge component props interface
 */
export interface NSidebarMenuBadgeProps {
  /**
   * Additional attributes that can be passed to the sidebar menu badge element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu badge.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuBadge'>
}

/**
 * Sidebar menu skeleton component props interface
 */
export interface NSidebarMenuSkeletonProps {
  /**
   * Whether to show the icon in the skeleton.
   *
   * @default false
   */
  showIcon?: boolean

  /**
   * Additional attributes that can be passed to the sidebar menu skeleton element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the menu skeleton.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarMenuSkeleton'>
}

/**
 * Sidebar separator component props interface
 */
export interface NSidebarSeparatorProps {
  /**
   * Additional attributes that can be passed to the sidebar separator element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the separator.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarSeparator'>
}

/**
 * Sidebar rail component props interface
 */
export interface NSidebarRailProps {
  /**
   * Additional attributes that can be passed to the sidebar rail element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the rail.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarRail'>
}

/**
 * Sidebar inset component props interface
 */
export interface NSidebarInsetProps {
  /**
   * Additional attributes that can be passed to the sidebar inset element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the inset.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarInset'>
}

/**
 * Sidebar input component props interface
 */
export interface NSidebarInputProps {
  /**
   * Additional attributes that can be passed to the sidebar input element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the input.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarInput'>
}

/**
 * Sidebar trigger component props interface
 */
export interface NSidebarTriggerProps extends Omit<NButtonProps, 'una'> {
  /**
   * Additional attributes that can be passed to the sidebar trigger element.
   */
  [key: string]: any

  /**
   * Additional classes to apply to the trigger.
   */
  class?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: Pick<NSidebarUnaProps, 'sidebarTrigger'> & NButtonProps['una']
}

/**
 * UnaUI preset configuration for sidebar components
 */
export interface NSidebarUnaProps {
  sidebar?: HTMLAttributes['class']
  sidebarProvider?: HTMLAttributes['class']
  sidebarContent?: HTMLAttributes['class']
  sidebarHeader?: HTMLAttributes['class']
  sidebarFooter?: HTMLAttributes['class']
  sidebarGroup?: HTMLAttributes['class']
  sidebarGroupContent?: HTMLAttributes['class']
  sidebarGroupLabel?: HTMLAttributes['class']
  sidebarGroupAction?: HTMLAttributes['class']
  sidebarMenu?: HTMLAttributes['class']
  sidebarMenuItem?: HTMLAttributes['class']
  sidebarMenuButton?: HTMLAttributes['class']
  sidebarMenuButtonChild?: HTMLAttributes['class']
  sidebarMenuSub?: HTMLAttributes['class']
  sidebarMenuSubItem?: HTMLAttributes['class']
  sidebarMenuSubButton?: HTMLAttributes['class']
  sidebarMenuAction?: HTMLAttributes['class']
  sidebarMenuBadge?: HTMLAttributes['class']
  sidebarMenuSkeleton?: HTMLAttributes['class']
  sidebarSeparator?: HTMLAttributes['class']
  sidebarRail?: HTMLAttributes['class']
  sidebarInset?: HTMLAttributes['class']
  sidebarInput?: HTMLAttributes['class']
  sidebarTrigger?: HTMLAttributes['class']
}
