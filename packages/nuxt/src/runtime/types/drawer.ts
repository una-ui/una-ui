import type { DialogContentProps, DialogOverlayProps } from 'reka-ui'
import type { DrawerCloseProps, DrawerDescriptionProps, DrawerRootProps, DrawerTitleProps, DrawerTriggerProps } from 'vaul-vue'

import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NDrawerProps extends DrawerRootProps, Pick<NDrawerContentProps, 'preventClose' | 'showClose' | 'overlay' | '_drawerClose' | '_drawerOverlay'> {
  /**
   * The title of the dialog.
   */
  title?: string
  /**
   * The description of the dialog.
   */
  description?: string
  // sub-components
  _drawerTitle?: NDrawerTitleProps
  _drawerDescription?: NDrawerDescriptionProps
  _drawerContent?: NDrawerContentProps
  _drawerTrigger?: NDrawerTriggerProps
  _drawerHeader?: NDrawerHeaderProps
  _drawerFooter?: NDrawerFooterProps
}

export interface NDrawerTitleProps extends DrawerTitleProps, BaseExtensions {
  una?: Pick<NDrawerUnaProps, 'drawerTitle'>
}

export interface NDrawerDescriptionProps extends DrawerDescriptionProps, BaseExtensions {
  una?: Pick<NDrawerUnaProps, 'drawerDescription'>
}

export interface NDrawerContentProps extends DialogContentProps, BaseExtensions {
  /**
   * Prevent close.
   */
  preventClose?: boolean
  /**
   * Show close button.
   *
   * @default true
   */
  showClose?: boolean
  /**
   * Show overlay.
   *
   * @default true
   */
  overlay?: boolean
  /**
   * The close button props.
   */
  _drawerClose?: NDrawerCloseProps
  /**
   * The overlay props.
   */
  _drawerOverlay?: NDrawerOverlayProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert-dialog.ts
   */
  una?: Pick<NDrawerUnaProps, 'drawerContent' | 'drawerOverlay'>
}

export interface NDrawerCloseProps extends DrawerCloseProps, NButtonProps {
}

export interface NDrawerOverlayProps extends BaseExtensions, DialogOverlayProps {
  una?: Pick<NDrawerUnaProps, 'drawerOverlay'>
}

export interface NDrawerTriggerProps extends DrawerTriggerProps {
}

export interface NDrawerHeaderProps extends BaseExtensions {
  una?: Pick<NDrawerUnaProps, 'drawerHeader'>
}

export interface NDrawerFooterProps extends BaseExtensions {
  una?: Pick<NDrawerUnaProps, 'drawerFooter'>
}

export interface NDrawerUnaProps {
  drawerTitle?: HTMLAttributes['class']
  drawerDescription?: HTMLAttributes['class']
  drawerOverlay?: HTMLAttributes['class']
  drawerContent?: HTMLAttributes['class']
  drawerHeader?: HTMLAttributes['class']
  drawerFooter?: HTMLAttributes['class']
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}
