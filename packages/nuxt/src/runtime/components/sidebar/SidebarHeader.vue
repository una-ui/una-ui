<script setup lang="ts">
import type { NSidebarHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarHeaderProps>()
</script>

<template>
  <div
    data-slot="sidebar-header"
    data-sidebar="header"
    :class="cn(
      'sidebar-header',
      props.una?.sidebarHeader,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
