export interface NButtonProps {
  /**
   * Change the button type
   * @default 'button'
  */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Change the loading placement of the button
   * @default 'leading'
  */
  loadingPlacement?: 'leading' | 'trailing' | 'label'
  /**
   * Convert `label` prop to icon component
   * @default false
   * @example
   * icon
   * label="i-heroicons-information-circle"
  */
  icon?: boolean
  /**
   * Disable the button
   * @default false
  */
  disabled?: boolean
  /**
   * Show loading state on button
   * @default false
  */
  loading?: boolean
  /**
   * Change the button tag to `NuxtLink` component,
   * This allows you to use `NuxtLink` available props
   * see https://nuxt.com/docs/api/components/nuxt-link#props
   * @example
   * to="/"
  */
  to?: string
  /**
   * Add a label to the button.
   * @example
   * label="Click me"
  */
  label?: string
  /**
   * Allows you to add `NexveltUI` preset properties to the button,
   * Think of it as a shortcut for adding classes to the button preset.
   * see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/button.ts
   * @example
   * btn="solid-green block square"
  */
  btn?: string
  /**
   * Add leading icon the button,
   * This also allows you to add utility classes to the icon.
   * @example
   * leading="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  leading?: string
  /**
   * Add trailing icon the button.
   * This also allows you to add utility classes to the icon
   * @example
   * trailing="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  trailing?: string
  /**
   * `NexveltUI` preset configuration
   * see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/button.ts
  */
  nv?: {
    btnLabelBase?: string
    btnLeadingBase?: string
    btnTrailingBase?: string
    btnIconTextBase?: string
    btnLoadingBase?: string
    btnLoadingIcon?: string
  }
}
