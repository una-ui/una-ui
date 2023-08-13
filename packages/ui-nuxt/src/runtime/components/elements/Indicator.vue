<script setup lang="ts">
import { computed } from 'vue'
import type { NIndicatorProps } from '../../types'
import NBadge from './Badge.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NIndicatorProps>()

const indicatorPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
const hasPlacement = computed(() => indicatorPlacements.some(indicatorPlacements => props.indicator?.includes(indicatorPlacements)))

const indicatorVariants = ['solid'] as const
const hasVariant = computed(() => indicatorVariants.some(indicatorVariants => props.indicator?.includes(indicatorVariants)))

const isBaseVariant = computed(() => props.indicator?.includes('~'))
</script>

<template>
  <div indicator="wrapper">
    <slot />
    <span :size="size">
      <slot name="badge">
        <NBadge
          v-bind="$attrs"
          :indicator="indicator"
          class="!indicator"
          :class="[
            { 'indicator-default-placement': !hasPlacement },
            { 'indicator-default-variant': !hasVariant && !isBaseVariant },
          ]"
          badge="~"
          :size="dot ? '0.45em' : '0.75em'"
        >
          <span indicator="label">
            {{ label }}
          </span>
        </NBadge>
      </slot>
    </span>
  </div>
</template>
