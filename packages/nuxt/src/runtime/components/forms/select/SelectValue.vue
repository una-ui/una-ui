<script setup lang="ts">
import type { NSelectValueProps } from '../../../types'
import { SelectValue } from 'reka-ui'

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
