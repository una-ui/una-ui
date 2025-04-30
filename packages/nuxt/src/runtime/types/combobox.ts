import type { AcceptableValue, ComboboxAnchorProps, ComboboxContentProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxInputProps, ComboboxItemIndicatorProps, ComboboxItemProps, ComboboxLabelProps, ComboboxRootProps, ComboboxSeparatorProps, ComboboxTriggerProps, ComboboxViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NCheckboxProps } from './checkbox'
import type { NInputProps } from './input'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NComboboxProps<T extends AcceptableValue> extends ComboboxRootProps<T>, Pick<NComboboxInputProps, 'status' | 'id'>, BaseExtensions {
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
   * The text to display when the combobox is empty.
   *
   * @default 'No items found.'
   */
  textEmpty?: string
  /**
   * The heading to display for the grouped item.
   *
   * @default ''
   */
  label?: string
  /**
   * Sub-component configurations
   */
  _comboboxAnchor?: NComboboxAnchorProps
  _comboboxEmpty?: NComboboxEmptyProps
  _comboboxGroup?: NComboboxGroupProps<T>
  _comboboxInput?: NComboboxInputProps
  _comboboxItem?: NComboboxItemProps<T>
  _comboboxItemIndicator?: NComboboxItemIndicatorProps
  _comboboxLabel?: NComboboxLabelProps
  _comboboxList?: NComboboxListProps
  _comboboxSeparator?: NComboboxSeparatorProps
  _comboboxTrigger?: NComboboxTriggerProps
  _comboboxViewport?: NComboboxViewportProps
  _comboboxCheckbox?: NCheckboxProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/combobox.ts
   */
  una?: NComboboxUnaProps
}

export interface NComboboxLabelProps extends ComboboxLabelProps, BaseExtensions {
  label?: string
  una?: Pick<NComboboxUnaProps, 'comboboxLabel'>
}

export interface NComboboxItemProps<T> extends ComboboxItemProps<T>, BaseExtensions {
  una?: Pick<NComboboxUnaProps, 'comboboxItem'>
}

export interface NComboboxAnchorProps extends ComboboxAnchorProps, BaseExtensions {
  una?: Pick<NComboboxUnaProps, 'comboboxAnchor'>
}

export interface NComboboxEmptyProps extends ComboboxEmptyProps, BaseExtensions {
  una?: Pick<NComboboxUnaProps, 'comboboxEmpty'>
}

export interface NComboboxGroupProps<T extends AcceptableValue> extends ComboboxGroupProps, BaseExtensions {
  label?: string
  items?: T[]
  _comboboxItem?: Partial<NComboboxItemProps<T>>
  _comboboxLabel?: Partial<NComboboxLabelProps>
  una?: Pick<NComboboxUnaProps, 'comboboxGroup' | 'comboboxLabel'>
}

export interface NComboboxInputProps extends ComboboxInputProps, Omit<NInputProps, 'modelValue'> {
  [key: string]: any
}

export interface NComboboxItemIndicatorProps extends ComboboxItemIndicatorProps, BaseExtensions {
  icon?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxItemIndicator' | 'comboboxItemIndicatorIcon'>
}

export interface NComboboxListProps extends ComboboxContentProps, BaseExtensions {
  viewportClass?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxList'>
}

export interface NComboboxSeparatorProps extends ComboboxSeparatorProps, BaseExtensions {
  una?: Pick<NComboboxUnaProps, 'comboboxSeparator'>
}

export interface NComboboxTriggerProps extends ComboboxTriggerProps, NButtonProps {
  /**
   * The unique id of the select trigger to be used for the form field.
   */
  id?: string
  /**
   * The status of the select input.
   */
  status?: 'info' | 'success' | 'warning' | 'error'
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/combobox.ts
   */
  una?: Pick<NComboboxUnaProps, 'comboboxTrigger' | 'comboboxTriggerLeading' | 'comboboxTriggerTrailing' | 'comboboxTriggerInfoIcon' | 'comboboxTriggerSuccessIcon' | 'comboboxTriggerWarningIcon' | 'comboboxTriggerErrorIcon'> & NButtonProps['una']
}

export interface NComboboxViewportProps extends ComboboxViewportProps, BaseExtensions {
  una?: Pick<NComboboxUnaProps, 'comboboxViewport'>
}

export interface NComboboxUnaProps {
  combobox?: HTMLAttributes['class']
  comboboxAnchor?: HTMLAttributes['class']
  comboboxLabel?: HTMLAttributes['class']
  comboboxItem?: HTMLAttributes['class']
  comboboxItemIndicator?: HTMLAttributes['class']
  comboboxItemIndicatorIcon?: HTMLAttributes['class']
  comboboxSeparator?: HTMLAttributes['class']
  comboboxViewport?: HTMLAttributes['class']
  comboboxEmpty?: HTMLAttributes['class']
  comboboxGroup?: HTMLAttributes['class']
  comboboxList?: HTMLAttributes['class']
  comboboxTrigger?: HTMLAttributes['class']
  comboboxTriggerLeading?: HTMLAttributes['class']
  comboboxTriggerTrailing?: HTMLAttributes['class']
  comboboxTriggerInfoIcon?: HTMLAttributes['class']
  comboboxTriggerSuccessIcon?: HTMLAttributes['class']
  comboboxTriggerWarningIcon?: HTMLAttributes['class']
  comboboxTriggerErrorIcon?: HTMLAttributes['class']
}
