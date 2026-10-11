<script setup lang="ts">
import type { NSelectItemIndicatorProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectItemIndicator, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectItemIndicatorProps>()

const forwardProps = useForwardProps(reactiveOmit(props, ['icon', 'una']))
</script>

<template>
  <SelectItemIndicator
    v-bind="forwardProps"
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
