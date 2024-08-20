<script setup lang="ts">
import type { NTableFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableFooterProps>()
</script>

<template>
  <tfoot
    :class="cn(
      'table-footer',
      props.class,
      props.una?.tableFooter,
    )"
  >
    <slot />
  </tfoot>
</template>
