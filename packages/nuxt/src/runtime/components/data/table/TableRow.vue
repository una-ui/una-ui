<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableRowProps } from '../../../types'

const props = defineProps<NTableRowProps>()
</script>

<template>
  <tr
    :class="cn(
      'table-row',
      props.class,
      props.una?.tableRow,
    )"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
