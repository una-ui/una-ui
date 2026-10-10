<script setup lang="ts">
import type { NScrollAreaScrollbarProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NScrollAreaScrollbarProps>(), {
  orientation: 'vertical',
  rounded: 'full',
})

const delegatedProps = reactiveOmit(props, ['class', 'size', 'rounded', 'scrollArea'])

const orientationClass = computed(() => {
  return props.orientation === 'vertical' ? 'scroll-area-scrollbar-vertical' : 'scroll-area-scrollbar-horizontal'
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :size
    :class="
      cn(
        'scroll-area-scrollbar',
        orientationClass,
        props.una?.scrollAreaScrollbar,
        props.class,
      )"
  >
    <ScrollAreaThumb
      :scroll-area
      :rounded
      :class="cn(
        'scroll-area-scrollbar-thumb',
        props.una?.scrollAreaThumb,
      )"
    />
  </ScrollAreaScrollbar>
</template>
