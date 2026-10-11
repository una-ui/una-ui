import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NAlertProps {
  size?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  /**
   * Allows you to add `UnaUI` alert preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert.ts
   * @example
   * alert="outline-pink"
   */
  alert?: HTMLAttributes['class']
  /**
   * Add icon to the alert,
   * If this is true, the icon will be automatically generated based on the color.
   * Supported colors are `info`, `success`, `warning`, and `error`
   *
   * You can customize the icon by providing the icon that you want.
   *
   * @example
   * icon="i-heroicons-information-circle"
   */
  icon?: string | boolean
  /**
   * Add a close button to the alert.
   *
   * @default false
   */
  closable?: boolean
  /**
   * Add a title to the alert.
   */
  title?: string
  /**
   * Add a description to the alert.
   */
  description?: string

  // subcomponents
  _alertTitle?: NAlertTitleProps
  _alertDescription?: NAlertDescriptionProps
  _alertClose?: NAlertCloseProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/alert.ts
   */
  una?: NAlertUnaProps
}

export interface NAlertTitleProps {
  size?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  una?: Pick<NAlertUnaProps, 'alertTitle'>
}

export interface NAlertDescriptionProps {
  size?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  una?: Pick<NAlertUnaProps, 'alertDescription'>
}

export interface NAlertCloseProps extends Omit<NButtonProps, 'una'> {
  size?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  una?: Pick<NAlertUnaProps, 'alertCloseWrapper'> & NButtonProps['una']
}

export interface NAlertUnaProps {
  alert?: HTMLAttributes['class']
  alertTitle?: HTMLAttributes['class']
  alertDescription?: HTMLAttributes['class']
  alertCloseWrapper?: HTMLAttributes['class']
}
