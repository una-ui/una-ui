export interface NInputProps {
  /**
   *
   * @default null
  */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
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
   * Add disabled state to the input.
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
   * Allows you to add `NexveltUI` input preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/input.ts
   * @example
   * input="solid-green"
  */
  input?: string

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
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/input.ts
  */
  nv?: {
    inputWrapper?: string
    inputLeadingWrapper?: string
    inputTrailingWrapper?: string

    inputWarningIcon?: string
    inputErrorIcon?: string
    inputSuccessIcon?: string
    inputInfoIcon?: string
    inputLoadingIcon?: string

    inputLoadingBase?: string
    inputTrailingBase?: string
    inputLeadingBase?: string
  }
}
