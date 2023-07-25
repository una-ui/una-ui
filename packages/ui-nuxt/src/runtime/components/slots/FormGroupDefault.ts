import { cloneVNode, computed, defineComponent } from 'vue'

// @unocss-include
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
    const children = computed(() => slots.default?.()[0].children)

    if (!children.value)
      return () => null

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const clones = computed(() => children.value?.map((node: any) => {
      return cloneVNode(node, { id: props.id, name: props.id, status: props.status })
    }))

    return () => clones.value
  },
})
