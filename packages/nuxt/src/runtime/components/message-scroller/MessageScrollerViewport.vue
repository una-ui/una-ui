<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import { cn } from '../../utils'
import { SCROLL_KEYS, useMessageScrollerContext } from './useMessageScroller'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  preserveScrollOnPrepend?: boolean
  una?: {
    messageScrollerViewport?: HTMLAttributes['class']
  }
}>(), {
  preserveScrollOnPrepend: true,
})

const {
  autoscrolling,
  handleResize,
  scrollableAttr,
  setPreserveScrollOnPrepend,
  setViewportElement,
  syncAfterScroll,
  userScrollIntent,
} = useMessageScrollerContext()

const viewportEl = useTemplateRef<HTMLElement>('viewport')

watch(() => props.preserveScrollOnPrepend, setPreserveScrollOnPrepend, { immediate: true })

function onKeyDown(event: KeyboardEvent) {
  if (SCROLL_KEYS.has(event.key))
    userScrollIntent()
}

let resizeObserver: ResizeObserver | null = null
let resizeFrame = 0

onMounted(() => {
  const viewport = viewportEl.value
  setViewportElement(viewport)
  if (!viewport || typeof ResizeObserver === 'undefined')
    return
  resizeObserver = new ResizeObserver(() => {
    window.cancelAnimationFrame(resizeFrame)
    resizeFrame = window.requestAnimationFrame(handleResize)
  })
  resizeObserver.observe(viewport)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(resizeFrame)
  resizeObserver?.disconnect()
  resizeObserver = null
  setViewportElement(null)
})
</script>

<template>
  <div
    ref="viewport"
    data-slot="message-scroller-viewport"
    role="region"
    aria-label="Messages"
    :tabindex="0"
    :data-scrollable="scrollableAttr"
    :data-autoscrolling="autoscrolling ? '' : undefined"
    :class="cn(
      'message-scroller-viewport',
      props.una?.messageScrollerViewport,
      props.class,
    )"
    @scroll="syncAfterScroll()"
    @wheel="userScrollIntent()"
    @touchmove="userScrollIntent()"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>
