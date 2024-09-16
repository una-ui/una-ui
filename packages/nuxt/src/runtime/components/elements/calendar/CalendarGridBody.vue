<script lang="ts" setup>
import type { NCalendarGridBodyProps } from '../../../types'
import { CalendarGridBody } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarGridBodyProps>()
</script>

<template>
  <CalendarGridBody
    v-bind="props"
    :class="cn(
      'calendar-grid-body',
      props.class,
      props.una?.calendarGridBody,
    )"
  >
    <slot />
  </CalendarGridBody>
</template>
