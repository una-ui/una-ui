<script setup lang="ts">
import type { HoverCardRootEmits } from 'reka-ui'
import type { NHoverCardProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { HoverCardRoot, useForwardPropsEmits } from 'reka-ui'
import HoverCardArrow from './HoverCardArrow.vue'
import HoverCardContent from './HoverCardContent.vue'
import HoverCardTrigger from './HoverCardTrigger.vue'

const props = withDefaults(defineProps<NHoverCardProps>(), {
  hovercard: 'outline-gray',
})
const emits = defineEmits<HoverCardRootEmits>()

const rootProps = reactivePick(props, [
  'closeDelay',
  'openDelay',
  'defaultOpen',
  'open',
])

const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <HoverCardRoot
    v-slot="{ open }"
    v-bind="forwarded"
  >
    <slot>
      <HoverCardTrigger
        as-child
        :una
        v-bind="_hoverCardTrigger"
      >
        <slot name="trigger" :open />
      </HoverCardTrigger>
      <HoverCardContent v-bind="_hoverCardContent" :hovercard :una>
        <slot name="content" />
        <HoverCardArrow v-if="props.arrow" v-bind="_hoverCardArrow" :hovercard :una />
      </HoverCardContent>
    </slot>
  </HoverCardRoot>
</template>
