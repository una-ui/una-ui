import type { CheckboxIndicatorProps, CheckboxRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NLabelProps } from './label'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NCheckboxProps extends CheckboxRootProps, NLabelProps, BaseExtensions {
  /**
   * Disable the checkbox.
   */
  disabled?: boolean
  /**
   * Switch the position of label and checkbox.
   */
  reverse?: boolean

  /**
   * Allows you to add `UnaUI` checkbox preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   */
  checkbox?: string
  /**
   * Add name attribute to the checkbox.
   *
   * @default null
   */
  name?: string
  /**
   * Manually set the id attribute.
   * By default, the id attribute is generated randomly for accessibility reasons.
   *
   * @default randomId
   */
  id?: string
  /**
   * Display label text.
   *
   * @default null
   */
  label?: string
  /**
   * Allows you to change the size of the checkbox.
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
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/checkbox.ts
   */
  /**
   * Force mount the indicator component.
   *
   * @default true
   */
  forceMount?: CheckboxIndicatorProps['forceMount']

  // subcomponents
  _checkboxIndicator?: CheckboxIndicatorProps
  _label?: NLabelProps

  una?: {
    checkbox?: HTMLAttributes['class']
    checkboxWrapper?: HTMLAttributes['class']
    checkboxLabel?: HTMLAttributes['class']
    checkboxIndicator?: HTMLAttributes['class']
    checkboxIconBase?: HTMLAttributes['class']

    checkboxCheckedIcon?: HTMLAttributes['class']
    checkboxUncheckedIcon?: HTMLAttributes['class']
    checkboxIndeterminateIcon?: HTMLAttributes['class']
  }
}
