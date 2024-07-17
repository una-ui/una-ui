<script setup lang="ts">
import { computed } from 'vue'
import type { SliderRootEmits } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import type { NSliderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSliderProps>()
const emits = defineEmits<SliderRootEmits>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'slider-root slider-primary',
      props.class,
      props.una?.sliderRoot,
      disabled && 'slider-disabled',
    )"
    v-bind="forwarded"
  >
    <slot name="slider-track">
      <SliderTrack
        :class="cn(
          'slider-track',
          props.una?.sliderTrack,
        )"
      >
        <slot name="slider-range">
          <SliderRange
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
        :class="cn(
          'slider-thumb',
          props.una?.sliderThumb,
        )"
      />
    </slot>
  </SliderRoot>
</template>
