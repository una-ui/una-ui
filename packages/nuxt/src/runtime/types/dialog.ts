import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
} from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NDialogProps extends DialogRootProps {
  title?: string
  description?: string
  scrollable?: boolean
  showClose?: boolean
  preventClose?: boolean

  // sub-components
  _dialogTitle?: NDialogTitleProps
  _dialogDescription?: NDialogDescriptionProps
  _dialogHeader?: NDialogHeaderProps
  _dialogFooter?: NDialogFooterProps
  _dialogOverlay?: NDialogOverlayProps
  _dialogContent?: NDialogContentProps
  _dialogClose?: NDialogCloseProps

  una?: NDialogUnaProps
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NDialogTitleProps extends DialogTitleProps, BaseExtensions {
  una?: NDialogUnaProps['dialogTitle']
}

export interface NDialogDescriptionProps extends DialogDescriptionProps, BaseExtensions {
  una?: NDialogUnaProps['dialogDescription']
}

export interface NDialogContentProps extends DialogContentProps, BaseExtensions, Pick<NDialogProps, '_dialogOverlay' | '_dialogClose' | 'preventClose' | 'showClose'> {
  onCloseAutoFocus?: (event: any) => void
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onInteractOutside?: (event: any) => void
  onOpenAutoFocus?: (event: any) => void
  onPointerDownOutside?: (event: any) => void

  una?: NDialogUnaProps['dialogContent']
}

export interface NDialogOverlayProps extends BaseExtensions, Pick<NDialogProps, 'scrollable'> {
  una?: NDialogUnaProps['dialogOverlay']
}

export interface NDialogHeaderProps extends BaseExtensions {
  una?: NDialogUnaProps['dialogHeader']
}

export interface NDialogFooterProps extends BaseExtensions {
  una?: NDialogUnaProps['dialogFooter']
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
