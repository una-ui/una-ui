<script lang="ts" setup>
import type { NCalendarGridWrapperProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCalendarGridWrapperProps>()
</script>

<template>
  <div
    :class="cn(
      'calendar-grid-wrapper',
      props.class,
      props.una?.calendarGridWrapper,
    )"
    v-bind="props"
  >
    <slot />
  </div>
</template>
