<script setup lang="ts">
import type { SliderRootEmits } from 'reka-ui'
import type { NSliderProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSliderProps>(), {
  slider: 'primary',
})
const emits = defineEmits<SliderRootEmits>()
const rootProps = reactiveOmit(props, ['class', 'una', 'slider', 'una'])
const forwarded = useForwardPropsEmits(rootProps, emits)
const isVertical = computed(() => props.orientation === 'vertical')
</script>

<template>
  <SliderRoot
    v-slot="{ modelValue }"
    :class="cn(
      'slider-root',
      isVertical && 'slider-root-vertical',
      props.class,
      props.una?.sliderRoot,
      disabled && 'slider-disabled',
    )"
    v-bind="forwarded"
    :slider="slider"
  >
    <slot name="slider-track">
      <SliderTrack
        :class="cn(
          'slider-track',
          isVertical && 'slider-track-vertical',
          props.una?.sliderTrack,
        )"
      >
        <slot name="slider-range">
          <SliderRange
            :class="cn(
              'slider-range',
              isVertical && 'slider-range-vertical',
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
        :class="cn(
          'slider-thumb',
          isVertical && 'slider-thumb-vertical',
          props.una?.sliderThumb,
        )"
      />
    </slot>
  </SliderRoot>
</template>
