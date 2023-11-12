export interface NInputProps {
  /**
   *
   * @default null
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'textarea' | ''

  /**
   * Update the input status.
   * Useful for validations.
   *
   * @default null
   */
  status?: 'info' | 'success' | 'warning' | 'error'

  /**
   * Add loading state to the input.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Swap the position of the leading and trailing icons.
   *
   * @default false
   */
  reverse?: boolean

  /**
   * Value of the input.
   *
   * @default null
   */
  modelValue?: string | number
  /**
   * Display leading icon.
   *
   * @default null
   */
  leading?: string
  /**
   * Display trailing icon.
   *
   * @default null
   */
  trailing?: string
  /**
   * Allows you to add `UnaUI` input preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/input.ts
   * @example
   * input="solid-green"
   */
  input?: string
  /**
   * Allows you to change the size of the input.
   *
   * @default 'sm'
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string

  /**
   * Manually set the id attribute.
   *
   * By default, the id attribute is generated randomly for accessibility reasons.
   *
   * @default randomId
   * @example
   * id="email"
   */
  id?: string

  /**
   * Automatically resize the textarea to fit the content.
   * This property only works with the `textarea` type.
   *
   * @default false
   */
  autoresize?: boolean

  /**
   * This property only works with the `textarea` type.
   * You can add your own resize preset or use the default one.
   *
   * @default 'none'
   *
   * @example
   * resize="x" | resize="y" | resize="none" | null
   */
  resize?: string | null

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/input.ts
   */
  una?: {
    // base
    input?: string
    inputLoading?: string
    inputTrailing?: string
    inputLeading?: string

    // wrappers
    inputWrapper?: string
    inputLeadingWrapper?: string
    inputTrailingWrapper?: string

    // icons
    inputWarningIcon?: string
    inputErrorIcon?: string
    inputSuccessIcon?: string
    inputInfoIcon?: string
    inputLoadingIcon?: string
  }
}
