import type { PinInputInputProps, PinInputRootProps, PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NPinInputProps extends Omit<NPinInputRootProps, 'size' | 'class'>, Pick<NPinInputSeparatorProps, 'separator'>,
  Pick<NPinInputSlotProps, 'pinInput'>, BaseExtensions {
  /**
   * The number of characters in the pin input.
   * @default 6
   */
  length?: number

  /** Props for the pin input root */
  _pinInputRoot?: Partial<NPinInputRootProps>
  /** Props for the pin input group */
  _pinInputGroup?: Partial<NPinInputGroupProps>
  /** Props for the pin input separator */
  _pinInputSeparator?: Partial<NPinInputSeparatorProps>
  /** Props for the pin input slots */
  _pinInputSlot?: Partial<NPinInputSlotProps>
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/pin-input.ts
   */
  una?: NPinInputUnaProps
}

export interface NPinInputRootProps extends PinInputRootProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputRoot'>
}

export interface NPinInputGroupProps extends PrimitiveProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputGroup'>
}

export interface NPinInputSlotProps extends PinInputInputProps, Pick<NPinInputSeparatorProps, 'separator'>, BaseExtensions {
  /**
   * Allows you to add `UnaUI` pin-input preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/pin-input.ts
   * @example
   * pin-input="outline-indigo"
   */
  pinInput?: HTMLAttributes['class']
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputSlot'>
}

export interface NPinInputSeparatorProps extends PrimitiveProps, BaseExtensions {
  /**
   * The separator to use between pin input fields.
   *@example
   * 'i-lucide:dot'
   */
  icon?: string
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputSeparator'>
}

interface NPinInputUnaProps {
  /** CSS class for the pin input root */
  pinInputRoot?: HTMLAttributes['class']
  /** CSS class for the pin input group */
  pinInputGroup?: HTMLAttributes['class']
  /** CSS class for the pin input separator */
  pinInputSeparator?: HTMLAttributes['class']
  /** CSS class for the pin input slots */
  pinInputSlot?: HTMLAttributes['class']
}
