<script setup lang="ts">
import type { NHoverCardContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  HoverCardContent,
  HoverCardPortal,
  useForwardProps,
} from 'reka-ui'
import { cn } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NHoverCardContentProps>(), {
  sideOffset: 4,
})
const delegatedProps = reactiveOmit(props, 'una', 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      data-slot="hover-card-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'hover-card-content',
          props.una?.hoverCardContent,
          props.class,
        )
      "
      :hover-card
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
