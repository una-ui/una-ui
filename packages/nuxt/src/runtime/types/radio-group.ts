import type { HTMLAttributes } from 'vue'

export interface NRadioGroupProps {
  /**
   * Switch the position of label and radio.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * Allows you to add `UnaUI` radio preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio.ts
   * @example
   * radio-group="green"
   */
  radioGroup?: string
  /**
   * Allows you to change the size of the radio.
   *
   * @default size="sm"
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio.ts
   */
  una?: {
    radioGroup?: HTMLAttributes['class']
  }
}
