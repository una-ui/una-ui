<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import type { NSwitchProps } from '../../types'

defineOptions({
  inheritAttrs: false,
})

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
    switchWrapper: switchWrapper[props.type ?? 'normal'],
    switchSliderBg: switchSliderBg[props.type ?? 'normal'],
    switchSlider: switchSlider[props.type ?? 'normal'],
  }
})

const checkedClassVariants = computed(() => {
  const switchSliderBg = {
    true: `${props.nv?.switchSliderBgChecked ?? ''} switch-slider-bg-checked`,
    false: `${props.nv?.switchSliderBgUnchecked ?? ''} switch-slider-bg-unchecked`,
  }

  const switchSlider = {
    true: `${props.nv?.switchSliderChecked ?? ''} switch-slider-checked`,
    false: `${props.nv?.switchSliderUnchecked ?? ''} switch-slider-unchecked`,
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
    class="switch"
    :class="[
      { 'switch-disabled': disabled },
      switchClassVariants?.switchWrapper,
    ]"
    :switch="_switch"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <span class="sr-only">Slider background</span>
    <span
      aria-hidden="true"
      switch="slider-bg"
      :class="[
        nv?.switchSliderBg,
        checkedClassVariants?.switchSliderBg,
        switchClassVariants?.switchSliderBg,
      ]"
    />

    <span class="sr-only">Slider</span>
    <span
      aria-hidden="true"
      switch="slider"
      :class="[
        nv?.switchSlider,
        checkedClassVariants?.switchSlider,
        switchClassVariants?.switchSlider,
      ]"
    />
  </Switch>
</template>
