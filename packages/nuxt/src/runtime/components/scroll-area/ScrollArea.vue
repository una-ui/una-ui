<script setup lang="ts">
import type { NScrollAreaProps } from '../../types'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<NScrollAreaProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
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
