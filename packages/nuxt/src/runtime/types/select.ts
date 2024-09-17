import type { SelectContentProps, SelectGroupProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { AnimateProps } from './animate'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type RootExtensions = Omit<SelectRootProps, 'modelValue' > & BaseExtensions
type TriggerExtensions = SelectTriggerProps & Omit<NButtonProps, 'una'> & BaseExtensions
type ValueExtensions = SelectValueProps & BaseExtensions
type ScrollDownButtonExtensions = SelectScrollDownButtonProps & BaseExtensions
type ScrollUpButtonExtensions = SelectScrollUpButtonProps & BaseExtensions
type ContentExtensions = SelectContentProps & BaseExtensions
type ItemExtensions = Omit<SelectItemProps, 'value'> & BaseExtensions
type ItemTextExtensions = SelectItemTextProps & BaseExtensions
type GroupExtensions = SelectGroupProps & BaseExtensions
type LabelExtensions = SelectLabelProps & BaseExtensions
type SeparatorExtensions = SelectSeparatorProps & BaseExtensions
type SelectExtensions = NSelectRootProps
  & BaseExtensions
  & Pick<NSelectItemProps, 'selectItem'>
  & Pick<NSelectTriggerProps, 'status' | 'select'>

export interface NSelectProps extends SelectExtensions, AnimateProps {
  /**
   * The unique id of the select.
   */
  id?: string
  /**
   * Enable multiple group items.
   *
   * @default false
   */
  multipleGroup?: boolean
  /**
   * The attribute name to use to display in the select items.
   *
   */
  itemAttribute?: string | number
  /**
   * The attribute name to use to display in the selected value.
   */
  valueAttribute?: string | number
  /**
   * The placeholder to display when no value is selected.
   */
  placeholder?: string
  /**
   * The label to display above the select items.
   */
  label?: string
  /**
   * The items to display in the select.
   *
   * @default []
   */
  items: any[]

  // sub-components
  _selectScrollUpButton?: Partial<NSelectScrollUpButtonProps>
  _selectItemText?: Partial<NSelectItemTextProps>
  _selectScrollDownButton?: Partial<NSelectScrollDownButtonProps>
  _selectGroup?: Partial<NSelectGroupProps>
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

export interface NSelectContentProps extends ContentExtensions, AnimateProps {
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
    selectItemIndicatorIcon?: HTMLAttributes
  }
}

export interface NSelectItemProps extends ItemExtensions {
  value: any
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
