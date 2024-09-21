<script setup lang="ts">
import type { TooltipRootEmits } from 'radix-vue'
import type { NTooltipProps } from '../../../types'

import { useForwardPropsEmits } from 'radix-vue'
import TooltipContent from './TooltipContent.vue'
import TooltipProvider from './TooltipProvider.vue'
import TooltipRoot from './TooltipRoot.vue'
import TooltipTrigger from './TooltipTrigger.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NTooltipProps>()
const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipProvider
    v-bind="_tooltipProvider"
    :disabled
  >
    <TooltipRoot
      v-bind="_tooltipRoot"
    >
      <TooltipTrigger
        as-child
        v-bind="_tooltipTrigger"
      >
        <slot />
      </TooltipTrigger>

      <TooltipContent
        v-if="$slots.content || content"
        v-bind="forwarded._tooltipContent"
        :size
        :tooltip
        :disabled
        :una="forwarded.una?.tooltipContent"
        :data-animate="dataAnimate || _tooltipContent?.dataAnimate"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
