import type { ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastProviderProps, ToastRootProps, ToastTitleProps, ToastViewportProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NToastProps extends BaseExtensions {
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
   * Display `close` icon on the right side of the toast,
   *
   * @default false
   */
  closable?: boolean

  // Subcomponents
  _toastRoot?: Partial<NToastRootProps>
  _toastProvider?: Partial<NToastProviderProps>
  _toastTitle?: Partial<NToastTitleProps>
  _tooltipDescription?: Partial<NToastDescriptionProps>
  _toastViewport?: Partial<NToastViewportProps>
  _toastAction?: Partial<NToastActionProps>
  _toastClose?: Partial<NToastCloseProps>

  /** Additional properties for the una component */
  una?: NToastUnaProps
}

export interface NToastRootProps extends ToastRootProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NToastUnaProps['toastRoot']
}

export interface NToastProviderProps extends ToastProviderProps {}

export interface NToastTitleProps extends ToastTitleProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NToastUnaProps['toastTitle']
}

export interface NToastDescriptionProps extends ToastDescriptionProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NToastUnaProps['toastDescription']
}

export interface NToastViewportProps extends ToastViewportProps {}

export interface NToastActionProps extends ToastActionProps {}

export interface NToastCloseProps extends ToastCloseProps {
  /** Additional properties for the una component */
  una?: NToastUnaProps['toastClose']
}

interface NToastUnaProps {
  /** CSS class for the toast title */
  toastTitle?: HTMLAttributes['class']
  /** CSS class for the toast description */
  toastDescription?: HTMLAttributes['class']
  /** CSS class for the toast root */
  toastRoot?: HTMLAttributes['class']
  /** CSS class for the toast close */
  toastClose?: HTMLAttributes['class']
}
