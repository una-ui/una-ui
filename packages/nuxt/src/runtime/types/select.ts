import type { AcceptableValue, SelectContentProps, SelectGroupProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectRootProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

// Base Types
interface ClassProp { class?: HTMLAttributes['class'] }
interface SizeProp { size?: HTMLAttributes['class'] }
type BaseExtensions = ClassProp & SizeProp

interface UnaConfig<T extends string> {
  una?: {
    [K in T]?: HTMLAttributes['class']
  }
}

// Core Select Types
export interface SelectGroup<T extends AcceptableValue> {
  label?: string
  items: T[]
  _selectLabel?: Partial<NSelectLabelProps>
  _selectItem?: Partial<NSelectItemProps>
}

// Component Props
export interface NSelectProps<T extends AcceptableValue> extends BaseExtensions {
  /**
   * The unique id of the select.
   */
  id?: string

  /**
   * The items to display in the select.
   */
  items: T[] | SelectGroup<T>[]

  /**
   * The attribute name to use to display in the select items.
   */
  itemAttribute?: keyof T

  /**
   * The attribute name to use to display in the selected value.
   */
  valueAttribute?: keyof T

  /**
   * The label to display above the select items.
   */
  label?: string

  /**
   * Allows for multiple groups within the select.
   */
  group?: boolean

  // Sub-component configurations
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

// Root Components
export interface NSelectRootProps extends SelectRootProps, BaseExtensions, UnaConfig<'selectRoot'> {}

// Trigger Components
export interface NSelectTriggerProps extends SelectTriggerProps, Omit<NButtonProps, 'una'>, ClassProp {
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

// Value Components
export interface NSelectValueProps extends SelectValueProps, BaseExtensions, UnaConfig<'selectValue'> {}

// Scroll Button Components
export interface NSelectScrollDownButtonProps extends SelectScrollDownButtonProps, BaseExtensions, UnaConfig<'selectScrollDownButton' | 'selectScrollDownButtonIcon'> {}

export interface NSelectScrollUpButtonProps extends SelectScrollUpButtonProps, BaseExtensions, UnaConfig<'selectScrollUpButton' | 'selectScrollUpButtonIcon'> {}

// Content Components
export interface NSelectContentProps extends SelectContentProps, BaseExtensions {
  /**
   * Sub-component configurations
   */
  _selectScrollDownButton?: NSelectScrollDownButtonProps
  _selectScrollUpButton?: NSelectScrollUpButtonProps
  _selectSeparator?: NSelectSeparator

  /**
   * `UnaUI` preset configuration
   */
  una?: {
    selectContent?: HTMLAttributes['class']
  }
}

// Item Components
export interface NSelectItemIndicatorProps extends SelectItemIndicatorProps, ClassProp {
  /**
   * Icon class for the indicator
   */
  icon?: HTMLAttributes['class']

  /**
   * `UnaUI` preset configuration
   */
  una?: {
    selectItemIndicator?: HTMLAttributes['class']
    selectItemIndicatorIcon?: HTMLAttributes['class']
  }
}

export interface NSelectItemProps extends SelectItemProps, BaseExtensions {
  /**
   * Class for the select item
   */
  selectItem?: HTMLAttributes['class']

  /**
   * Whether the item is selected
   */
  isSelected?: boolean

  /**
   * Sub-component configurations
   */
  _selectItemText?: NSelectItemTextProps
  _selectItemIndicator?: NSelectItemIndicatorProps

  /**
   * `UnaUI` preset configuration
   */
  una?: {
    selectItem?: HTMLAttributes['class']
    selectItemIndicatorWrapper?: HTMLAttributes['class']
  }
}

export interface NSelectItemTextProps extends SelectItemTextProps, BaseExtensions, UnaConfig<'selectItemText'> {}

// Group Components
export interface NSelectGroupProps extends SelectGroupProps, BaseExtensions, UnaConfig<'selectGroup'> {}

export interface NSelectLabelProps extends SelectLabelProps, BaseExtensions, UnaConfig<'selectLabel'> {}

export interface NSelectSeparator extends SelectSeparatorProps, BaseExtensions, UnaConfig<'selectSeparator'> {}
