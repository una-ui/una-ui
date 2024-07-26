import type { SelectRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type Extensions = SelectRootProps & { class?: HTMLAttributes['class'] }

export interface NSelectProps extends Extensions {
  /**
   * select preset variants
   * @example
   * select="green"
   */
  select?: string
  /**
   * Allows you to change the size of the select.
   *
   * @default base|md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * Preset configuration
   */
  una: {
    selectRoot?: HTMLAttributes['class']
  }
}
