import type { SliderRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

type Extensions = SliderRootProps & { class?: HTMLAttributes['class'] }

export interface NSliderProps extends Extensions {
  /**
   * Allows you to add `UnaUI` slider preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/slider.ts
   * @example
   * slider="green""
   */
  slider?: string
  /**
   * Allows you to change the size of the slider.
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
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/slider.ts
   */
  una?: {
    // components
    sliderRoot?: HTMLAttributes['class']
    sliderTrack?: HTMLAttributes['class']
    sliderRange?: HTMLAttributes['class']
    sliderThumb?: HTMLAttributes['class']
  }
}
