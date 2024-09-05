<script setup lang="ts">
import { TooltipArrow } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTooltipArrowProps } from '../../../types'

const props = withDefaults(defineProps<NTooltipArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
})
</script>

<template>
  <TooltipArrow
    v-bind="props"
    :class="cn(
      'tooltip-arrow',
      props.class,
      props.una?.tooltipArrow,
    )"
  >
    <slot />
  </TooltipArrow>
</template>
