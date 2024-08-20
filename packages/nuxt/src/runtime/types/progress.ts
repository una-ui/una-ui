import type { ProgressRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type Extensions = ProgressRootProps & { class?: HTMLAttributes['class'] }

export interface NProgressProps extends Extensions {
  /**
   * Allows you to add `UnaUI` progress preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/progress.ts
   * @example
   * progress="red""
   */
  progress?: string
  /**
   * Allows you to change the size of the progress.
   *
   * @default base|md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/progress.ts
   */
  una?: {
    // components
    progressRoot?: HTMLAttributes['class']
    progressIndicator?: HTMLAttributes['class']
  }
}
