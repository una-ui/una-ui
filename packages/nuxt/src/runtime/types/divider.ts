import type { HTMLAttributes } from 'vue'

interface Extensions { class?: HTMLAttributes['class'] }

export interface NDividerProps extends Extensions {
  /**
   * The divider's direction
   *
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * Alignment of the content of the divider.
   */
  align?: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom'
  /**
   * The type of divider's border style.
   */
  type?: 'solid' | 'dotted' | 'dashed'
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/divider.ts
   */
  una?: {
    divider?: HTMLAttributes['class']
    _dividerContent?: HTMLAttributes['class']
  }
}
