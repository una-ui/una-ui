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

const on = useVModel(props, 'modelValue', emit, { passive: true })

const _switch = computed(() => props.switch)

const switchClassVariants = computed(() => {
  const switchWrapper = {
    false: 'switch-inset',
    true: 'switch-outset',
  }

  const switchTrack = {
    false: 'switch-track-inset',
    true: 'switch-track-outset',
  }

  const switchThumb = {
    false: 'left-0.1em',
    true: 'left-0',
  }

  return {
    switchWrapper: switchWrapper[!props.outset ? 'false' : 'true'],
    switchTrack: switchTrack[!props.outset ? 'false' : 'true'],
    switchThumb: switchThumb[!props.outset ? 'false' : 'true'],
  }
})

const onClassVariants = computed(() => {
  const switchTrack = {
    true: `${props.nv?.switchTrackOn ?? ''} switch-track-on`,
    false: `${props.nv?.switchTrackOff ?? ''} switch-track-off`,
  }

  const switchThumb = {
    true: `${props.nv?.switchThumbOn ?? ''} switch-thumb-on`,
    false: `${props.nv?.switchThumbOff ?? ''} switch-thumb-off`,
  }

  const switchIcon = {
    true: `${props.iconOn ?? ''} switch-icon-on`,
    false: `${props.iconOff ?? ''} switch-icon-off`,
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
      switchClassVariants?.switchWrapper,
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
        nv?.switchTrack,
        onClassVariants?.switchTrack,
        switchClassVariants?.switchTrack,
      ]"
    />

    <span class="sr-only">Thumb</span>
    <span
      aria-hidden="true"
      switch="thumb"
      :class="[
        nv?.switchThumb,
        onClassVariants?.switchThumb,
        switchClassVariants?.switchThumb,
      ]"
    >
      <span class="sr-only">Icon</span>
      <NIcon
        v-if="!loading"
        switch="icon"
        :name="onClassVariants?.switchIcon"
        :class="nv?.switchIcon"
      />
      <NIcon
        v-else
        switch="loading"
        :class="nv?.switchLoading"
        :name="nv?.switchloadingicon ?? 'switch-loading-icon'"
      />
    </span>
  </Switch>
</template>
