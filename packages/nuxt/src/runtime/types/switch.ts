import type { SwitchRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export interface NSwitchProps extends SwitchRootProps {
  /**
   * Add a loading indicator to the switch.
   * This will also disable the switch.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Allows you to add `UnaUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch="green"
   */
  switch?: HTMLAttributes['class']
  /**
   * Allows you to display an icon. Equivalent of setting both `onIcon` and `offIcon`.
   *
   * @example
   * icon="i-heroicons-question-20-solid"
   */
  icon?: HTMLAttributes['class']
  /**
   * Allows you to display an icon when the switch is on.
   * Accepts icon name and utility classes
   *
   * @example
   * on-icon="i-heroicons-check-20-solid text-white"
   */
  checkedIcon?: HTMLAttributes['class']
  /**
   * Allows you to display an icon when the switch is off.
   * Accepts icon name and utility classes
   *
   * @example
   * off-icon="i-heroicons-x-mark-20-solid text-white"
   */
  uncheckedIcon?: HTMLAttributes['class']
  /**
   * Allows you to change the size of the input.
   *
   * @default md
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: HTMLAttributes['class']
  /**
   * Allows you to add `UnaUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch-checked="green"
   */
  switchChecked?: HTMLAttributes['class']
  /**
   * Allows you to add `UnaUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch-unchecked="gray"
   */
  switchUnchecked?: HTMLAttributes['class']
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/switch.ts
   */
  una?: {
    switch?: HTMLAttributes['class']
    switchChecked?: HTMLAttributes['class']
    switchUnchecked?: HTMLAttributes['class']

    switchThumb?: HTMLAttributes['class']
    switchThumbChecked?: HTMLAttributes['class']
    switchThumbUnchecked?: HTMLAttributes['class']

    switchIcon?: HTMLAttributes['class']
    switchIconChecked?: HTMLAttributes['class']
    switchIconUnchecked?: HTMLAttributes['class']

    switchLoading?: HTMLAttributes['class']
    switchLoadingIconName?: HTMLAttributes['class']
  }
}
