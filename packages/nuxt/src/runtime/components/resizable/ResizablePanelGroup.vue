<script setup lang="ts">
import type { SplitterGroupEmits } from 'reka-ui'
import type { NResizablePanelGroupProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SplitterGroup, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NResizablePanelGroupProps>()
const emits = defineEmits<SplitterGroupEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterGroup
    data-slot="resizable-panel-group"
    v-bind="forwarded"
    :class="cn(
      'resizable-panel-group',
      props.una?.resizablePanelGroup,
      props.class,
    )"
  >
    <slot />
  </SplitterGroup>
</template>
