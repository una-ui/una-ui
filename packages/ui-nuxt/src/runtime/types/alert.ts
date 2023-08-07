export interface NAlertProps {
  /**
   * Allows you to add `NexveltUI` alert preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/alert.ts
   * @example
   * alert="outline-pink"
  */
  alert?: string
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

  /**
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/alert.ts
  */
  nv?: {
    // base
    alertTitle?: string
    alertDescription?: string
    alertIconBase?: string
    alertClose?: string
    alertCloseIconBase?: string

    // wrappers
    alertInnerWrapper?: string
    alertContentWrapper?: string
    alertIconWrapper?: string
    alertCloseWrapper?: string
    alertCloseInnerWrapper?: string

    // icons
    alertCloseIcon?: string
  }
}
