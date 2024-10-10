<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'radix-vue'
import { CollapsibleRoot, useForwardPropsEmits } from 'radix-vue'
import CollapsibleContent from './CollapsibleContent.vue'
import CollapsibleTrigger from './CollapsibleTrigger.vue'

const props = defineProps<CollapsibleRootProps>()
const emits = defineEmits<CollapsibleRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CollapsibleRoot v-slot="{ open }" v-bind="forwarded">
    <slot :open>
      <CollapsibleTrigger>
        <slot name="trigger" :open />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <slot name="content" />
      </CollapsibleContent>
    </slot>
  </CollapsibleRoot>
</template>
