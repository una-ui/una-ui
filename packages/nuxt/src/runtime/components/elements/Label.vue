<script setup lang="ts">
import { computed } from 'vue'
import { Label } from 'radix-vue'
import { cn } from '../../utils'
import type { NLabelProps } from '../../types'

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
