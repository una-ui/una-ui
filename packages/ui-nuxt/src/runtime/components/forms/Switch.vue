<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import type { NSwitchProps } from '../../types'

const props = defineProps<NSwitchProps>()

const emit = defineEmits<{ (...args: any): void }>()

const checked = useVModel(props, 'modelValue', emit, { passive: true })

const _switch = computed(() => props.switch)

const switchClassVariants = computed(() => {
  const switchWrapper = {
    normal: 'switch-normal',
    short: 'switch-short',
  }

  const switchSliderBg = {
    normal: 'switch-slider-bg-normal',
    short: 'switch-slider-bg-short',
  }

  const switchSlider = {
    normal: 'left-0.1em',
    short: 'left-0',
  }

  return {
    switchWrapper: switchWrapper[props.variant ?? 'normal'],
    switchSliderBg: switchSliderBg[props.variant ?? 'normal'],
    switchSlider: switchSlider[props.variant ?? 'normal'],
  }
})

const checkedClassVariants = computed(() => {
  const switchSliderBg = {
    true: `${props.nv?.switchChecked} switch-checked`,
    false: `${props.nv?.switchUnchecked} switch-unchecked`,
  }

  const switchSlider = {
    true: `${props.nv?.switchSliderChecked} switch-slider-checked`,
    false: `${props.nv?.switchSliderUnchecked} switch-slider-unchecked`,
  }

  return {
    switchSliderBg: switchSliderBg[checked.value ? 'true' : 'false'],
    switchSlider: switchSlider[checked.value ? 'true' : 'false'],
  }
})
</script>

<template>
  <Switch
    v-model="checked"
    :switch="_switch"
    class="switch"
    :class="[
      { 'switch-disabled': disabled },
      switchClassVariants?.switchWrapper,
    ]"
    :disabled="disabled"
  >
    <span
      aria-hidden="true"
      switch="slider-bg"
      :class="[
        nv?.switchSliderBg,
        checkedClassVariants?.switchSliderBg,
        switchClassVariants?.switchSliderBg,
      ]"
    />

    <!-- slider -->
    <span
      aria-hidden="true"
      switch="slider"
      class="border border-base"
      :class="[
        nv?.switchSlider,
        checkedClassVariants?.switchSlider,
        switchClassVariants?.switchSlider,
      ]"
    />
  </Switch>
</template>
