<script lang="ts">
import type { NPinInputProps, PinInputType } from '../../types'
</script>

<script setup lang="ts" generic="T extends PinInputType = 'text'">
import type { PinInputRootEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn, randomId } from '../../utils'
import PinInputGroup from './PinInputGroup.vue'
import PinInputSeparator from './PinInputSeparator.vue'
import PinInputSlot from './PinInputSlot.vue'

const props = withDefaults(defineProps<NPinInputProps<T>>(), {
  type: 'text' as never,
  pinInput: 'outline-primary',
  groupBy: 0,
  size: 'md',
  separator: false,
})

const emits = defineEmits<PinInputRootEmits>()

const rootProps = reactivePick(props, [
  'as',
  'asChild',
  'dir',
  'defaultValue',
  'disabled',
  'id',
  'mask',
  'modelValue',
  'name',
  'otp',
  'placeholder',
  'type',
  'required',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const id = computed(() => props.id ?? randomId('pin-input'))

const separator = computed(() => {
  if (props.separator === true) {
    return 'pin-input-separator-icon'
  }

  return props.separator
})

const maxLength = computed(() => {
  if (typeof props.maxLength !== 'number') {
    return props.modelValue?.length ?? 0
  }

  return props.maxLength
})
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    :id
    data-slot="pin-input"
    :class="cn(
      'pin-input',
      props.una?.pinInput,
      props.class,
    )"
    :size
  >
    <slot>
      <template v-if="groupBy === 0">
        <PinInputGroup
          v-bind="_pinInputGroup"
          :una
        >
          <slot name="group">
            <template v-for="index in maxLength" :key="index">
              <slot name="slot" :index="index - 1">
                <PinInputSlot
                  :index="index - 1"
                  :una
                  :status
                  :pin-input
                  v-bind="_pinInputSlot"
                />
              </slot>
            </template>
          </slot>
        </PinInputGroup>
      </template>

      <template v-else>
        <template v-for="(groupIndex) in Math.ceil(maxLength / groupBy)" :key="groupIndex">
          <PinInputGroup
            v-bind="_pinInputGroup"
            :una
          >
            <slot name="group">
              <template v-for="slotInGroup in Math.min(groupBy, maxLength - (groupIndex - 1) * groupBy)" :key="slotInGroup">
                <slot name="slot" :index="(groupIndex - 1) * groupBy + slotInGroup - 1">
                  <PinInputSlot
                    :index="(groupIndex - 1) * groupBy + slotInGroup - 1"
                    :una
                    :pin-input
                    :status
                    v-bind="_pinInputSlot"
                  />
                </slot>
              </template>
            </slot>
          </PinInputGroup>

          <template v-if="separator !== false && (separator || $slots.separator) && groupIndex < Math.ceil(maxLength / groupBy)">
            <PinInputSeparator
              :icon="separator"
              :una
              v-bind="_pinInputSeparator"
            >
              <slot name="separator" />
            </PinInputSeparator>
          </template>
        </template>
      </template>
    </slot>
  </PinInputRoot>
</template>
