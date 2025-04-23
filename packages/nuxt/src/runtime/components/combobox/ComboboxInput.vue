<script setup lang="ts">
import type { ComboboxInputEmits } from 'reka-ui'
import type { NComboboxInputProps } from '../../types'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'
import Input from '../forms/Input.vue'

const props = withDefaults(defineProps<NComboboxInputProps>(), {
  leading: 'i-lucide-search',
})

const emits = defineEmits<ComboboxInputEmits>()

// Ensure all properties are correctly passed through
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxInput
    data-slot="command-input"
    v-bind="forwarded"
    :as="Input"
    target="0"
    :_inputWrapper="{
      'data-slot': 'command-input-wrapper',
    }"
  >
    <slot />
  </ComboboxInput>
</template>
