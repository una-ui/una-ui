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
  // Keep unset so Boolean-cast props don't forward `false` and wipe Avatar defaults.
  size: undefined,
  square: undefined,
  rounded: undefined,
  avatar: undefined,
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

// `size` stays on the group root so children inherit font-size via CSS.
const rootProps = reactiveOmit(props, ['max', 'as', 'asChild', 'overflowLabel', 'class', 'size'])

/** Only forward props that were actually set on the group (skip unset Boolean casts). */
function forwardedRootProps() {
  return Object.fromEntries(
    Object.entries(rootProps).filter(([, value]) => value !== undefined && value !== false),
  )
}

const displayAvatars = computed(() => {
  const result = [...visibleAvatars.value]
  const groupProps = forwardedRootProps()

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
  const groupProps = forwardedRootProps()

  return displayAvatars.value.map((avatar: VNode, count: number) => {
    // Do not forward group `size` — it stays on the root and cascades via size-inherit.
    // A child may still set its own `size` through avatar.props.
    const cloned = cloneVNode(avatar, {
      ...groupProps,
      ...avatar.props,
      class: cn(
        'avatar-group-item',
        avatar.props?.class,
        props.class,
      ),
      key: count,
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
