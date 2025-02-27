<script setup lang="ts">
import type { NScrollAreaScrollbarProps } from '../../types'
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NScrollAreaScrollbarProps>(), {
  orientation: 'vertical',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const orientationClass = computed(() => {
  return props.orientation === 'vertical' ? 'scroll-area-scrollbar-vertical' : 'scroll-area-scrollbar-horizontal'
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn(
        'scroll-area-scrollbar',
        orientationClass,
        props.class,
        props.una?.scrollAreaScrollbar,
      )"
  >
    <ScrollAreaThumb
      :class="cn(
        'scroll-area-scrollbar-thumb',
        props.una?.scrollAreaThumb,
      )"
    />
  </ScrollAreaScrollbar>
</template>
