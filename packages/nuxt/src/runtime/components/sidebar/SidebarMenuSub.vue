<script setup lang="ts">
import type { NSidebarMenuSubProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarMenuSubProps>()
</script>

<template>
  <ul
    data-slot="sidebar-menu-sub"
    data-sidebar="menu-badge"
    :class="cn(
      'sidebar-menu-sub',
      props.una?.sidebarMenuSub,
      props.class,
    )"
  >
    <slot />
  </ul>
</template>
