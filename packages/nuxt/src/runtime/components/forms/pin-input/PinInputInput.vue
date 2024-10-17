<script setup lang="ts">
import type { NPinInputInputProps } from '../../../../runtime/types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput } from 'radix-vue'
import { cn } from '../../../../runtime/utils'

const props = withDefaults(defineProps<NPinInputInputProps>(), {
  una: () => ({
    pinInputInput: 'pin-input-default-variant',
  }),
})

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <PinInputInput
    v-bind="delegatedProps"
    :pin-input
    :class="cn(
      'pin-input-input',
      props.class,
      props.una.pinInputInput,
    )"
  />
</template>
