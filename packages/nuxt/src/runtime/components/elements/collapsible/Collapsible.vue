<script setup lang="ts">
import type { CollapsibleRootEmits } from 'radix-vue'
import type { NCollapsibleProps } from '../../../types'
import { CollapsibleRoot, useForwardPropsEmits } from 'radix-vue'
import CollapsibleContent from './CollapsibleContent.vue'
import CollapsibleTrigger from './CollapsibleTrigger.vue'

const props = defineProps<NCollapsibleProps>()
const emits = defineEmits<CollapsibleRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CollapsibleRoot v-slot="{ open }" v-bind="forwarded">
    <slot :open>
      <CollapsibleTrigger>
        <slot name="trigger" :open />
      </CollapsibleTrigger>

      <CollapsibleContent
        v-bind="_collapsibleContent"
      >
        <slot name="content" />
      </CollapsibleContent>
    </slot>
  </CollapsibleRoot>
</template>
