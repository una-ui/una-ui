import type { HTMLAttributes } from 'vue'

interface Extensions { class?: HTMLAttributes['class'] }

export interface NDividerProps extends Extensions {
  /**
   * Allows you to add `UnaUI` divider preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/avatar.ts
   * @example
   * divider="solid-green"
   */
  divider?: string
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
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/divider.ts
   */
  una?: {
    divider?: HTMLAttributes['class']
    _dividerContent?: HTMLAttributes['class']
  }
}
