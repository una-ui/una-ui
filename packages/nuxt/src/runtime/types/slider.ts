import type { SliderRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type Extensions = SliderRootProps & { class?: HTMLAttributes['class'] }

export interface NSliderProps extends Extensions {
  /**
   * Add loading state to the slider.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Allows you to add `UnaUI` slider preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/slider.ts
   * @example
   * slider="solid-green"
   */
  slider?: string
  /**
   * Allows you to change the size of the slider.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * Manually set the id attribute.
   *
   * By default, the id attribute is generated randomly for accessibility reasons.
   *
   * @default randomId
   * @example
   * id="slider"
   */
  id?: string

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
