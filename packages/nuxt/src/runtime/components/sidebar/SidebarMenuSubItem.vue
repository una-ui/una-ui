<script setup lang="ts">
import type { NSidebarMenuSubItemProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarMenuSubItemProps>()
</script>

<template>
  <li
    :class="cn(
      'sidebar-menu-sub-item',
      props.class,
    )"
  >
    <slot />
  </li>
</template>
