<script setup lang="ts">
import type { SplitterGroupEmits } from 'reka-ui'
import type { NResizableProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SplitterGroup, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NResizableProps>()
const emits = defineEmits<SplitterGroupEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterGroup
    v-slot="{ layout }"
    v-bind="forwarded"
    :class="cn(
      'resizable',
      props.una?.resizablePanelGroup,
      props.class,
    )"
  >
    <slot :layout />
  </SplitterGroup>
</template>
