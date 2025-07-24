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
          'data-[state=hidden]:opacity-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
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
