<script setup lang="ts">
import type { NHoverCardArrowProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { HoverCardArrow } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NHoverCardArrowProps>(), {
  width: 12,
  height: 6,
})
const forwarded = reactiveOmit(props, 'class', 'una')
</script>

<template>
  <HoverCardArrow
    v-bind="forwarded"
    data-slot="hover-card-arrow"
    :class="cn(
      'hover-card-arrow',
      props.class,
      props.una?.hoverCardArrow,
    )"
    :hover-card
  />
</template>
