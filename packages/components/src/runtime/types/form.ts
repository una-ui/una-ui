import type { HTMLAttributes } from 'vue'
import type { NLabelProps } from './label'

export interface NFormFieldProps extends NLabelProps {
  class?: HTMLAttributes['class']
  /**
   * Update the form field status.
   *
   * @default null
   */
  status?: 'info' | 'success' | 'warning' | 'error'
  /**
   * Add a required indicator to the form field.
   *
   * @default false
   */
  required?: boolean
  /**
   * Add a name attribute to the form field.
   *
   */
  name: string
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
   * Label for the form field.
   *
   * @example
   * label="Email"
   */
  label?: string
  /**
   * Display `hint` message for the form field.
   *
   * @example
   * hint="Enter your email address"
   */
  hint?: any
  /**
   * Display `Description` message for the form field.
   *
   * @example
   * description="We will never share your email with anyone else."
   */
  description?: any
  /**
   * Display `Message` for the form field.
   * Useful for displaying validation errors.
   *
   * @example
   * message="Email is required"
   */
  message?: any

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/form.ts
   */
  una?: NFormUnaProps
}

export interface NFormMessageProps {
  class?: HTMLAttributes['class']

  una?: Pick<NFormUnaProps, 'formMessage'>
}

export interface NFormLabelProps extends NLabelProps {
  una?: Pick<NFormUnaProps, 'formLabel'>
}

export interface NFormItemProps {
  class?: HTMLAttributes['class']

  una?: Pick<NFormUnaProps, 'formItem'>
}

export interface NFormDescriptionProps {
  class?: HTMLAttributes['class']

  una?: Pick<NFormUnaProps, 'formDescription'>
}

interface NFormUnaProps {
  formField?: HTMLAttributes['class']

  formFieldTopWrapper?: HTMLAttributes['class']
  formFieldTopWrapperInner?: HTMLAttributes['class']
  formFieldBottomWrapper?: HTMLAttributes['class']
  formFieldCounterWrapper?: HTMLAttributes['class']
  formFieldMessageWrapper?: HTMLAttributes['class']
  formFieldLabelWrapper?: HTMLAttributes['class']

  formFieldHint?: HTMLAttributes['class']
  formMessage?: HTMLAttributes['class']
  formLabel?: HTMLAttributes['class']
  formItem?: HTMLAttributes['class']
  formDescription?: HTMLAttributes['class']

  formFieldLabelRequired?: HTMLAttributes['class']
}
