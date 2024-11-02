<script setup lang="ts">
import type { SliderRootEmits } from 'radix-vue'
import type { NSliderProps } from '../../types'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSliderProps>(), {
  slider: 'primary',
})
const emits = defineEmits<SliderRootEmits>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)
const isVertical = computed(() => props.orientation === 'vertical')
</script>

<template>
  <SliderRoot
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
