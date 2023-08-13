import type { NAvatarProps } from './avatar'

export interface NAvatarGroupProps extends Omit<NAvatarProps, 'nv'> {
  /**
   * Set the maximum number of avatars to show.
   *
   * @default 3
  */
  max: number

  nv?: {
    avatarGroupChild?: string
    avatarGroupMargin?: string
    avatarGroupLabel?: string
  } & NAvatarProps['nv']
}
