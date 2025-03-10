<script setup lang="ts">
import type { NSidebarMenuActionProps } from '../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSidebarMenuActionProps>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    data-sidebar="menu-action"
    :class="cn(
      'sidebar-menu-action',
      showOnHover && 'sidebar-menu-action-show-on-hover',
      props.una?.sidebarMenuAction,
      props.class,
    )"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
