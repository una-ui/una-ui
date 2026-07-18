<script setup lang="ts">
import type { PopoverRootEmits } from 'reka-ui'
import type { NPopoverProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { PopoverAnchor, PopoverArrow, PopoverRoot, PopoverTrigger, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'
import NPopoverClose from './PopoverClose.vue'
import NPopoverContent from './PopoverContent.vue'

const props = defineProps<NPopoverProps>()
const emits = defineEmits<PopoverRootEmits>()

const delegatedProps = reactiveOmit(props, ['una', 'showClose', 'arrow', '_popoverContent', '_popoverAnchor', '_popoverArrow', '_popoverClose'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverRoot v-slot="{ open, close }" v-bind="forwarded">
    <PopoverTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" :open :close />
    </PopoverTrigger>
    <PopoverAnchor
      v-if="$slots.anchor || _popoverAnchor?.reference"
      data-slot="popover-anchor"
      v-bind="_popoverAnchor"
    >
      <slot name="anchor" :open :close />
    </PopoverAnchor>
    <NPopoverContent v-bind="_popoverContent" :una>
      <slot :close />
      <NPopoverClose
        v-if="showClose"
        data-slot="popover-close"
        v-bind="_popoverClose"
        class="popover-close"
      >
        <slot name="close" :close />
      </NPopoverClose>
      <PopoverArrow
        v-if="arrow"
        data-slot="popover-arrow"
        v-bind="_popoverArrow"
        :class="cn('popover-arrow', una?.popoverArrow)"
      />
    </NPopoverContent>
  </PopoverRoot>
</template>
