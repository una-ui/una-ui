export interface NKbdProps {
  /**
   * Allows you to add `UnaUI` kbd preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/kbd.ts
   * @example
   * kbd="solid-error"
  */
  kbd?: string
  /**
   * Add a label to the kbd.
   *
   * @example
   * label="Ctrl"
  */
  label?: string

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/kbd.ts
  */
  una?: {
    kbd?: string
  }
}
