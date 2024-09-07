<script setup lang="ts">
import { computed } from 'vue'
import { TooltipContent, TooltipPortal, useForwardPropsEmits } from 'radix-vue'
import type { TooltipContentEmits } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTooltipContentProps } from '../../../../../dist/runtime/types/tooltip'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NTooltipContentProps>(), {
  sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="{ ...forwarded, ...$attrs }"
      :tooltip-content
      :class="cn(
        'tooltip-content-base',
        props.class,
        props.una?.tooltipContent,
      )"
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
