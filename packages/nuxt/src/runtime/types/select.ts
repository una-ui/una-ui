import type { AcceptableValue, SelectContentProps, SelectGroupProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type RootExtensions = SelectRootProps & BaseExtensions
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
type SelectExtensions = NSelectRootProps
  & BaseExtensions
  & Pick<NSelectValueProps, 'placeholder'>
  & Pick<NSelectItemProps, 'selectItem'>
  & Pick<NSelectTriggerProps, 'status' | 'select'>

export interface SelectGroup<T extends AcceptableValue> {
  label?: string
  items: T[]
  _selectLabel?: Partial<NSelectLabelProps>
  _selectItem?: Partial<NSelectItemProps>
}

export interface NSelectProps<T extends AcceptableValue> extends SelectExtensions {
  /**
   * The unique id of the select.
   */
  id?: string

  /**
   * The items to display in the select.
   */
  items: T[] | SelectGroup<T>[]

  /**
   * The key name to use to display in the select items.
   */
  itemKey?: keyof T

  /**
   * The key name to use to display in the selected value.
   */
  valueKey?: keyof T

  /**
   * The label to display above the select items.
   */
  label?: string

  /**
   * Allows for multiple groups within the select.
   */
  group?: boolean

  // sub-components
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
}

export interface NSelectRootProps extends RootExtensions {
  una?: {
    selectRoot?: HTMLAttributes['class']
  }
}

export interface NSelectTriggerProps extends TriggerExtensions {
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
  una?: {
    selectTrigger?: HTMLAttributes['class']
    selectTriggerTrailing?: HTMLAttributes['class']
    selectTriggerTrailingIcon?: HTMLAttributes['class']
    selectTriggerLeading?: HTMLAttributes['class']

    selectTriggerInfoIcon?: HTMLAttributes['class']
    selectTriggerSuccessIcon?: HTMLAttributes['class']
    selectTriggerWarningIcon?: HTMLAttributes['class']
    selectTriggerErrorIcon?: HTMLAttributes['class']
  } & NButtonProps['una']
}

export interface NSelectValueProps extends ValueExtensions {
  una?: {
    selectValue?: HTMLAttributes['class']
  }
}

export interface NSelectScrollDownButtonProps extends ScrollDownButtonExtensions {
  una?: {
    selectScrollDownButton?: HTMLAttributes['class']
    selectScrollDownButtonIcon?: HTMLAttributes['class']
  }
}

export interface NSelectScrollUpButtonProps extends ScrollUpButtonExtensions {
  una?: {
    selectScrollUpButton?: HTMLAttributes['class']
    selectScrollUpButtonIcon?: HTMLAttributes['class']
  }
}

export interface NSelectContentProps extends ContentExtensions {
  _selectScrollDownButton?: NSelectScrollDownButtonProps
  _selectScrollUpButton?: NSelectScrollUpButtonProps
  _selectSeparator?: NSelectSeparator

  una?: {
    selectContent?: HTMLAttributes['class']
  }
}

export interface NSelectItemIndicatorProps extends SelectItemIndicatorProps {
  icon?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  una?: {
    selectItemIndicator?: HTMLAttributes['class']
    selectItemIndicatorIcon?: HTMLAttributes['class']
  }
}

export interface NSelectItemProps extends ItemExtensions {
  selectItem?: HTMLAttributes['class']
  isSelected?: boolean

  _selectItemText?: NSelectItemTextProps
  _selectItemIndicator?: NSelectItemIndicatorProps

  una?: {
    selectItem?: HTMLAttributes['class']

    selectItemIndicatorWrapper?: HTMLAttributes['class']
  }
}

export interface NSelectItemTextProps extends ItemTextExtensions {
  una?: {
    selectItemText?: HTMLAttributes['class']
  }
}

export interface NSelectGroupProps extends GroupExtensions {
  una?: {
    selectGroup?: HTMLAttributes['class']
  }
}

export interface NSelectLabelProps extends LabelExtensions {
  una?: {
    selectLabel?: HTMLAttributes['class']
  }
}

export interface NSelectSeparator extends SeparatorExtensions {
  una?: {
    selectSeparator?: HTMLAttributes['class']
  }
}
