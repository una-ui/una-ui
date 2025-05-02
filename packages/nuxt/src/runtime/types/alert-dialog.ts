import type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from 'reka-ui'

import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NAlertDialogProps extends AlertDialogProps, Pick<NAlertDialogContentProps, 'preventClose' | 'overlay' | '_alertDialogCancel' | '_alertDialogAction' | '_alertDialogOverlay'> {
  /**
   * The title of the dialog.
   */
  title?: string
  /**
   * The description of the dialog.
   */
  description?: string
  // sub-components
  _alertDialogTitle?: NAlertDialogTitleProps
  _alertDialogDescription?: NAlertDialogDescriptionProps
  _alertDialogContent?: NAlertDialogContentProps
  _alertDialogTrigger?: NAlertDialogTriggerProps
  _alertDialogHeader?: NAlertDialogHeaderProps
  _alertDialogFooter?: NAlertDialogFooterProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert-dialog.ts
   */
  una?: NAlertDialogUnaProps
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NAlertDialogTitleProps extends AlertDialogTitleProps, BaseExtensions {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogTitle'>
}

export interface NAlertDialogDescriptionProps extends AlertDialogDescriptionProps, BaseExtensions {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogDescription'>
}

export interface NAlertDialogTriggerProps extends AlertDialogTriggerProps {
}

export interface NAlertDialogContentProps extends AlertDialogContentProps, BaseExtensions {
  /**
   * Prevent close.
   *
   * @default true
   */
  preventClose?: boolean
  /**
   * Show overlay.
   *
   * @default true
   */
  overlay?: boolean
  /**
   * The cancel button props.
   */
  _alertDialogCancel?: NAlertDialogCancelProps
  /**
   * The action button props.
   */
  _alertDialogAction?: NAlertDialogActionProps
  /**
   * The overlay props.
   */
  _alertDialogOverlay?: NAlertDialogOverlayProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert-dialog.ts
   */
  una?: Pick<NAlertDialogUnaProps, 'alertDialogContent' | 'alertDialogOverlay'>
}

export interface NAlertDialogOverlayProps extends BaseExtensions, AlertDialogOverlayProps {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogOverlay'>
}

export interface NAlertDialogCancelProps extends AlertDialogCancelProps, NButtonProps {
  /**
   * The cancel callback, triggered when the cancel button is clicked.
   */
  onClick?: (e: Event) => void
}

export interface NAlertDialogActionProps extends AlertDialogActionProps, NButtonProps {
  /**
   * The action callback, triggered when the action button is clicked.
   */
  onClick?: (e: Event) => void
}

export interface NAlertDialogHeaderProps extends BaseExtensions {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogHeader'>
}

export interface NAlertDialogFooterProps extends BaseExtensions {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogFooter'>
}

export interface NAlertDialogUnaProps {
  alertDialogTitle?: HTMLAttributes['class']
  alertDialogDescription?: HTMLAttributes['class']
  alertDialogOverlay?: HTMLAttributes['class']
  alertDialogContent?: HTMLAttributes['class']
  alertDialogHeader?: HTMLAttributes['class']
  alertDialogFooter?: HTMLAttributes['class']
}
