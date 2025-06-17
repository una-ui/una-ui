<script setup lang="ts">
import type { NumberFieldRootEmits } from 'reka-ui'
import type { NNumberFieldProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import NumberFieldContent from './NumberFieldContent.vue'

const props = defineProps<NNumberFieldProps>()
const emits = defineEmits<NumberFieldRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" :class="cn('number-field-root', props.class)">
    <slot>
      <slot name="header">
        <NLabel v-if="label" :label />
      </slot>
      <NumberFieldContent>
        <slot name="content">
          <NNumberFieldDecrement
            v-bind="forwarded._numberFieldDecrement"
            :una
          >
            <slot name="decrement" />
          </NNumberFieldDecrement>
          <NNumberFieldInput
            v-bind="forwarded._numberFieldInput"
            :una
          />
          <NNumberFieldIncrement
            v-bind="forwarded._numberFieldIncrement"
            :una
          >
            <slot name="increment" />
          </NNumberFieldIncrement>
        </slot>
      </NumberFieldContent>
    </slot>
  </NumberFieldRoot>
</template>
