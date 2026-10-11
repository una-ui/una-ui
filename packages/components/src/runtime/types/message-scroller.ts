import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

/**
 * Where the viewport is placed on mount.
 */
export type NMessageScrollerDefaultScrollPosition = 'start' | 'end' | 'last-anchor'

/**
 * The edge a scroll button jumps to.
 */
export type NMessageScrollerButtonDirection = 'start' | 'end'

/**
 * How a message is aligned once it is scrolled into view.
 */
export type NMessageScrollerScrollAlign = 'start' | 'center' | 'end' | 'nearest'

export interface NMessageScrollerScrollOptions {
  /**
   * Where the message lands inside the viewport.
   *
   * @default 'start'
   */
  align?: NMessageScrollerScrollAlign
  /**
   * The scroll behavior.
   *
   * @default 'smooth'
   */
  behavior?: ScrollBehavior
  /**
   * Extra space left between the message and the viewport edge, in pixels.
   */
  scrollMargin?: number
}

/**
 * Which directions the viewport can still be scrolled in.
 */
export interface NMessageScrollerScrollable {
  start: boolean
  end: boolean
}

/**
 * Which messages the viewport currently shows.
 */
export interface NMessageScrollerVisibilityState {
  currentAnchorId: string | null
  visibleMessageIds: string[]
}

export interface NMessageScrollerProps {
  /**
   * Additional classes to apply to the scroller.
   */
  class?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/message-scroller.ts
   */
  una?: Pick<NMessageScrollerUnaProps, 'messageScroller'>
}

export interface NMessageScrollerProviderProps {
  /**
   * Follow new content as it arrives, keeping the viewport pinned to the end
   * until the reader scrolls away.
   *
   * @default false
   */
  autoScroll?: boolean
  /**
   * Where the viewport is placed on mount.
   *
   * @default 'end'
   */
  defaultScrollPosition?: NMessageScrollerDefaultScrollPosition
  /**
   * How close to an edge, in pixels, still counts as being at that edge.
   *
   * @default 8
   */
  scrollEdgeThreshold?: number
  /**
   * How much of the previous message stays visible above an anchored message,
   * in pixels.
   *
   * @default 64
   */
  scrollPreviousItemPeek?: number
  /**
   * Extra space left between a scrolled-to message and the viewport edge,
   * in pixels.
   *
   * @default 0
   */
  scrollMargin?: number
}

export interface NMessageScrollerViewportProps {
  /**
   * Additional classes to apply to the viewport.
   */
  class?: HTMLAttributes['class']
  /**
   * Keep the reading position steady when messages are added above the
   * current scroll position.
   *
   * @default true
   */
  preserveScrollOnPrepend?: boolean
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/message-scroller.ts
   */
  una?: Pick<NMessageScrollerUnaProps, 'messageScrollerViewport'>
}

export interface NMessageScrollerContentProps {
  /**
   * Additional classes to apply to the content list.
   */
  class?: HTMLAttributes['class']
  /**
   * Additional classes to apply to the trailing spacer that anchoring grows
   * and consumes.
   */
  spacerClass?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/message-scroller.ts
   */
  una?: Pick<NMessageScrollerUnaProps, 'messageScrollerContent'>
}

export interface NMessageScrollerItemProps {
  /**
   * Identifies the message, enabling `scrollToMessage` and visibility
   * tracking. Items without an id are laid out but not tracked.
   */
  messageId?: string
  /**
   * Mark the message as an anchor, so the scroller pins it to the top of the
   * viewport as its content grows.
   *
   * @default false
   */
  scrollAnchor?: boolean
  /**
   * Additional classes to apply to the item.
   */
  class?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/message-scroller.ts
   */
  una?: Pick<NMessageScrollerUnaProps, 'messageScrollerItem'>
}

export interface NMessageScrollerButtonProps extends Omit<NButtonProps, 'una'> {
  /**
   * The edge the button scrolls to.
   *
   * @default 'end'
   */
  direction?: NMessageScrollerButtonDirection
  /**
   * The scroll behavior used when the button is clicked.
   *
   * @default 'smooth'
   */
  behavior?: ScrollBehavior
  /**
   * Additional classes to apply to the button.
   */
  class?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/message-scroller.ts
   */
  una?: Pick<NMessageScrollerUnaProps, 'messageScrollerButton'> & NButtonProps['una']
}

/**
 * UnaUI preset configuration for message scroller components
 */
export interface NMessageScrollerUnaProps {
  messageScroller?: HTMLAttributes['class']
  messageScrollerViewport?: HTMLAttributes['class']
  messageScrollerContent?: HTMLAttributes['class']
  messageScrollerItem?: HTMLAttributes['class']
  messageScrollerButton?: HTMLAttributes['class']
}
