<script setup lang="ts">
import type { NTableFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableFooterProps>()
</script>

<template>
  <tfoot :class="cn('border-t border-base bg-muted font-medium [&>tr]:last:border-b-0', props.class)">
    <slot />
  </tfoot>
</template>
