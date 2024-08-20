<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableHeadProps } from '../../../types'

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
