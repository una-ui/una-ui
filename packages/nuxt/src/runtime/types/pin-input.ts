import type { PinInputInputProps, PinInputRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NPinInputProps extends Omit<NPinInputRootProps, 'size' | 'class'>, Pick<NPinInputInputProps, 'pinInput'>, BaseExtensions {
  /**
   * Set the number of inputs.
   *
   * @default 5
   */
  count?: number
  /**
   * The separator of the pin-input
   *
   * @example
   * 'i-lucide:dot'
   */
  separator?: NPinInputSeparatorProps['icon']

  // sub-components
  _pinInputRoot?: Partial<NPinInputRootProps>
  _pinInputInput?: Partial<NPinInputInputProps>
  _pinInputSeparator?: Partial<NPinInputSeparatorProps>
  _pinInputGroup?: Partial<NPinInputGroupProps>

  /** Additional properties for the una component */
  una?: NPinInputUnaProps
}

export interface NPinInputRootProps extends PinInputRootProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NPinInputUnaProps['pinInputRoot']
}

export interface NPinInputInputProps extends PinInputInputProps, BaseExtensions {
  /**
   * Allows you to add `UnaUI` pin-input preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/pin-input.ts
   * @example
   * pin-input="solid-yellow"
   */
  pinInput?: string
  /**
   * The separator flag of NPinInputProps['separator']
   *
   * @default false
   */
  withSeparator?: boolean
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputInput' | 'pinInputInputDefault'>
}

export interface NPinInputSeparatorProps extends BaseExtensions {
  /**
   * The separator icon.
   */
  icon?: string
  /** Additional properties for the una component */
  una?: Pick<NPinInputUnaProps, 'pinInputSeparator' | 'pinInputSeparatorIcon'>
}

export interface NPinInputGroupProps extends Omit<BaseExtensions, 'size'> {
  /** Additional properties for the una component */
  una?: NPinInputUnaProps['pinInputGroup']
}

interface NPinInputUnaProps {
  /** CSS class for the pin-input root */
  pinInputRoot?: HTMLAttributes['class']
  /** CSS class for the pin-input input */
  pinInputInput?: HTMLAttributes['class']
  /** CSS class for the pin-input input default variant */
  pinInputInputDefault?: HTMLAttributes['class']
  /** CSS class for the pin-input separator */
  pinInputSeparator?: HTMLAttributes['class']
  /** CSS class for the pin-input separator icon */
  pinInputSeparatorIcon?: HTMLAttributes['class']
  /** CSS class for the pin-input group */
  pinInputGroup?: HTMLAttributes['class']
}
