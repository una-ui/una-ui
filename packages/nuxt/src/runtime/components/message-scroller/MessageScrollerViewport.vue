<script setup lang="ts">
import type { NMessageScrollerViewportProps } from '../../types'
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import { cn } from '../../utils'
import { isScrollTowardStartKey, SCROLL_KEYS, useMessageScrollerContext } from './useMessageScroller'

const props = withDefaults(defineProps<NMessageScrollerViewportProps>(), {
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

// Only a gesture that carries the reader toward the start releases autoScroll:
// wheeling or paging down while already at the live edge moves nothing.
function onWheel(event: WheelEvent) {
  userScrollIntent(event.deltaY < 0)
}

let touchStartY: number | null = null

function onTouchStart(event: TouchEvent) {
  touchStartY = event.touches[0]?.clientY ?? null
}

function onTouchMove(event: TouchEvent) {
  const y = event.touches[0]?.clientY ?? null
  // dragging the finger down pulls the transcript toward the start
  userScrollIntent(touchStartY === null || y === null ? true : y > touchStartY)
}

function onKeyDown(event: KeyboardEvent) {
  if (SCROLL_KEYS.has(event.key))
    userScrollIntent(isScrollTowardStartKey(event))
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
    @wheel="onWheel"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>
