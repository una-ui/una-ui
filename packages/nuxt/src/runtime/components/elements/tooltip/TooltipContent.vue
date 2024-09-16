<script setup lang="ts">
import type { TooltipContentEmits } from 'radix-vue'
import type { NTooltipContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, TooltipPortal, useForwardPropsEmits } from 'radix-vue'
import { cn, createAnimateDirective } from '../../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NTooltipContentProps>(), {
  sideOffset: 4,
  tooltip: 'black',
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'animate'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const vAnimate = createAnimateDirective('div:has(>[role=tooltip])')
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-animate="animate"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'tooltip-content',
        props.class,
        props.una?.tooltipContent,
      )"
      :tooltip
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
