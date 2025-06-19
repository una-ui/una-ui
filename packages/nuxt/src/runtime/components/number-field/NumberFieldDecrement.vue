<script setup lang="ts">
import type { NNumberFieldDecrementProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldDecrement, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NNumberFieldDecrementProps>(), {
  icon: 'i-lucide-minus',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="cn(
      'number-field-decrement',
      props.una?.numberFieldDecrement,
      props.class,
    )"
  >
    <slot>
      <Icon :name="icon" />
    </slot>
  </NumberFieldDecrement>
</template>
