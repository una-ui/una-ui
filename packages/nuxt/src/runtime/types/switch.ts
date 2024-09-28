import type { SwitchRootProps } from 'radix-vue'

export interface NSwitchProps extends SwitchRootProps {
  /**
   * Add a loading indicator to the switch.
   * This will also disable the switch.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Display the slider thumb outside of the track.
   *
   * @default false
   */
  outset?: boolean

  /**
   * Allows you to add `UnaUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch="xl green focus"
   */
  switch?: string

  /**
   * Allows you to display an icon. Equivalent of setting both `onIcon` and `offIcon`.
   *
   * @example
   * icon="i-heroicons-question-20-solid"
   */
  icon?: string
  /**
   * Allows you to display an icon when the switch is on.
   * Accepts icon name and utility classes
   *
   * @example
   * on-icon="i-heroicons-check-20-solid text-white"
   */
  onIcon?: string
  /**
   * Allows you to display an icon when the switch is off.
   * Accepts icon name and utility classes
   *
   * @example
   * off-icon="i-heroicons-x-mark-20-solid text-white"
   */
  offIcon?: string

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/switch.ts
   */
  una?: {
    switchThumb?: string
    switchThumbOn?: string
    switchThumbOff?: string

    switchTrack?: string
    switchTrackOn?: string
    switchTrackOff?: string

    switchIconBase?: string
    switchIconOn?: string
    switchIconOff?: string

    switchLoading?: string
    switchLoadingIcon?: string
  }
}
