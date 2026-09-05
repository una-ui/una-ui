<script setup lang="ts">
import type { NSidebarFooterProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarFooterProps>()
</script>

<template>
  <div
    data-slot="sidebar-footer"
    data-sidebar="footer"
    :class="cn(
      'sidebar-footer',
      props.una?.sidebarFooter,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
