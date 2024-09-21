import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
} from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export interface NDialogProps extends DialogRootProps {
  title?: string
  description?: string

  // sub-components
  _dialogTitle?: NDialogTitleProps
  _dialogDescription?: NDialogDescriptionProps
  _dialogHeader?: NDialogHeaderProps
  _dialogFooter?: NDialogFooterProps
  _dialogOverlay?: NDialogOverlayProps
  _dialogContent?: NDialogContentProps
  _dialogClose?: NDialogCloseProps
  // add more eg. dialogContent, dialogFooter, etc.

  una?: NDialogUnaProps
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NDialogTitleProps extends DialogTitleProps, BaseExtensions {
}

export interface NDialogDescriptionProps extends DialogDescriptionProps, BaseExtensions {
}

export interface NDialogContentProps extends DialogContentProps, BaseExtensions {
}

export interface NDialogOverlayProps extends BaseExtensions {
}

export interface NDialogHeaderProps extends BaseExtensions {
}

export interface NDialogFooterProps extends BaseExtensions {
}

export interface NDialogCloseProps extends DialogCloseProps, BaseExtensions {
}

// add more sub-components based on the dialog sub-component structure eg. dialogContent, dialogFooter, etc.

export interface NDialogUnaProps {
  dialogTitle?: HTMLAttributes['class']
  dialogDescription?: HTMLAttributes['class']
  dialogHeader?: HTMLAttributes['class']
  dialogFooter?: HTMLAttributes['class']
  dialogOverlay?: HTMLAttributes['class']
  dialogContent?: HTMLAttributes['class']
  dialogClose?: HTMLAttributes['class']
}
