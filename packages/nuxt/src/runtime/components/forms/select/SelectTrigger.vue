<script setup lang="ts">
import { computed } from 'vue'
import { SelectTrigger, useForwardProps } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectTriggerProps } from '../../../types'
import Button from '../../elements/Button.vue'

const props = withDefaults(defineProps<NSelectTriggerProps>(), {
  trailing: 'i-lucide-chevrons-up-down',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'select-trigger justify-between',
      props.class,
    )"
    :btn="btn"
    :una="{
      ...props.una,
      ...{
        btnTrailing: cn(
          'text-xs text-muted',
          props.una?.btnTrailing,
        ),
        btnDefaultVariant: props.una?.btnDefaultVariant ?? 'btn-outline-white',
      },
    }"
    :as="Button"
  >
    <slot />
  </SelectTrigger>
</template>
