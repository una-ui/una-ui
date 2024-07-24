<script setup lang="ts">
import type { NSkeletonProps } from '../../types'
import { cn } from '../../utils'

withDefaults(defineProps<NSkeletonProps>(), {
  shape: 'rectangle',
})
</script>

<template>
  <div
    class="skeleton"
    :class="
      cn(
        [shape === 'circle' ? 'skeleton-circle' : 'skeleton-rectangle'],
        'skeleton-default-variant',
      )
    "
  />
</template>
