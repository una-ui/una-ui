<script setup lang="ts">
import type { NScrollAreaProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
} from 'reka-ui'
import { cn } from '../../utils'
import ScrollBar from './ScrollBar.vue'

const props = withDefaults(defineProps<NScrollAreaProps>(), {
  scrollArea: 'gray',
  rounded: 'full',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, ['class', 'size', 'rounded'])
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    :class="cn(
      'scroll-area-root',
      props.una?.scrollAreaRoot,
      props.class,
    )"
  >
    <ScrollAreaViewport
      v-bind="_scrollAreaViewport"
      :class="cn(
        'scroll-area-viewport',
        props.una?.scrollAreaViewport,
        _scrollAreaViewport?.class,
      )"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollBar
      v-bind="_scrollAreaScrollbar"
      :orientation="orientation ?? _scrollAreaScrollbar?.orientation"
      :una
      :size
      :rounded
      :scroll-area
    />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
