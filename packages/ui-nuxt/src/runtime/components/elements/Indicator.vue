<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
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

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
  ping?: boolean
}>()
</script>

<template>
  <div indicator="wrapper">
    <slot />

    <span :size="size">
      <DefineTemplate v-slot="{ ping }">
        <NBadge
          v-bind="$attrs"
          :indicator="indicator"
          class="!indicator"
          :class="[
            { 'indicator-default-placement': !hasPlacement },
            { 'indicator-default-variant': !hasVariant && !isBaseVariant },
            { '!animate-ping !ring-none': ping },
          ]"
          badge="~"
          :size="dot ? '0.45em' : '0.75em'"
        >
          <span indicator="label">
            {{ label }}
          </span>
        </NBadge>
      </DefineTemplate>

      <ReuseTemplate :ping="ping" />
      <slot name="badge">
        <ReuseTemplate />
      </slot>
    </span>
  </div>
</template>
