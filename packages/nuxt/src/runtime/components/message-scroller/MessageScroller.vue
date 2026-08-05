<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import { useMessageScrollerContext } from './useMessageScroller'

const props = defineProps<{
  class?: HTMLAttributes['class']
  una?: {
    messageScroller?: HTMLAttributes['class']
  }
}>()

const { autoscrolling, scrollableAttr } = useMessageScrollerContext()
</script>

<template>
  <div
    data-slot="message-scroller"
    :data-scrollable="scrollableAttr"
    :data-autoscrolling="autoscrolling ? '' : undefined"
    :class="cn(
      'message-scroller',
      props.una?.messageScroller,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
