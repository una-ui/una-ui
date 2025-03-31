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
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NNavigationMenuProps<T> extends Omit<NavigationMenuRootProps, 'class'>, Pick<NNavigationMenuTriggerProps, 'navigationMenu' | 'disabled'>,
  Pick<NNavigationMenuLinkProps, 'navigationMenuLink'>, BaseExtensions {
  /**
   * The array of items that is passed to the navigation menu.
   *
   * @default []
   */
  items?: T
  /** Whether to show the indicator or not */
  indicator?: boolean

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
  /** Props for the navigation menu list item */
  _navigationMenuListItem?: Partial<NNavigationMenuListItemProps>
  /** Props for the navigation menu link */
  _navigationMenuLink?: Partial<NNavigationMenuLinkProps>
  /** Props for the navigation menu indicator */
  _navigationMenuIndicator?: Partial<NNavigationMenuIndicatorProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/navigation-menu.ts
   */
  una?: NNavigationMenuUnaProps
}

export interface NNavigationMenuRootProps extends NavigationMenuRootProps, Pick<BaseExtensions, 'class'>, Pick<NNavigationMenuProps<NNavigationMenuItemProps[]>, '_navigationMenuViewport'> {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuRoot']
}

export interface NNavigationMenuTriggerProps extends NavigationMenuTriggerProps, Omit<NButtonProps, 'disabled' | 'size' | 'navigationMenuLink'>, BaseExtensions {
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

export interface NNavigationMenuItemProps extends NavigationMenuItemProps, BaseExtensions, Omit<NNavigationMenuTriggerProps, 'una'>,
  Pick<NNavigationMenuLinkProps, 'active' | 'onSelect'>, Pick<NNavigationMenuProps<NNavigationMenuItemProps[]>, '_navigationMenuLink' | '_navigationMenuTrigger'> {
  /** Slot of the navigation menu item */
  slot?: string
  /** The array of links that is passed to the navigation menu items. */
  children?: NNavigationMenuLinkProps[]
  /** Additional properties for the una component */
  una?: Pick<NNavigationMenuUnaProps, 'navigationMenuTrigger' | 'navigationMenuContent'>
}

export interface NNavigationMenuIndicatorProps extends NavigationMenuIndicatorProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuIndicator']
}

export interface NNavigationMenuLinkProps extends NavigationMenuLinkProps, Omit<NButtonProps, 'size'>, BaseExtensions {
  /**
   * Allows you to add `UnaUI` button preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/navigation-menu.ts
   * @example
   * navigation-menu-link="ghost-gray"
   */
  navigationMenuLink?: string
  /** Whether the link is active or not */
  active?: boolean
  /** Event handler called when the link is clicked */
  onSelect?: (e: Event) => void
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuLink'] & NButtonProps['una']
}

export interface NNavigationMenuListProps extends NavigationMenuListProps, Pick<NavigationMenuRootProps, 'orientation'>, BaseExtensions {
  /** Additional properties for the una component */
  una?: NNavigationMenuUnaProps['navigationMenuList']
}

export interface NNavigationMenuListItemProps extends NNavigationMenuLinkProps {
  /** Description of the link. This is only used when `orientation` is `horizontal`. */
  description?: string
  /** Additional properties for the una component */
  una?: Pick<NNavigationMenuUnaProps, 'navigationMenuListItem' | 'navigationMenuContentItem' | 'navigationMenuContentItemWrapper' | 'navigationMenuContentItemLabel' | 'navigationMenuContentItemDescription'>
}

export interface NNavigationMenuSubProps extends NavigationMenuSubProps {}

export interface NNavigationMenuViewportProps extends NavigationMenuViewportProps, Pick<NavigationMenuRootProps, 'orientation'>, Pick<BaseExtensions, 'class'> {
  /** Additional properties for the una component */
  una?: Pick<NNavigationMenuUnaProps, 'navigationMenuViewport' | 'navigationMenuViewportWrapper'>
}

interface NNavigationMenuUnaProps {
  /** CSS class for the navigation menu root */
  navigationMenuRoot?: HTMLAttributes['class']
  /** CSS class for the navigation menu content */
  navigationMenuContent?: HTMLAttributes['class']
  /** CSS class for the navigation menu content item */
  navigationMenuContentItem?: HTMLAttributes['class']
  /** CSS class for the navigation menu content item wrapper */
  navigationMenuContentItemWrapper?: HTMLAttributes['class']
  /** CSS class for the navigation menu content item label */
  navigationMenuContentItemLabel?: HTMLAttributes['class']
  /** CSS class for the navigation menu content item description */
  navigationMenuContentItemDescription?: HTMLAttributes['class']
  /** CSS class for the navigation menu trigger */
  navigationMenuTrigger?: HTMLAttributes['class']
  /** CSS class for the navigation menu trigger default variant */
  navigationMenuDefaultVariant?: HTMLAttributes['class']
  /** CSS class for the navigation menu list */
  navigationMenuList?: HTMLAttributes['class']
  /** CSS class for the navigation menu list item */
  navigationMenuListItem?: HTMLAttributes['class']
  /** CSS class for the navigation menu item */
  navigationMenuItem?: HTMLAttributes['class']
  /** CSS class for the navigation menu link */
  navigationMenuLink?: HTMLAttributes['class']
  /** CSS class for the navigation menu indicator */
  navigationMenuIndicator?: HTMLAttributes['class']
  /** CSS class for the navigation menu indicator arrow */
  navigationMenuIndicatorArrow?: HTMLAttributes['class']
  /** CSS class for the navigation menu viewport */
  navigationMenuViewport?: HTMLAttributes['class']
  /** CSS class for the navigation menu viewport wrapper */
  navigationMenuViewportWrapper?: HTMLAttributes['class']
}
