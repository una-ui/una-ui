<script lang="ts" setup>
import type { NCalendarHeadCellProps } from '../../../types'
import { CalendarHeadCell, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarHeadCellProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    :class="cn(
      'calendar-head-cell',
      props.class,
      props.una?.calendarHeadCell,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
