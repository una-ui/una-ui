<script setup lang="ts">
import type { NSheetFooterProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSheetFooterProps>()
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
