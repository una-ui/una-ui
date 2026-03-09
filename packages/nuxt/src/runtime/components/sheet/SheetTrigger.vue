<script setup lang="ts">
import type { NSheetTriggerProps } from '../../types'
import { DialogTrigger } from 'reka-ui'

const props = withDefaults(defineProps<NSheetTriggerProps>(), {
  asChild: true,
})
</script>

<template>
  <DialogTrigger
    data-slot="sheet-trigger"
    v-bind="props"
  >
    <slot />
  </DialogTrigger>
</template>
