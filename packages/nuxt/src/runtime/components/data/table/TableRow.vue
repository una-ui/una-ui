<script setup lang="ts">
import type { NTableRowProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableRowProps>()
</script>

<template>
  <tr
    :class="cn(
      'table-row',
      props.una?.tableRow,
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
