<script setup lang="ts">
import type { PinInputRootEmits } from 'reka-ui'
import type { NPinInputProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { randomId } from '../../utils'
import PinInputGroup from './PinInputGroup.vue'
import PinInputRoot from './PinInputRoot.vue'
import PinInputSeparator from './PinInputSeparator.vue'
import PinInputSlot from './PinInputSlot.vue'

const props = withDefaults(defineProps<NPinInputProps>(), {
  length: 6,
  pinInput: 'outline-primary',
  modelValue: () => [],
})

const emits = defineEmits<PinInputRootEmits>()

const rootProps = reactivePick(props, [
  'modelValue',
  'defaultValue',
  'placeholder',
  'disabled',
  'required',
  'dir',
  'mask',
  'otp',
  'type',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const id = computed(() => props.id ?? randomId('pin-input'))
</script>

<template>
  <PinInputRoot
    v-bind="{ ...forwarded, ..._pinInputRoot }"
    :id
  >
    <slot>
      <PinInputGroup
        v-bind="_pinInputGroup"
        :una
      >
        <slot name="group">
          <template v-for="(_, index) in length" :key="index">
            <slot name="input">
              <PinInputSlot
                :index="index"
                :una
                :size
                :pin-input
                :separator
                v-bind="_pinInputSlot"
              />
            </slot>
            <template v-if="($slots.separator || separator) && index !== length - 1">
              <PinInputSeparator
                :separator
                :size
                :una
              >
                <slot name="separator" />
              </PinInputSeparator>
            </template>
          </template>
        </slot>
      </PinInputGroup>
    </slot>
  </PinInputRoot>
</template>
