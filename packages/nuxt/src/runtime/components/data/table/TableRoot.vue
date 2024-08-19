<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableRootProps } from '../../../types'

const props = defineProps<NTableRootProps>()
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
