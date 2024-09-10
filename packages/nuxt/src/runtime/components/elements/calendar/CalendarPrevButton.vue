<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'
import type { NButtonProps } from '../../../types'

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] } & NButtonProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
    as-child
  >
    <Button
      :class="cn(
        'calendar-prev-button',
        props.class,
      )"
      v-bind="forwardedProps"
      btn="solid-white"
      icon
      label="i-heroicons-chevron-left"
      :una="{
        btnIconLabel: 'text-1em',
        ...forwardedProps.una,
      }"
      :as="Button"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </CalendarPrev>
</template>
