import type { PopoverContentProps, PopoverRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NPopoverProps extends PopoverRootProps {
  popper?: NPopoverContentProps
}

export interface NPopoverContentProps extends PopoverContentProps, BaseExtensions {
}
