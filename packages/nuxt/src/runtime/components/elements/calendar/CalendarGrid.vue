<script lang="ts" setup>
import type { NCalendarGridProps } from '../../../types'
import { CalendarGrid, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarGridProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGrid
    :class="cn(
      'calendar-grid',
      props.class,
      props.una?.calendarGrid,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGrid>
</template>
