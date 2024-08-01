<script setup lang="ts">
import { SelectLabel } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectLabelProps } from '../../../types'

const props = defineProps<NSelectLabelProps>()
</script>

<template>
  <SelectLabel :class="cn('select-label', props.class)">
    <slot />
  </SelectLabel>
</template>
