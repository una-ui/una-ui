import type { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogRootProps, DialogTitleProps, DialogTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NSheetProps extends DialogRootProps, Pick<NSheetContentProps, 'side'> {
  title?: string
  description?: string

  _sheetTrigger?: NSheetTriggerProps
  _sheetContent?: NSheetContentProps
  _sheetHeader?: NSheetHeaderProps
  _sheetFooter?: NSheetFooterProps
  _sheetTitle?: NSheetTitleProps
  _sheetDescription?: NSheetDescriptionProps
  _sheetClose?: NSheetCloseProps
}

export interface NSheetTriggerProps extends DialogTriggerProps {
}

export interface NSheetContentProps extends DialogContentProps {
  /**
   * The side of the sheet.
   *
   * @default 'bottom'
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  _sheetContent?: NSheetContentProps
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

export interface NSheetCloseProps extends DialogCloseProps {
}
