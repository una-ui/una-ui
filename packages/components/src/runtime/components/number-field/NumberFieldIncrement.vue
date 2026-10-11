<script setup lang="ts">
import type { NNumberFieldIncrementProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NNumberFieldIncrementProps>(), {
  icon: 'i-lucide-plus',
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="cn(
      'number-field-increment',
      props.una?.numberFieldIncrement,
      props.class,
    )"
  >
    <slot>
      <Icon :name="icon" />
    </slot>
  </NumberFieldIncrement>
</template>
