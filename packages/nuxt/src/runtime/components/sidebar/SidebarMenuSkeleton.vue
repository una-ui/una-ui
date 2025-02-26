<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../utils'
import Skeleton from '../elements/Skeleton.vue'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes['class']
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('rounded-md h-8 flex gap-2 px-2 items-center', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="rounded-md square-4"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="h-4 max-w-[--skeleton-width] flex-1"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
