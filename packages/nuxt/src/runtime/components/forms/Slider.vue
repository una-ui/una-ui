<script setup lang="ts">
import type { SliderRootEmits } from 'reka-ui'
import type { NSliderProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSliderProps>(), {
  slider: 'primary',
  size: 'md',
})
const emits = defineEmits<SliderRootEmits>()
const rootProps = reactiveOmit(props, ['class', 'una', 'slider'])
const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <SliderRoot
    v-slot="{ modelValue }"
    data-slot="slider-root"
    :class="cn(
      'slider-root',
      props.class,
      props.una?.sliderRoot,
    )"
    v-bind="forwarded"
    :slider
    :size
  >
    <slot name="slider-track">
      <SliderTrack
        data-slot="slider-track"
        :class="cn(
          'slider-track',
          props.una?.sliderTrack,
        )"
        :size
      >
        <slot name="slider-range">
          <SliderRange
            data-slot="slider-range"
            :size
            :class="cn(
              'slider-range',
              props.una?.sliderRange,
            )"
          />
        </slot>
      </SliderTrack>
    </slot>

    <slot name="slider-thumb">
      <SliderThumb
        v-for="(_, key) in modelValue"
        :key="key"
        data-slot="slider-thumb"
        :size
        :class="cn(
          'slider-thumb',
          props.una?.sliderThumb,
        )"
      />
    </slot>
  </SliderRoot>
</template>
