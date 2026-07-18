<script setup lang="ts">
import type { NSidebarMenuSubItemProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarMenuSubItemProps>()
</script>

<template>
  <li
    data-slot="sidebar-menu-sub-item"
    data-sidebar="menu-sub-item"
    :class="cn(
      'sidebar-menu-sub-item',
      props.una?.sidebarMenuSubItem,
      props.class,
    )"
  >
    <slot />
  </li>
</template>
