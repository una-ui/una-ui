<script lang="ts" setup>
import { CalendarGridBody, type CalendarGridBodyProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarGridBodyProps & { class?: string }>()
</script>

<template>
  <CalendarGridBody :class="cn('calendar-grid-body', props.class)" v-bind="props">
    <slot />
  </CalendarGridBody>
</template>
