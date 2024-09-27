<script setup lang="ts">
import type { NTableBodyProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableBodyProps>()
</script>

<template>
  <tbody
    :class="cn(
      'table-body',
      props?.una?.tableBody,
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </tbody>
</template>
