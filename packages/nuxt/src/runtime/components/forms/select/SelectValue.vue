<script setup lang="ts">
import { SelectValue } from 'radix-vue'
import type { NSelectValueProps } from '../../../types'

const props = defineProps<NSelectValueProps>()
</script>

<template>
  <SelectValue
    :class="{ 'select-value': !props.placeholder }"
    v-bind="props"
  >
    <slot />
  </SelectValue>
</template>
