<script setup lang="ts">
import type { NSidebarGroupContentProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarGroupContentProps>()
</script>

<template>
  <div
    data-sidebar="group-content"
    :class="cn(
      'sidebar-group-content',
      props.una?.sidebarGroupContent,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
