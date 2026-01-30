import type { PopoverAnchorProps, PopoverArrowProps, PopoverCloseProps, PopoverContentProps, PopoverRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NPopoverProps extends PopoverRootProps {
  /** Props for the popover content */
  _popoverContent?: NPopoverContentProps
  /** Props for the popover anchor */
  _popoverAnchor?: PopoverAnchorProps
  /** Props for the popover arrow. Set to false to disable */
  _popoverArrow?: PopoverArrowProps | false
  /** Props for the popover close button. Set to false to disable */
  _popoverClose?: PopoverCloseProps | false

  /** Una styling information */
  una?: NPopoverUnaProps
}

export interface NPopoverContentProps extends PopoverContentProps, BaseExtensions {
  una?: Pick<NPopoverUnaProps, 'popoverContent'>
}

interface NPopoverUnaProps {
  popoverContent?: string
  popoverClose?: string
  popoverCloseIcon?: string
  popoverArrow?: string
}
