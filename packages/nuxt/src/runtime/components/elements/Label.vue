<script setup lang="ts">
import type { NLabelProps } from '../../types'
import { Label } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NLabelProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'label-base',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
