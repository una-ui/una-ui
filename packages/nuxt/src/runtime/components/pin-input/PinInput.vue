<script setup lang="ts">
import type { PinInputRootEmits } from 'reka-ui'
import type { NPinInputProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import PinInputGroup from './PinInputGroup.vue'
import PinInputSeparator from './PinInputSeparator.vue'
import PinInputSlot from './PinInputSlot.vue'

const props = withDefaults(defineProps<NPinInputProps>(), {
  length: 6,
  size: 'md',
  pinInput: 'outline-primary',
  modelValue: () => [],
})
const emits = defineEmits<PinInputRootEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'pinInput')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PinInputRoot
    data-slot="pin-input"
    v-bind="forwarded" :class="cn('pin-input', props.class)"
  >
    <slot>
      <PinInputGroup
        :una="props.una?.pinInputGroup"
        :size
      >
        <slot name="group">
          <template v-for="(id, index) in length" :key="id">
            <slot name="input">
              <PinInputSlot
                :index="index"
                :size
                :una="props.una?.pinInputSlots"
                :pin-input
              />
            </slot>
            <template v-if="separator && index !== length - 1">
              <slot name="separator">
                <PinInputSeparator
                  :icon="separator"
                  :size
                  :una="props.una?.pinInputSeparator"
                />
              </slot>
            </template>
          </template>
        </slot>
      </PinInputGroup>
    </slot>
  </PinInputRoot>
</template>
