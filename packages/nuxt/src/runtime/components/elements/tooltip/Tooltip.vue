<script setup lang="ts">
import { useForwardPropsEmits } from 'radix-vue'
import type { TooltipRootEmits } from 'radix-vue'
import type { NTooltipProps } from '../../../types'

import { pickProps } from '../../../utils'
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
  <TooltipProvider>
    <TooltipRoot
      v-bind="pickProps({ ...forwarded, ...$attrs }, ['open', 'defaultOpen'])"
    >
      <!-- trigger -->
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <!-- content -->
      <TooltipContent
        v-if="$slots.content || content"
        :size
        :tooltip
        :una="forwarded.una?.tooltipContent"
        v-bind="forwarded._tooltipContent"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
