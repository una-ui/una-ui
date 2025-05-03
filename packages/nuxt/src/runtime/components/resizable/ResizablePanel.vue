<script setup lang="ts">
import type { SplitterPanelEmits } from 'reka-ui'
import type { NResizablePanelProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SplitterPanel, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NResizablePanelProps>()
const emits = defineEmits<SplitterPanelEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterPanel
    data-slot="resizable-panel"
    v-bind="forwarded"
    :class="cn(
      'resizable-panel',
      props.una?.resizablePanel,
      props.class,
    )"
  >
    <slot />
  </SplitterPanel>
</template>
