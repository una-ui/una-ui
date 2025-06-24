import type { PinInputInputProps, PinInputRootProps, PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes, HtmlHTMLAttributes } from 'vue'

export interface NPinInputProps extends PinInputRootProps, BaseExtensions {
  length?: number
  /**
   * The number of characters in the pin input.
   * @default 6
   */
  separator?: string
  /**
   * The separator to use between pin input fields.
   *
   */
  pinInput?: HTMLAttributes['class']
  _pinInputGroup?: NPinInputGroupProps
  _pinInputSeparator?: NPinInputSeparatorProps
  _pinInputSlots?: NPinInputSlotProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/pin-input.ts
   */
  una?: NPinInputUnaProps
}

export interface NPinInputGroupProps extends PrimitiveProps, BaseExtensions {
  una?: Pick<NPinInputUnaProps, 'pinInputGroup'>
}

export interface NPinInputSlotProps extends PinInputInputProps, BaseExtensions, Pick<NPinInputProps, 'pinInput'> {
  una?: Pick<NPinInputUnaProps, 'pinInputSlots'>
}

export interface NPinInputSeparatorProps extends PrimitiveProps, BaseExtensions {
  separator?: string
  una?: Pick<NPinInputUnaProps, 'pinInputSeparator'>
}

export interface NPinInputUnaProps {
  pinInputGroup?: HTMLAttributes['class']
  pinInputSeparator?: HTMLAttributes['class']
  pinInputSlots?: HtmlHTMLAttributes['class']
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}
