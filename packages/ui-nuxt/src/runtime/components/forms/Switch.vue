<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import type { NSwitchProps } from '../../types'
import NIcon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NSwitchProps>()

const emit = defineEmits<{ (...args: any): void }>()

const checked = useVModel(props, 'modelValue', emit, { passive: true })

const _switch = computed(() => props.switch)

const switchClassVariants = computed(() => {
  const switchWrapper = {
    false: 'switch-normal',
    true: 'switch-short',
  }

  const switchSliderBg = {
    false: 'switch-slider-bg-normal',
    true: 'switch-slider-bg-short',
  }

  const switchSlider = {
    false: 'left-0.1em',
    true: 'left-0',
  }

  return {
    switchWrapper: switchWrapper[!props.outset ? 'false' : 'true'],
    switchSliderBg: switchSliderBg[!props.outset ? 'false' : 'true'],
    switchSlider: switchSlider[!props.outset ? 'false' : 'true'],
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

  const switchIcon = {
    true: `${props.iconOn ?? ''} switch-icon-on`,
    false: `${props.iconOff ?? ''} switch-icon-off`,
  }

  return {
    switchSliderBg: switchSliderBg[checked.value ? 'true' : 'false'],
    switchSlider: switchSlider[checked.value ? 'true' : 'false'],
    switchIcon: switchIcon[checked.value ? 'true' : 'false'],
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
    >
      <span class="sr-only">Icon</span>
      <NIcon
        :switch="`icon ${nv?.switchIcon ?? ''}`"
        :name="checkedClassVariants?.switchIcon"
      />
    </span>
  </Switch>
</template>
