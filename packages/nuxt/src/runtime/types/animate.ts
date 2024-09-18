import type { HTMLAttributes } from 'vue'

/**
 * Props for components that can be animated via data-state
 */
export interface AnimateProps {
  /**
   * Animate property
   */
  dataAnimate?: HTMLAttributes['class']
}
