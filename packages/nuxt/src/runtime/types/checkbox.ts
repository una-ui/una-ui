export interface NCheckboxProps {
  /**
   * v-model binding value if the checkbox is checked.
   */
  modelValue?: boolean | null
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
   * Manually set the for attribute.
   *
   * By default, the for attribute is synced with the id attribute for accessibility reasons.
   *
   * @default randomId
   * @example
   * for="options"
   */
  for?: string
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
  una?: {
    checkbox?: string
    checkboxWrapper?: string
    checkboxLabel?: string
    checkboxIconBase?: string
    checkboxIcon?: string
  }
}
