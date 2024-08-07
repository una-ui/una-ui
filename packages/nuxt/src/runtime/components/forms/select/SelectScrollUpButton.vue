<script setup lang="ts">
import { computed } from 'vue'
import { SelectScrollUpButton, useForwardProps } from 'radix-vue'
import Icon from '../../elements/Icon.vue'
import { cn } from '../../../utils'
import type { NSelectScrollUpButtonProps } from '../../../types'

const props = defineProps<NSelectScrollUpButtonProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton v-bind="forwardedProps" :class="cn('select-scroll-up-button', props.class)">
    <slot>
      <Icon
        :name="forwardedProps?.una?.selectScrollUpButtonIcon || 'select-scroll-up-button-icon'"
      />
    </slot>
  </SelectScrollUpButton>
</template>
