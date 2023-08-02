<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import type { NSwitchProps } from '../../types'

const props = defineProps<NSwitchProps>()

const emit = defineEmits<{ (...args: any): void }>()

const checked = useVModel(props, 'modelValue', emit, { passive: true })

const _switch = computed(() => props.switch)
</script>

<template>
  <Switch
    v-model="checked"
    :switch="`~ normal ${_switch ?? ''}`"
    :class="[checked
      ? nv?.switchSliderChecked ?? 'switch-checked'
      : nv?.switchSliderUnchecked ?? 'switch-unchecked',
    ]"
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
