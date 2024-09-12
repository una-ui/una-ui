<script setup lang="ts">
import {
  PopoverContent,
  type PopoverContentEmits,
  PopoverPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import type { NPopoverContentProps } from '../../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<NPopoverContentProps>(),
  {
    align: 'center',
    sideOffset: 4,
  },
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'popover-content',
          props.class,
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
