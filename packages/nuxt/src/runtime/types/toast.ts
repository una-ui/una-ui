import type { ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastProviderProps, ToastRootProps, ToastTitleProps, ToastViewportProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
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
   * Display `close` icon on the right side of the toast.
   *
   * @default false
   */
  closable?: boolean
  /**
   * The array of actions.
   */
  actions?: Omit<NButtonProps[], 'una'>
  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string

  // Subcomponents
  _toastRoot?: Partial<NToastRootProps>
  _toastProvider?: Partial<NToastProviderProps>
  _toastTitle?: Partial<NToastTitleProps>
  _toastDescription?: Partial<NToastDescriptionProps>
  _toastViewport?: Partial<NToastViewportProps>
  _toastAction?: Partial<NToastActionProps>
  _toastClose?: Partial<NToastCloseProps>
  _toastInfo?: Partial<NToastInfoProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   */
  una?: {
    toast?: HTMLAttributes['class']
    toastDefaultVariant?: HTMLAttributes['class']
  }
}

export interface NToastRootProps extends ToastRootProps, BaseExtensions {
  /**
   * Allows you to add `UnaUI` toast preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   * @example
   * toast="outline-green"
   */
  toast?: HTMLAttributes['class']
  /** Additional properties for the una component */
  una?: {
    toastRoot: HTMLAttributes['class']
  }
}

export interface NToastProviderProps extends ToastProviderProps {}

export interface NToastTitleProps extends ToastTitleProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: {
    toastTitle: HTMLAttributes['class']
  }
}

export interface NToastDescriptionProps extends ToastDescriptionProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: {
    toastDescription: HTMLAttributes['class']
  }
}

export interface NToastViewportProps extends ToastViewportProps, BaseExtensions {}

export interface NToastActionProps extends NButtonProps, Partial<ToastActionProps> {
  /**
   * Allows you to add `UnaUI` toast preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toast.ts
   * @example
   * toast="outline-green"
   */
  toast?: HTMLAttributes['class']
}

export interface NToastInfoProps extends BaseExtensions {
  /** Additional properties for the una component */
  una?: {
    toastInfo: HTMLAttributes['class']
  }
}

export interface NToastCloseProps extends ToastCloseProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: {
    toastClose: HTMLAttributes['class']
    toastCloseIconBase?: string
    toastCloseIcon?: string
  }
}
