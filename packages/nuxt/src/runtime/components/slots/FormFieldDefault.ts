import type { VNode } from 'vue'
import { cloneVNode, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    'status': {
      type: String,
      validator: (v: string) => ['success', 'error', 'warning', 'info'].includes(v),
      required: false,
    },
    'name': {
      type: String,
      required: false,
    },
    'modelValue': {
      type: [String, Number, Boolean, Object, Array, null, undefined] as any,
      required: false,
    },
    'id': {
      type: String,
      required: false,
    },
    'aria-describedby': {
      type: String,
      required: false,
    },
    'aria-invalid': {
      type: Boolean,
      required: false,
    },
  },
  // Add the emits option
  emits: ['blur', 'input', 'change', 'update:modelValue'],
  setup(props, { slots, attrs, emit }) {
    const children = computed(() => slots.default?.()[0].children as VNode[])
    if (!children.value)
      return () => null

    const clones = computed(() => children.value?.map((node: any) => {
      const mergeProps = {
        ...props,
        ...node.props,
        ...attrs,
        'onBlur': (event: any) => {
          emit('blur', event)
          node.props?.onBlur?.(event)
        },
        'onUpdate:modelValue': (value: any) => {
          emit('update:modelValue', value)
          node.props?.['onUpdate:modelValue']?.(value)
        },
      }
      return cloneVNode(node, mergeProps)
    }))

    return () => clones.value
  },
})
