<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    :class="cn('calendar-head-cell', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
