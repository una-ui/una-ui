import type { AvatarFallbackProps, AvatarImageProps, AvatarRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseProps {
  class?: HTMLAttributes['class']
  /**
   * Set the size of the avatar.
   */
  size?: HTMLAttributes['class']
  /**
   * Set the height and width of the avatar.
   */
  square?: HTMLAttributes['class']
  /**
   * Set the border radius of the avatar.
   */
  rounded?: HTMLAttributes['class']
}

export interface NAvatarProps extends BaseProps, NAvatarRootProps, NAvatarAvatarFallbackProps, NAvatarImageProps {
  _avatarRoot?: NAvatarRootProps
  _avatarImage?: NAvatarImageProps
  _avatarFallback?: NAvatarAvatarFallbackProps
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   */
  una?: NAvatarUnaProps
}

export interface NAvatarRootProps extends AvatarRootProps, BaseProps {
  /**
   * Allows you to add `UnaUI` avatar preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   * @example
   * avatar="solid-green"
   */
  avatar?: HTMLAttributes['class']

  una?: NAvatarUnaProps['avatarRoot']
}

export interface NAvatarAvatarFallbackProps extends AvatarFallbackProps, BaseProps {
  /**
   * Add a label to the fallback.
   */
  label?: string
  /**
   * Convert `label` prop to icon component.
   *
   * @default false
   * @example
   * icon
   * label="i-lucide-user"
   */
  icon?: boolean

  una?: NAvatarUnaProps['avatarFallback']
}

export interface NAvatarImageProps extends Omit<AvatarImageProps, 'src'>, BaseProps {
  src?: string
  alt?: string
  una?: NAvatarUnaProps['avatarImage']
}

export interface NAvatarUnaProps {
  avatarRoot?: HTMLAttributes['class']
  avatarImage?: HTMLAttributes['class']
  avatarFallback?: HTMLAttributes['class']

  avatarLabel?: HTMLAttributes['class']
  avatarIcon?: HTMLAttributes['class']
}
