<script setup lang="ts">
import type { TooltipContentEmits } from 'reka-ui'
import type { NTooltipContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NTooltipContentProps>(), {
  sideOffset: 4,
  tooltip: 'black',
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
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
