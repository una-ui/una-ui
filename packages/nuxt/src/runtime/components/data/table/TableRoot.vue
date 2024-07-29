<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  una?: {
    tableRoot?: string
    tableRootWrapper?: string
  }
}>()
</script>

<template>
  <div
    :class="cn('relative w-full overflow-x-auto overflow-y-hidden', props.una?.tableRootWrapper)"
  >
    <table
      :class="cn('w-full caption-bottom text-sm',
                 props.class,
                 props.una?.tableRoot,
      )"
    >
      <slot />
    </table>
  </div>
</template>
