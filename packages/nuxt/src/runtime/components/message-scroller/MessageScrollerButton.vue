<script setup lang="ts">
import type { NMessageScrollerButtonProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'
import { useMessageScroller, useMessageScrollerScrollable } from './useMessageScroller'

const props = withDefaults(defineProps<NMessageScrollerButtonProps>(), {
  direction: 'end',
  behavior: 'smooth',
  btn: 'outline-white',
  label: 'i-lucide-arrow-down',
  icon: true,
  // explicit: a boolean-typed prop left absent arrives as `false`, not `undefined`,
  // so Button's `square ?? !!icon` fallback never fires through a wrapper.
  square: true,
  size: 'xs',
})

const delegatedProps = reactiveOmit(props, ['class', 'una', 'ariaLabel', 'direction', 'behavior'])

const { scrollToEnd, scrollToStart } = useMessageScroller()
const scrollable = useMessageScrollerScrollable()

const active = computed(() =>
  props.direction === 'start' ? scrollable.value.start : scrollable.value.end)

const ariaLabel = computed(() =>
  props.ariaLabel ?? (props.direction === 'start' ? 'Scroll to start' : 'Scroll to end'))

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
    v-bind="delegatedProps"
    data-slot="message-scroller-button"
    :data-direction="direction"
    :data-active="active ? 'true' : 'false'"
    :aria-label="ariaLabel"
    :inert="!active"
    :tabindex="active ? undefined : -1"
    :una="props.una"
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
