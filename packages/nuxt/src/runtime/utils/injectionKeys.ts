import type { InjectionKey } from 'vue'

export const FORM_ITEM_INJECTION_KEY
  // eslint-disable-next-line symbol-description
  = Symbol() as InjectionKey<string>

// Key to check if ComboboxInput is inside ComboboxList
export const isInComboboxListKey: InjectionKey<boolean> = Symbol('isInComboboxList')
