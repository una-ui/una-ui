<script setup lang="ts">
import type { NSheetHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSheetHeaderProps>()
</script>

<template>
  <div
    data-slot="sheet-header"
    :class="
      cn('sheet-header', props.una?.sheetHeader, props.class)
    "
  >
    <slot />
  </div>
</template>
