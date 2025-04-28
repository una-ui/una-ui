<script setup lang="ts">
import type { SplitterResizeHandleEmits } from 'reka-ui'
import type { NResizableHandleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SplitterResizeHandle, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NResizableHandleProps>(), {
  handle: 'resizable-handle-icon',
  resizableHandle: 'resizable-handle-default-variant',
})
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle
    v-bind="forwarded"
    class="resizable-handle-wrapper"
  >
    <template v-if="withHandle">
      <div
        :class="cn(
          'resizable-handle',
          props.una?.resizableHandle,
          props.class,
        )"
        :resizable-handle
      >
        <slot name="handle-icon">
          <Icon :name="handle" class="resizable-handle-icon-wrapper" />
        </slot>
      </div>
    </template>
  </SplitterResizeHandle>
</template>
