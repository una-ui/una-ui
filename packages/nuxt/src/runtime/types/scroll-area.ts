import type {
  ScrollAreaRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtension {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
  rounded?: HTMLAttributes['class']
}

export interface NScrollAreaProps extends
  ScrollAreaRootProps,
  Pick<ScrollAreaScrollbarProps, 'orientation'>,
  BaseExtension {
  /**
   * Allows you to add `UnaUI` scroll area preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/scroll-area.ts
   * @example
   * scrollArea="green"
   */
  scrollArea?: HTMLAttributes['class']
  /**
   * The scroll area root props.
   */
  _scrollAreaRoot?: NScrollAreaRootProps
  /**
   * The scroll area scrollbar props.
   */
  _scrollAreaScrollbar?: NScrollAreaScrollbarProps
  /**
   * The scroll area viewport props.
   */
  _scrollAreaViewport?: NScrollAreaViewportProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/scroll-area.ts
   */
  una?: NScrollAreaUnaProps
}

export interface NScrollAreaRootProps extends ScrollAreaRootProps, BaseExtension {
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaRoot'>
}

export interface NScrollAreaScrollbarProps extends ScrollAreaScrollbarProps, Pick<NScrollAreaProps, 'scrollArea'>, BaseExtension {
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaScrollbar' | 'scrollAreaThumb'>
}

export interface NScrollAreaThumbProps extends ScrollAreaThumbProps, BaseExtension {
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaThumb'>
}

export interface NScrollAreaViewportProps extends ScrollAreaViewportProps, Pick<BaseExtension, 'class'> {
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaViewport'>
}

export interface NScrollAreaUnaProps {
  scrollAreaRoot?: HTMLAttributes['class']
  scrollAreaViewport?: HTMLAttributes['class']
  scrollAreaScrollbar?: HTMLAttributes['class']
  scrollAreaThumb?: HTMLAttributes['class']
}
