<script setup lang="ts">
import type { NSkeletonProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSkeletonProps>()
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
  >
    <slot />
  </div>
</template>
