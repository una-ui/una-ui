<script lang="ts" setup>
import type { NCalendarHeaderProps } from '../../../types'
import { CalendarHeader, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NCalendarHeaderProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeader
    :class="cn(
      'calendar-header',
      props.class,
      props.una?.calendarHeader,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeader>
</template>
