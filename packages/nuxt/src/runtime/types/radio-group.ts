import type { AcceptableValue, RadioGroupItemProps, RadioGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseProps {
  /**
   * The class name of the radio group.
   */
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

export interface NRadioGroupProps<T extends AcceptableValue> extends BaseProps, RadioGroupRootProps {
  /**
   * The items to display in the radio group.
   */
  items?: T[] | NRadioGroupItemProps[]
  /**
   * The key name to use to display in the radio items.
   */
  labelKey?: keyof T
  /**
   * The key name to use to display in the selected value.
   */
  valueKey?: keyof T
  /**
   * The key name to use to display the description in the radio items.
   */
  descriptionKey?: keyof T
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
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio-group.ts
   */
  una?: NRadioGroupUnaProps
}

export interface NRadioGroupItemProps extends BaseProps, RadioGroupItemProps {
  /**
   * The label to display in the radio item.
   */
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
  /**
   * The key name to use to display in the selected value.
   */
  description?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio-group.ts
   */
  una?: NRadioGroupUnaProps
}

export interface NRadioGroupUnaProps {
  radioGroup?: HTMLAttributes['class']

  radioGroupItemRoot?: HTMLAttributes['class']
  radioGroupItemWrapper?: HTMLAttributes['class']
  radioGroupItem?: HTMLAttributes['class']
  radioGroupItemLabel?: HTMLAttributes['class']
  radioGroupItemDescription?: HTMLAttributes['class']

  radioGroupIndicator?: HTMLAttributes['class']
  radioGroupIndicatorIcon?: HTMLAttributes['class']
}
