<script setup lang="ts">
import type { NSelectScrollUpButtonProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectScrollUpButtonProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    :class="cn(
      'select-scroll-up-button',
      props.una?.selectScrollUpButton,
      props.class,
    )"
  >
    <slot>
      <Icon
        :name="forwardedProps?.una?.selectScrollUpButtonIcon || 'select-scroll-up-button-icon'"
      />
    </slot>
  </SelectScrollUpButton>
</template>
