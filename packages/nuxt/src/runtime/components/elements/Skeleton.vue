<script setup lang="ts">
import type { NSkeletonProps } from '../../types'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSkeletonProps>(), {
  skeleton: 'gray',
})
</script>

<template>
  <div
    :class="
      cn(
        'skeleton',
        props.class,
        props.una?.skeleton,
      )
    "
    :skeleton
    :size
    :rounded
  >
    <slot />
  </div>
</template>
