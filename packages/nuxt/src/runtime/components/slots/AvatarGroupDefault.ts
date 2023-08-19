import type { PropType, VNode } from 'vue'
import { cloneVNode, computed, defineComponent, h } from 'vue'
import type { NAvatarGroupProps } from '../../types'
import NAvatar from '../elements/Avatar.vue'

// @unocss-include
export default defineComponent({
  props: {
    max: {
      type: Number,
      required: true,
    },
    avatar: {
      type: Object as PropType<NAvatarGroupProps>,
    },
  },
  setup(props, { slots }) {
    const children = computed(() => slots.default?.()[0].children as VNode[])

    if (!children.value)
      return () => null

    const countChildren = computed(() => children.value?.length)

    const filterChildren = computed(() => {
      if (countChildren.value <= props.max)
        return children.value

      const childrenCopy = [...children.value]

      childrenCopy.splice(props.max, countChildren.value - props.max)

      return childrenCopy
    })

    const clones = computed(() => filterChildren.value?.map((node: VNode) => {
      // get props from the avatar and merge with the props from the slot
      const mergeProps = { ...props.avatar, ...node.props }
      return cloneVNode(node, { ...mergeProps, class: 'avatar-group-(child margin)' })
    }).reverse())

    const label = computed(() => {
      if (countChildren.value <= props.max)
        return null

      return h(NAvatar, {
        // TODO: add `more` configuration
        class: 'avatar-(soft group-margin)',
        label: `+${countChildren.value - props.max}`,
        una: { avatarLabel: `${props.avatar?.una?.avatarGroupLabel} avatar-group-label` },
      })
    })

    return () => [
      label.value,
      ...clones.value,
    ]
  },
})
