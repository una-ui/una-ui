import type { NumberFieldDecrementProps, NumberFieldIncrementProps, NumberFieldInputProps, NumberFieldRootProps } from 'reka-ui'

import type { HTMLAttributes } from 'vue'
import type { NInputProps } from './input'

export interface NNumberFieldProps extends NumberFieldRootProps, Pick<NInputProps, 'leading' | 'trailing'>, BaseExtensions {
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
  icon?: string
  una?: Pick<NNumberFieldUnaProps, 'numberFieldDecrement'>
}

export interface NNumberFieldIncrementProps extends NumberFieldIncrementProps, BaseExtensions {
  icon?: string
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
  size?: HTMLAttributes['class']
}
