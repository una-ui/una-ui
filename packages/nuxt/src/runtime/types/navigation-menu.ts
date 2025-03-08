import type {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuRootProps,
  NavigationMenuSubProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
} from 'reka-ui'
import type { HTMLAttributes, MaybeRefOrGetter } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NNavigationMenuProps extends Omit<NavigationMenuRootProps, 'class'>, Pick<NNavigationMenuTriggerProps, 'navigationMenu' | 'disabled'>, BaseExtensions {
  /**
   * The array of items that is passed to the navigation menu.
   *
   * @default []
   */
  items: MaybeRefOrGetter<NavigationMenuItemProps[]>

  /** Props for the navigation menu root */
  _navigationMenuRoot?: Partial<NNavigationMenuRootProps>
  /** Props for the navigation menu trigger */
  _navigationMenuTrigger?: Partial<NNavigationMenuTriggerProps>
  /** Props for the navigation menu content */
  _navigationMenuContent?: Partial<NNavigationMenuContentProps>
  /** Props for the navigation menu item */
  _navigationMenuItem?: Partial<NNavigationMenuItemProps>
  /** Props for the navigation menu viewport */
  _navigationMenuViewport?: Partial<NNavigationMenuViewportProps>
  /** Props for the navigation menu list */
  _navigationMenuList?: Partial<NNavigationMenuListProps>
  /** Props for the navigation menu link */
  _navigationMenuLink?: Partial<NNavigationMenuLinkProps>
  /** Props for the navigation menu indicator */
  _navigationMenuIndicator?: Partial<NNavigationMenuIndicatorProps>
}

export interface NNavigationMenuRootProps extends NavigationMenuRootProps, Pick<BaseExtensions, 'class'> {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuRoot']
}

export interface NNavigationMenuTriggerProps extends NavigationMenuTriggerProps, Omit<NButtonProps, 'una' | 'size' | 'disabled'>, BaseExtensions {
  /**
   * Allows you to add `UnaUI` button preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/navigation-menu.ts
   * @example
   * navigation-menu="solid-indigo"
   */
  navigationMenu?: string
  /** Additional properties for the una component */
  una?: Pick<NNavigationMenuUnaProps, 'navigationMenuTrigger' | 'navigationMenuDefaultVariant'> & NButtonProps['una']
}

export interface NNavigationMenuContentProps extends NavigationMenuContentProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuContent']
}

export interface NNavigationMenuItemProps extends NavigationMenuItemProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NNavigationMenuUnaProps, 'navigationMenuTrigger' | 'navigationMenuContent'>
}

export interface NNavigationMenuIndicatorProps extends NavigationMenuIndicatorProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuIndicator']
}

export interface NNavigationMenuLinkProps extends NavigationMenuLinkProps, Pick<BaseExtensions, 'class'> {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuLink']
}

export interface NNavigationMenuListProps extends NavigationMenuListProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuList']
}

export interface NNavigationMenuSubProps extends NavigationMenuSubProps {}

export interface NNavigationMenuViewportProps extends NavigationMenuViewportProps, Pick<BaseExtensions, 'class'> {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuViewport']
}

interface NNavigationMenuUnaProps {
  /** CSS class for the navigation menu root */
  navigationMenuRoot?: HTMLAttributes['class']
  /** CSS class for the navigation menu content */
  navigationMenuContent?: HTMLAttributes['class']
  /** CSS class for the navigation menu trigger */
  navigationMenuTrigger?: HTMLAttributes['class']
  /** CSS class for the navigation menu trigger default variant */
  navigationMenuDefaultVariant?: HTMLAttributes['class']
  /** CSS class for the navigation menu viewport */
  navigationMenuViewport?: HTMLAttributes['class']
  /** CSS class for the navigation menu list */
  navigationMenuList?: HTMLAttributes['class']
  /** CSS class for the navigation menu link */
  navigationMenuLink?: HTMLAttributes['class']
  /** CSS class for the navigation menu indicator */
  navigationMenuIndicator?: HTMLAttributes['class']
}
