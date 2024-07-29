<script setup lang="ts">
import { SelectValue } from 'radix-vue'
import type { NSelectValueProps } from '../../../types'

const props = defineProps<NSelectValueProps>()
</script>

<template>
  <SelectValue v-bind="props">
    <slot />
  </SelectValue>
</template>
