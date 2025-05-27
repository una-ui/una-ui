<script setup lang="ts">
import type { NSeparatorProps } from '../../types'
import { Separator } from 'reka-ui'
import { cn, omitProps } from '../../utils'

const props = withDefaults(defineProps<NSeparatorProps>(), {
  orientation: 'horizontal',
})

const delegatedProps = reactiveOmit(props, ['una'])
</script>

<template>
  <Separator
    v-bind="omitProps(delegatedProps, ['una', 'separatorPosition'])"
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
