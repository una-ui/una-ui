import type { PinInputInputProps, PinInputRootProps, PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes, HtmlHTMLAttributes } from 'vue'

export interface NPinInputProps extends PinInputRootProps, BaseExtensions {
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

export interface NPinInputSlotProps extends PinInputInputProps, BaseExtensions {
  una?: Pick<NPinInputUnaProps, 'pinInputSlots'>
}

export interface NPinInputSeparatorProps extends PrimitiveProps, BaseExtensions {
  una?: Pick<NPinInputUnaProps, 'pinInputSeparator'>
}

export interface NPinInputUnaProps {
  pinInputGroup?: HTMLAttributes['class']
  pinInputSeparator?: HTMLAttributes['class']
  pinInputSlots?: HtmlHTMLAttributes['class']
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}
