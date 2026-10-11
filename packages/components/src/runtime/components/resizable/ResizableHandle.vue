<script setup lang="ts">
import type { SplitterResizeHandleEmits } from 'reka-ui'
import type { NResizableHandleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SplitterResizeHandle, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NResizableHandleProps>(), {
  resizableHandle: 'solid-gray',
})
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una', 'icon'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const icon = computed(() =>
  typeof props.icon === 'string'
    ? props.icon
    : props.icon === true
      ? 'resizable-handle-icon-name'
      : false,
)
</script>

<template>
  <SplitterResizeHandle
    v-bind="forwarded"
    data-slot="resizable-handle"
    :resizable-handle
    :class="
      cn(
        'resizable-handle',
        props.una?.resizableHandle,
        props.class,
      )"
  >
    <slot>
      <template v-if="icon">
        <div
          :class="cn(
            'resizable-handle-icon-wrapper',
            props.una?.resizableHandleIconWrapper,
          )"
        >
          <slot name="icon">
            <Icon
              :name="icon"
              :class="cn(
                'resizable-handle-icon',
                props.una?.resizableHandleIcon,
              )"
            />
          </slot>
        </div>
      </template>
    </slot>
  </SplitterResizeHandle>
</template>
