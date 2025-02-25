import type {
  ScrollAreaRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtension {
  class?: HTMLAttributes['class']
}

export interface NScrollAreaProps extends
  ScrollAreaRootProps,
  Pick<ScrollAreaScrollbarProps, 'orientation'>,
  BaseExtension {
  /**
   * The scroll area root props.
   */
  _scrollAreaRoot?: NScrollAreaRootProps
  /**
   * The scroll area scrollbar props.
   */
  _scrollAreaScrollbar?: NScrollAreaScrollbarProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/scroll-area.ts
   */
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaRoot' | 'scrollAreaScrollbar'>
}

export interface NScrollAreaRootProps extends ScrollAreaRootProps, BaseExtension {
  una?: NScrollAreaUnaProps['scrollAreaRoot']
}

export interface NScrollAreaScrollbarProps extends ScrollAreaScrollbarProps, BaseExtension {
  una?: Pick<NScrollAreaUnaProps, 'scrollAreaScrollbar' | 'scrollAreaThumb'>
}

export interface NScrollAreaThumbProps extends ScrollAreaThumbProps, BaseExtension {
  una?: NScrollAreaUnaProps['scrollAreaThumb']
}

export interface NScrollAreaUnaProps {
  scrollAreaRoot?: HTMLAttributes['class']
  scrollAreaScrollbar?: HTMLAttributes['class']
  scrollAreaThumb?: HTMLAttributes['class']
}
