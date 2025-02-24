<script setup lang="ts">
import type { NSheetFooterProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSheetFooterProps>()
</script>

<template>
  <div
    :class="
      cn(
        'sheet-footer',
        props.una?.sheetFooter,
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
