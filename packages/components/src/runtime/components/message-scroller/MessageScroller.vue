<script setup lang="ts">
import type { NMessageScrollerProps } from '../../types'
import { cn } from '../../utils'
import { useMessageScrollerContext } from './useMessageScroller'

const props = defineProps<NMessageScrollerProps>()

const { autoscrolling, scrollableAttr, scrollToEnd, scrollToMessage, scrollToStart } = useMessageScrollerContext()

/**
 * Exposed for controls the provider cannot reach by injection — a composer or
 * toolbar rendered as a sibling of this subtree, or in the setup scope that
 * renders `NMessageScrollerProvider`, cannot inject a context provided below it.
 *
 * Deliberate divergence from the shadcn-vue source, which exposes nothing here
 * — keep it when diffing against upstream. See #645.
 */
defineExpose({ scrollToEnd, scrollToMessage, scrollToStart })
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
