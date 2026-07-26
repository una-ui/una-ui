import type { HTMLAttributes } from 'vue'
import type { ToasterProps } from 'vue-sonner'
import type { NButtonProps } from './button'
import type { NProgressProps } from './progress'

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

export interface NToastAction extends NButtonProps {
  /** Dismiss the toast after `onClick` runs. @default true */
  dismissOnClick?: boolean
  onClick?: () => void
}

/**
 * Options for a rich toast. Passing `actions` or `showProgress` routes the call
 * through `toast.custom`, since vue-sonner supports only one action + one cancel
 * and has no progress element.
 */
export interface NToastProps extends BaseExtensions, Pick<NProgressProps, 'progress'> {
  id?: number | string
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading'
  title?: string
  description?: string
  /** Leading icon. Defaults to the icon for `type`. */
  leading?: HTMLAttributes['class']
  /** Two or more buttons; vue-sonner's own `action`/`cancel` handle the single case. */
  actions?: NToastAction[]
  /** Render the buttons inline with the text even when there are two. */
  inlineActions?: boolean
  /** Show a bar counting down `duration`. Runs its own timer — see NToast docs. */
  showProgress?: boolean
  duration?: number
  una?: NToastUnaProps
}

export interface NToastUnaProps {
  toast?: HTMLAttributes['class']
  toastRow?: HTMLAttributes['class']
  toastIcon?: HTMLAttributes['class']
  toastContent?: HTMLAttributes['class']
  toastTitle?: HTMLAttributes['class']
  toastDescription?: HTMLAttributes['class']
  toastActions?: HTMLAttributes['class']
  toastProgress?: HTMLAttributes['class']
}

export interface NToasterUnaProps {
  toast?: HTMLAttributes['class']
  toastTitle?: HTMLAttributes['class']
  toastDescription?: HTMLAttributes['class']
  toastContent?: HTMLAttributes['class']
  toastIcon?: HTMLAttributes['class']
  toastCloseButton?: HTMLAttributes['class']
}

/** Re-exported so consumers can type their own helpers without depending on vue-sonner directly. */
export type { Action, ExternalToast, ToastClasses, ToasterProps, ToastT } from 'vue-sonner'
