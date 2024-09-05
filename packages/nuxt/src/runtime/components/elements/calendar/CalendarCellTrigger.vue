<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    calendar-today="~"
    calendar-selected="~"
    calendar-unselected="~"
    calendar-unavailable="~"
    calendar-outside="~"
    :class="cn(
      'btn h-8 w-8 p-0 font-normal',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
