import type { SelectContentProps, SelectGroupProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

type RootExtensions = SelectRootProps & { class?: HTMLAttributes['class'] }
type TriggerExtensions = SelectTriggerProps & NButtonProps & { class?: HTMLAttributes['class'] }
type ValueExtensions = SelectValueProps & { class?: HTMLAttributes['class'] }
type ScrollDownButtonExtensions = SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }
type ScrollUpButtonExtensions = SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }
type ContentExtensions = SelectContentProps & { class?: HTMLAttributes['class'] }
type ItemExtensions = SelectItemProps & { class?: HTMLAttributes['class'] }
type ItemTextExtensions = SelectItemTextProps & { class?: HTMLAttributes['class'] }
type GroupExtensions = SelectGroupProps & { class?: HTMLAttributes['class'] }
type LabelExtensions = SelectLabelProps & { class?: HTMLAttributes['class'] }
type SeparatorExtensions = SelectSeparatorProps & { class?: HTMLAttributes['class'] }

type Extensions = NSelectRootProps & { class?: HTMLAttributes['class'] }

export interface NSelectProps extends Extensions {
  selectTrigger?: NSelectTriggerProps
  selectValue?: NSelectValueProps
  selectScrollDownButton?: NSelectScrollDownButtonProps
  selectScrollUpButton?: NSelectScrollUpButtonProps
  selectContent?: NSelectContentProps
  selectItem?: NSelectItemProps
  selectItemText?: NSelectItemTextProps
  selectGroup?: NSelectGroupProps
  selectLabel?: NSelectLabelProps
  selectSeparator?: NSelectSeparator

  multipleGroup?: boolean
  itemAttribute?: string | number
  placeholder?: string
  label?: string
  items: any[]
  size?: string
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
  }
}

export interface NSelectScrollUpButtonProps extends ScrollUpButtonExtensions {
  una?: {
    selectScrollUpButton?: HTMLAttributes['class']
  }
}

export interface NSelectContentProps extends ContentExtensions {
  una?: {
    selectContent?: HTMLAttributes['class']
  }
}

export interface NSelectItemProps extends ItemExtensions {
  una?: {
    selectItem?: HTMLAttributes['class']
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
