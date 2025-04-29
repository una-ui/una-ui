import type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogProps,
  AlertDialogTitleProps,
} from 'reka-ui'

import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NAlertDialogProps extends AlertDialogProps, Pick<NAlertDialogContentProps, 'preventClose' | 'showClose' | 'overlay' | '_alertDialogCancel' | '_alertDialogOverlay'> {
  /**
   * The title of the dialog.
   */
  title?: string
  /**
   * The description of the dialog.
   */
  description?: string
  /**
   *
   */
  scrollable?: boolean

  // sub-components
  _alertDialogTitle?: NAlertDialogTitleProps
  _alertDialogDescription?: NAlertDialogDescriptionProps
  _alertDialogContent?: NAlertDialogContentProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/dialog.ts
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

export interface NAlertDialogContentProps extends AlertDialogContentProps, BaseExtensions {
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
  _alertDialogCancel?: NAlertDialogCancelProps
  /**
   * The overlay props.
   */
  _alertDialogOverlay?: NAlertDialogOverlayProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert-dialog.ts
   */
  una?: Pick<NAlertDialogUnaProps, 'alertDialogOverlay' | 'alertDialogOverlay'>
}

export interface NAlertDialogOverlayProps extends BaseExtensions, AlertDialogOverlayProps {
  una?: Pick<NAlertDialogUnaProps, 'alertDialogOverlay'>
}

export interface NAlertDialogCancelProps extends AlertDialogCancelProps, NButtonProps {
}

export interface NAlertDialogActionProps extends AlertDialogActionProps, NButtonProps {
}

export interface NAlertDialogUnaProps {
  alertDialogTitle?: HTMLAttributes['class']
  alertDialogDescription?: HTMLAttributes['class']
  alertDialogOverlay?: HTMLAttributes['class']
  alertdialogContent?: HTMLAttributes['class']
}
