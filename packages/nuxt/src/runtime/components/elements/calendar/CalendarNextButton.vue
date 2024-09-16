<script lang="ts" setup>
import type { NCalendarNextButtonProps } from '../../../types'
import { CalendarNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NCalendarNextButtonProps>(), {
  btn: 'solid-white',
  icon: true,
  label: 'calendar-next-button-icon',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    as-child
  >
    <Button
      :class="cn(
        'calendar-next-button',
        props.class,
      )"
      v-bind="forwardedProps"
      :btn
      :una="{
        btnIconLabel: 'calendar-btn-icon-label',
        ...forwardedProps.una,
      }"
      :as="Button"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </CalendarNext>
</template>
