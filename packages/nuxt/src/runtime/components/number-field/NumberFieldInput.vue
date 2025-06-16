<script setup lang="ts">
import type { NNumberFieldInputProps } from '../../types'
import { NumberFieldInput } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NNumberFieldInputProps>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="cn(
      'number-field-input',
      props.una?.numberFieldInput,
      props.class,
    )"
  />
</template>
