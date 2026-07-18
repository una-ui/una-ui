<script setup lang="ts">
import type { VNode } from 'vue'
import type { NAvatarGroupProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cloneVNode, computed, h } from 'vue'
import { cn, omitProps } from '../../utils'
import Avatar from './avatar/Avatar.vue'

const props = withDefaults(defineProps<NAvatarGroupProps>(), {
  as: 'div',
  square: undefined,
})

const slots = defineSlots()

const max = computed(() => typeof props.max === 'string' ? Number.parseInt(props.max, 10) : props.max)

const children = computed(() => {
  let children = slots.default?.()
  if (children?.length) {
    children = children.flatMap((child: any) => {
      if (typeof child.type === 'symbol') {
        // `v-if="false"` or commented node
        if (typeof child.children === 'string') {
          return null
        }

        return child.children
      }

      return child
    }).filter(Boolean)
  }

  return children || []
})

// Calculate visible and hidden avatars without circular dependencies
const maxVisibleCount = computed(() => {
  if (!max.value || max.value <= 0) {
    return children.value.length
  }
  return Math.min(max.value, children.value.length)
})

const hiddenCount = computed(() => {
  if (!children.value.length) {
    return 0
  }
  return Math.max(0, children.value.length - maxVisibleCount.value)
})

const visibleAvatars = computed(() => {
  if (!children.value.length) {
    return []
  }

  // Take only the visible portion without modifying the original array
  return [...children.value].slice(0, maxVisibleCount.value).reverse()
})

const rootProps = reactiveOmit(props, ['max', 'as', 'asChild', 'overflowLabel', 'class', 'size'])

// Only the group's explicitly-set style props cascade to children; unset/false
// booleans (square, icon) are dropped so children keep their own defaults.
const forwardedProps = computed(() =>
  Object.fromEntries(
    Object.entries(rootProps).filter(([, value]) => value !== undefined && value !== false),
  ),
)

const displayAvatars = computed(() => {
  const result = [...visibleAvatars.value]
  const groupProps = forwardedProps.value

  if (hiddenCount.value > 0 || props.overflowLabel) {
    const avatarProps = children.value.length > 0
      ? omitProps(children.value[0].props || {}, ['src', 'alt', 'label', 'icon', 'size'])
      : {}

    result.unshift(
      h(Avatar, {
        ...groupProps,
        ...avatarProps,
        label: props.overflowLabel || `+${hiddenCount.value}`,
        class: cn(
          props.una?.avatarGroupCount,
        ),
        una: {
          avatarFallback: cn(
            'avatar-group-count',
            props.una?.avatarGroupCount,
            avatarProps.una?.avatarFallback,
          ),
          ...avatarProps.una,
        },
      }),
    )
  }

  return result
})

const clonedAvatars = computed(() => {
  const groupProps = forwardedProps.value

  return displayAvatars.value.map((avatar: VNode) => {
    const ownProps = avatar.props || {}
    const inherited = Object.fromEntries(
      Object.entries(groupProps).filter(([key]) => !(key in ownProps)),
    )

    const cloned = cloneVNode(avatar, {
      ...inherited,
      class: cn('avatar-group-item', props.class),
    })

    if (avatar.ref)
      cloned.ref = avatar.ref

    return cloned
  })
})
</script>

<template>
  <Primitive
    :as
    :size
    :class="cn(
      'avatar-group',
      una?.avatarGroup,
    )"
    :as-child
  >
    <component
      :is="avatar"
      v-for="(avatar, count) in clonedAvatars"
      :key="count"
    />
  </Primitive>
</template>
