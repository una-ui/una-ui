import type { NAvatarProps } from './avatar'

/**
 * This extends the `NAvatarProps` interface.
 *
 * @see https://github.com/nexvelt/ui/blob/main/packages/ui-nuxt/src/runtime/types/avatar.ts
*/
export interface NAvatarGroupProps extends Omit<NAvatarProps, 'nv'> {
  /**
   * Set the maximum number of avatars to show.
   *
   * @default 3
  */
  max: number

  /**
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/avatar-group.ts
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/avatar.ts
  */
  nv?: {
    avatarGroup?: string
    avatarGroupChild?: string
    avatarGroupMargin?: string
    avatarGroupLabel?: string
  } & NAvatarProps['nv']
}
