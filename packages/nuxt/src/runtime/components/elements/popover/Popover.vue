<script setup lang="ts">
import type { PopoverRootEmits } from 'reka-ui'
import type { NPopoverProps } from '../../../types'
import { PopoverRoot, PopoverTrigger, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import NPopoverContent from './PopoverContent.vue'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const delegatedProps = computed(() => {
  const { _popoverContent, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverRoot v-slot="{ open }" v-bind="forwarded">
    <PopoverTrigger as-child>
      <slot name="trigger" :open />
    </PopoverTrigger>
    <NPopoverContent v-bind="_popoverContent">
      <slot />
    </NPopoverContent>
  </PopoverRoot>
</template>
