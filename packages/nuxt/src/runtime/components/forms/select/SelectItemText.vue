<script setup lang="ts">
import { SelectItemText } from 'radix-vue'
import type { NSelectItemTextProps } from '../../../types'

const props = defineProps<NSelectItemTextProps>()
</script>

<template>
  <SelectItemText v-bind="props">
    <slot />
  </SelectItemText>
</template>
