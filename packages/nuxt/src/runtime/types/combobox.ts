import type { AcceptableValue, ComboboxAnchorProps, ComboboxContentProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxInputProps, ComboboxItemIndicatorProps, ComboboxItemProps, ComboboxLabelProps, ComboboxRootProps, ComboboxSeparatorProps, ComboboxTriggerProps, ComboboxViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NCheckboxProps } from './checkbox'
import type { NInputProps } from './input'

export interface NComboboxProps<T extends AcceptableValue> extends ComboboxRootProps<T> {
  /**
   * The class name to apply to the combobox.
   */
  class?: HTMLAttributes['class']
  /**
   * The items to display in the combobox.
   *
   * @default []
   */
  items?: T[] | NComboboxGroupProps<T>[]
  /**
   * The key name to use to display in the select items.
   *
   * @default 'label'
   */
  labelKey?: keyof T
  /**
   * The key name to use to display in the selected value.
   *
   * @default 'value'
   */
  valueKey?: keyof T
  /**
   * Whether to show a separator between groups.
   *
   * @default false
   */
  groupSeparator?: boolean
  /**
   * Sub-component configurations
   */
  _comboboxAnchor?: NComboboxAnchorProps
  _comboboxEmpty?: NComboboxEmptyProps
  _comboboxGroup?: NComboboxGroupProps<T>
  _comboboxInput?: NComboboxInputProps
  _comboboxItem?: NComboboxItemProps
  _comboboxItemIndicator?: NComboboxItemIndicatorProps
  _comboboxLabel?: NComboboxLabelProps
  _comboboxList?: NComboboxListProps
  _comboboxSeparator?: NComboboxSeparatorProps
  _comboboxTrigger?: NComboboxTriggerProps
  _comboboxViewport?: NComboboxViewportProps
  _comboboxCheckbox?: NCheckboxProps
}

export interface NComboboxLabelProps extends ComboboxLabelProps {
  class?: HTMLAttributes['class']
  label?: string
  una?: Pick<NComboboxUnaProps, 'comboboxLabel'>
}

export interface NComboboxItem<T> extends ComboboxItemProps<T> {
}

export interface NComboboxAnchorProps extends ComboboxAnchorProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxEmptyProps extends ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxGroupProps<T extends AcceptableValue> extends ComboboxGroupProps {
  class?: HTMLAttributes['class']
  label?: Pick<NComboboxLabelProps, 'label'>
  items?: T[]
  _comboboxItem?: Partial<NComboboxItemProps>
  _comboboxLabel?: Partial<NComboboxLabelProps>
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

export interface NComboboxUnaProps {
  comboboxLabel?: HTMLAttributes['class']
}
