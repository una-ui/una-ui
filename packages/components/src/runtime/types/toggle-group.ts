import type { ToggleGroupItemProps, ToggleGroupRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NToggleProps } from './toggle'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NToggleGroupProps<T> extends ToggleGroupRootProps, Pick<NToggleProps, 'toggleOff' | 'toggleOn'>, BaseExtensions {
  /**
   * The array of items that is passed to the toggle group.
   *
   * @default []
   */
  items?: T

  /** Props for the toggle group item */
  _toggleGroupItem?: Partial<NToggleGroupItemProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/toggle-group.ts
   */
  una?: NToggleGroupUnaProps
}
export interface NToggleGroupItemProps extends ToggleGroupItemProps, Omit<NToggleProps, 'una'>, Pick<BaseExtensions, 'class'> {
  /** Slot of the toggle group item */
  slot?: string
  /** Additional properties for the una component */
  una?: Pick<NToggleGroupUnaProps, 'toggleGroupItem'> & NButtonProps['una']
}

interface NToggleGroupUnaProps {
  /** CSS class for the navigation menu */
  toggleGroup?: HTMLAttributes['class']
  /** CSS class for the navigation menu content */
  toggleGroupItem?: HTMLAttributes['class']
}
