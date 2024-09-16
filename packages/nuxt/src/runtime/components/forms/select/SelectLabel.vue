<script setup lang="ts">
import type { NSelectLabelProps } from '../../../types'
import { SelectLabel } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NSelectLabelProps>()
</script>

<template>
  <SelectLabel :class="cn('select-label', props.class)">
    <slot />
  </SelectLabel>
</template>
