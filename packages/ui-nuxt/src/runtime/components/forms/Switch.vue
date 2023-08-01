<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { useVModel } from '@vueuse/core'
import type { NSwitchProps } from '../../types'

const props = defineProps<NSwitchProps>()

const emit = defineEmits<{ (...args: any): void }>()

const checked = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <Switch
    v-model="checked"
    switch
    :class="[checked ? 'switch-checked' : 'switch-unchecked']"
  >
    <span
      aria-hidden="true"
      switch="slider"
      :class="[
        checked
          ? 'switch-slider-checked'
          : 'switch-slider-unchecked',
      ]"
    />
  </Switch>
</template>
