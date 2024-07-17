export interface NFormGroupProps {
  /**
   * Update the form group status.
   *
   * @default null
   */
  status?: 'info' | 'success' | 'warning' | 'error'
  /**
   * Add a required indicator to the form group.
   *
   * @default false
   */
  required?: boolean

  /**
   * Manually set the for attribute.
   *
   * By default, the for attribute is synced with the id attribute for accessibility reasons.
   * You can disable this behavior by setting `for` to `false`.
   *
   * @default randomId
   * @example
   * for="email"
   */
  for?: string | boolean
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
   * Label for the form group.
   *
   * @example
   * label="Email"
   */
  label?: string
  /**
   * Display `hint` message for the form group.
   *
   * @example
   * hint="Enter your email address"
   */
  hint?: any
  /**
   * Display `Description` message for the form group.
   *
   * @example
   * description="We will never share your email with anyone else."
   */
  description?: any
  /**
   * Display `Message` for the form group.
   * Useful for displaying validation errors.
   *
   * @example
   * message="Email is required"
   */
  message?: any

  /**
   * Display `counter` for the form group.
   * Useful for displaying character count.
   *
   * @example
   * counter="{ value: 0, max: 100 }"
   */
  counter?: {
    value: number
    max?: number
  }

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/form-group.ts
   */
  una?: {
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string
    formGroupBottomWrapper?: string
    formGroupCounterWrapper?: string
    formGroupMessageWrapper?: string
    formGroupLabelWrapper?: string

    formGroupLabel?: string
    formGroupDescription?: string
    formGroupHint?: string
    formGroupMessage?: string

    formGroupLabelRequired?: string
  }
}
