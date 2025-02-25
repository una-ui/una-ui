import type { ToggleProps } from 'reka-ui'
import type { NButtonProps } from './button'

export interface NToggleProps extends ToggleProps, NButtonProps {
  /**
   * Allows you to add `UnaUI` badge preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toggle.ts
   * @example
   * toggle-on="soft-accent"
   */
  toggleOn?: string

  /**
   * Allows you to add `UnaUI` badge preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toggle.ts
   * @example
   * toggle-off="ghost-gray"
   */
  toggleOff?: string
}
