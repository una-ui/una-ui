<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { DialogOverlay } from 'radix-vue'

import { cn } from '../../../utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <DialogOverlay
    :class="cn(
      'fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
      props.class,
    )"
  />
</template>
