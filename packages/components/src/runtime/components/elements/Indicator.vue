<script setup lang="ts">
import type { NIndicatorProps } from '../../types'
import { createReusableTemplate } from '@vueuse/core'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NIndicatorProps>(), {
  visible: true,
})

const indicatorPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
const hasPlacement = computed(() => indicatorPlacements.some(indicatorPlacements => props.indicator?.includes(indicatorPlacements)))

const indicatorVariants = ['solid'] as const
const hasVariant = computed(() => indicatorVariants.some(indicatorVariants => props.indicator?.includes(indicatorVariants)))

const isBaseVariant = computed(() => props.indicator?.includes('~'))

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
  ping?: boolean
}>()
</script>

<template>
  <div
    indicator="wrapper"
    :class="una?.indicatorWrapper"
  >
    <slot />

    <span v-if="visible" :size="size">
      <DefineTemplate v-slot="{ ping }">
        <slot name="indicator">
          <span
            v-bind="$attrs"
            :indicator="indicator"
            class="indicator whitespace-nowrap"
            :class="[
              { 'indicator-default-placement': !hasPlacement },
              { 'indicator-default-variant': !hasVariant && !isBaseVariant },
              { 'animate-ping ring-none': ping },
              !label ? 'indicator-dot' : 'indicator-label',
              una?.indicator,
            ]"
          >
            <slot name="label">
              {{ label }}
            </slot>
          </span>
        </slot>
      </DefineTemplate>

      <ReuseTemplate :ping="ping" />
      <ReuseTemplate />
    </span>
  </div>
</template>
