<script setup lang="ts">
import type { NSidebarMenuItemProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarMenuItemProps>()
</script>

<template>
  <li
    data-sidebar="menu-item"
    :class="cn('group/menu_item sidebar-menu-item', props.class)"
  >
    <slot />
  </li>
</template>
