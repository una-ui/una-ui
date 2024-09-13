import type { SeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type Extensions = SeparatorProps & { class?: HTMLAttributes['class'], label?: string }

export interface NSeparatorProps extends Extensions {
  /**
   * Allows you to add `UnaUI` separator preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/separator.ts
   * @example
   * separator="solid-green"
   */
  separator?: string
  /**
   * Allows you to change the orientation and position of the separator.
   *
   * @default horizontal-center
   */
  separatorPosition?: HTMLAttributes['class']
  /**
   * Allows you to change the size of the separator.
   *
   * @default md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/separator.ts
   */
  una?: {
    separator?: HTMLAttributes['class']
    separatorContent?: HTMLAttributes['class']

    separatorDefaultVariant?: HTMLAttributes['class']
  }
}
