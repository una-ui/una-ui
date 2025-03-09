import type { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogRootProps, DialogTitleProps, DialogTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NSheetProps extends DialogRootProps, Pick<NSheetContentProps, 'sheet' | 'preventClose' | 'showClose' | 'overlay'> {
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
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/sheet.ts
   */
  una?: NSheetUnaProps
}

export interface NSheetContentProps extends DialogContentProps {
  /**
   * Additional attributes that can be passed to the sheet content element.
   */
  [key: string]: any
  /**
   * The class of the sheet.
   */
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
  _sheetClose?: NSheetCloseProps
  /**
   * The overlay props.
   */
  _sheetOverlay?: NSheetOverlayProps
  /**
   * The portal props.
   */
  _sheetPortal?: NSheetPortalProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/sheet.ts
   */
  una?: Pick<NSheetUnaProps, 'sheetContent' | 'sheetPortal' | 'sheetOverlay' | 'sheetClose'>
}

export interface NSheetTriggerProps extends DialogTriggerProps {
}

export interface NSheetHeaderProps {
  /**
   * Additional attributes that can be passed to the sheet header element.
   */
  [key: string]: any
  /**
   * The class of the sheet header.
   */
  class?: HTMLAttributes['class']

  una?: Pick<NSheetUnaProps, 'sheetHeader'>
}

export interface NSheetTitleProps extends DialogTitleProps {
  /**
   * Additional attributes that can be passed to the sheet title element.
   */
  [key: string]: any
  /**
   * The class of the sheet title.
   */
  class?: HTMLAttributes['class']

  una?: Pick<NSheetUnaProps, 'sheetTitle'>
}

export interface NSheetDescriptionProps extends DialogDescriptionProps {
  /**
   * Additional attributes that can be passed to the sheet description element.
   */
  [key: string]: any
  /**
   * The class of the sheet description.
   */
  class?: HTMLAttributes['class']
  una?: Pick<NSheetUnaProps, 'sheetDescription'>
}

export interface NSheetFooterProps {
  /**
   * Additional attributes that can be passed to the sheet footer element.
   */
  [key: string]: any
  /**
   * The class of the sheet footer.
   */
  class?: HTMLAttributes['class']
  una?: Pick<NSheetUnaProps, 'sheetFooter'>
}

export interface NSheetCloseProps extends DialogCloseProps, NButtonProps {
  /**
   * Additional attributes that can be passed to the sheet close element.
   */
  [key: string]: any
  /**
   * The class of the sheet close.
   */
}
export interface NSheetOverlayProps extends DialogOverlayProps {
  /**
   * Additional attributes that can be passed to the sheet overlay element.
   */
  [key: string]: any
  /**
   * The class of the sheet overlay.
   */
  class?: HTMLAttributes['class']
  una?: Pick<NSheetUnaProps, 'sheetOverlay'>
}

export interface NSheetPortalProps extends DialogPortalProps {
  /**
   * Additional attributes that can be passed to the sheet portal element.
   */
  [key: string]: any
  /**
   * The class of the sheet portal.
   */
  class?: HTMLAttributes['class']
  una?: Pick<NSheetUnaProps, 'sheetPortal'>
}

export interface NSheetUnaProps {
  sheet?: HTMLAttributes['class']
  sheetContent?: HTMLAttributes['class']
  sheetClose?: HTMLAttributes['class']
  sheetHeader?: HTMLAttributes['class']
  sheetTitle?: HTMLAttributes['class']
  sheetDescription?: HTMLAttributes['class']
  sheetFooter?: HTMLAttributes['class']
  sheetOverlay?: HTMLAttributes['class']
  sheetPortal?: HTMLAttributes['class']
}
