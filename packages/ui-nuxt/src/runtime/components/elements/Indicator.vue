<script setup lang="ts">
import { computed } from 'vue'
import type { NIndicatorProps } from '../../types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NIndicatorProps>()

const indicatorPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
const hasPlacement = computed(() => indicatorPlacements.some(indicatorPlacements => props.indicator?.includes(indicatorPlacements)))
</script>

<template>
  <div
    indicator="wrapper"
  >
    <slot />
    <span
      v-bind="$attrs"
      :indicator="indicator"
      class="indicator"
      :class="[
        { 'indicator-default-placement': !hasPlacement },
      ]"
    >
      <span indicator="label">
        {{ label }}
      </span>
    </span>
  </div>
</template>
