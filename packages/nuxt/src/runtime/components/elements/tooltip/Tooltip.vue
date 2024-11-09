<script setup lang="ts">
import type { TooltipRootEmits } from 'radix-vue'
import type { NTooltipProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
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
const rootProps = reactivePick(props, [
  'defaultOpen',
  'delayDuration',
  'disableClosingTrigger',
  'disabled',
  'disableHoverableContent',
  'ignoreNonKeyboardFocus',
  'open',
])
const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <TooltipProvider
    v-bind="_tooltipProvider"
  >
    <TooltipRoot
      v-bind="forwarded"
    >
      <TooltipTrigger
        as-child
        v-bind="_tooltipTrigger"
      >
        <slot />
      </TooltipTrigger>

      <TooltipContent
        v-if="$slots.content || content"
        v-bind="_tooltipContent"
        :size
        :tooltip
        :disabled
        :una="una?.tooltipContent"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
