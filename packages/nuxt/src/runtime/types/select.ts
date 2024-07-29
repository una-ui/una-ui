import type { SelectContentProps, SelectGroupProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type RootExtensions = SelectRootProps & { class?: HTMLAttributes['class'] }
type TriggerExtensions = SelectTriggerProps & { class?: HTMLAttributes['class'] }
type ValueExtensions = SelectValueProps & { class?: HTMLAttributes['class'] }
type ScrollDownButtonExtensions = SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }
type ScrollUpButtonExtensions = SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }
type ContentExtensions = SelectContentProps & { class?: HTMLAttributes['class'] }
type ItemExtensions = SelectItemProps & { class?: HTMLAttributes['class'] }
type ItemTextExtensions = SelectItemTextProps & { class?: HTMLAttributes['class'] }
type GroupExtensions = SelectGroupProps & { class?: HTMLAttributes['class'] }
type LabelExtensions = SelectLabelProps & { class?: HTMLAttributes['class'] }
type SeparatorExtensions = SelectSeparatorProps & { class?: HTMLAttributes['class'] }

interface Extensions { class?: HTMLAttributes['class'] }

export interface NSelectProps extends Extensions {
  /**
   *
   */
  selectRoot?: NSelectRootProps
  /**
   *
   */
  selectTrigger?: NSelectTriggerProps
  /**
   *
   */
  selectValue?: NSelectValueProps
  /**
   *
   */
  selectScrollDownButton?: NSelectScrollDownButtonProps
  /**
   *
   */
  selectScrollUpButton?: NSelectScrollUpButtonProps
  /**
   *
   */
  selectContent?: NSelectContentProps
  /**
   *
   */
  selectItem?: NSelectItemProps
  /**
   *
   */
  selectItemText?: NSelectItemTextProps
  /**
   *
   */
  selectGroup?: NSelectGroupProps
  /**
   *
   */
  selectLabel?: NSelectLabel
  /**
   *
   */
  selectSeparator?: NSelectSeparator
  /**
   * select preset variants
   * @example
   * select="green"
   */
  select?: string
  /**
   * Place holder
   */
  placeholder?: string
  /**
   * Allows you to change the size of the select.
   *
   * @default base|md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * List of any group or collection
   *
   * @example
   * ['banana', 'apple', 'orange']
   * [{name: Mekan, age: 29}, {name: Phojie, age: 28}]
   */
  options?: any
  /**
   * Preset configuration
   */
}

export interface NSelectRootProps extends RootExtensions {
  una?: {
    selectRoot?: HTMLAttributes['class']
  }
}

export interface NSelectTriggerProps extends TriggerExtensions {
  una?: {
    selectTrigger?: HTMLAttributes['class']
  }
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

export interface NSelectLabel extends LabelExtensions {
  una?: {
    selectLabel?: HTMLAttributes['class']
  }
}

export interface NSelectSeparator extends SeparatorExtensions {
  una?: {
    selectSeparator?: HTMLAttributes['class']
  }
}
