<script setup lang="ts">
import type { NPinInputProps } from '../../../../runtime/types'
import { reactivePick } from '@vueuse/core'
import { PinInputRoot, type PinInputRootEmits, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { randomId } from '../../../../runtime/utils'
import PinInputGroup from './PinInputGroup.vue'
import PinInputInput from './PinInputInput.vue'
import PinInputSeparator from './PinInputSeparator.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NPinInputProps>(), {
  count: 5,
  modelValue: () => [],
  placeholder: '○',
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

const id = computed(() => props.id ?? randomId('input'))
</script>

<template>
  <PinInputRoot
    v-bind="{ ...forwarded, ..._pinInputRoot }"
    :id
  >
    <slot name="root">
      <PinInputGroup v-bind="_pinInputGroup">
        <slot name="group">
          <template v-for="(_, index) in count" :key="index">
            <PinInputInput
              :index
              :pin-input
              :with-separator="!!separator || !!$slots.separator"
              v-bind="{ _pinInputInput, una, size }"
            />
            <template v-if="($slots.separator || separator) && index !== count - 1">
              <PinInputSeparator
                :icon="separator"
                :size
                v-bind="_pinInputSeparator"
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
