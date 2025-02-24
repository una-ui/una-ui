<script setup lang="ts">
import type { NSheetHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSheetHeaderProps>()
</script>

<template>
  <div
    :class="
      cn('sheet-header', props.class)
    "
  >
    <slot />
  </div>
</template>
