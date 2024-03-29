import type { NAvatarProps } from './avatar'

/**
 * This extends the `NAvatarProps` interface.
 *
 * @see https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/types/avatar.ts
 */
export interface NAvatarGroupProps extends Omit<NAvatarProps, 'una'> {
  /**
   * Set the maximum number of avatars to show.
   *
   * @default 3
   */
  max: number

  /**
   * `Una
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar-group.ts
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   */
  una?: {
    avatarGroup?: string
    avatarGroupChild?: string
    avatarGroupMargin?: string
    avatarGroupLabel?: string
  } & NAvatarProps['una']
}
