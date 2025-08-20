<script setup lang="ts">
import type { NNumberFieldContentProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NNumberFieldContentProps>()
</script>

<template>
  <div
    :class="cn(
      'number-field-content',
      props.una?.numberFieldContent,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
