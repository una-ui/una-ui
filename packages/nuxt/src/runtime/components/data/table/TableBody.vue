<script setup lang="ts">
import type { NTableBodyProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableBodyProps>()
</script>

<template>
  <tbody
    :class="cn(
      'table-body',
      props.class,
      props?.una?.tableBody,
    )"
    v-bind="$attrs"
  >
    <slot />
  </tbody>
</template>
