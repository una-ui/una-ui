import { computed, defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import type { NFormGroupProps } from '../../types'

export default defineComponent({
  props: {
    for: {
      type: [String, Boolean] as PropType<NFormGroupProps['for']>,
      required: false,
    },
    id: {
      type: String as PropType<NFormGroupProps['id']>,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.()

      if (!children)
        return

      const unLabelled = computed(() => props.for === false || props.for !== undefined)

      const tag = computed(() => unLabelled.value ? 'div' : 'label')

      return h(
        tag.value,
        {
          for: unLabelled.value ? undefined : props.for ?? props.id,
        },
        children,
      )
    }
  },
})
