import type { SelectContentProps, SelectGroupProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

type RootExtensions = Omit<SelectRootProps, 'modelValue' > & { class?: HTMLAttributes['class'] }
type TriggerExtensions = SelectTriggerProps & NButtonProps & { class?: HTMLAttributes['class'] }
type ValueExtensions = SelectValueProps & { class?: HTMLAttributes['class'] }
type ScrollDownButtonExtensions = SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }
type ScrollUpButtonExtensions = SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }
type ContentExtensions = SelectContentProps & { class?: HTMLAttributes['class'] }
type ItemExtensions = Omit<SelectItemProps, 'value'> & { class?: HTMLAttributes['class'] }
type ItemTextExtensions = SelectItemTextProps & { class?: HTMLAttributes['class'] }
type GroupExtensions = SelectGroupProps & { class?: HTMLAttributes['class'] }
type LabelExtensions = SelectLabelProps & { class?: HTMLAttributes['class'] }
type SeparatorExtensions = SelectSeparatorProps & { class?: HTMLAttributes['class'] }

type Extensions = NSelectRootProps
  & { class?: HTMLAttributes['class'] }
  & Pick<NSelectItemProps, 'selectItem'>

export interface NSelectProps extends Extensions {
  id?: string
  modelValue: any
  multipleGroup?: boolean
  itemAttribute?: string | number
  valueAttribute?: string | number
  placeholder?: string
  label?: string
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
