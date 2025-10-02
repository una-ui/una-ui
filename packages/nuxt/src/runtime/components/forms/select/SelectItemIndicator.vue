<script setup lang="ts">
import type { NSelectItemIndicatorProps } from '../../../types'
import { SelectItemIndicator } from 'reka-ui'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectItemIndicatorProps>()
</script>

<template>
  <SelectItemIndicator
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
  </SelectItemIndicator>
</template>
