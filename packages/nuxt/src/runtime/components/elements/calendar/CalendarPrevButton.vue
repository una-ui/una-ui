<script lang="ts" setup>
import type { NCalendarPrevButtonProps } from '../../../types'
import { CalendarPrev, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NCalendarPrevButtonProps>(), {
  btn: 'solid-white',
  icon: true,
  label: 'calendar-prev-button-icon',
})

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
  </CalendarPrev>
</template>
