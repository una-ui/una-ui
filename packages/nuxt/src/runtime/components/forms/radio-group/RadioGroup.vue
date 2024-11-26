<script setup lang="ts">
import type { NRadioGroupProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { RadioGroupRoot, type RadioGroupRootEmits, useForwardPropsEmits } from 'radix-vue'
import { cn } from '../../../utils'
import RadioGroupItem from './RadioGroupItem.vue'

const props = defineProps<NRadioGroupProps>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = reactivePick(props, [
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

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RadioGroupRoot
    :class="cn(
      'radio-group',
      orientation === 'horizontal' ? 'radio-group-orientation-horizontal' : 'radio-group-orientation-vertical',
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot>
      <RadioGroupItem
        v-for="item in items"
        :key="item.value"
        :radio-group="radioGroup || item.radioGroup"
        v-bind="item"
      />
    </slot>
  </RadioGroupRoot>
</template>
