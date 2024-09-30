<script lang="ts" setup>
import type { NCalendarCellTriggerProps } from '../../../types'
import { CalendarCellTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NCalendarCellTriggerProps>(), {
  size: 'sm',
  calendarToday: '~',
  calendarSelected: '~',
  calendarUnselected: '~',
  calendarUnavailable: '~',
  calendarOutside: '~',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    v-bind="forwardedProps"
    :class="cn(
      'calendar-cell-trigger',
      props.class,
      props.una?.calendarCellTrigger,
    )"
    :calendar-today
    :calendar-selected
    :calendar-unselected
    :calendar-unavailable
    :calendar-outside
  >
    <slot />
  </CalendarCellTrigger>
</template>
