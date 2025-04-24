import type { PrimitiveProps } from 'reka-ui'
import type { NAvatarProps } from './avatar'
/**
 * This extends the `NAvatarProps` interface.
 *
 * @see https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/types/avatar.ts
 */
export interface NAvatarGroupProps extends Omit<NAvatarProps, 'src' | 'alt' | 'label' | 'una'>, PrimitiveProps {
  /**
   * Set the maximum number of avatars to show.
   *
   */
  max?: number
  /**
   * Override the default overflow label.
   *
   * @default +${max}
   */
  overflowLabel?: string
  /**
   * `Una
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar-group.ts
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   */
  una?: {
    avatarGroup?: string
    avatarGroupCount?: string
  } & NAvatarProps['una']
}
