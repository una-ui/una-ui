import type { ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastProviderProps, ToastRootProps, ToastTitleProps, ToastViewportProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NProgressProps } from './progress'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export type Toaster = NToastProps & { id: string }

export interface NToasterProps extends BaseExtensions, ToastProviderProps {
  _toastViewport?: Partial<NToastViewportProps>
  _toast?: Partial<NToastProps>
}

export interface NToastProps extends BaseExtensions, Pick<NProgressProps, 'progress'>, ToastRootProps {
  /**
   * Allows you to add `UnaUI` toast preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   * @example
   * toast="outline-green"
   */
  toast?: HTMLAttributes['class']
  /**
   * Add a title to the toast.
   */
  title?: string
  /**
   * Add a description to the toast.
   */
  description?: string
  /**
   * Display `close` icon on the right side of the toast.
   *
   * @default false
   */
  closable?: boolean
  /**
   * The array of actions.
   */
  actions?: ToastActionProps[]
  /**
   * The array of toasts
   */
  toasts?: Toaster[]
  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * Show progress bar on the toast.
   *
   * @default false
   */
  showProgress?: boolean

  // Subcomponents
  _toastProvider?: Partial<NToastProviderProps>
  _toastTitle?: Partial<NToastTitleProps>
  _toastDescription?: Partial<NToastDescriptionProps>
  _toastViewport?: Partial<NToastViewportProps>
  _toastAction?: Partial<NToastActionProps>
  _toastClose?: Partial<NToastCloseProps>
  _toastInfo?: Partial<NToastInfoProps>
  _progress?: Partial<NProgressProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   */
  una?: NToastUnaProps

  onOpenChange?: ((value: boolean) => void) | undefined
}

export interface NToastProviderProps extends ToastProviderProps {}

export interface NToastTitleProps extends ToastTitleProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NToastUnaProps, 'toastTitle'>
}

export interface NToastDescriptionProps extends ToastDescriptionProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NToastUnaProps, 'toastDescription'>
}

export interface NToastViewportProps extends ToastViewportProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NToastUnaProps, 'toastViewport'>
}

export interface NToastActionProps extends NButtonProps, ToastActionProps {
}

export interface NToastInfoProps extends BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NToastUnaProps, 'toastInfo'>
}

export interface NToastCloseProps extends ToastCloseProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NToastUnaProps, 'toastClose' | 'toastCloseIconBase' | 'toastCloseIcon'>
}

export interface NToastUnaProps {
  toast?: HTMLAttributes['class']
  toastRoot?: HTMLAttributes['class']
  toastTitle?: HTMLAttributes['class']
  toastDescription?: HTMLAttributes['class']
  toastViewport?: HTMLAttributes['class']
  toastClose?: HTMLAttributes['class']
  toastCloseIconBase?: HTMLAttributes['class']
  toastCloseIcon?: HTMLAttributes['class']
  toastInfo?: HTMLAttributes['class']
}
