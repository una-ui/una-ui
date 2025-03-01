<script setup lang="ts">
import type { NSelectScrollUpButtonProps } from '../../../types'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectScrollUpButtonProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

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
