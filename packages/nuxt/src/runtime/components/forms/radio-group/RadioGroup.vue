<script setup lang="ts">
import type { RadioGroupRootEmits } from 'radix-vue'
import type { NRadioGroupProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { RadioGroupRoot, useForwardPropsEmits } from 'radix-vue'
import { cn } from '../../../utils'
import RadioGroupItem from './RadioGroupItem.vue'

const props = withDefaults(defineProps<NRadioGroupProps>(), {
  radioGroup: 'primary',
  size: 'md',
  square: '1em',
})
const emits = defineEmits<RadioGroupRootEmits>()

const rootProps = reactivePick(props, [
  'as',
  'asChild',
  'defaultValue',
  'dir',
  'disabled',
  'loop',
  'modelValue',
  'name',
  'orientation',
  'required',
])

const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <RadioGroupRoot
    :class="cn(
      'radio-group',
      orientation === 'horizontal' ? 'radio-group-orientation-horizontal' : 'radio-group-orientation-vertical',
      una?.radioGroup,
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot>
      <RadioGroupItem
        v-for="item in items"
        :key="item.value"
        v-bind="{ rounded, icon, size, square, radioGroup, ...item }"
        :una="{ ...una, ...item.una }"
      />
    </slot>
  </RadioGroupRoot>
</template>
