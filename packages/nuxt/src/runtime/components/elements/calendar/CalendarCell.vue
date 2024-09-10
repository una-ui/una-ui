<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarCell, type CalendarCellProps, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCell
    :class="cn('calendar-cell', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
