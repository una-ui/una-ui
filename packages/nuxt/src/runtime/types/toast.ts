import type { HTMLAttributes } from 'vue'
import type { ToasterProps } from 'vue-sonner'
import type { NButtonProps } from './button'
import type { NProgressProps } from './progress'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

/**
 * `closeButtonPosition` is dropped: the close sits in the row, so the preset
 * overrides the `position`/`transform` it feeds. Same for the `toastOptions` one,
 * which can't be omitted from the type.
 */
export interface NToasterProps extends Omit<ToasterProps, 'class' | 'closeButtonPosition'>, BaseExtensions {
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
  /**
   * Overrides the Toaster's own setting. Never shown on `loading`.
   *
   * Named after vue-sonner, not una's `showClose`/`closable`, because it has to
   * resolve against the `closeButton` `NToasterProps` inherits from
   * `ToasterProps` — renaming one without the other breaks the pass-through.
   */
  closeButton?: boolean
  duration?: number
  /** Injected by vue-sonner while auto-dismiss is paused. Holds the bar with it. */
  isPaused?: boolean
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
  toastClose?: HTMLAttributes['class']
}

export interface NToasterUnaProps {
  toast?: HTMLAttributes['class']
  toastTitle?: HTMLAttributes['class']
  toastDescription?: HTMLAttributes['class']
  toastContent?: HTMLAttributes['class']
  toastIcon?: HTMLAttributes['class']
  toastClose?: HTMLAttributes['class']
}

/** Re-exported so consumers can type their own helpers without depending on vue-sonner directly. */
export type { Action, ExternalToast, ToastClasses, ToasterProps, ToastT } from 'vue-sonner'
