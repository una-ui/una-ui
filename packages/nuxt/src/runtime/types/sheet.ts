import type { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogRootProps, DialogTitleProps, DialogTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NSheetProps extends DialogRootProps, Pick<NSheetContentProps, 'sheet'> {
  /**
   * The title of the sheet.
   */
  title?: string
  /**
   * The description of the sheet.
   */
  description?: string

  // sub components
  _sheetTrigger?: NSheetTriggerProps
  _sheetContent?: NSheetContentProps
  _sheetHeader?: NSheetHeaderProps
  _sheetFooter?: NSheetFooterProps
  _sheetTitle?: NSheetTitleProps
  _sheetDescription?: NSheetDescriptionProps
  _sheetClose?: NSheetCloseProps
  _sheetOverlay?: NSheetOverlayProps
  _sheetPortal?: NSheetPortalProps
}

export interface NSheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  /**
   * The side of the sheet.
   *
   * By default, preset provided `top`, `right`, `bottom`, `left` variants are available.
   * You can also pass your own via unocss.config.ts
   *
   * @default 'right'
   */
  sheet?: HTMLAttributes['class']
  /**
   * The close button props.
   */
  _sheetClose?: NSheetCloseProps
  /**
   * The overlay props.
   */
  _sheetOverlay?: NSheetOverlayProps
  /**
   * The portal props.
   */
  _sheetPortal?: NSheetPortalProps
}

export interface NSheetTriggerProps extends DialogTriggerProps {
}

export interface NSheetHeaderProps {
  class?: HTMLAttributes['class']
}

export interface NSheetTitleProps extends DialogTitleProps {
  class?: HTMLAttributes['class']
}

export interface NSheetDescriptionProps extends DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

export interface NSheetFooterProps {
  class?: HTMLAttributes['class']
}

export interface NSheetCloseProps extends DialogCloseProps, NButtonProps {
}

export interface NSheetOverlayProps extends DialogOverlayProps {
  class?: HTMLAttributes['class']
}

export interface NSheetPortalProps extends DialogPortalProps {
  class?: HTMLAttributes['class']
}
