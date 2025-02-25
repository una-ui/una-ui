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

const props = defineProps<NScrollAreaProps>()

const rootProps = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <ScrollAreaRoot
    v-bind="rootProps"
    :class="cn(
      'scroll-area-root',
      props.class,
    )"
  >
    <ScrollAreaViewport class="scroll-area-viewport">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar
      v-bind="_scrollAreaScrollbar"
      :orientation="_scrollAreaScrollbar?.orientation ?? orientation"
      :una="{ ...una, ..._scrollAreaScrollbar?.una }"
    />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
