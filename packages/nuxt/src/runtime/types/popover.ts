import type { PopoverContentProps, PopoverRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NPopoverProps extends PopoverRootProps {
  /** Props for the popover content */
  _popoverContent?: NPopoverContentProps
}

export interface NPopoverContentProps extends PopoverContentProps, BaseExtensions {
}
