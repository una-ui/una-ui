import { computed, defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import type { NFormGroupProps } from '../../types'

export default defineComponent({
  props: {
    for: {
      type: [String, Boolean] as PropType<NFormGroupProps['for']>,
      required: false,
    },
  },
  setup(props, { slots }) {
    const unLabelled = computed(() => props.for === false || props.for !== undefined)

    // const tag = computed(() => unLabelled.value ? 'div' : 'label')

    return () => {
      h('span', {
        for: unLabelled.value ? undefined : props.for,
      }, 'test')
    }
  },
})
