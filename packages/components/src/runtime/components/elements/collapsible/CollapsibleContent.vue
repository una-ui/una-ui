<script setup lang="ts">
import type { NCollapsibleContentProps } from '../../../types'
import { CollapsibleContent } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NCollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="cn(
      'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
      'collapsible-content',
      props.class,
    )"
  >
    <slot />
  </CollapsibleContent>
</template>
