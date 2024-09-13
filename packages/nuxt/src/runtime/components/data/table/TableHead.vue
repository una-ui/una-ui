<script setup lang="ts">
import type { NTableHeadProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableHeadProps>()
</script>

<template>
  <th
    :class="cn(
      'table-head',
      props.class,
      { 'table-head-pinned': props.dataPinned },
      props.dataPinned === 'left' ? 'table-head-pinned-left' : 'table-head-pinned-right',
    )"
    v-bind="$attrs"
  >
    <slot />
  </th>
</template>
