<script setup lang="ts">
import type { NTableRootProps } from '../../../types'
import { cn } from '../../../utils'
import ScrollArea from '../../scroll-area/ScrollArea.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NTableRootProps>()
</script>

<template>
  <div
    :class="cn('table-root-wrapper', props.una?.tableRootWrapper)"
  >
    <ScrollArea
      orientation="horizontal"
      v-bind="props._scrollArea"
      :una
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
    </ScrollArea>
  </div>
</template>
