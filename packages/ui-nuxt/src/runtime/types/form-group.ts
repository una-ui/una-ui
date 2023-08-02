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
   * Manually set the name attribute for the form group label.
   * Slot children will inherit the name attribute as both `id` and `name` for accessibility.
   *
   * By default, the name attribute is generated randomly.
   *
   * @default randomId
   * @example
   * name="email"
  */
  name?: string
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
  hint?: string
  /**
   * Display `Description` message for the form group.
   *
   * @example
   * description="We will never share your email with anyone else."
  */
  description?: string
  /**
   * Display `Message` for the form group.
   * Useful for displaying validation errors.
   *
   * @example
   * message="Email is required"
  */
  message?: string

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
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/form-group.ts
  */
  nv?: {
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string
    formGroupBottomWrapper?: string
    formGroupCounterWrapper?: string
    formGroupMessageWrapper?: string
    formGroupLabelWrapper?: string

    formGroupLabelBase?: string
    formGroupDescriptionBase?: string
    formGroupHintBase?: string
    formGroupMessageBase?: string

    formGroupLabelRequired?: string
  }
}
