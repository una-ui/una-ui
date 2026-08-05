<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { MessageScrollerButtonDirection } from './useMessageScroller'
import { computed } from 'vue'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'
import { useMessageScroller, useMessageScrollerScrollable } from './useMessageScroller'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  direction?: MessageScrollerButtonDirection
  behavior?: ScrollBehavior
  btn?: string
  icon?: string
  una?: {
    messageScrollerButton?: HTMLAttributes['class']
  }
}>(), {
  direction: 'end',
  behavior: 'smooth',
  btn: 'outline-white',
  icon: 'i-lucide-arrow-down',
})

const { scrollToEnd, scrollToStart } = useMessageScroller()
const scrollable = useMessageScrollerScrollable()

const active = computed(() =>
  props.direction === 'start' ? scrollable.value.start : scrollable.value.end)

function onClick(event: MouseEvent) {
  if (!active.value)
    return
  const target = event.currentTarget as HTMLElement | null
  target?.blur()
  if (event.defaultPrevented)
    return
  if (props.direction === 'start')
    scrollToStart({ behavior: props.behavior })
  else
    scrollToEnd({ behavior: props.behavior })
}
</script>

<template>
  <Button
    data-slot="message-scroller-button"
    :data-direction="direction"
    :data-active="active ? 'true' : 'false'"
    :btn="btn"
    :icon="!$slots.default"
    :label="!$slots.default ? icon : undefined"
    :aria-label="direction === 'end' ? 'Scroll to end' : 'Scroll to start'"
    :inert="!active"
    :tabindex="active ? undefined : -1"
    :class="cn(
      'message-scroller-button',
      props.una?.messageScrollerButton,
      props.class,
    )"
    @click="onClick"
  >
    <slot />
  </Button>
</template>
