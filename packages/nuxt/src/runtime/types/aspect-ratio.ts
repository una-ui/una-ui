import type { AspectRatioProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NAspectRatioProps extends AspectRatioProps, BaseExtensions {
  /**
   * Allows you to add `UnaUI` aspect-ratio preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/aspect-ratio.ts
   * @example
   * aspect-ratio="soft-primary"
   */
  aspectRatio?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/aspect-ratio.ts
   */
  una?: {
    aspectRatio?: HTMLAttributes['class']
  }
}
