import type { HTMLAttributes } from 'vue'

interface Extensions { class?: HTMLAttributes['class'] }

export interface NSkeletonProps extends Extensions {
  /**
   * Allows you to add `UnaUI` skeleton preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/skeleton.ts
   * @example
   * skeleton="green""
   */
  skeleton?: HTMLAttributes['class']
  /**
   * Allows you to change the size of the skeleton.
   *
   * @default base|md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: HTMLAttributes['class']
  /**
   * Allows you to change the shape of the skeleton.
   * @default rounded
   *
   * @example
   * rounded="none" | rounded="sm" | rounded="md" | rounded="lg" | rounded="full"
   */
  rounded?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/skeleton.ts
   */
  una?: {
    skeleton?: HTMLAttributes['class']
  }
}
