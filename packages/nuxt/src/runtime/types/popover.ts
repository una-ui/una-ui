import type { PopoverAnchorProps, PopoverArrowProps, PopoverCloseProps, PopoverContentProps, PopoverRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NPopoverProps extends PopoverRootProps {
  /** Props for the popover content */
  _popoverContent?: NPopoverContentProps
  _popoverAnchor?: PopoverAnchorProps
  _popoverArrow?: PopoverArrowProps
  _popoverClose?: PopoverCloseProps

  una?: NPopoverUnaProps
}

export interface NPopoverContentProps extends PopoverContentProps, BaseExtensions {
  una?: Pick<NPopoverUnaProps, 'popoverContent'>
}

interface NPopoverUnaProps {
  popoverRoot?: string
  popoverTrigger?: string
  popoverContent?: string
  popoverClose?: string
  popoverCloseIcon?: string
  popoverArrow?: string
  popoverAnchor?: string
}
