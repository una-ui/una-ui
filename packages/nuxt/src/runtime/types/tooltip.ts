import type { HTMLAttributes } from 'vue'
import type { TooltipContentProps, TooltipProviderProps, TooltipRootProps, TooltipTriggerProps } from 'radix-vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type RootExtensions = BaseExtensions & TooltipRootProps
type ProviderExtensions = BaseExtensions & TooltipProviderProps
type TriggerExtensions = NButtonProps & TooltipTriggerProps
type ContentExtensions = BaseExtensions & TooltipContentProps
type TooltipExtensions =
  Omit<NTooltipRootProps, 'class' | 'size'> &
  Omit<NTooltipTriggerProps, 'una'>

export interface NTooltipProps extends TooltipExtensions {
  /**
   * Allows you to add `UnaUI` tooltip preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tooltip.ts
   * @example
   * tooltip="green"
   */
  tooltip?: HTMLAttributes['class']
  /**
   * Add a content of the tooltip.
   */
  content?: string

  // subcomponents
  _tooltipRoot?: Partial<NTooltipRootProps>
  _tooltipProvider?: Partial<NTooltipProviderProps>
  _tooltipTrigger?: Partial<NTooltipTriggerProps>
  _tooltipContent?: Partial<NTooltipContentProps>

  una?: NTooltipUnaProps & NButtonProps['una']
}

export interface NTooltipRootProps extends RootExtensions {
  /** Additional properties for the una component */
  una?: NTooltipUnaProps['tooltipRoot']
}

export interface NTooltipProviderProps extends ProviderExtensions {
  /** Additional properties for the una component */
  una?: NTooltipUnaProps['tooltipProvider']
}

export interface NTooltipTriggerProps extends TriggerExtensions {
  /** Additional properties for the una component */
  una?: NTooltipUnaProps['tooltipTrigger'] & NButtonProps['una']
}

export interface NTooltipContentProps extends ContentExtensions {
  /** Additional properties for the una component */
  una?: NTooltipUnaProps['tooltipContent']
}

interface NTooltipUnaProps {
  /** CSS class for the tooltip root */
  tooltipRoot?: HTMLAttributes['class']
  /** CSS class for the tooltip provider */
  tooltipProvider?: HTMLAttributes['class']
  /** CSS class for the tooltip trigger */
  tooltipTrigger?: HTMLAttributes['class']
  /** CSS class for the tooltip content */
  tooltipContent?: HTMLAttributes['class']
}
