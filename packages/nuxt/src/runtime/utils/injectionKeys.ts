import type { ComputedRef, InjectionKey } from 'vue'

export const FORM_ITEM_INJECTION_KEY
  // eslint-disable-next-line symbol-description
  = Symbol() as InjectionKey<string>

// Key to check if ComboboxInput is inside ComboboxList
export const isInComboboxListKey: InjectionKey<boolean> = Symbol('isInComboboxList')

// vue-sonner hands a custom toast component only `onCloseToast` and `isPaused`,
// so Toaster-level settings can't ride along in `componentProps`. Rich toasts
// render inside the Toaster's tree, so they inject what they need instead.
export interface ToasterCloseContext {
  closeButton: boolean
  closeButtonAriaLabel: string
}

export const TOASTER_CLOSE_INJECTION_KEY: InjectionKey<ComputedRef<ToasterCloseContext>>
  = Symbol('toasterClose')
