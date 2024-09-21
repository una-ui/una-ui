import type { TooltipContentProps, TooltipProviderProps, TooltipRootProps, TooltipTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { AnimateProps } from './animate'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type TriggerExtensions = NButtonProps & TooltipTriggerProps
type ContentExtensions = BaseExtensions & TooltipContentProps

export interface NTooltipProps extends BaseExtensions, AnimateProps {
  /**
   * Disable the tooltip.
   */
  disabled?: boolean
  /**
   * Add a content of the tooltip.
   */
  content?: string
  /**
   * Allows you to add `UnaUI` tooltip preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tooltip.ts
   * @example
   * tooltip="green"
   */
  tooltip?: HTMLAttributes['class']

  // subcomponents
  _tooltipProvider?: Partial<NTooltipProviderProps>
  _tooltipRoot?: Partial<NTooltipRootProps>
  _tooltipTrigger?: Partial<NTooltipTriggerProps>
  _tooltipContent?: Partial<NTooltipContentProps>

  una?: NTooltipUnaProps
}

export interface NTooltipRootProps extends TooltipRootProps {
  'onUpdate:open'?: (value: boolean) => void
}

export interface NTooltipProviderProps extends TooltipProviderProps {
}

export interface NTooltipTriggerProps extends TriggerExtensions {
}

export interface NTooltipContentProps extends ContentExtensions, AnimateProps {
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
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tooltip.ts
   */
  una?: NTooltipUnaProps['tooltipContent']
}

interface NTooltipUnaProps {
  /** CSS class for the tooltip content */
  tooltipContent?: HTMLAttributes['class']
}
