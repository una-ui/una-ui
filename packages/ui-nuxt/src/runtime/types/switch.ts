export interface NSwitchProps {
  /**
   * Value of the switch.
   *
   * @default null
  */
  modelValue?: boolean
  /**
   * Add disabled state to the input.
  */
  disabled?: boolean

  /**
   * Use the `short` type for a smaller switch,
   * or the `normal` type for a normal switch.
   *
   * @default normal
  */
  type?: 'normal' | 'short'

  /**
   * Allows you to add `NexveltUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch="xl green focus"
  */
  switch?: string

  /**
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/switch.ts
  */
  nv?: {
    switchSlider?: string
    switchSliderBgChecked?: string
    switchSliderBgUnchecked?: string
    switchSliderChecked?: string
    switchSliderUnchecked?: string
    switchSliderBg?: string
  }
}
