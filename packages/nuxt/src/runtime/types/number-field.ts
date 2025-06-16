import type { NumberFieldDecrementProps, NumberFieldIncrementProps, NumberFieldInputProps, NumberFieldRootProps } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

export interface NNumberFieldProps extends NumberFieldRootProps, BaseExtensions {

  label?: string
  /**
   * The description of the number field.
   */
  _numberFieldContent?: NNumberFieldContentProps
  _numberFieldDecrement?: NNumberFieldDecrementProps
  _numberFieldIncrement?: NNumberFieldIncrementProps
  _numberFieldInput?: NNumberFieldInputProps
  /**
   * `UnaUI` preset configuration
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/number-field.ts
   */
  una?: NNumberFieldUnaProps
}

export interface NNumberFieldContentProps extends BaseExtensions {
  una?: Pick<NNumberFieldUnaProps, 'numberFieldContent'>
}

export interface NNumberFieldDecrementProps extends NumberFieldDecrementProps, BaseExtensions {
  una?: Pick<NNumberFieldUnaProps, 'numberFieldDecrement'>
}

export interface NNumberFieldIncrementProps extends NumberFieldIncrementProps, BaseExtensions {
  una?: Pick<NNumberFieldUnaProps, 'numberFieldIncrement'>
}

export interface NNumberFieldInputProps extends NumberFieldInputProps, BaseExtensions {
  una?: Pick<NNumberFieldUnaProps, 'numberFieldInput'>
}

export interface NNumberFieldUnaProps {
  numberFieldContent?: HTMLAttributes['class']
  numberFieldIncrement?: HTMLAttributes['class']
  numberFieldDecrement?: HTMLAttributes['class']
  numberFieldInput?: HTMLAttributes['class']
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}
