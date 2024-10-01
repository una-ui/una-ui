<script setup lang="ts">
import type { NDialogHeaderProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NDialogHeaderProps>()
</script>

<template>
  <div
    :class="cn(
      'dialog-header',
      props.una?.dialogHeader,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
