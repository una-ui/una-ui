import type { InjectionKey } from 'vue'
import type { UnaConfig } from '../types'

export const FORM_ITEM_INJECTION_KEY
  // eslint-disable-next-line symbol-description
  = Symbol() as InjectionKey<string>

// Key to check if ComboboxInput is inside ComboboxList
export const isInComboboxListKey: InjectionKey<boolean> = Symbol('isInComboboxList')

export const UNA_SETTINGS_KEY: InjectionKey<UnaConfig> = Symbol('unaSettings')
