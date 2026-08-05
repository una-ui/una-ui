<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import { cn } from '../../utils'
import { useMessageScrollerRegister } from './useMessageScroller'

const props = withDefaults(defineProps<{
  messageId?: string
  scrollAnchor?: boolean
  class?: HTMLAttributes['class']
  una?: {
    messageScrollerItem?: HTMLAttributes['class']
  }
}>(), {
  scrollAnchor: false,
})

const register = useMessageScrollerRegister()

const itemEl = useTemplateRef<HTMLElement>('item')

onMounted(() => {
  if (props.messageId && itemEl.value)
    register(props.messageId, itemEl.value, null)
})

watch(() => props.messageId, (messageId, previousMessageId) => {
  const element = itemEl.value
  if (!element)
    return
  if (previousMessageId)
    register(previousMessageId, null, element)
  if (messageId)
    register(messageId, element, null)
})

onBeforeUnmount(() => {
  if (props.messageId && itemEl.value)
    register(props.messageId, null, itemEl.value)
})
</script>

<template>
  <div
    ref="item"
    data-slot="message-scroller-item"
    :data-message-id="messageId"
    :data-scroll-anchor="scrollAnchor ? 'true' : 'false'"
    :class="cn(
      'message-scroller-item',
      props.una?.messageScrollerItem,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
