export interface NIndicatorProps {
  /**
   * Set the size of the indicator.
   *
   * @default 'md'
  */
  size?: string
  /**
   * Allows you to add `UnaUI` button preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/indicator.ts
   * @example
   * indicator="solid-green top-right"
  */
  indicator?: string
  /**
   * Add a label to the indicator.
   *
   * @example
   * label="new"
  */
  label?: string

  /**
   * Add ping animation to the indicator.
   *
   * @default false
  */
  ping?: boolean
  /**
   * Set visibility of the indicator.
   *
   * @default true
  */
  visible?: boolean

  /**
 * `UnaUI` preset configuration
 *
 * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/indicator.ts
*/
  una?: {
    // base
    indicator?: string

    // wrapper
    indicatorWrapper?: string

  }
}
