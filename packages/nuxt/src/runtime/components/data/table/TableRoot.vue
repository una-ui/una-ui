<script setup lang="ts">
import type { NTableRootProps } from '../../../types'
import { cn } from '../../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NTableRootProps>()
</script>

<template>
  <div
    :class="cn('table-root-wrapper', props.una?.tableRootWrapper)"
  >
    <table
      v-bind="$attrs"
      :class="cn(
        'table-root',
        props.una?.tableRoot,
        props.class,
      )"
    >
      <slot />
    </table>
  </div>
</template>
