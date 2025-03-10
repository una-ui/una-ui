<script setup lang="ts">
import type { NSidebarContentProps } from '../../types'
import { cn } from '../../utils'
import ScrollArea from '../scroll-area/ScrollArea.vue'

const props = defineProps<NSidebarContentProps>()
</script>

<template>
  <div
    data-sidebar="content"
    :class="cn(
      'sidebar-content',
      props.una?.sidebarContent,
      props.class,
    )"
  >
    <ScrollArea>
      <slot />
    </ScrollArea>
  </div>
</template>
