import type { NAvatarProps } from './avatar'

export interface NAvatarGroupProps extends Omit<NAvatarProps, 'nv'> {
  max: number

  nv?: {
    avatarGroupChild?: string
    avatarGroupMargin?: string
    avatarGroupLabel?: string
  } & NAvatarProps['nv']
}
