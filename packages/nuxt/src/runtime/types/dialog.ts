import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NDialogProps extends DialogRootProps, Pick<NDialogContentProps, 'preventClose' | 'showClose' | 'overlay' | '_dialogClose' | '_dialogOverlay'> {
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
  _dialogTitle?: NDialogTitleProps
  _dialogDescription?: NDialogDescriptionProps
  _dialogHeader?: NDialogHeaderProps
  _dialogFooter?: NDialogFooterProps
  _dialogContent?: NDialogContentProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/dialog.ts
   */
  una?: NDialogUnaProps
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NDialogTitleProps extends DialogTitleProps, BaseExtensions {
  una?: Pick<NDialogUnaProps, 'dialogTitle'>
}

export interface NDialogDescriptionProps extends DialogDescriptionProps, BaseExtensions {
  una?: Pick<NDialogUnaProps, 'dialogDescription'>
}

export interface NDialogContentProps extends DialogContentProps, BaseExtensions {
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
  _dialogClose?: NDialogCloseProps
  /**
   * The overlay props.
   */
  _dialogOverlay?: NDialogOverlayProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/dialog.ts
   */
  una?: Pick<NDialogUnaProps, 'dialogContent'>
}

export interface NDialogOverlayProps extends BaseExtensions, Pick<NDialogProps, 'scrollable'> {
  una?: Pick<NDialogUnaProps, 'dialogOverlay'>
}

export interface NDialogHeaderProps extends BaseExtensions {
  una?: Pick<NDialogUnaProps, 'dialogHeader'>
}

export interface NDialogFooterProps extends BaseExtensions {
  una?: Pick<NDialogUnaProps, 'dialogFooter'>
}

export interface NDialogCloseProps extends DialogCloseProps, NButtonProps {
}

export interface NDialogUnaProps {
  dialogTitle?: HTMLAttributes['class']
  dialogDescription?: HTMLAttributes['class']
  dialogHeader?: HTMLAttributes['class']
  dialogFooter?: HTMLAttributes['class']
  dialogOverlay?: HTMLAttributes['class']
  dialogContent?: HTMLAttributes['class']
}
