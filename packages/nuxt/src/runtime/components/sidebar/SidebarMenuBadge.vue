<script setup lang="ts">
import type { NSidebarMenuBadgeProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarMenuBadgeProps>()
</script>

<template>
  <div
    data-slot="sidebar-menu-badge"
    data-sidebar="menu-badge"
    :class="cn(
      'sidebar-menu-badge',
      props.una?.sidebarMenuBadge,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
