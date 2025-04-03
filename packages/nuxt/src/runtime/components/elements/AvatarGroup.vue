<script setup lang="ts">
import type { NAvatarGroupProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { h } from 'vue'
import { cn } from '../../utils'
import Avatar from './avatar/Avatar.vue'

const props = withDefaults(defineProps<NAvatarGroupProps>(), {
  max: 3,
  as: 'div',
})

const slots = useSlots()

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

const displayAvatars = computed(() => {
  const result = [...visibleAvatars.value]

  if (hiddenCount.value > 0) {
    const avatarProps = children.value.length > 0
      ? reactiveOmit(children.value[0].props || {}, ['src', 'alt', 'label', 'icon'])
      : {}

    result.unshift(
      h(Avatar, {
        label: `+${hiddenCount.value}`,
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
        ...avatarProps,
      }),
    )
  }

  return result
})

const rootProps = reactiveOmit(props, ['max', 'as', 'asChild'])
</script>

<template>
  <Primitive
    :as="as"
    :size
    :class="cn(
      'avatar-group',
      una?.avatarGroup,
    )"
    :as-child
  >
    <component
      :is="avatar"
      v-for="(avatar, count) in displayAvatars"
      v-bind="{ ...rootProps, ...avatar.props }"
      :key="count"
      :class="cn(
        'avatar-group-item',
        props.class,
      )"
    />
  </Primitive>
</template>
