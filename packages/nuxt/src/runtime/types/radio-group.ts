import type { RadioGroupItemProps, RadioGroupRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseProps {
  class?: HTMLAttributes['class']
  /**
   * Set the size of the avatar.
   */
  size?: HTMLAttributes['class']
  /**
   * Set the height and width of the avatar.
   */
  square?: HTMLAttributes['class']
  /**
   * Set the border radius of the avatar.
   */
  rounded?: HTMLAttributes['class']
  /**
   * Update the icon of the radio.
   */
  icon?: HTMLAttributes['class']
}

export interface NRadioGroupProps extends BaseProps, RadioGroupRootProps {
  items?: NRadioGroupItemProps[]
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
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio-group.ts
   * @example
   * radio-group="green"
   */
  radioGroup?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio.ts
   */
  una?: NRadioGroupUnaProps
}

export interface NRadioGroupItemProps extends BaseProps, RadioGroupItemProps {
  label?: string
  /**
   * Allows you to add `UnaUI` radio preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio-group.ts
   * @example
   * radio-group="green"
   */
  radioGroup?: HTMLAttributes['class']

  una?: NRadioGroupUnaProps
}

export interface NRadioGroupUnaProps {
  radioGroup?: HTMLAttributes['class']

  radioGroupItemWrapper?: HTMLAttributes['class']
  radioGroupItem?: HTMLAttributes['class']
  radioGroupItemLabel?: HTMLAttributes['class']

  radioGroupIndicator?: HTMLAttributes['class']
  radioGroupIndicatorIcon?: HTMLAttributes['class']
}
