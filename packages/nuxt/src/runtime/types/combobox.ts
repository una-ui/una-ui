import type { AcceptableValue, ComboboxAnchorProps, ComboboxContentProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxInputProps, ComboboxItemIndicatorProps, ComboboxItemProps, ComboboxLabelProps, ComboboxRootProps, ComboboxSeparatorProps, ComboboxTriggerProps, ComboboxViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
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
   * The text to display when the combobox is empty.
   *
   * @default 'No items found.'
   */
  textEmpty?: string
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

export interface NComboboxLabelProps extends ComboboxLabelProps {
  class?: HTMLAttributes['class']
  label?: string
  una?: Pick<NComboboxUnaProps, 'comboboxLabel'>
}

export interface NComboboxItemProps<T> extends ComboboxItemProps<T> {
  class?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxItem'>
}

export interface NComboboxAnchorProps extends ComboboxAnchorProps {
  class?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxAnchor'>
}

export interface NComboboxEmptyProps extends ComboboxEmptyProps {
  class?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxEmpty'>
}

export interface NComboboxGroupProps<T extends AcceptableValue> extends ComboboxGroupProps {
  class?: HTMLAttributes['class']
  label?: Pick<NComboboxLabelProps, 'label'>
  items?: T[]
  _comboboxItem?: Partial<NComboboxItemProps<T>>
  _comboboxLabel?: Partial<NComboboxLabelProps>
  una?: Pick<NComboboxUnaProps, 'comboboxGroup' | 'comboboxLabel'>
}

export interface NComboboxInputProps extends ComboboxInputProps, Omit<NInputProps, 'modelValue'> {
  [key: string]: any
}

export interface NComboboxItemIndicatorProps extends ComboboxItemIndicatorProps {
  class?: HTMLAttributes['class']
  icon?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxItemIndicator' | 'comboboxItemIndicatorIcon'>
}

export interface NComboboxListProps extends ComboboxContentProps {
  class?: HTMLAttributes['class']
  viewportClass?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxContent'>
}

export interface NComboboxSeparatorProps extends ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
  una?: Pick<NComboboxUnaProps, 'comboboxSeparator'>
}

export interface NComboboxTriggerProps extends ComboboxTriggerProps, NButtonProps {
  class?: HTMLAttributes['class']
}

export interface NComboboxViewportProps extends ComboboxViewportProps {
  class?: HTMLAttributes['class']
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
  comboboxContent?: HTMLAttributes['class']
}
