<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    :class="cn(
      'btn',
      'h-8 w-8 p-0 font-normal',
      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent',
      // Selected
      'data-[selected]:bg-primary data-[selected]:text-base data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-base data-[selected]:focus:bg-primary data-[selected]:focus:text-base',
      // Disabled
      'data-[disabled]:text-muted data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-destructive data-[unavailable]:line-through',
      // Outside months
      'data-[outside-view]:text-muted data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-gray-800/50 [&[data-outside-view][data-selected]]:text-muted [&[data-outside-view][data-selected]]:opacity-30',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
