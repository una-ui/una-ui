<script setup lang="ts">
import type { NTableHeaderProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableHeaderProps>()
</script>

<template>
  <thead
    :class="cn(
      'table-header',
      props?.una?.tableHeader,
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
