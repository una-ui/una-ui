import type { PinInputInputProps, PinInputRootProps, PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export type PinInputType = 'text' | 'number'
export type PinInputValueType<T extends PinInputType> = T extends 'text' ? string : number

export interface NPinInputProps<T extends PinInputType = 'text'> extends Omit<PinInputRootProps<T>, 'defaultValue'>, Pick<NPinInputSlotProps, 'pinInput' | 'status'>, BaseExtensions {
  /**
   * The default value of the pin input.
   * @default []
   */
  defaultValue?: PinInputValueType<T>[]
  /**
   * The maximum number of slots to render.
   */
  maxLength?: number
  /**
   * The icon to use as a separator between pin-input groups.
   */
  separator?: boolean | string
  /**
   * The number of slots to group together.
   *
   * @default 0
   */
  groupBy?: number
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

export interface NPinInputGroupProps extends PrimitiveProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputGroup'>
}

export interface NPinInputSlotProps extends PinInputInputProps, Pick<NPinInputSeparatorProps, 'icon'>, BaseExtensions {
  /**
   * Allows you to add `UnaUI` pin-input preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/pin-input.ts
   * @example
   * pin-input="outline-indigo"
   */
  pinInput?: HTMLAttributes['class']
  /**
   * Update the pin input status.
   * Useful for validations.
   *
   * @default null
   */
  status?: 'info' | 'success' | 'warning' | 'error'
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
  pinInput?: HTMLAttributes['class']
  /** CSS class for the pin input group */
  pinInputGroup?: HTMLAttributes['class']
  /** CSS class for the pin input separator */
  pinInputSeparator?: HTMLAttributes['class']
  /** CSS class for the pin input slots */
  pinInputSlot?: HTMLAttributes['class']
}
