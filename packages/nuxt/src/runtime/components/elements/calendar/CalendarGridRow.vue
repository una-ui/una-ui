<script lang="ts" setup>
import type { NCalendarGridRowProps } from '../../../types'
import { CalendarGridRow, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarGridRowProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow
    :class="cn(
      'calendar-grid-row',
      props.class,
      props.una?.calendarGridRow,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGridRow>
</template>
