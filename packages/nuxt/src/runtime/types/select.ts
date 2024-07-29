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
   * List of any group or collection
   *
   * @example
   * ['banana', 'apple', 'orange']
   * [{name: Mekan, age: 29}, {name: Phojie, age: 28}]
   */
  options?: any
  /**
   * Preset configuration
   */
  una?: {
    selectRoot?: HTMLAttributes['class']
    selectValue?: HTMLAttributes['class']
    selectItem?: HTMLAttributes['class']
  }
}
