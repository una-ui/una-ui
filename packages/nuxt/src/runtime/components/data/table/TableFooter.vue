<script setup lang="ts">
import type { NTableFooterProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableFooterProps>()
</script>

<template>
  <tfoot
    :class="cn(
      'table-footer',
      props.una?.tableFooter,
      props.class,
    )"
  >
    <slot />
  </tfoot>
</template>
