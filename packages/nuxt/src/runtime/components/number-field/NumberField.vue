<script setup lang="ts">
import type { NumberFieldRootEmits } from 'reka-ui'
import type { NNumberFieldProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import NumberFieldContent from './NumberFieldContent.vue'

const props = withDefaults(defineProps<NNumberFieldProps>(), {
  size: 'md',
  leading: 'i-lucide-minus',
  trailing: 'i-lucide-plus',
})
const emits = defineEmits<NumberFieldRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" :class="cn('number-field-root', props.class)">
    <slot>
      <NumberFieldContent :size>
        <slot name="content">
          <NNumberFieldDecrement
            v-bind="forwarded._numberFieldDecrement"
            :icon="props.leading"
            :size
            :una
          >
            <slot name="decrement" />
          </NNumberFieldDecrement>
          <NNumberFieldInput
            v-bind="forwarded._numberFieldInput"
            :size
            :una
          />
          <NNumberFieldIncrement
            v-bind="forwarded._numberFieldIncrement"
            :icon="props.trailing"
            :size
            :una
          >
            <slot name="increment" />
          </NNumberFieldIncrement>
        </slot>
      </NumberFieldContent>
    </slot>
  </NumberFieldRoot>
</template>
