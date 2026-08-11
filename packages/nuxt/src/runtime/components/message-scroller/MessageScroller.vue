<script setup lang="ts">
import type { NMessageScrollerProps } from '../../types'
import { cn } from '../../utils'
import { useMessageScrollerContext } from './useMessageScroller'

const props = defineProps<NMessageScrollerProps>()

const { autoscrolling, scrollableAttr } = useMessageScrollerContext()
</script>

<template>
  <div
    data-slot="message-scroller"
    :data-scrollable="scrollableAttr"
    :data-autoscrolling="autoscrolling ? '' : undefined"
    :class="cn(
      'group/message-scroller message-scroller',
      props.una?.messageScroller,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
