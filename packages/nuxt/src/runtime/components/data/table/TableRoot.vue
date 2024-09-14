<script setup lang="ts">
import type { NTableRootProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableRootProps>()
</script>

<template>
  <div
    :class="cn('table-root-wrapper', props.una?.tableRootWrapper)"
  >
    <table
      :class="cn(
        'table-root',
        props.class,
        props.una?.tableRoot,
      )"
    >
      <slot />
    </table>
  </div>
</template>
