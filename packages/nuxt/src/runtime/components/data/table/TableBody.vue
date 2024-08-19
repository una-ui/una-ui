<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableBodyProps } from '../../../types'

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
