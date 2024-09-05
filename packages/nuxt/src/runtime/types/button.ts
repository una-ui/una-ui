import type { HTMLAttributes } from 'vue'

interface Extensions {
  class?: HTMLAttributes['class']
  breadcrumbActive?: string
  breadcrumbInactive?: string
  dropdownMenu?: string
  tooltip?: string
}

export interface NButtonProps extends Extensions {
  /**
   * Change the button type.
   *
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Change the loading placement of the button.
   *
   * @default 'leading'
   */
  loadingPlacement?: 'leading' | 'trailing' | 'label'
  /**
   * Convert `label` prop to icon component.
   *
   * @default false
   * @example
   * icon
   * label="i-heroicons-information-circle"
   */
  icon?: boolean
  /**
   * Disable the button.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Swap the position of the leading and trailing icons.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * Show loading state on button
   * @default false
   */
  loading?: boolean

  /**
   * Change the button tag to `NuxtLink` component,
   * This allows you to use `NuxtLink` available props.
   *
   * @see https://nuxt.com/docs/api/components/nuxt-link#props
   * @example
   * to="/"
   */
  to?: string
  /**
   * Add a label to the button.
   *
   * @example
   * label="Click me"
   */
  label?: string
  /**
   * Allows you to add `UnaUI` button preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/button.ts
   * @example
   * btn="solid-green block square"
   */
  btn?: string
  /**
   * Add leading icon the button,
   * This also allows you to add utility classes to the icon.
   *
   * @example
   * leading="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  leading?: string
  /**
   * Add trailing icon the button.
   * This also allows you to add utility classes to the icon.
   *
   * @example
   * trailing="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  trailing?: string
  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/button.ts
   */
  una?: {
    // base
    btnDefaultVariant?: string
    btn?: string
    btnLabel?: string
    btnIconLabel?: string
    btnLoading?: string

    // icons
    btnTrailing?: string
    btnLeading?: string
    btnLoadingIcon?: string
  }
}
