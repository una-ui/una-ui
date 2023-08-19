import type { VNode } from 'vue'
import { cloneVNode, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      validator: (v: string) => ['success', 'error', 'warning', 'info'].includes(v),
      required: false,
    },
  },
  setup(props, { slots }) {
    const children = computed(() => slots.default?.()[0].children as VNode[])

    if (!children.value)
      return () => null

    const clones = computed(() => children.value?.map((node: any) => {
      return cloneVNode(node, { id: props.id, name: props.id, status: props.status })
    }))

    return () => clones.value
  },
})
