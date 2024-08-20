<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableHeaderProps } from '../../../types'

const props = defineProps<NTableHeaderProps>()
</script>

<template>
  <thead
    :class="cn(
      'table-header',
      props.class,
      props?.una?.tableHeader,
    )"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
