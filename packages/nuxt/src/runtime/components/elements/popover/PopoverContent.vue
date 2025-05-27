<script setup lang="ts">
import type { PopoverContentEmits } from 'reka-ui'
import type { NPopoverContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  PopoverContent,
  PopoverPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../../utils'

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

const delegatedProps = reactiveOmit(props, ['class'])

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
