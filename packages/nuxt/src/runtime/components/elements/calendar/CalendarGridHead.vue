<script lang="ts" setup>
import type { NCalendarGridHeadProps } from '../../../types'
import { CalendarGridHead } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarGridHeadProps>()
</script>

<template>
  <CalendarGridHead
    v-bind="props"
    :class="cn(
      'calendar-grid-head',
      props.class,
      props.una?.calendarGridHead,
    )"
  >
    <slot />
  </CalendarGridHead>
</template>
