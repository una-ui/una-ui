import type { AcceptableValue, ComboboxAnchorProps, ComboboxContentProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxInputProps, ComboboxItemIndicatorProps, ComboboxItemProps, ComboboxRootProps, ComboboxSeparatorProps, ComboboxTriggerProps, ComboboxViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NCheckboxProps } from './checkbox'
import type { NInputProps } from './input'

export interface NComboboxProps<T extends AcceptableValue> extends ComboboxRootProps<T> {
  class?: HTMLAttributes['class']

  items?: T[]
  labelKey?: keyof T
  valueKey?: keyof T

  _comboboxAnchor?: NComboboxAnchorProps
  _comboboxEmpty?: NComboboxEmptyProps
  _comboboxGroup?: NComboboxGroupProps
  _comboboxInput?: NComboboxInputProps
  _comboboxItem?: NComboboxItemProps
  _comboboxItemIndicator?: NComboboxItemIndicatorProps
  _comboboxList?: NComboboxListProps
  _comboboxSeparator?: NComboboxSeparatorProps
  _comboboxTrigger?: NComboboxTriggerProps
  _comboboxViewport?: NComboboxViewportProps
  _comboboxCheckbox?: NCheckboxProps
}

export interface NComboboxItem<T> extends ComboboxItemProps<T> {
}

export interface NComboboxAnchorProps extends ComboboxAnchorProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxEmptyProps extends ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxGroupProps extends ComboboxGroupProps {
  class?: HTMLAttributes['class']
  heading?: string
}

export interface NComboboxInputProps extends ComboboxInputProps, Omit<NInputProps, 'modelValue'> {
  [key: string]: any
}

export interface NComboboxItemProps extends ComboboxItemProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxItemIndicatorProps extends ComboboxItemIndicatorProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxListProps extends ComboboxContentProps {
  class?: HTMLAttributes['class']
  viewportClass?: HTMLAttributes['class']
}

export interface NComboboxSeparatorProps extends ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxTriggerProps extends ComboboxTriggerProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxViewportProps extends ComboboxViewportProps {
  class?: HTMLAttributes['class']
}
