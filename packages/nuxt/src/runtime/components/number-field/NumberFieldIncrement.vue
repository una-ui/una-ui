<script setup lang="ts">
import type { NNumberFieldIncrementProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NNumberFieldIncrementProps>()

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
      <NIcon name="i-plus" />
    </slot>
  </NumberFieldIncrement>
</template>
