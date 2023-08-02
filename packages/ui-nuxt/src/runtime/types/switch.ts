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
   * Allows you to add `NexveltUI` switch preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @example
   * switch="xl focus"
  */
  switch?: string

  /**
   * `NexveltUI` preset configuration
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/switch.ts
  */
  nv?: {
    switchSliderSize?: string
    switchSlider?: string
    switchChecked?: string
    switchUnchecked?: string
    switchSliderChecked?: string
    switchSliderUnchecked?: string
  }
}
