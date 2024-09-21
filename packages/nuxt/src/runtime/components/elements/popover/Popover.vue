<script setup lang="ts">
import type { PopoverRootEmits } from 'radix-vue'
import type { NPopoverProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PopoverRoot, PopoverTrigger, useForwardPropsEmits } from 'radix-vue'
import NPopoverContent from './PopoverContent.vue'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const delegatedProps = reactiveOmit(props, ['_popoverContent', 'dataAnimate'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverRoot v-slot="{ open }" v-bind="forwarded">
    <PopoverTrigger as-child>
      <slot name="trigger" :open />
    </PopoverTrigger>

    <NPopoverContent
      v-bind="_popoverContent"
      :data-animate="dataAnimate || _popoverContent?.dataAnimate"
    >
      <slot />
    </NPopoverContent>
  </PopoverRoot>
</template>
