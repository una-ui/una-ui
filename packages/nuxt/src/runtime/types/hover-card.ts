import type { HoverCardArrowProps, HoverCardContentProps, HoverCardRootProps, HoverCardTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NHoverCardProps extends HoverCardRootProps, Omit<NHoverCardTriggerProps, 'una' | 'size'>, BaseExtensions {
  /**
   * Allows you to add `UnaUI` hover-card preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/hover-card.ts
   * @example
   * hovercard="outline-gray"
   */
  hovercard?: HTMLAttributes['class']
  /** Whether to show the arrow or not */
  arrow?: boolean

  /** Props for the hover card content */
  _hoverCardContent?: Partial<NHoverCardContentProps>
  /** Props for the hover card trigger */
  _hoverCardTrigger?: Partial<NHoverCardTriggerProps>
  /** Props for the hover card arrow */
  _hoverCardArrow?: Partial<NHoverCardArrowProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/hover-card.ts
   */
  una?: NHoverCardUnaProps
}

export interface NHoverCardContentProps extends HoverCardContentProps, Pick<NHoverCardProps, 'hovercard'>, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NHoverCardUnaProps, 'hoverCardContent'>
}

export interface NHoverCardTriggerProps extends HoverCardTriggerProps, Omit<NButtonProps, 'una'> {
  /** Additional properties for the una component */
  una?: Pick<NHoverCardUnaProps, 'hoverCardTrigger'> & NButtonProps['una']
}

export interface NHoverCardArrowProps extends HoverCardArrowProps, Pick<NHoverCardProps, 'hovercard'>, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NHoverCardUnaProps, 'hoverCardArrow'>
}

interface NHoverCardUnaProps {
  /** CSS class for the hover card */
  hoverCard?: HTMLAttributes['class']
  /** CSS class for the hover card content */
  hoverCardContent?: HTMLAttributes['class']
  /** CSS class for the hover card trigger */
  hoverCardTrigger?: HTMLAttributes['class']
  /** CSS class for the hover card arrow */
  hoverCardArrow?: HTMLAttributes['class']
}
