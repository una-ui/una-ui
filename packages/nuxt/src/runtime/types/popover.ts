import type { PopoverAnchorProps, PopoverArrowProps, PopoverCloseProps, PopoverContentProps, PopoverRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NPopoverProps extends PopoverRootProps {
  /** Props for the popover content */
  _popoverContent?: NPopoverContentProps
  /** Props for the popover anchor */
  _popoverAnchor?: Partial<NPopoverAnchorProps>
  /** Props for the popover arrow */
  _popoverArrow?: Partial<NPopoverArrowProps>
  /** Props for the popover close button */
  _popoverClose?: Partial<NPopoverCloseProps>

  /**
   * Whether to show the close button.
   * @default false
   */
  showClose?: boolean
  /**
   * Whether to show the arrow.
   * @default false
   */
  arrow?: boolean

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/popover.ts
   */
  una?: NPopoverUnaProps
}

export interface NPopoverContentProps extends PopoverContentProps, BaseExtensions {
  una?: Pick<NPopoverUnaProps, 'popoverContent'>
}

export interface NPopoverAnchorProps extends PopoverAnchorProps, BaseExtensions {
}

export interface NPopoverArrowProps extends PopoverArrowProps, BaseExtensions {
  una?: Pick<NPopoverUnaProps, 'popoverArrow'>
}

export interface NPopoverCloseProps extends PopoverCloseProps, NButtonProps {
}

interface NPopoverUnaProps {
  popoverContent?: HTMLAttributes['class']
  popoverArrow?: HTMLAttributes['class']
}
