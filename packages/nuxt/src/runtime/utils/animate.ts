import type { Directive } from 'vue'

/**
 * Creates a new animate directive used to insert the 'animate' attribute on
 * components that don't support extra attributes, specifically radix-vue
 * components.
 *
 * @param selector Optional query selector used to apply this directive to a child element
 * @returns A vue directive
 * @example
 * ```vue
 * <script setup>
 * defineProps({
 *   animate: { type: String }
 * })
 *
 * const vAnimate = createAnimateDirective("[role=dialog]")
 * </script>
 *
 * <template>
 *   <PopoverContent v-animate="animate">
 *     <slot></slot>
 *   </PopoverContent>
 * </template>
 * ```
 */
export function createAnimateDirective(selector?: string): Directive<Element, string | undefined> {
  return {
    updated: (el, { value }) => {
      const modal = selector ? el.querySelector(selector) : el
      if (!modal) {
        return
      }
      if (value) {
        modal.setAttribute('animate', value)
      }
      else {
        modal.removeAttribute('animate')
      }
    },
  }
}

/**
 * Default v-animate directive. It does not use a child selector.
 *
 * @see {@linkcode createAnimateDirective}
 */
export const vAnimate = createAnimateDirective()
