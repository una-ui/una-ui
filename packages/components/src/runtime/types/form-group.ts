import type { HTMLAttributes } from 'vue'
import type { NLabelProps } from './label'

export interface NFormGroupProps extends NLabelProps {
  class?: HTMLAttributes['class']
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
    formGroup?: HTMLAttributes['class']

    formGroupTopWrapper?: HTMLAttributes['class']
    formGroupTopWrapperInner?: HTMLAttributes['class']
    formGroupBottomWrapper?: HTMLAttributes['class']
    formGroupCounterWrapper?: HTMLAttributes['class']
    formGroupMessageWrapper?: HTMLAttributes['class']
    formGroupLabelWrapper?: HTMLAttributes['class']

    formGroupLabel?: HTMLAttributes['class']
    formGroupDescription?: HTMLAttributes['class']
    formGroupHint?: HTMLAttributes['class']
    formGroupMessage?: HTMLAttributes['class']

    formGroupLabelRequired?: HTMLAttributes['class']
  }
}
