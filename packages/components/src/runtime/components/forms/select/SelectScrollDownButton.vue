<script setup lang="ts">
import type { NSelectScrollDownButtonProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectScrollDownButton, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectScrollDownButtonProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="cn(
      'select-scroll-down-button',
      props.una?.selectScrollDownButton,
      props.class,
    )"
  >
    <slot>
      <Icon
        :name="forwardedProps?.una?.selectScrollDownButtonIcon || 'select-scroll-down-button-icon'"
      />
    </slot>
  </SelectScrollDownButton>
</template>
