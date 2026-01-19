import type { AcceptableValue, ComboboxAnchorProps, ComboboxContentProps, ComboboxEmptyProps, ComboboxGroupProps, ComboboxInputProps, ComboboxItemIndicatorProps, ComboboxItemProps, ComboboxLabelProps, ComboboxPortalProps, ComboboxRootProps, ComboboxSeparatorProps, ComboboxTriggerProps, ComboboxViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NCheckboxProps } from './checkbox'
import type { NInputProps } from './input'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

// Extract the actual item type when dealing with grouped items
export type ExtractItemType<T> = T extends { items: infer I extends AcceptableValue[] } ? I[number] : T

export interface NComboboxProps<T extends AcceptableValue, M extends boolean> extends Omit<ComboboxRootProps<ExtractItemType<T>>, 'modelValue' | 'defaultValue'>, Pick<NComboboxInputProps, 'status' | 'id'>, BaseExtensions {
  /**
   * The model value for the combobox.
   * Stores the full item object(s), not extracted values.
   */
  modelValue?: M extends true ? ExtractItemType<T>[] : ExtractItemType<T>

  /**
   * The default value for the combobox.
   * Should be the full item object(s), not extracted values.
   */
  defaultValue?: M extends true ? ExtractItemType<T>[] : ExtractItemType<T>

  /**
   * The items to display in the combobox.
   *
   * @default []
   */
  items?: T[] | NComboboxGroupProps<ExtractItemType<T>>[]
  /**
   * The key name to use to display in the combobox items.
   *
   * @default 'label'
   */
  labelKey?: keyof ExtractItemType<T> | string
  /**
   * The key name to use for comparing items (used for selection matching).
   *
   * @default 'value'
   */
  valueKey?: keyof ExtractItemType<T> | string
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

  multiple?: M

  /**
   * Sub-component configurations
   */
  _comboboxAnchor?: NComboboxAnchorProps
  _comboboxEmpty?: NComboboxEmptyProps
  _comboboxGroup?: NComboboxGroupProps<ExtractItemType<T>>
  _comboboxInput?: NComboboxInputProps
  _comboboxItem?: NComboboxItemProps<ExtractItemType<T>>
  _comboboxItemIndicator?: NComboboxItemIndicatorProps
  _comboboxLabel?: NComboboxLabelProps
  _comboboxList?: NComboboxListProps
  _comboboxSeparator?: NComboboxSeparatorProps
  _comboboxTrigger?: NComboboxTriggerProps
  _comboboxViewport?: NComboboxViewportProps
  _comboboxCheckbox?: NCheckboxProps
  _comboboxContent?: ComboboxContentProps
  _comboboxPortal?: ComboboxPortalProps
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
  _comboboxPortal?: ComboboxPortalProps
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
