<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { CalendarGridHead, type CalendarGridHeadProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<CalendarGridHeadProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <CalendarGridHead :class="cn('calendar-grid-head', props.class)" v-bind="props">
    <slot />
  </CalendarGridHead>
</template>
