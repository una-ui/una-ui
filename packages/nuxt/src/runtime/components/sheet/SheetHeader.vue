<script setup lang="ts">
import type { NSheetHeaderProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSheetHeaderProps>()
</script>

<template>
  <div
    :class="
      cn('flex flex-col gap-y-2 text-center sm:text-left', props.class)
    "
  >
    <slot />
  </div>
</template>
