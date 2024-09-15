<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { DialogOverlay } from 'radix-vue'

import { cn } from '../../../utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <DialogOverlay
    :class="cn('dialog-overlay', props.class)"
  />
</template>
