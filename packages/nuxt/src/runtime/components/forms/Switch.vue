<script setup lang="ts">
import type { NSwitchProps } from '../../types'
import { Switch } from '@headlessui/vue'
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import NIcon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NSwitchProps>()

const emit = defineEmits<{ (...args: any): void }>()

const on = useVModel(props, 'modelValue', emit, { passive: true })

const _switch = computed(() => props.switch)

const outsetClassVariants = computed(() => {
  const switchWrapper = {
    false: 'switch-inset',
    true: 'switch-outset',
  }

  const switchTrack = {
    false: 'switch-track-inset',
    true: 'switch-track-outset',
  }

  const switchThumb = {
    false: 'left-0.125em',
    true: 'left-0 border-base border',
  }

  return {
    switchWrapper: switchWrapper[!props.outset ? 'false' : 'true'],
    switchTrack: switchTrack[!props.outset ? 'false' : 'true'],
    switchThumb: switchThumb[!props.outset ? 'false' : 'true'],
  }
})

const onClassVariants = computed(() => {
  const switchTrack = {
    true: `${props.una?.switchTrackOn ?? ''} switch-track-on`,
    false: `${props.una?.switchTrackOff ?? ''} switch-track-off`,
  }

  const switchThumb = {
    true: `${props.una?.switchThumbOn ?? ''} switch-thumb-on`,
    false: `${props.una?.switchThumbOff ?? ''} switch-thumb-off`,
  }

  const switchIcon = {
    true: `${props.onIcon ?? ''} switch-icon-on`,
    false: `${props.offIcon ?? ''} switch-icon-off`,
  }

  return {
    switchTrack: switchTrack[on.value ? 'true' : 'false'],
    switchThumb: switchThumb[on.value ? 'true' : 'false'],
    switchIcon: switchIcon[on.value ? 'true' : 'false'],
  }
})
</script>

<template>
  <Switch
    v-model="on"
    class="switch"
    :class="[
      { 'switch-disabled': disabled || loading },
      outsetClassVariants?.switchWrapper,
    ]"
    :switch="_switch"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <span class="sr-only">Track</span>
    <span
      aria-hidden="true"
      switch="track"
      :class="[
        una?.switchTrack,
        onClassVariants?.switchTrack,
        outsetClassVariants?.switchTrack,
      ]"
    />

    <span class="sr-only">Thumb</span>
    <span
      aria-hidden="true"
      switch="thumb"
      :class="[
        una?.switchThumb,
        onClassVariants?.switchThumb,
        outsetClassVariants?.switchThumb,
      ]"
    >
      <span class="sr-only">Icon</span>
      <slot v-if="!loading" name="icon" :on="on">
        <NIcon
          switch="icon-base"
          :name="onClassVariants?.switchIcon"
          :class="una?.switchIconBase"
        />
      </slot>
      <slot v-else name="loading-icon" :on="on">
        <NIcon
          switch="loading"
          :class="una?.switchLoading"
          :name="una?.switchloadingicon ?? 'switch-loading-icon'"
        />
      </slot>
    </span>
  </Switch>
</template>
