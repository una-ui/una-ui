<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import ScrollArea from '../scroll-area/ScrollArea.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="content"
    :class="cn('sidebar-content', props.class)"
  >
    <ScrollArea>
      <slot />
    </ScrollArea>
  </div>
</template>
