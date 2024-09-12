<script setup lang="ts">
import { PopoverRoot, PopoverTrigger, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import type { PopoverRootEmits } from 'radix-vue'
import type { NPopoverProps } from '../../../types'
import NPopoverContent from './PopoverContent.vue'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const delegatedProps = computed(() => {
  const { popper: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverRoot v-slot="{ open }" v-bind="forwarded">
    <PopoverTrigger as-child>
      <slot name="default" :open />
    </PopoverTrigger>
    <NPopoverContent v-bind="props.popper">
      <slot name="popper" />
    </NPopoverContent>
  </PopoverRoot>
</template>
