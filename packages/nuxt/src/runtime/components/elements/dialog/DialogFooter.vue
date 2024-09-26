<script setup lang="ts">
import type { NDialogFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NDialogFooterProps>()
</script>

<template>
  <div
    :class="cn(
      'dialog-footer',
      props.una?.dialogFooter,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
