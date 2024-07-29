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
  <SelectScrollUpButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
    <slot>
      <Icon
        name="i-lucide-chevron-up"
      />
    </slot>
  </SelectScrollUpButton>
</template>
