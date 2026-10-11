<script setup lang="ts">
import type { NSeparatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Separator } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSeparatorProps>(), {
  orientation: 'horizontal',
})

const delegatedProps = reactiveOmit(props, ['una', 'separatorPosition'])
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'separator',
        props.una?.separatorDefaultVariant || 'separator-default-variant',
        props.class,
        props.una?.separator,
        props.orientation === 'vertical' ? 'separator-vertical' : 'separator-horizontal',
      )
    "
  >
    <span
      v-if="props.label || $slots.default"
      :separator-position="props.separatorPosition || 'center'"
      :class="cn(
        'separator-content',
        props.una?.separatorContent,
        props.orientation === 'vertical' ? 'separator-content-vertical' : 'separator-content-horizontal',
      )"
    >
      <slot>
        {{ props.label }}
      </slot>
    </span>
  </Separator>
</template>
