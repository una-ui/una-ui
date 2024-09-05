<script setup lang="ts">
import { useForwardPropsEmits } from 'radix-vue'
import type { TooltipRootEmits } from 'radix-vue'
import type { NTooltipProps } from '../../../types'

import { omitProps, pickProps } from '../../../utils'
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
      <slot name="trigger">
        <TooltipTrigger
          v-bind="omitProps({ ...forwarded, ...forwarded._tooltipTrigger }, [
            'tooltipContent',
          ])"
        />
      </slot>
      <TooltipContent
        :size
        :tooltip-content
        :una="forwarded.una?.tooltipContent"
        v-bind="forwarded._tooltipContent"
      >
        <slot />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
