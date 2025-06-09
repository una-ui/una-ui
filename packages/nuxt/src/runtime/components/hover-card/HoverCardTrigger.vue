<script setup lang="ts">
import type { NHoverCardTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { HoverCardTrigger, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NHoverCardTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardTrigger
    data-slot="hover-card-trigger"
    v-bind="forwarded"
    :class="cn(
      'hovercard-trigger',
      props.una?.hoverCardTrigger,
      props.class,
    )"
  >
    <slot />
  </HoverCardTrigger>
</template>
