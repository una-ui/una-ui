import type { HTMLAttributes } from 'vue'
import type { ToasterProps } from 'vue-sonner'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NToasterProps extends Omit<ToasterProps, 'class'>, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   */
  una?: NToasterUnaProps
}

export interface NToasterUnaProps {
  toast?: HTMLAttributes['class']
  toastTitle?: HTMLAttributes['class']
  toastDescription?: HTMLAttributes['class']
  toastContent?: HTMLAttributes['class']
  toastIcon?: HTMLAttributes['class']
  toastActionButton?: HTMLAttributes['class']
  toastCancelButton?: HTMLAttributes['class']
  toastCloseButton?: HTMLAttributes['class']
}

/** Re-exported so consumers can type their own helpers without depending on vue-sonner directly. */
export type { Action, ExternalToast, ToastClasses, ToasterProps, ToastT } from 'vue-sonner'
