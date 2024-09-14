<script setup lang="ts">
import type { NSelectItemTextProps } from '../../../types'
import { SelectItemText } from 'radix-vue'

const props = defineProps<NSelectItemTextProps>()
</script>

<template>
  <SelectItemText v-bind="props">
    <slot />
  </SelectItemText>
</template>
