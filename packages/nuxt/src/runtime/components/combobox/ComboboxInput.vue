<script setup lang="ts">
import type { ComboboxInputEmits } from 'reka-ui'
import type { NComboboxInputProps } from '../../types'
import { ComboboxInput, useForwardPropsEmits } from 'reka-ui'
import { inject, onMounted, ref } from 'vue'
import { isInComboboxListKey } from '../../utils/injectionKeys'
import Input from '../forms/Input.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NComboboxInputProps>()

const emits = defineEmits<ComboboxInputEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const inputRef = ref<InstanceType<typeof Input>>()

const isInList = inject(isInComboboxListKey, false)

onMounted(() => {
  if (isInList) {
    inputRef.value?.focus()
  }
})
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    as-child
  >
    <Input
      ref="inputRef"
      data-slot="command-input"
      v-bind="$attrs"
      :_inputWrapper="{
        'data-slot': 'command-input-wrapper',
      }"
    />
  </ComboboxInput>
</template>
