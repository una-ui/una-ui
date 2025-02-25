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
      'collapsible-content',
      props.class,
    )"
  >
    <slot />
  </CollapsibleContent>
</template>
