<script lang="ts" setup>
import type { NCalendarCellProps } from '../../../types'
import { CalendarCell, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarCellProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCell
    :class="cn(
      'calendar-cell w-full',
      props.class,
      props.una?.calendarCell,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
