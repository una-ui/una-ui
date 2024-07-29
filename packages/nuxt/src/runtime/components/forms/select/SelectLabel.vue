<script setup lang="ts">
import { SelectLabel } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectLabelProps } from '../../../types'

const props = defineProps<NSelectLabelProps>()
</script>

<template>
  <SelectLabel :class="cn('py-1.5 pl-8 pr-2 text-sm font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
