/* eslint-disable unused-imports/no-unused-vars */
// import type {
//   NavigationMenuContentProps,
//   NavigationMenuIndicatorProps,
//   NavigationMenuItemProps,
//   NavigationMenuLinkProps,
//   NavigationMenuListProps,
//   NavigationMenuRootProps,
//   NavigationMenuSubProps,
//   NavigationMenuTriggerProps,
//   NavigationMenuViewportProps,
// } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

interface NNavigationMenuUnaProps {
  /** CSS class for the navigation menu root */
  navigationMenuRoot?: HTMLAttributes['class']
  /** CSS class for the navigation menu content */
  navigationMenuContent?: HTMLAttributes['class']
  /** CSS class for the navigation menu trigger */
  navigationMenuTrigger?: HTMLAttributes['class']
  /** CSS class for the navigation menu viewport */
  navigationMenuViewport?: HTMLAttributes['class']
  /** CSS class for the navigation menu list */
  navigationMenuList?: HTMLAttributes['class']
  /** CSS class for the navigation menu link */
  navigationMenuLink?: HTMLAttributes['class']
  /** CSS class for the navigation menu item */
  navigationMenuItem?: HTMLAttributes['class']
  /** CSS class for the navigation menu indicator */
  navigationMenuIndicator?: HTMLAttributes['class']
}
