<script setup lang="ts">
import type { NSelectItemIndicatorProps } from '../../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NSelectItemIndicatorProps>(), {
  as: 'span',
})
</script>

<template>
  <Primitive
    aria-hidden
    v-bind="props"
    :class="cn(
      'select-item-indicator',
      props.una?.selectItemIndicator,
      props.class,
    )"
  >
    <slot>
      <Icon
        :name="props.icon ?? 'select-item-indicator-icon'"
        :class="cn(
          props.una?.selectItemIndicatorIcon,
        )"
      />
    </slot>
  </Primitive>
</template>
