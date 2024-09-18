<script setup lang="ts">
import type { PopoverRootEmits } from 'radix-vue'
import type { NPopoverProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PopoverRoot, PopoverTrigger, useForwardPropsEmits } from 'radix-vue'
import NPopoverContent from './PopoverContent.vue'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const delegatedProps = reactiveOmit(props, ['_popoverContent'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverRoot v-slot="{ open }" v-bind="forwarded">
    <PopoverTrigger as-child>
      <slot name="trigger" :open />
    </PopoverTrigger>

    <NPopoverContent
      v-bind="_popoverContent"
    >
      <slot />
    </NPopoverContent>
  </PopoverRoot>
</template>
