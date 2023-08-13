<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import type { NIndicatorProps } from '../../types'

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
      <slot name="badge">
        <DefineTemplate v-slot="{ ping }">
          <span
            v-bind="$attrs"
            :indicator="indicator"
            class="indicator whitespace-nowrap"
            :class="[
              { 'indicator-default-placement': !hasPlacement },
              { 'indicator-default-variant': !hasVariant && !isBaseVariant },
              { '!animate-ping !ring-none': ping },
            ]"
            :size="!label ? '0.45em' : '0.75em'"
          >
            <slot name="label">
              <span v-if="label" indicator="label">
                {{ label }}
              </span>
            </slot>
          </span>
        </DefineTemplate>
      </slot>

      <ReuseTemplate :ping="ping" />
      <ReuseTemplate />
    </span>
  </div>
</template>
