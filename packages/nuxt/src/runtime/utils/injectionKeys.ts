import type { ComputedRef, HTMLAttributes, InjectionKey } from 'vue'

export const FORM_ITEM_INJECTION_KEY
  // eslint-disable-next-line symbol-description
  = Symbol() as InjectionKey<string>

// Key to check if ComboboxInput is inside ComboboxList
export const isInComboboxListKey: InjectionKey<boolean> = Symbol('isInComboboxList')

// vue-sonner hands a custom toast component only `onCloseToast` and `isPaused`,
// so Toaster-level settings can't ride along in `componentProps`.
export interface ToasterCloseContext {
  closeButton: boolean
  closeButtonAriaLabel: string
  /** The Toaster's `una.toastClose`. Standard toasts get their copy through `toastOptions.classes`. */
  class?: HTMLAttributes['class']
}

export const TOASTER_CLOSE_DEFAULTS: ToasterCloseContext = {
  closeButton: true,
  closeButtonAriaLabel: 'Close toast',
}

export const TOASTER_CLOSE_INJECTION_KEY: InjectionKey<ComputedRef<ToasterCloseContext>>
  = Symbol('toasterClose')
