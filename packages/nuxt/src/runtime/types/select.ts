import type { AcceptableValue, SelectContentProps, SelectGroupProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type TriggerExtensions = SelectTriggerProps & Omit<NButtonProps, 'una'> & BaseExtensions
type ValueExtensions = SelectValueProps & BaseExtensions
type ScrollDownButtonExtensions = SelectScrollDownButtonProps & BaseExtensions
type ScrollUpButtonExtensions = SelectScrollUpButtonProps & BaseExtensions
type ContentExtensions = SelectContentProps & BaseExtensions
type ItemExtensions = SelectItemProps & BaseExtensions
type ItemTextExtensions = SelectItemTextProps & BaseExtensions
type GroupExtensions = SelectGroupProps & BaseExtensions
type LabelExtensions = SelectLabelProps & BaseExtensions
type SeparatorExtensions = SelectSeparatorProps & BaseExtensions
type SelectExtensions<T extends AcceptableValue> = SelectRootProps<T>
  & BaseExtensions
  & Pick<NSelectValueProps, 'placeholder'>
  & Pick<NSelectItemProps, 'selectItem'>
  & Pick<NSelectTriggerProps, 'status' | 'select' | 'id'>

export interface SelectGroup<T extends AcceptableValue> {
  label?: string
  items: T[]
  _selectLabel?: Partial<NSelectLabelProps>
  _selectItem?: Partial<NSelectItemProps>
}

export interface NSelectProps<
  T extends AcceptableValue,
  Items extends Array<T | SelectGroup<T>>,
  M extends boolean = false,
> extends Omit<SelectExtensions<T>, 'modelValue' | 'defaultValue'> {
  /**
   * The items to display in the select.
   */
  items?: Items
  /**
   * The key name to use to display in the select items.
   */
  labelKey?: keyof T | string
  /**
   * The key name to use to display in the selected value.
   */
  valueKey?: keyof T | string
  /**
   * The label to display above the select items.
   */
  label?: string
  /**
   * Whether to show a separator between groups.
   *
   * @default false
   */
  groupSeparator?: boolean

  defaultValue?: M extends true ? any[] : any

  modelValue?: M extends true ? any[] : any

  multiple?: M

  /**
   * Sub-component configurations
   */
  _selectScrollUpButton?: Partial<NSelectScrollUpButtonProps>
  _selectItemText?: Partial<NSelectItemTextProps>
  _selectScrollDownButton?: Partial<NSelectScrollDownButtonProps>
  _selectGroup?: Partial<NSelectGroupProps>
  _selectSeparator?: Partial<NSelectSeparator>
  _selectContent?: Partial<NSelectContentProps>
  _selectValue?: Partial<NSelectValueProps>
  _selectTrigger?: Partial<NSelectTriggerProps>
  _selectItem?: Partial<NSelectItemProps>
  _selectLabel?: Partial<NSelectLabelProps>

  una?: NSelectUnaProps
}

export interface NSelectTriggerProps extends TriggerExtensions {
  /**
   * The unique id of the select trigger to be used for the form field.
   */
  id?: string
  /**
   * Allows you to add `UnaUI` button preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/select.ts
   * @example
   * select="solid-green"
   */
  select?: string
  /**
   * The status of the select input.
   */
  status?: 'info' | 'success' | 'warning' | 'error'
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/select.ts
   */
  una?: Pick<NSelectUnaProps, 'selectTrigger' | 'selectTriggerTrailing' | 'selectTriggerTrailingIcon' | 'selectTriggerLeading' | 'selectTriggerInfoIcon' | 'selectTriggerSuccessIcon' | 'selectTriggerWarningIcon' | 'selectTriggerErrorIcon'> & NButtonProps['una']
}

export interface NSelectValueProps extends ValueExtensions {
  una?: Pick<NSelectUnaProps, 'selectValue'>
}

export interface NSelectScrollDownButtonProps extends ScrollDownButtonExtensions {
  una?: Pick<NSelectUnaProps, 'selectScrollDownButton' | 'selectScrollDownButtonIcon'>
}

export interface NSelectScrollUpButtonProps extends ScrollUpButtonExtensions {
  una?: Pick<NSelectUnaProps, 'selectScrollUpButton' | 'selectScrollUpButtonIcon'>
}

export interface NSelectContentProps extends ContentExtensions {
  _selectScrollDownButton?: NSelectScrollDownButtonProps
  _selectScrollUpButton?: NSelectScrollUpButtonProps
  _selectSeparator?: NSelectSeparator
  una?: Pick<NSelectUnaProps, 'selectContent'>
}

export interface NSelectItemIndicatorProps extends SelectItemIndicatorProps {
  icon?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  una?: Pick<NSelectUnaProps, 'selectItemIndicator' | 'selectItemIndicatorIcon'>
}

export interface NSelectItemProps extends ItemExtensions {
  selectItem?: HTMLAttributes['class']
  _selectItemText?: NSelectItemTextProps
  _selectItemIndicator?: NSelectItemIndicatorProps
  una?: Pick<NSelectUnaProps, 'selectItem' | 'selectItemIndicator'>
}

export interface NSelectItemTextProps extends ItemTextExtensions {
  una?: Pick<NSelectUnaProps, 'selectItemText'>
}

export interface NSelectGroupProps extends GroupExtensions {
  una?: Pick<NSelectUnaProps, 'selectGroup'>
}

export interface NSelectLabelProps extends LabelExtensions {
  una?: Pick<NSelectUnaProps, 'selectLabel'>
}

export interface NSelectSeparator extends SeparatorExtensions {
  una?: Pick<NSelectUnaProps, 'selectSeparator'>
}

export interface NSelectUnaProps {
  select?: HTMLAttributes['class']
  selectTrigger?: HTMLAttributes['class']
  selectTriggerTrailing?: HTMLAttributes['class']
  selectTriggerTrailingIcon?: HTMLAttributes['class']
  selectTriggerLeading?: HTMLAttributes['class']
  selectTriggerInfoIcon?: HTMLAttributes['class']
  selectTriggerSuccessIcon?: HTMLAttributes['class']
  selectTriggerWarningIcon?: HTMLAttributes['class']
  selectTriggerErrorIcon?: HTMLAttributes['class']
  selectValue?: HTMLAttributes['class']
  selectContent?: HTMLAttributes['class']
  selectItem?: HTMLAttributes['class']
  selectItemText?: HTMLAttributes['class']
  selectItemIndicator?: HTMLAttributes['class']
  selectItemIndicatorIcon?: HTMLAttributes['class']
  selectGroup?: HTMLAttributes['class']
  selectLabel?: HTMLAttributes['class']
  selectSeparator?: HTMLAttributes['class']
  selectScrollDownButton?: HTMLAttributes['class']
  selectScrollDownButtonIcon?: HTMLAttributes['class']
  selectScrollUpButton?: HTMLAttributes['class']
  selectScrollUpButtonIcon?: HTMLAttributes['class']
}
