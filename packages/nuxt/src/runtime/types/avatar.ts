export interface NAvatarProps {
  /**
   * Allows you to add `UnaUI` avatar preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   * @example
   * avatar="solid-green"
   */
  avatar?: string
  /**
   * Add icon instead of image.
   *
   * @example
   * icon="i-heroicons-information-circle"
   */
  icon?: string
  /**
   * Add a label to the avatar.
   *
   * @example
   * label="PR"
   */
  label?: string
  /**
   * Add src of the image.
   *
   * @example
   * src="https://i.pravatar.cc/300"
   */
  src?: string
  /**
   * Add alt of the image.
   *
   * @example
   * alt="Profile"
   */
  alt?: string
  /**
   * Add fallback of the image.
   *
   * @example
   * fallback="https://i.pravatar.cc/300"
   */
  fallback?: string

  /**
   * Add a delay before showing the avatar.
   *
   * @default 0
   */
  delay?: number

  /**
   * Add a skeleton effect to the avatar.
   *
   * @default false
   */
  skeleton?: boolean

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   */
  una?: {
    // base
    avatar?: string
    avatarLabel?: string
    avatarSrc?: string
    avatarFallback?: string
    avatarIconBase?: string

    // icons
    avatarFallbackIcon?: string
  }
}
